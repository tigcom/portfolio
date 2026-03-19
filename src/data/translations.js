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
      bankExp: 'Bank Experience'
    }
    // ... sẽ bổ sung thêm các phần khác sau
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
      gpa: 'Điểm GPA tích lũy',
      excellentSems: 'Học kỳ Xuất sắc',
      bankExp: 'Kinh nghiệm Ngân hàng'
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
        if (result[key]) result = result[key]
        else return path
      }
      return result
    },
    setLang
  }
}
