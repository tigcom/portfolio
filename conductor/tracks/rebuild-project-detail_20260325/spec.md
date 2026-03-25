# Specification: Rebuild Project Detail Page

## 1. Overview
Triển khai lại hoàn toàn trang Chi tiết Dự án (Project Detail) để thay thế trang hiện tại đang bị tạm khóa. Trang mới sẽ tập trung vào việc trình diễn "Câu chuyện dự án" thông qua hình ảnh chất lượng cao, phân tích chức năng, công nghệ và các hiệu ứng GSAP ấn tượng.

## 2. Functional Requirements
- **Mở khóa Routing:** Loại bỏ biến tạm khóa để cho phép truy cập trực tiếp vào `/project/:id`.
- **Dữ liệu Động:** Hiển thị thông tin dự án dựa trên ID từ file `src/data/projects.js` hoặc `projects.json`.
- **Hiển thị Nội dung:**
  - Tiêu đề dự án lớn (Hero Title).
  - Phần giới thiệu: Chức năng chính và Công nghệ sử dụng.
  - Gallery hình ảnh: Hiển thị bộ ảnh (3-5 ảnh) theo tỷ lệ 16:9 và mockup thiết bị.
  - Phân tích chi tiết: Content mô tả sâu về quy trình và giải pháp kỹ thuật.
- **Liên kết:** Nút xem Demo trực tiếp và liên kết mã nguồn (nếu có).

## 3. Visual & Interaction (GSAP)
- **Page Transitions (FLIP):** Hiệu ứng chuyển cảnh mượt mà khi người dùng click từ trang Danh sách vào trang Chi tiết.
- **ScrollTrigger Reveals:** Các khối nội dung và hình ảnh sẽ "reveal" (hiện ra) khi người dùng cuộn tới.
- **Text Staggering:** Tiêu đề và các đoạn text chức năng sẽ xuất hiện với hiệu ứng lướt (stagger).
- **Layout:** Theo phong cách "Vertical Storytelling" - kể chuyện theo chiều dọc với sự kết hợp linh hoạt giữa ảnh và text (Dựa trên mẫu Devraj Chatribin).

## 4. Image Specifications (Tối ưu bởi AI)
- **Số lượng:** 3-5 ảnh/dự án.
- **Tỷ lệ:** 
  - Hero Image: 16:9 (hoặc 21:9 cho cinematic).
  - Mockups: 9:16 (Mobile) hoặc 4:3 (Desktop/Tablet).
- **Spacing:** Áp dụng Tỷ lệ Vàng (1.618) cho padding/margin giữa các phần.

## 5. Acceptance Criteria
- [ ] Trang Detail có thể truy cập qua router mà không lỗi.
- [ ] Tất cả hiệu ứng GSAP hoạt động ổn định trên cả Desktop và Mobile.
- [ ] Hình ảnh được tối ưu hóa hiển thị sắc nét, đúng tỷ lệ đã chọn.
- [ ] Nội dung hiển thị đúng cho từng dự án khác nhau dựa trên dữ liệu đầu vào.
