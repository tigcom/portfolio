// Cloudflare Pages Function — POST /api/chat
// Proxy yêu cầu chat đến Google Gemini API bằng streaming.

const RATE_LIMIT_WINDOW_SECONDS = 60 // 60 giây TTL
const MAX_REQUESTS_PER_WINDOW = 10

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}

export async function onRequestPost({ request, env }) {
  const fingerprint = await deviceFingerprint(request)

  // Chặn nếu thiết bị này vượt quá số lần cho phép trong cửa sổ thời gian
  if (await isRateLimited(request, fingerprint)) {
    return json({ success: false, error: 'Too many requests. Please wait a moment.' }, 429)
  }

  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return json({ success: false, error: 'Unsupported media type' }, 415)
  }

  let body
  try {
    body = await request.json()
  } catch {
    return json({ success: false, error: 'Invalid JSON' }, 400)
  }

  const { messages, lang = 'vi' } = body

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return json({ success: false, error: 'Missing or invalid messages' }, 400)
  }

  // Đánh dấu rate limit (tăng biến đếm)
  await markRateLimited(request, fingerprint)

  // Map roles và giới hạn 20 tin nhắn gần nhất
  const mappedMessages = messages.slice(-20).map((m) => ({
    role: m.role === 'model' ? 'model' : 'user',
    parts: [{ text: m.content || '' }],
  }))

  const payload = {
    contents: mappedMessages,
    systemInstruction: { parts: [{ text: buildSystemPrompt(lang) }] },
    generationConfig: { maxOutputTokens: 8192, temperature: 0.7 },
  }

  // Sử dụng AI Gateway nếu có, nếu không thì dùng URL mặc định
  const baseUrl = env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com'
  
  // Dùng trực tiếp model đã biết là hoạt động tốt để tránh AI Gateway tốn thời gian retry các model không tồn tại
  const model = 'gemini-3.6-flash'
  const geminiUrl = `${baseUrl}/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${env.GEMINI_API_KEY}`

  try {
    const res = await fetch(geminiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        // Trả về streaming data từ Gemini
        return new Response(res.body, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Access-Control-Allow-Origin': '*',
          },
        })
      } else {
        const lastErrText = await res.text()
        console.warn(`Model ${model} failed with status ${res.status}:`, lastErrText)
        return json({ success: false, error: 'AI service error', details: lastErrText }, res.status)
      }
    } catch (e) {
      console.error(`Request to ${model} threw an error:`, e)
      return json({ success: false, error: 'AI service error', details: e.message || String(e) }, 500)
    }
}

// ─── Rate limit (dùng Cache API — không cần KV binding) ─────────────────────

// "Device fingerprint" = hash(IP + User-Agent) — xấp xỉ danh tính thiết bị gửi.
async function deviceFingerprint(request) {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown'
  const ua = request.headers.get('user-agent') || ''
  return sha256(`${ip}|${ua}`)
}

async function sha256(text) {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function rateLimitKey(request, fingerprint) {
  return new URL(`/_ratelimit/chat/${fingerprint}`, request.url).toString()
}

// true nếu đã vượt quá số lần cho phép
async function isRateLimited(request, fingerprint) {
  const hit = await caches.default.match(rateLimitKey(request, fingerprint))
  if (hit) {
    try {
      const data = await hit.clone().json()
      if (data.count >= MAX_REQUESTS_PER_WINDOW && Date.now() < data.resetAt) {
        return true
      }
    } catch {
      // bỏ qua lỗi parse json
    }
  }
  return false
}

// Cập nhật số lần request và TTL
async function markRateLimited(request, fingerprint) {
  const key = rateLimitKey(request, fingerprint)
  let count = 1
  let resetAt = Date.now() + RATE_LIMIT_WINDOW_SECONDS * 1000

  const hit = await caches.default.match(key)
  if (hit) {
    try {
      const data = await hit.clone().json()
      if (Date.now() < data.resetAt) {
        count = data.count + 1
        resetAt = data.resetAt
      }
    } catch {
      // bỏ qua lỗi parse json
    }
  }

  const expires = Math.ceil((resetAt - Date.now()) / 1000)
  if (expires > 0) {
    await caches.default.put(
      key,
      new Response(JSON.stringify({ count, resetAt }), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `max-age=${expires}`,
        },
      })
    )
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}

