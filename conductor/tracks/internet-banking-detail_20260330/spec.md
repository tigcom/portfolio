# Specification: Internet Banking Project Detail Page

## 1. Overview
Thiết kế và triển khai trang chi tiết dự án "Internet Banking" toàn diện, làm nổi bật sự phức tạp và chất lượng của dự án. Trang này sẽ đóng vai trò là case study tiêu biểu nhất trong portfolio, kết hợp giữa nội dung chuyên sâu, hình ảnh phong phú và hiệu ứng GSAP mượt mà.

## 2. Functional Requirements
### 2.1 Cấu trúc nội dung (Case Study & Storytelling)
- **Header:** Tên dự án, vai trò, thời gian thực hiện và tóm tắt ngắn gọn.
- **Project Overview:** Giới thiệu mục tiêu và quy mô của hệ thống Internet Banking.
- **Tech Stack:** Danh sách công nghệ sử dụng (Angular 18, Spring Boot, PostgreSQL, etc.).
- **Process & Timeline:** Trình bày quá trình thực hiện theo dạng timeline/quy trình từ khảo sát đến triển khai.
- **Challenges & Solutions:** Nêu các vấn đề kỹ thuật/nghiệp vụ ngân hàng khó khăn và cách giải quyết.
- **Gallery & Results:** Trưng bày kết quả cuối cùng với hình ảnh và các chỉ số (nếu có).

### 2.2 Hiển thị hình ảnh & Tương tác
- **Bento Box Layout:** Sử dụng grid hiện đại cho các hình ảnh tính năng.
- **Scrollable Images:** Với các ảnh dài (như toàn bộ trang web), cho phép người dùng scroll bên trong container để xem hết.
- **Hover Interactions:** Khi hover vào các ô bento box, hình ảnh sẽ mở rộng hoặc thay đổi bố cục để hiển thị rõ nét hơn (vẫn đảm bảo tính thẩm mỹ và dễ đọc).
- **Image Showcase:** Các hình ảnh quan trọng sẽ được trưng bày nổi bật giữa các đoạn text.

### 2.3 Hiệu ứng GSAP Animation
- **Staggered Text Reveal:** Hiệu ứng chữ xuất hiện tuần tự khi trang được tải.
- **ScrollTrigger Animations:**
  - Parallax scrolling cho các lớp hình ảnh.
  - Các thành phần nội dung (text, images) trượt vào vị trí khi người dùng cuộn tới.
- **Smooth Transitions:** Hiệu ứng chuyển cảnh mượt mà giữa các section của case study.

## 3. Non-Functional Requirements
- **Responsive:** Hiển thị tốt trên Mobile và Tablet, các bento box phải được sắp xếp lại hợp lý.
- **Performance:** Tối ưu hóa việc tải nhiều hình ảnh chất lượng cao (Lazy loading, WebP format).
- **Accessibility:** Đảm bảo text dễ đọc trên nền ảnh và các hiệu ứng không gây khó chịu cho người dùng.

## 4. Acceptance Criteria
- [ ] Trang hiển thị đầy đủ các phần nội dung đã mô tả.
- [ ] Bố cục bento box hoạt động mượt mà với hiệu ứng hover.
- [ ] Các ảnh dài có thể scroll được bên trong container.
- [ ] Animation GSAP chạy mượt mà trên các trình duyệt hiện đại.
- [ ] Tuân thủ phong cách thiết kế chung của Portfolio (Portfolio Standard Style).

## 5. Out of Scope
- Các tương tác backend thực tế (chỉ là giao diện tĩnh/case study).
- Hệ thống comment hoặc feedback trên trang dự án.
