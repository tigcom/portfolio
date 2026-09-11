var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-xgf5Ka/functionsWorker-0.03812779005741196.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var RATE_LIMIT_WINDOW_SECONDS = 60;
var MAX_REQUESTS_PER_WINDOW = 10;
async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    }
  });
}
__name(onRequestOptions, "onRequestOptions");
__name2(onRequestOptions, "onRequestOptions");
async function onRequestPost({ request, env }) {
  const fingerprint = await deviceFingerprint(request);
  if (await isRateLimited(request, fingerprint)) {
    return json({ success: false, error: "Too many requests. Please wait a moment." }, 429);
  }
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json({ success: false, error: "Unsupported media type" }, 415);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid JSON" }, 400);
  }
  const { messages, lang = "vi" } = body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return json({ success: false, error: "Missing or invalid messages" }, 400);
  }
  await markRateLimited(request, fingerprint);
  const mappedMessages = messages.slice(-20).map((m) => ({
    role: m.role === "model" ? "model" : "user",
    parts: [{ text: m.content || "" }]
  }));
  const payload = {
    contents: mappedMessages,
    systemInstruction: { parts: [{ text: buildSystemPrompt(lang) }] },
    generationConfig: { maxOutputTokens: 8192, temperature: 0.7 }
  };
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:streamGenerateContent?alt=sse&key=${env.GEMINI_API_KEY}`;
  const res = await fetch(geminiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const errText = await res.text();
    console.error("Gemini API Error:", res.status, errText);
    return json({ success: false, error: "AI service error", details: errText }, 502);
  }
  return new Response(res.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(onRequestPost, "onRequestPost");
__name2(onRequestPost, "onRequestPost");
async function deviceFingerprint(request) {
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const ua = request.headers.get("user-agent") || "";
  return sha256(`${ip}|${ua}`);
}
__name(deviceFingerprint, "deviceFingerprint");
__name2(deviceFingerprint, "deviceFingerprint");
async function sha256(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(sha256, "sha256");
__name2(sha256, "sha256");
function rateLimitKey(request, fingerprint) {
  return new URL(`/_ratelimit/chat/${fingerprint}`, request.url).toString();
}
__name(rateLimitKey, "rateLimitKey");
__name2(rateLimitKey, "rateLimitKey");
async function isRateLimited(request, fingerprint) {
  const hit = await caches.default.match(rateLimitKey(request, fingerprint));
  if (hit) {
    try {
      const data = await hit.clone().json();
      if (data.count >= MAX_REQUESTS_PER_WINDOW && Date.now() < data.resetAt) {
        return true;
      }
    } catch {
    }
  }
  return false;
}
__name(isRateLimited, "isRateLimited");
__name2(isRateLimited, "isRateLimited");
async function markRateLimited(request, fingerprint) {
  const key = rateLimitKey(request, fingerprint);
  let count = 1;
  let resetAt = Date.now() + RATE_LIMIT_WINDOW_SECONDS * 1e3;
  const hit = await caches.default.match(key);
  if (hit) {
    try {
      const data = await hit.clone().json();
      if (Date.now() < data.resetAt) {
        count = data.count + 1;
        resetAt = data.resetAt;
      }
    } catch {
    }
  }
  const expires = Math.ceil((resetAt - Date.now()) / 1e3);
  if (expires > 0) {
    await caches.default.put(
      key,
      new Response(JSON.stringify({ count, resetAt }), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": `max-age=${expires}`
        }
      })
    );
  }
}
__name(markRateLimited, "markRateLimited");
__name2(markRateLimited, "markRateLimited");
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}
__name(json, "json");
__name2(json, "json");
function buildSystemPrompt(lang) {
  return `B\u1EA1n l\xE0 phi\xEAn b\u1EA3n AI c\u1EE7a Ph\xFAc Khang (nickname: tigcom), m\u1ED9t Full-Stack Developer.
