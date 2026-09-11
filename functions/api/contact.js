// Cloudflare Pages Function — POST /api/contact
// Gửi email liên hệ qua Brevo Transactional API (v3). API key nằm trong env var, không lộ ra frontend.

// Rate limit: 1 "device fingerprint" chỉ được gửi 1 lần mỗi khoảng thời gian này (giây).
const RATE_LIMIT_WINDOW_SECONDS = 120 // = 2 phút

export async function onRequestPost({ request, env }) {
  const fingerprint = await deviceFingerprint(request)

  // Chặn nếu thiết bị này vừa gửi trong cửa sổ cho phép
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

  const { name, email, subject = '', inquiry = [], message = '' } = body

  if (!name || !email || !message) {
    return json({ success: false, error: 'Missing required fields' }, 400)
  }

  const inquiryLabel = Array.isArray(inquiry) ? inquiry.join(', ') : inquiry

  const payload = {
    sender: { name: 'Portfolio Contact', email: env.SENDER_EMAIL },
    to: [{ email: env.RECIPIENT, name: 'Khang' }],
    replyTo: { email: email, name: name },
    subject: `[Portfolio] ${subject || 'New message'} — ${name}`,
    textContent: `Name: ${name}\nEmail: ${email}\nInquiry: ${inquiryLabel || '-'}\n\n${message}`,
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': env.BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  })

  if (res.status === 201) {
    // Chỉ đánh dấu khi gửi thành công — thất bại không tiêu tốn rate limit
    await markRateLimited(request, fingerprint)
    return json({ success: true })
  }

  const errText = await res.text()
  return json({ success: false, error: 'Brevo error', detail: errText }, 502)
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
  return new URL(`/_ratelimit/${fingerprint}`, request.url).toString()
}

// true nếu vẫn còn trong cửa sổ (đã gửi gần đây)
async function isRateLimited(request, fingerprint) {
  const hit = await caches.default.match(rateLimitKey(request, fingerprint))
  return !!hit
}

// Đặt 1 entry với TTL = cửa sổ rate limit
async function markRateLimited(request, fingerprint) {
  await caches.default.put(
    rateLimitKey(request, fingerprint),
    new Response('1', {
      headers: { 'Cache-Control': `max-age=${RATE_LIMIT_WINDOW_SECONDS}` },
    }),
  )
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
