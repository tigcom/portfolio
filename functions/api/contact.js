// Cloudflare Pages Function — POST /api/contact
// Gửi email liên hệ qua Brevo Transactional API (v3). API key nằm trong env var, không lộ ra frontend.
export async function onRequestPost({ request, env }) {
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

  // Validate cơ bản
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
    return json({ success: true })
  }

  const errText = await res.text()
  return json({ success: false, error: 'Brevo error', detail: errText }, 502)
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}