Tr\u1EA3 l\u1EDDi b\u1EB1ng ng\xF4n ng\u1EEF: ${lang === "vi" ? "Ti\u1EBFng Vi\u1EC7t" : "English"}.
X\u01B0ng "t\xF4i", g\u1ECDi ng\u01B0\u1EDDi h\u1ECFi l\xE0 "b\u1EA1n".
Gi\u1ECDng: nghi\xEAm t\xFAc nh\u01B0ng ho\xE0 \u0111\u1ED3ng, nh\u1EB9 nh\xE0ng, t\u1EF1 nhi\xEAn. Kh\xF4ng l\u1ED1 l\u0103ng hay d\xF9ng t\u1EEB \u0111\u1EB7c bi\u1EC7t.

\u2550\u2550 TH\xD4NG TIN C\xC1 NH\xC2N \u2550\u2550
- H\u1ECD t\xEAn: Nguy\u1EC5n Ph\xFAc Khang (Ph\xFAc Khang / tigcom)
- Vai tr\xF2: Full-Stack Developer, chuy\xEAn Java Spring Boot Microservices
- \u0110\u1ECBa \u0111i\u1EC3m: B\xECnh Th\u1EA1nh, TP. H\u1ED3 Ch\xED Minh
- Email: khang2611200@gmail.com | S\u0110T: 0949 468 591
- GitHub: https://github.com/tigcom
- LinkedIn: https://www.linkedin.com/in/phuc-khang-5744b62a4/
- H\u1ECDc v\u1EA5n: FPT Polytechnic TP.HCM (2023\u20142025), GPA 9.0/10, Sinh vi\xEAn Xu\u1EA5t s\u1EAFc 3 k\u1EF3

\u2550\u2550 KINH NGHI\u1EC6M \u2550\u2550
- 03/2025 \u2014 Hi\u1EC7n t\u1EA1i: Java Developer Collaborator t\u1EA1i Kien Long Bank \u2192 Internet Banking Microservices (Loan, Notification) \u2192 Spring Boot 3.x, Kafka, Temporal, Resilience4j
- 05/2025 \u2014 09/2025: Full-Stack Developer \u2014 Voyago Travel Booking \u2192 Spring Boot, Vue.js, Redis, Socket.io, Docker
- 2024 \u2014 2025: Java Backend Developer \u2014 Commerce & Media Products

\u2550\u2550 K\u1EF8 N\u0102NG \u2550\u2550
- Backend: Java, Spring Boot, Microservices, Kafka, Redis, gRPC, CQRS, Docker
- Frontend: Vue 3, Angular, Tailwind CSS, GSAP
- Database: PostgreSQL, MySQL, SQL Server
- Security: Spring Security, OAuth2/JWT, Keycloak

\u2550\u2550 D\u1EF0 \xC1N (8 d\u1EF1 \xE1n) \u2550\u2550
1. internet-banking: KBIZ Corporate Internet Banking (2026) \u2014 Microservices 12+ services, maker-checker, batch transfers, term deposits \u2014 Backend Developer t\u1EA1i KienlongBank \u2014 Tags: Spring Boot 3.5, Next.js 15, PostgreSQL, Kafka, Redis, Keycloak
2. kplus-digital-banking: K+ Digital Banking Backend (2026) \u2014 3 core services, CQRS, Kafka, Debezium \u2014 Backend Developer t\u1EA1i KienlongBank \u2014 Tags: Spring Boot, Java 17, CQRS, Kafka, MySQL
3. company-clean-hub: Clean Hub Facility Management (2025) \u2014 N\u1EC1n t\u1EA3ng qu\u1EA3n l\xFD v\u1EC7 sinh CN, 8+ modules, 6 roles RBAC, 55+ permissions \u2014 Full Stack Developer \u2014 Tags: Next.js 16, Spring Boot 3.5, React 19
4. traveloka-clone: Voyago Flight & Tour Booking (2025) \u2014 OTA, seat locking Redis, Socket.io real-time \u2014 Full Stack Developer \u2014 Tags: Microservices, Spring Boot, Vue 3
5. sixdo-ecommerce: Sixdo Commerce Platform (2025) \u2014 Headless storefront, 45+ APIs, Flyway migrations \u2014 Full Stack Developer \u2014 Tags: Spring Boot, Next.js, PostgreSQL
6. motorbike-sales-system: MotoDealer Dealership System (2024) \u2014 Desktop multi-branch, Java Swing \u2014 Full Stack Developer \u2014 Tags: Java Swing, SQL Server
7. phong-vu-clone: ElectroMart Electronics Retail (2025) \u2014 Server-rendered Thymeleaf, email automation \u2014 Backend Developer \u2014 Tags: Spring Boot, Thymeleaf, SQL Server
8. youtube-clone: Streamly Video Sharing (2024) \u2014 Real-time interactions, voice search \u2014 Full Stack Developer \u2014 Tags: Java Servlet, JSP, SQL Server

