import { ref } from 'vue'

// Breakpoint "màn hẹp" dùng chung cho JS.
//
// PHẢI khớp với `@media (max-width: 768px)` trong MarketplaceView.vue: ở màn hẹp
// trang đó bỏ hẳn khung hero fullscreen, nên snap 2 view (MarketplaceView) và
// việc nhường chỗ navbar cho fan góc (AppNavbar) đều phải tắt theo. CSS không
// import được hằng số JS nên hai bên phải sửa cùng nhau — đây là chỗ ghi lại
// ràng buộc đó.
export const MOBILE_MAX_WIDTH = 768

// Singleton cấp module, cùng lối với useEffectsEnabled.js: một ref duy nhất cho
// mọi component, listener của matchMedia chỉ gắn một lần.
const isMobile = ref(false)
let query = null

function bootstrap() {
  if (typeof window === 'undefined' || !window.matchMedia || query) return
  query = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`)
  isMobile.value = query.matches
  // `change` bắn cả khi xoay máy hoặc kéo giãn cửa sổ, không cần tự nghe resize.
  query.addEventListener('change', (e) => {
    isMobile.value = e.matches
  })
}

bootstrap()

export function useIsMobile() {
  return { isMobile }
}
