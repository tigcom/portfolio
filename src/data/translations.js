import { reactive, readonly } from 'vue'

const state = reactive({
  lang: localStorage.getItem('lang') || 'vi'
})

const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact'
    },
    home: {
      heroLabel: 'Software Developer / Full-Stack Developer',
      heroTitleLine1: 'Building',
      heroTitleHighlight: 'Microservices',
      heroTitleLine3: 'Systems & Seamless',
      heroTitleLine4: 'User Experiences.',
      heroDesc: "Hi, I'm Phuc Khang (tigcom). I specialize in building large-scale backend systems with Java Spring Boot Microservices and modern, high-performance user interfaces.",
      viewProjects: 'View Projects',
      knowMe: 'Know me better →',
      gpa: 'GPA Achievement',
      excellentSems: 'Excellent Sems',
      bankExp: 'Bank Experience',
      selectedProjects: 'Selected Projects',
      selectedProjectsDesc: "Here's a curated selection showcasing my expertise and the achieved results.",
      viewAllProjects: 'View All Projects',
      areasOfExpertise: 'Areas of Expertise',
      whatIDoBest: 'What I do best',
      whatOthersSay: 'What others say',
      amazingPeople: "I've worked with some amazing people over the years."
    },
    about: {
      aboutMe: 'About Me',
      im: "I'm",
      creativeDev: 'Full-Stack Developer',
      bio: 'With a systematic programming mindset and hands-on experience in Microservices, I focus on building high-performance, secure, and scalable web applications. Currently, I am contributing to financial projects at Kien Long Bank and continuously improving my Full-Stack skills.',
      yearsExp: 'Years Experience',
      projectsDone: 'Projects Done',
      happyClients: 'Happy Clients',
      awardsWon: 'Awards Won',
      experience: 'Experience',
      workHistory: 'Work History',
      myProcess: 'My Process',
      howIWork: 'How I Work',
      education: 'Education',
      gpaAchievement: 'GPA Achievement',
      excellentSems: 'Excellent Semesters',
      coreServices: 'Core Services Built',
      yearExpShort: 'Year Experience',
      readArticle: 'Read Article'
    },
    contact: {
      getInTouch: 'Get in Touch',
      letsWork: "Let's work",
      together: 'together',
      contactDesc: "Have a project in mind? I'd love to hear about it. Send me a message and let's start a conversation.",
      sendMessage: 'Send a message',
      yourName: 'Your Name',
      emailAddress: 'Email Address',
      subject: 'Subject',
      typeOfInquiry: 'Type of Inquiry',
      message: 'Message',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      messageSent: "Message sent! I'll get back to you soon.",
      contactInfo: 'Contact Info',
      location: 'Location',
      phone: 'Phone',
      responseTime: 'Response Time',
      within24h: 'Within 24 hours',
      faqs: 'FAQs',
      haveQuestions: 'Have Questions?'
    },
    common: {
      year: 'Year',
      category: 'Category',
      role: 'Role',
      overview: 'Overview',
      problem: 'Problem Statement',
      process: 'My Process',
      results: 'Key Results',
      previous: 'Previous',
      next: 'Next',
      backToProjects: 'Back to Projects',
      github: 'GitHub',
      liveDemo: 'Live Demo'
    }
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      projects: 'Dự án',
      about: 'Giới thiệu',
      contact: 'Liên hệ'
    },
    home: {
      heroLabel: 'Nhà phát triển Phần mềm / Full-Stack Developer',
      heroTitleLine1: 'Xây dựng',
      heroTitleHighlight: 'Microservices',
      heroTitleLine3: 'Hệ thống & Trải nghiệm',
      heroTitleLine4: 'Người dùng liền mạch.',
      heroDesc: "Chào bạn, mình là Phúc Khang (tigcom). Mình chuyên xây dựng các hệ thống Backend quy mô lớn với Java Spring Boot Microservices và giao diện người dùng hiện đại, tối ưu hiệu năng.",
      viewProjects: 'Xem dự án',
      knowMe: 'Tìm hiểu về mình →',
      gpa: 'GPA tích lũy',
      excellentSems: 'Học kỳ Xuất sắc',
      bankExp: 'Bank coder',
      selectedProjects: 'Dự án Tiêu biểu',
      selectedProjectsDesc: "Dưới đây là danh sách các dự án tiêu biểu thể hiện chuyên môn và kết quả tôi đã đạt được.",
      viewAllProjects: 'Xem tất cả dự án',
      areasOfExpertise: 'Lĩnh vực Chuyên môn',
      whatIDoBest: 'Thế mạnh của tôi',
      whatOthersSay: 'Mọi người nói gì',
      amazingPeople: "Tôi đã có cơ hội làm việc với những đồng nghiệp và khách hàng tuyệt vời."
    },
    about: {
      aboutMe: 'Giới thiệu',
      im: 'Mình là',
      creativeDev: 'Full-Stack Developer',
      bio: 'Với tư duy lập trình hệ thống và kinh nghiệm thực chiến về Microservices, mình tập trung vào việc xây dựng các ứng dụng web hiệu năng cao, bảo mật và dễ mở rộng. Hiện tại, mình đang đóng góp vào các dự án tài chính tại ngân hàng Kiên Long và không ngừng nâng cao kỹ năng Full-Stack của bản thân.',
      yearsExp: 'Năm kinh nghiệm',
      projectsDone: 'Dự án hoàn thành',
      happyClients: 'Khách hàng hài lòng',
      awardsWon: 'Giải thưởng',
      experience: 'Kinh nghiệm',
      workHistory: 'Lịch sử làm việc',
      myProcess: 'Quy trình',
      howIWork: 'Cách tôi làm việc',
      education: 'Học vấn',
      gpaAchievement: 'Điểm GPA tích lũy',
      excellentSems: 'Học kỳ Xuất sắc',
      coreServices: 'Dịch vụ lõi đã xây dựng',
      yearExpShort: 'Năm kinh nghiệm',
      readArticle: 'Xem bài viết'
    },
    contact: {
      getInTouch: 'Liên hệ',
      letsWork: 'Cùng nhau',
      together: 'hợp tác',
      contactDesc: 'Bạn có ý tưởng cho một dự án? Mình rất sẵn lòng lắng nghe. Hãy gửi tin nhắn cho mình và bắt đầu cuộc trò chuyện nhé.',
      sendMessage: 'Gửi tin nhắn',
      yourName: 'Họ tên của bạn',
      emailAddress: 'Địa chỉ Email',
      subject: 'Tiêu đề',
      typeOfInquiry: 'Loại yêu cầu',
      message: 'Nội dung tin nhắn',
      sendBtn: 'Gửi tin nhắn',
      sendingBtn: 'Đang gửi...',
      messageSent: 'Tin nhắn đã được gửi! Mình sẽ phản hồi bạn sớm nhất có thể.',
      contactInfo: 'Thông tin liên hệ',
      location: 'Địa điểm',
      phone: 'Số điện thoại',
      responseTime: 'Thời gian phản hồi',
      within24h: 'Trong vòng 24 giờ',
      faqs: 'Hỏi đáp',
      haveQuestions: 'Bạn có thắc mắc?'
    },
    common: {
      year: 'Năm',
      category: 'Lĩnh vực',
      role: 'Vai trò',
      overview: 'Tổng quan',
      problem: 'Vấn đề & Thách thức',
      process: 'Quy trình thực hiện',
      results: 'Kết quả đạt được',
      previous: 'Trước đó',
      next: 'Tiếp theo',
      backToProjects: 'Quay lại danh mục',
      github: 'GitHub',
      liveDemo: 'Xem Demo'
    }
  }
}

const setLang = (lang) => {
  state.lang = lang
  localStorage.setItem('lang', lang)
}

export const useLang = () => {
  return {
    state: readonly(state),
    t: (path) => {
      const keys = path.split('.')
      let result = translations[state.lang]
      for (const key of keys) {
        if (result && result[key]) result = result[key]
        else return path
      }
      return result
    },
    setLang
  }
}