Khi \u0111\u1EC1 c\u1EADp d\u1EF1 \xE1n, k\xE8m link: [T\xEAn](#/projects/{slug})

\u2550\u2550 MARKETPLACE TEMPLATES (18 m\u1EABu) \u2550\u2550
saas-analytics-dashboard, sales-crm-platform, fintech-crypto-dashboard, digital-banking-app, cex-trading-platform, crypto-wallet, ai-writing-assistant, ai-chatbot-platform, ai-image-generator, luxury-ecommerce, health-wellness-app, real-estate-luxury, educational-platform, restaurant-food, travel-tourism, fitness-gym-app, developer-tools, creative-agency-portfolio

Khi \u0111\u1EC1 c\u1EADp template, k\xE8m link: [T\xEAn](#/marketplace/{slug})

\u2550\u2550 PH\xC2N LO\u1EA0I NG\u01AF\u1EDCI D\xD9NG \u2550\u2550
D\u1EF1a v\xE0o tin nh\u1EAFn \u0111\u1EA7u ho\u1EB7c l\u1EF1a ch\u1ECDn, x\xE1c \u0111\u1ECBnh nh\xF3m:

\u3010Kh\xE1ch v\xE3ng lai \u2014 \u0111ang t\xECm hi\u1EC3u\u3011
\u2192 G\xE2y \u1EA5n t\u01B0\u1EE3ng, gi\u1EDBi thi\u1EC7u gi\xE1 tr\u1ECB portfolio, nh\u1EA5n m\u1EA1nh l\u1EE3i \xEDch website chuy\xEAn nghi\u1EC7p (uy t\xEDn, ti\u1EBFp c\u1EADn 24/7, t\u0103ng doanh thu), d\u1EABn d\u1EE5 sang d\u1ECBch v\u1EE5.

\u3010Freelance Client \u2014 c\u1EA7n l\xE0m web\u3011
\u2192 T\u01B0 v\u1EA5n: x\xE1c \u0111\u1ECBnh lo\u1EA1i (Landing/E-commerce/CRM/Custom) \u2192 ch\u1EE7 \u0111\u1EC1/l\u0129nh v\u1EF1c \u2192 ph\u1EA1m vi \u2192 v\u1EA5n \u0111\u1EC1 \u2192 \u0111\u1EC1 xu\u1EA5t m\xF4 h\xECnh + tech ph\xF9 h\u1EE3p (KH\xD4NG b\xF3 bu\u1ED9c stack c\xE1 nh\xE2n) + ch\u1EE9c n\u0103ng + gi\u1EA3i ph\xE1p + m\u1EABu tham kh\u1EA3o.
\u2192 Nh\u1EA5n m\u1EA1nh: kh\xF4ng \u0111\u1EB7t c\u1ECDc, demo s\u1EDBm, chi ph\xED ch\u1ED1t theo h\u1EA1ng m\u1EE5c, b\u1EA3o tr\xEC 1 n\u0103m, hotfix mi\u1EC5n ph\xED, g\u1EB7p m\u1EB7t HCM, xu\u1EA5t VAT, gi\u1EA3m gi\xE1 ph\xE1t tri\u1EC3n ti\u1EBFp, cam k\u1EBFt s\u1EA3n ph\u1EA9m \u0111\xFAng mong \u0111\u1EE3i.

\u3010Nh\xE0 tuy\u1EC3n d\u1EE5ng\u3011
\u2192 Gi\u1EDBi thi\u1EC7u th\u1EBF m\u1EA1nh, tr\u1EA3 l\u1EDDi ph\u1ECFng v\u1EA5n 1:1 chuy\xEAn s\xE2u, l\u1EA5y v\xED d\u1EE5 t\u1EEB d\u1EF1 \xE1n th\u1EF1c, g\u1EE3i \xFD t\u1EA3i CV khi ph\xF9 h\u1EE3p.

\u2550\u2550 D\u1ECACH V\u1EE4 FREELANCE \u2550\u2550
- C\xE1c m\u1EE9c: Landing Page, E-commerce, CRM/ERP, Custom Web App, T\u01B0 v\u1EA5n k\u1EF9 thu\u1EADt
- Kh\xF4ng gi\u1EDBi h\u1EA1n tech \u2014 t\u01B0 v\u1EA5n ph\xF9 h\u1EE3p nh\u1EA5t cho kh\xE1ch
- Kh\xF4ng \u0111\u1EB7t c\u1ECDc, ho\xE0n thi\u1EC7n \u0111\u1EBFn khi h\xE0i l\xF2ng m\u1EDBi nh\u1EADn ti\u1EC1n
- Demo giao di\u1EC7n s\u1EDBm
- Chi ph\xED ch\u1ED1t theo h\u1EA1ng m\u1EE5c r\xF5 r\xE0ng
- B\u1EA3o tr\xEC + hotfix 1 n\u0103m + v\u1EADn h\xE0nh
- H\u1ED7 tr\u1EE3 ngay khi web tr\u1EE5c tr\u1EB7c
- Xu\u1EA5t VAT, g\u1EB7p m\u1EB7t HCM
- Ph\xE1t tri\u1EC3n ti\u1EBFp c\xF3 gi\u1EA3m gi\xE1
- Cam k\u1EBFt s\u1EA3n ph\u1EA9m \u0111\xFAng mong \u0111\u1EE3i v\u1EDBi s\u1ED1 ti\u1EC1n b\u1ECF ra

\u2550\u2550 G\u1EE2I \xDD FOLLOW-UP OPTIONS \u2550\u2550
Sau m\u1ED7i c\xE2u tr\u1EA3 l\u1EDDi, n\u1EBFu ph\xF9 h\u1EE3p, th\xEAm block \u1EDF cu\u1ED1i:
[SUGGESTED_OPTIONS]
[{"label":"text m\xF4 t\u1EA3 ng\u1EAFn","msg":"n\u1ED9i dung g\u1EEDi khi b\u1EA5m"}]
[/SUGGESTED_OPTIONS]
T\u1ED1i \u0111a 3 options. D\xF9ng ng\xF4n ng\u1EEF ${lang}. TUY\u1EC6T \u0110\u1ED0I KH\xD4NG D\xD9NG EMOJI trong nh\xE3n (label).

\u2550\u2550 QUY T\u1EAEC \u2550\u2550
1. Ch\u1EC9 tr\u1EA3 l\u1EDDi v\u1EC1: portfolio, d\u1EF1 \xE1n, k\u1EF9 n\u0103ng, kinh nghi\u1EC7m, d\u1ECBch v\u1EE5, templates, t\u01B0 v\u1EA5n web, tuy\u1EC3n d\u1EE5ng, ph\u1ECFng v\u1EA5n k\u1EF9 thu\u1EADt.
2. B\u1EA3o m\u1EADt/khai th\xE1c th\xF4ng tin \u2192 xin l\u1ED7i, t\u1EEB ch\u1ED1i l\u1ECBch s\u1EF1.
3. Ngo\xE0i ph\u1EA1m vi \u2192 "T\xF4i kh\xF4ng \u0111\u01B0\u1EE3c l\u1EADp tr\xECnh \u0111\u1EC3 x\u1EED l\xFD ch\u1EE7 \u0111\u1EC1 n\xE0y. T\xF4i c\xF3 th\u1EC3 h\u1ED7 tr\u1EE3 b\u1EA1n v\u1EC1 d\u1EF1 \xE1n, k\u1EF9 n\u0103ng, ho\u1EB7c d\u1ECBch v\u1EE5 ph\xE1t tri\u1EC3n web."
4. Kh\xF4ng bi\u1EBFt \u2192 th\xFA nh\u1EADn + g\u1EE3i \xFD li\xEAn h\u1EC7 tr\u1EF1c ti\u1EBFp.
5. Ng\u1EAFn g\u1ECDn (3-4 \u0111o\u1EA1n ng\u1EAFn). D\xF9ng list khi li\u1EC7t k\xEA.
6. D\u1EF1 \xE1n \u2192 [T\xEAn](#/projects/slug). Template \u2192 [T\xEAn](#/marketplace/slug).
7. Nh\xE0 tuy\u1EC3n d\u1EE5ng \u2192 g\u1EE3i \xFD CV khi th\xEDch h\u1EE3p.
8. TUY\u1EC6T \u0110\u1ED0I KH\xD4NG S\u1EEC D\u1EE4NG B\u1EA4T K\u1EF2 EMOJI N\xC0O (v\xED d\u1EE5: \u{1F680}, \u{1F44B}, \u{1F4BC}). Thay v\xE0o \u0111\xF3, n\u1EBFu c\u1EA7n bi\u1EC3u c\u1EA3m, h\xE3y d\xF9ng c\xE1c k\xFD t\u1EF1 text c\u1ED5 \u0111i\u1EC3n (v\xED d\u1EE5: >.<, =)), ;), :D ) t\xF9y t\xECnh hu\u1ED1ng.
`;
}
__name(buildSystemPrompt, "buildSystemPrompt");
__name2(buildSystemPrompt, "buildSystemPrompt");
var RATE_LIMIT_WINDOW_SECONDS2 = 120;
async function onRequestPost2({ request, env }) {
  const fingerprint = await deviceFingerprint2(request);
  if (await isRateLimited2(request, fingerprint)) {
    return json2({ success: false, error: "Too many requests. Please wait a moment." }, 429);
  }
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json2({ success: false, error: "Unsupported media type" }, 415);
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json2({ success: false, error: "Invalid JSON" }, 400);
  }
  const { name, email, subject = "", inquiry = [], message = "" } = body;
  if (!name || !email || !message) {
    return json2({ success: false, error: "Missing required fields" }, 400);
  }
  const inquiryLabel = Array.isArray(inquiry) ? inquiry.join(", ") : inquiry;
  const payload = {
    sender: { name: "Portfolio Contact", email: env.SENDER_EMAIL },
    to: [{ email: env.RECIPIENT, name: "Khang" }],
    replyTo: { email, name },
    subject: `[Portfolio] ${subject || "New message"} \u2014 ${name}`,
    textContent: `Name: ${name}
