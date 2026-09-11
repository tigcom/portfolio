# SEO — Mong muốn & Tiến độ

> Ghi chú mục tiêu SEO cho portfolio và tiến độ tìm hiểu/đề xuất giải pháp.

## Mục tiêu

Làm cho portfolio thân thiện với công cụ tìm kiếm — xuất hiện khi người dùng tìm
tên tác giả hoặc từ khóa như "Java Spring Boot developer", "Full-Stack Developer".

## Hiện trạng (vấn đề cần khắc phục)

| Vấn đề | Mức ảnh hưởng |
|---|---|
| **Hash routing** (`/#/projects`) — router dùng `createWebHashHistory()` | 🔴 Google không index từng trang riêng |
| **CSR (client-side render)** — nội dung do JS render, HTML gốc rỗng | 🔴 Google phải render JS mới thấy nội dung |
| Thiếu Open Graph / Twitter Card / canonical | 🟡 Share lên FB/Zalo/LinkedIn xấu |
| Thiếu `sitemap.xml`, `robots.txt`, structured data (JSON-LD) | 🟡 Google khó crawl + không hiểu ngữ nghĩa |
| Bundle JS lớn (~749KB), chưa code-split | 🟡 Load chậm, ảnh hưởng Core Web Vitals |

## Kế hoạch (3 mức — từ nhẹ đến sâu)

### Level 1 — Nhanh, không đổi kiến trúc
- Meta tags đầy đủ (Open Graph, Twitter Card, canonical)
- `robots.txt` + `sitemap.xml`
- Structured data JSON-LD (Person / Project schema)
- Alt text ảnh, tối ưu heading

### Level 2 — Quan trọng nhất
- Chuyển **hash → history routing** (clean URL: `/projects`, `/about`)
- Thêm `_redirects` cho Cloudflare (SPA fallback `/* /index.html 200`)
- Cho phép Google index từng trang riêng biệt

### Level 3 — SEO tốt nhất (nghiêm túc)
- **SSG (prerender)** — biến mỗi trang thành HTML tĩnh thật (`vite-ssg` / prerender)
- Code-splitting + lazy-load route (giảm bundle, cải thiện Core Web Vitals)
- Đây là thay đổi kiến trúc lớn hơn nhưng cho SEO chuẩn nhất

## Tiến độ

- [x] Phân tích hiện trạng + đề xuất kế hoạch (Level 1 / 2 / 3)
- [ ] Triển khai (chưa làm)

## Việc cần làm tiếp

1. Chốt mức độ muốn làm — **đề xuất: Level 1 + Level 2** (đủ cho portfolio).
2. Triển khai từng mục theo mức đã chốt.

## Không thuộc phạm vi

- Off-page SEO (backlink, domain authority, xếp hạng từ khóa) — việc marketing, không phải kỹ thuật.
