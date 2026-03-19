// src/data/projects.js
// Centralized project data — used by ProjectsView and ProjectDetailView

export const projects = [
    {
        slug: 'internet-banking',
        num: '01',
        title: 'Internet Banking System',
        subtitle: 'Microservices-based Financial Platform',
        category: 'development',
        tags: ['Microservices', 'Spring Boot 3.x', 'Angular'],
        year: '2025',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&q=85',
        heroImg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=85',
        galleryImgs: [
            'https://images.unsplash.com/photo-1550565118-3d1428df732f?w=600&q=80',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
            'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80',
        ],
        techStack: ['Spring Boot 3.x', 'Spring Security (JWT, OAuth2)', 'Angular', 'MySQL', 'Kafka', 'Dubbo', 'Docker', 'Prometheus', 'Grafana', 'Redis'],
        role: 'Java Developer Collaborator (Kien Long Bank)',
        overview: 'Hệ thống Internet Banking hiện đại được xây dựng trên kiến trúc Microservices với các dịch vụ tách biệt: Account, Customer, Transaction, Loan, Notification. Dự án tập trung vào tính bảo mật cao, khả năng mở rộng và giám sát hệ thống thời gian thực.',
        problem: 'Xây dựng một hệ thống tài chính an toàn có khả năng xử lý hàng nghìn giao dịch đồng thời, đảm bảo tính nhất quán dữ liệu (Data Consistency) và khả năng phục hồi (Resilience) khi có sự cố dịch vụ.',
        processSteps: [
            { title: 'Kiến trúc Microservices', description: 'Triển khai các dịch vụ độc lập giao tiếp qua REST, gRPC và Kafka cho các tác vụ bất đồng bộ.' },
            { title: 'Hệ thống Loan Service', description: 'Phát triển tính năng đăng ký khoản vay, duyệt giải ngân và tự động tính toán kỳ hạn thanh toán hàng tháng.' },
            { title: 'Observability & Monitoring', description: 'Tích hợp OpenTelemetry, Zipkin để tracing và Prometheus + Grafana để giám sát hiệu năng hệ thống.' },
            { title: 'Resilience & Workflow', description: 'Sử dụng Resilience4j để xử lý lỗi hệ thống và Temporal Workflow để quản lý các quy trình nghiệp vụ phức tạp.' }
        ],
        results: [
            { value: 100, suffix: '%', label: 'Bảo mật API tầng Gateway' },
            { value: 200, suffix: 'ms', label: 'Tốc độ phản hồi trung bình' },
            { value: 5, suffix: 'Services', label: 'Hệ thống lõi' },
            { value: 99.9, suffix: '%', label: 'Uptime giám sát' }
        ],
        githubLink: '', // Dự án ngân hàng thường bảo mật
        prevSlug: 'youtube-clone', prevTitle: 'Youtube Clone',
        nextSlug: 'traveloka-clone', nextTitle: 'Traveloka Clone',
    },
    {
        slug: 'traveloka-clone',
        num: '02',
        title: 'Traveloka Clone (DATN)',
        subtitle: 'Travel Super App Booking System',
        category: 'development',
        tags: ['Microservices', 'Spring Boot 3.x', 'Vue 3'],
        year: '2025',
        img: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=700&q=85',
        heroImg: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=1200&q=85',
        galleryImgs: [
            'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
            'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80',
            'https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=600&q=80',
        ],
        techStack: ['Java Spring Boot 3.x', 'Spring Security', 'Vue.js', 'Tailwind CSS', 'MySQL', 'Redis', 'Kafka', 'Socket.io', 'Docker'],
        role: 'Full Stack Developer (Đồ án tốt nghiệp)',
        overview: 'Nền tảng đặt vé máy bay và tour du lịch trực tuyến, tập trung vào luồng booking phức tạp, giữ chỗ (Seat Hold), thanh toán và tự động hoàn vé/hủy vé theo chính sách.',
        problem: 'Xử lý đồng bộ trạng thái ghế ngồi theo thời gian thực, thiết kế hệ thống tự động hủy đơn hàng khi quá hạn thanh toán (TTL-based) và đảm bảo tính minh bạch trong quy trình hoàn tiền.',
        processSteps: [
            { title: 'Core Booking Flow', description: 'Xây dựng quy trình tìm kiếm, chọn hạng vé, giữ chỗ (TTL) và phát hành vé sau khi thanh toán.' },
            { title: 'Seat Hold System', description: 'Thiết kế hệ thống giữ chỗ sử dụng Redis kết hợp Scheduler/Consumer để giải phóng inventory an toàn.' },
            { title: 'Real-time Dashboard', description: 'Sử dụng Socket.io để cập nhật trạng thái đơn hàng và chuyến bay theo thời gian thực cho Admin.' },
            { title: 'Flight Management', description: 'Xây dựng hệ thống quản lý nhà cung cấp vé bên thứ ba và cấu hình giá vé linh hoạt.' }
        ],
        results: [
            { value: 100, suffix: '%', label: 'Tự động hủy vé quá hạn' },
            { value: 50, suffix: 'ms', label: 'Độ trễ cập nhật Socket' },
            { value: 98, suffix: '%', label: 'Chính xác Inventory' },
            { value: 10, suffix: 'Modules', label: 'Quản lý toàn diện' }
        ],
        githubLink: 'https://github.com/thanhlam2802/DATN',
        prevSlug: 'internet-banking', prevTitle: 'Internet Banking',
        nextSlug: 'phong-vu-clone', nextTitle: 'Phong Vu Shop Clone',
    },
    {
        slug: 'phong-vu-clone',
        num: '03',
        title: 'Phong Vu Shop Clone',
        subtitle: 'E-commerce Electronics Store',
        category: 'development',
        tags: ['Spring Boot', 'Thymeleaf', 'SQL Server'],
        year: '2025',
        img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&q=85',
        heroImg: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=85',
        galleryImgs: [
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
        ],
        techStack: ['Spring Boot', 'Thymeleaf', 'Tailwind CSS', 'JPA', 'SQL Server'],
        role: 'Backend Developer',
        overview: 'Dự án mô phỏng website thương mại điện tử Phong Vũ, tích hợp đầy đủ quy trình từ quản lý sản phẩm, giỏ hàng đến đặt hàng và gửi email xác nhận tự động.',
        problem: 'Quản lý trạng thái giỏ hàng hiệu quả (Session-based) và tự động hóa quy trình thông báo đơn hàng cho khách hàng qua email.',
        processSteps: [
            { title: 'Quản lý sản phẩm', description: 'Thiết kế hệ thống CRUD sản phẩm linh hoạt với phân loại và tìm kiếm nâng cao.' },
            { title: 'Automated Email', description: 'Sử dụng @Scheduled tasks để tự động gửi email xác nhận đơn hàng và cập nhật trạng thái.' },
            { title: 'Security', description: 'Triển khai xác thực và phân quyền người dùng (Authentication & Authorization).' }
        ],
        results: [
            { value: 100, suffix: '%', label: 'Tự động gửi email' },
            { value: 0, suffix: 'Lỗi', label: 'Xử lý giỏ hàng' },
            { value: 10, suffix: '+', label: 'Danh mục sản phẩm' }
        ],
        githubLink: '',
        prevSlug: 'traveloka-clone', prevTitle: 'Traveloka Clone',
        nextSlug: 'youtube-clone', nextTitle: 'Youtube Clone',
    },
    {
        slug: 'youtube-clone',
        num: '04',
        title: 'Youtube Clone Website',
        subtitle: 'Video Sharing Platform Replica',
        category: 'development',
        tags: ['Java Servlet', 'JSP', 'SQL Server'],
        year: '2024',
        img: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=700&q=85',
        heroImg: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&q=85',
        galleryImgs: [
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
            'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
        ],
        techStack: ['Java Servlet', 'JSP', 'Bootstrap', 'JavaScript', 'SQL Server'],
        role: 'Full Stack Developer',
        overview: 'Website chia sẻ video trực tuyến với các tính năng tương tác thời gian thực, quản lý video và thống kê lưu lượng truy cập cho Admin.',
        problem: 'Xử lý các tương tác người dùng (Like, Comment, Subscribe) mượt mà và tìm kiếm video bằng giọng nói.',
        processSteps: [
            { title: 'Voice Search', description: 'Tích hợp Web Speech API để hỗ trợ người dùng tìm kiếm video bằng giọng nói.' },
            { title: 'Real-time Stats', description: 'Theo dõi số lượng người xem trực tiếp và thống kê truy cập cho trang quản trị.' },
            { title: 'MVC Architecture', description: 'Xây dựng dự án theo mô hình MVC thuần với Java Servlet.' }
        ],
        results: [
            { value: 95, suffix: '%', label: 'Độ chính xác Voice Search' },
            { value: 500, suffix: 'ms', label: 'Tốc độ tải video' },
            { value: 100, suffix: '%', label: 'Responsive UI' }
        ],
        githubLink: '',
        prevSlug: 'phong-vu-clone', prevTitle: 'Phong Vu Shop Clone',
        nextSlug: 'internet-banking', nextTitle: 'Internet Banking',
    },
]

export function getProjectBySlug(slug) {
    return projects.find(p => p.slug === slug) || projects[0]
}
