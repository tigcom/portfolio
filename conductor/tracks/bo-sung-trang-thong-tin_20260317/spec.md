# Specification: Nâng cấp danh mục dự án & Nội dung thực tế

## 1. Mục tiêu
Nâng cấp trang Projects và Project Detail để trình diễn các dự án thực tế từ GitHub của người dùng, đồng thời tuân thủ 100% định dạng và cách trình bày trong `PROJECTS_DETAIL_IMPLEMENTATION_GUIDE.md`.

## 2. Các dự án sẽ được cập nhật
Dựa trên dữ liệu từ GitHub `daile269`, các dự án sau sẽ được đưa vào Portfolio:

1. **Clean Hub (Full Stack):** Hệ thống quản lý công ty vệ sinh công nghiệp (Featured).
   - Tech: Next.js 16, TypeScript, Tailwind CSS 4, Java Spring Boot.
2. **Xe Ghép Phú Thọ:** Hệ thống đặt xe ghép vùng Phú Thọ.
   - Tech: TypeScript, React.
3. **Election Voting:** Hệ thống bầu cử trực tuyến.
   - Tech: Java Spring Boot, MySQL, React.
4. **ZCaro Online:** Game Caro trực tuyến thời gian thực.
   - Tech: TypeScript, Socket.io (dự kiến).

## 3. Thay đổi về Cấu trúc Dữ liệu (`src/data/projects.js`)
Mỗi object dự án cần bổ sung các trường sau:
- `num`: Số thứ tự hiển thị (01, 02...).
- `heroImg`: Ảnh chất lượng cao cho trang detail.
- `galleryImgs`: Mảng ảnh cho phần Gallery.
- `techStack`: Mảng các công nghệ cụ thể.
- `role`: Vai trò trong dự án.
- `overview`: Mô tả chi tiết (HTML).
- `problem`: Bài toán cần giải quyết (HTML).
- `processSteps`: Các bước thực hiện (Mảng object `{title, description}`).
- `results`: Các kết quả đạt được (Mảng object `{value, suffix, label}`).

## 4. Yêu cầu về Giao diện & Animation
- Tuân thủ hướng dẫn trong `PROJECTS_DETAIL_IMPLEMENTATION_GUIDE.md`.
- Sử dụng GSAP cho các hiệu ứng:
  - Scroll reveals cho các section trong trang chi tiết.
  - Hiệu ứng số chạy (counter) cho phần Results.
  - Hover image follower trong trang danh sách dự án.
- **Đặc biệt:** Mô phỏng giao diện UI của các dự án bằng mã nguồn Vue (UI Mockups) thay vì dùng ảnh tĩnh nếu có thể.

## 5. Tài liệu tham khảo
- `PROJECTS_DETAIL_IMPLEMENTATION_GUIDE.md`
- GitHub Repository: `daile269/company-clean-hub-fe`, `daile269/company-clean-hub-be`.
