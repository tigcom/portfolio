# Deploy — Hướng dẫn triển khai

> Cách deploy dự án lên Cloudflare Pages (direct upload qua Wrangler) + cấu hình gửi mail.

## Tổng quan

- **Stack**: Vue 3 + Vite (SPA, hash routing)
- **Hosting**: Cloudflare Pages — deploy thủ công qua Wrangler (chưa dùng Git integration)
- **Gửi mail**: Brevo Transactional API (form liên hệ)
- **Chi phí**: $0, không cần thẻ tín dụng
- **URL**: https://portfolio-qem.pages.dev/

## Deploy (3 bước)

```bash
# 1. Build
npm run build

# 2. Deploy lên Cloudflare Pages
npx wrangler pages deploy dist --project-name khangphp-portfolio
```

Deploy là **thủ công** — mỗi lần đổi code phải chạy lại 2 lệnh trên.

## Secret (đặt 1 lần)

```bash
npx wrangler pages secret put BREVO_API_KEY --project-name khangphp-portfolio
npx wrangler pages secret put SENDER_EMAIL   --project-name khangphp-portfolio
npx wrangler pages secret put RECIPIENT      --project-name khangphp-portfolio
```

| Secret | Giá trị | Lấy ở đâu |
|---|---|---|
| `BREVO_API_KEY` | key v3 (`xkeysib-...`) | Brevo → SMTP & API → API keys |
| `SENDER_EMAIL` | `phanhuynhphuckhang12c8@gmail.com` | Brevo → Senders (đã verify) |
| `RECIPIENT` | `phanhuynhphuckhang12c8@gmail.com` | email nhận tin nhắn |

## Form liên hệ (gửi mail)

- File: `functions/api/contact.js` → route `/api/contact` (Cloudflare Pages Function).
- Gọi Brevo API v3, key nằm **server-side** (env var, không lộ ra frontend).
- **Rate limit**: 1 device (hash của IP + User-Agent) chỉ gửi 1 lần / 2 phút, dùng Cache API (không cần KV binding).

## Lưu ý quan trọng (gotchas)

1. **Base path phải là `/`** (không phải `/portfolio/`) — cái cũ là cho GitHub Pages.
   Xem `vite.config.js`. Nếu deploy mà trang trắng → kiểm tra `base`.
2. **Cloudflare giờ ưu tiên Workers hơn Pages** — nên dashboard khó tìm "Pages".
   Dùng CLI `wrangler pages deploy` là chắc chắn nhất, không cần đụng dashboard.
3. **Email hiển thị trên site** (`ContactView.vue`: mailto + contact info) đang là
   `khang2611200@gmail.com` — **KHÁC** với email nhận thật (`phanhuynhphuckhang12c8@gmail.com`).
   Cần đồng bộ nếu muốn khớp.

## Brevo (cài đặt 1 lần)

- **Verify sender**: Brevo → Senders → Emails → Add sender (`phanhuynhphuckhang12c8@gmail.com`).
- **Tắt chặn IP**: Brevo → Security → Authorized IPs → tắt "Block unauthorized IP addresses".
  (Nếu bật, Cloudflare sẽ bị chặn vì IP edge động.)

## Git

- Repo: https://github.com/tigcom/portfolio
- Hiện deploy **độc lập** với git (chưa auto-deploy khi push).
- Muốn auto-deploy sau này: cấu hình Git integration trên Cloudflare (Pages → Connect to Git).
