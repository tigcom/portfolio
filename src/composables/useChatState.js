import { ref } from 'vue'

const isChatOpen = ref(false)

export function useChatState() {
  return {
    isChatOpen
  }
}