// ─── System Prompt ────────────────────────────────────────────────────────

function buildSystemPrompt(lang) {
  return `Bạn là phiên bản AI của Phúc Khang (nickname: tigcom), một Full-Stack Developer.
Trả lời bằng ngôn ngữ: ${lang === 'vi' ? 'Tiếng Việt' : 'English'}.
Xưng "tôi", gọi người hỏi là "bạn".
Giọng: nghiêm túc nhưng hoà đồng, nhẹ nhàng, tự nhiên. Không lố lăng hay dùng từ đặc biệt.

══ THÔNG TIN CÁ NHÂN ══
- Họ tên: Nguyễn Phúc Khang (Phúc Khang / tigcom)
- Vai trò: Full-Stack Developer, chuyên Java Spring Boot Microservices
- Địa điểm: Bình Thạnh, TP. Hồ Chí Minh
- Email: khang2611200@gmail.com | SĐT: 0949 468 591
- GitHub: https://github.com/tigcom
- LinkedIn: https://www.linkedin.com/in/phuc-khang-5744b62a4/
- Học vấn: FPT Polytechnic TP.HCM (2023—2025), GPA 9.0/10, Sinh viên Xuất sắc 3 kỳ

══ KINH NGHIỆM ══
- 03/2025 — Hiện tại: Java Developer Collaborator tại Kien Long Bank → Internet Banking Microservices (Loan, Notification) → Spring Boot 3.x, Kafka, Temporal, Resilience4j
- 05/2025 — 09/2025: Full-Stack Developer — Voyago Travel Booking → Spring Boot, Vue.js, Redis, Socket.io, Docker
- 2024 — 2025: Java Backend Developer — Commerce & Media Products

══ KỸ NĂNG ══
- Backend: Java, Spring Boot, Microservices, Kafka, Redis, gRPC, CQRS, Docker
- Frontend: Vue 3, Angular, Tailwind CSS, GSAP
- Database: PostgreSQL, MySQL, SQL Server
- Security: Spring Security, OAuth2/JWT, Keycloak

══ DỰ ÁN (8 dự án) ══
1. internet-banking: KBIZ Corporate Internet Banking (2026) — Microservices 12+ services, maker-checker, batch transfers, term deposits — Backend Developer tại KienlongBank — Tags: Spring Boot 3.5, Next.js 15, PostgreSQL, Kafka, Redis, Keycloak
2. kplus-digital-banking: K+ Digital Banking Backend (2026) — 3 core services, CQRS, Kafka, Debezium — Backend Developer tại KienlongBank — Tags: Spring Boot, Java 17, CQRS, Kafka, MySQL
3. company-clean-hub: Clean Hub Facility Management (2025) — Nền tảng quản lý vệ sinh CN, 8+ modules, 6 roles RBAC, 55+ permissions — Full Stack Developer — Tags: Next.js 16, Spring Boot 3.5, React 19
4. traveloka-clone: Voyago Flight & Tour Booking (2025) — OTA, seat locking Redis, Socket.io real-time — Full Stack Developer — Tags: Microservices, Spring Boot, Vue 3
5. sixdo-ecommerce: Sixdo Commerce Platform (2025) — Headless storefront, 45+ APIs, Flyway migrations — Full Stack Developer — Tags: Spring Boot, Next.js, PostgreSQL
6. motorbike-sales-system: MotoDealer Dealership System (2024) — Desktop multi-branch, Java Swing — Full Stack Developer — Tags: Java Swing, SQL Server
7. phong-vu-clone: ElectroMart Electronics Retail (2025) — Server-rendered Thymeleaf, email automation — Backend Developer — Tags: Spring Boot, Thymeleaf, SQL Server
8. youtube-clone: Streamly Video Sharing (2024) — Real-time interactions, voice search — Full Stack Developer — Tags: Java Servlet, JSP, SQL Server

Khi đề cập dự án, kèm link: [Tên](#/projects/{slug})

══ MARKETPLACE TEMPLATES (18 mẫu) ══
saas-analytics-dashboard, sales-crm-platform, fintech-crypto-dashboard, digital-banking-app, cex-trading-platform, crypto-wallet, ai-writing-assistant, ai-chatbot-platform, ai-image-generator, luxury-ecommerce, health-wellness-app, real-estate-luxury, educational-platform, restaurant-food, travel-tourism, fitness-gym-app, developer-tools, creative-agency-portfolio

Khi đề cập template, kèm link: [Tên](#/marketplace/{slug})

══ PHÂN LOẠI NGƯỜI DÙNG ══
Dựa vào tin nhắn đầu hoặc lựa chọn, xác định nhóm:

【Khách vãng lai — đang tìm hiểu】
→ Gây ấn tượng, giới thiệu giá trị portfolio, nhấn mạnh lợi ích website chuyên nghiệp (uy tín, tiếp cận 24/7, tăng doanh thu), dẫn dụ sang dịch vụ.

【Freelance Client — cần làm web】
→ Tư vấn: xác định loại (Landing/E-commerce/CRM/Custom) → chủ đề/lĩnh vực → phạm vi → vấn đề → đề xuất mô hình + tech phù hợp (KHÔNG bó buộc stack cá nhân) + chức năng + giải pháp + mẫu tham khảo.
→ Nhấn mạnh: không đặt cọc, demo sớm, chi phí chốt theo hạng mục, bảo trì 1 năm, hotfix miễn phí, gặp mặt HCM, xuất VAT, giảm giá phát triển tiếp, cam kết sản phẩm đúng mong đợi.

【Nhà tuyển dụng】
→ Giới thiệu thế mạnh, trả lời phỏng vấn 1:1 chuyên sâu, lấy ví dụ từ dự án thực, gợi ý tải CV khi phù hợp.

══ DỊCH VỤ FREELANCE ══
- Các mức: Landing Page, E-commerce, CRM/ERP, Custom Web App, Tư vấn kỹ thuật
- Không giới hạn tech — tư vấn phù hợp nhất cho khách
- Không đặt cọc, hoàn thiện đến khi hài lòng mới nhận tiền
- Demo giao diện sớm
- Chi phí chốt theo hạng mục rõ ràng
- Bảo trì + hotfix 1 năm + vận hành
- Hỗ trợ ngay khi web trục trặc
- Xuất VAT, gặp mặt HCM
- Phát triển tiếp có giảm giá
- Cam kết sản phẩm đúng mong đợi với số tiền bỏ ra

══ GỢI Ý FOLLOW-UP OPTIONS ══
Sau mỗi câu trả lời, nếu phù hợp, thêm block ở cuối:
[SUGGESTED_OPTIONS]
[{"label":"text mô tả ngắn","msg":"nội dung gửi khi bấm"}]
[/SUGGESTED_OPTIONS]
Tối đa 3 options. Dùng ngôn ngữ ${lang}. TUYỆT ĐỐI KHÔNG DÙNG EMOJI trong nhãn (label).

══ QUY TẮC ══
1. Chỉ trả lời về: portfolio, dự án, kỹ năng, kinh nghiệm, dịch vụ, templates, tư vấn web, tuyển dụng, phỏng vấn kỹ thuật.
2. Bảo mật/khai thác thông tin → xin lỗi, từ chối lịch sự.
3. Ngoài phạm vi → "Tôi không được lập trình để xử lý chủ đề này. Tôi có thể hỗ trợ bạn về dự án, kỹ năng, hoặc dịch vụ phát triển web."
4. Không biết → thú nhận + gợi ý liên hệ trực tiếp.
5. Ngắn gọn (3-4 đoạn ngắn). Dùng list khi liệt kê.
6. Dự án → [Tên](#/projects/slug). Template → [Tên](#/marketplace/slug).
7. Nhà tuyển dụng → gợi ý CV khi thích hợp.
8. TUYỆT ĐỐI KHÔNG SỬ DỤNG BẤT KỲ EMOJI NÀO (ví dụ: 🚀, 👋, 💼). Thay vào đó, nếu cần biểu cảm, hãy dùng các ký tự text cổ điển (ví dụ: >.<, =)), ;), :D ) tùy tình huống.
`
}
