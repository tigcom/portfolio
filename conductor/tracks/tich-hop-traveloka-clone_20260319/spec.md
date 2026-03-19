# Specification - Tích hợp Dự án Traveloka Clone (DATN)

Track này tập trung vào việc thay thế dự án "Xe Ghép Phú Thọ" bằng dự án thực tế "Traveloka Clone" từ GitHub của người dùng.

---

## 🎯 Mục tiêu
- Thay thế dữ liệu mẫu bằng thông tin thực tế từ dự án [DATN](https://github.com/thanhlam2802/DATN).
- Làm nổi bật khả năng xử lý các phân hệ: **Vé máy bay (Flights)**, **Tour du lịch (Tours)**, **Khách sạn (Hotels)** và **Xe khách (Buses)**.
- Xây dựng thành phần Mockup Interactive cho quy trình đặt chỗ và thanh toán.

## 🛠️ Yêu cầu kỹ thuật
- **Data Source:** Nội dung chi tiết được trích xuất từ các file `.md` và cấu trúc Microservices (Java Spring Boot, JWT, Docker) trong repo DATN.
- **Frontend Integration:** Sử dụng Vue 3 + Tailwind CSS + GSAP.
- **Mockup Component:** Tạo `TravelokaMockup.vue` với giao diện Flight Search và Booking Flow.

## 📋 Danh sách nội dung cần tích hợp
- **Overview:** Hệ thống Travel Booking Super App dựa trên kiến trúc Microservices.
- **Problem:** Thách thức trong việc quản lý vé đa kênh, đồng bộ dữ liệu thời gian thực và bảo mật thanh toán.
- **Process Steps:** Từ thiết kế DB, API Flow, Security đến Frontend Integration.
- **Key Results:** 100% bảo mật API, Khả năng mở rộng Microservices, Giao diện quản trị toàn diện.