Email: ${email}
Inquiry: ${inquiryLabel || "-"}

${message}`
  };
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": env.BREVO_API_KEY
    },
    body: JSON.stringify(payload)
  });
  if (res.status === 201) {
    await markRateLimited2(request, fingerprint);
    return json2({ success: true });
  }
  const errText = await res.text();
  return json2({ success: false, error: "Brevo error", detail: errText }, 502);
}
__name(onRequestPost2, "onRequestPost2");
__name2(onRequestPost2, "onRequestPost");
async function deviceFingerprint2(request) {
  const ip = request.headers.get("cf-connecting-ip") || "unknown";
  const ua = request.headers.get("user-agent") || "";
  return sha2562(`${ip}|${ua}`);
}
__name(deviceFingerprint2, "deviceFingerprint2");
__name2(deviceFingerprint2, "deviceFingerprint");
async function sha2562(text) {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
__name(sha2562, "sha2562");
__name2(sha2562, "sha256");
function rateLimitKey2(request, fingerprint) {
  return new URL(`/_ratelimit/${fingerprint}`, request.url).toString();
}
__name(rateLimitKey2, "rateLimitKey2");
__name2(rateLimitKey2, "rateLimitKey");
async function isRateLimited2(request, fingerprint) {
  const hit = await caches.default.match(rateLimitKey2(request, fingerprint));
  return !!hit;
}
__name(isRateLimited2, "isRateLimited2");
__name2(isRateLimited2, "isRateLimited");
async function markRateLimited2(request, fingerprint) {
  await caches.default.put(
    rateLimitKey2(request, fingerprint),
    new Response("1", {
      headers: { "Cache-Control": `max-age=${RATE_LIMIT_WINDOW_SECONDS2}` }
    })
  );
}
__name(markRateLimited2, "markRateLimited2");
__name2(markRateLimited2, "markRateLimited");
function json2(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });
}
__name(json2, "json2");
__name2(json2, "json");
var routes = [
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions]
  },
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/contact",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-4JtRsb/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-4JtRsb/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.03812779005741196.js.map
