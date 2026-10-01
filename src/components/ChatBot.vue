<template>
  <div class="chatbot-root">
    <!-- Chat Window -->
    <div v-if="isChatOpen" class="chatbot-window" ref="chatWindow">
      <!-- Header -->
      <div class="chatbot-header">
        <div class="chatbot-header-info">
          <div class="chatbot-avatar">PK</div>
          <div class="chatbot-header-text">
            <h3>{{ t('chatbot.title') }}</h3>
            <span>Online</span>
          </div>
        </div>
        <div class="chatbot-header-actions">
          <!-- New chat -->
          <button class="chatbot-header-btn" @click="resetChat" :title="t('chatbot.newChat')">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
              <path d="M3 3v5h5"/>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/>
              <path d="M16 21h5v-5"/>
            </svg>
          </button>
          <!-- Close -->
          <button class="chatbot-header-btn" @click="closeChat" :title="t('chatbot.close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Messages -->
      <div class="chatbot-messages" ref="messagesEl">
        <div
          v-for="(msg, i) in messages"
          :key="i"
          class="chatbot-msg"
          :class="msg.role === 'model' ? 'chatbot-msg-ai' : 'chatbot-msg-user'"
          v-html="msg.role === 'model' ? renderMarkdown(msg.content) : escapeHtml(msg.content)"
        ></div>

        <!-- Typing indicator -->
        <div v-if="isLoading" class="chatbot-typing">
          <div class="chatbot-typing-dot"></div>
          <div class="chatbot-typing-dot"></div>
          <div class="chatbot-typing-dot"></div>
        </div>

        <!-- Error -->
        <div v-if="errorMsg" class="chatbot-error">
          <span>{{ errorMsg }}</span>
          <button @click="retryLast">{{ t('chatbot.retry') }}</button>
        </div>
      </div>

      <!-- Quick Options -->
      <div v-if="quickOptions.length" class="chatbot-quick-options">
        <button
          v-for="(opt, i) in quickOptions"
          :key="i"
          class="chatbot-quick-btn"
          :style="{ animationDelay: `${i * 80}ms` }"
          @click="handleQuickOption(opt)"
        >
          {{ opt.label }}
        </button>
      </div>

      <!-- Input -->
      <div class="chatbot-input-area">
        <input
          ref="inputEl"
          class="chatbot-input"
          type="text"
          :placeholder="t('chatbot.placeholder')"
          v-model="inputText"
          @keydown.enter.prevent="sendMessage"
          :disabled="isLoading"
        />
        <button
          class="chatbot-send-btn"
          @click="sendMessage"
          :disabled="!inputText.trim() || isLoading"
          :aria-label="t('chatbot.send')"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="m5 12 14-7-7 14-2-7z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'
import gsap from 'gsap'
import { useLang } from '../data/translations.js'
import { useChatState } from '../composables/useChatState.js'

const { state, t } = useLang()
const { isChatOpen } = useChatState()

// ====== State ======
const messages = ref([])
const quickOptions = ref([])
const inputText = ref('')
const isLoading = ref(false)
const errorMsg = ref('')
const chatWindow = ref(null)
const messagesEl = ref(null)
const inputEl = ref(null)

// Giữ lại tin nhắn cuối cùng để retry
let lastUserMessage = ''

// Watch isChatOpen to handle animations
watch(isChatOpen, (newVal) => {
  if (newVal) {
    nextTick(() => {
      if (chatWindow.value) {
        gsap.fromTo(chatWindow.value,
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' }
        )
      }
      if (messages.value.length === 0) {
        initGreeting()
      }
      focusInput()
    })
  }
})

function closeChat() {
  if (chatWindow.value) {
    gsap.to(chatWindow.value, {
      scale: 0.9, opacity: 0, duration: 0.2, ease: 'power2.in',
      onComplete: () => { isChatOpen.value = false }
    })
  } else {
    isChatOpen.value = false
  }
}

function resetChat() {
  messages.value = []
  quickOptions.value = []
  errorMsg.value = ''
  isLoading.value = false
  inputText.value = ''
  initGreeting()
}

// ====== Greeting + Quick Options ban đầu ======
function initGreeting() {
  messages.value.push({
    role: 'model',
    content: t('chatbot.greeting')
  })
  // Hiện 3 nút phân loại user
  quickOptions.value = [
    { label: t('chatbot.optExplore'), message: t('chatbot.optExplore') },
    { label: t('chatbot.optFreelance'), message: t('chatbot.optFreelance') },
    { label: t('chatbot.optRecruiter'), message: t('chatbot.optRecruiter') },
  ]
  scrollToBottom()
}

// ====== Quick Options ======
function handleQuickOption(opt) {
  quickOptions.value = []
  sendUserMessage(opt.message)
}

// ====== Send Message ======
function sendMessage() {
  const text = inputText.value.trim()
  if (!text || isLoading.value) return
  inputText.value = ''
  quickOptions.value = []
  sendUserMessage(text)
}

async function sendUserMessage(text) {
  lastUserMessage = text
  errorMsg.value = ''

  // Thêm tin nhắn user
  messages.value.push({ role: 'user', content: text })
  scrollToBottom()

  // Gọi API
  isLoading.value = true

  try {
    // Thay vì lấy config và gọi Gemini trực tiếp, gọi proxy backend ở /api/chat
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.value,
        lang: state.lang
      })
    })

    if (res.status === 429) {
      errorMsg.value = t('chatbot.error') + ' (Too many requests)'
      isLoading.value = false
      scrollToBottom()
      return
    }

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`)
    }

    // Streaming response
    const contentType = res.headers.get('content-type') || ''

    if (contentType.includes('text/event-stream')) {
      await handleStreamResponse(res)
    } else {
      // Fallback: non-streaming JSON
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
      processAIResponse(aiText)
    }
  } catch (err) {
    console.error('Chatbot error:', err)
    errorMsg.value = t('chatbot.error')
  } finally {
    isLoading.value = false
    scrollToBottom()
    focusInput()
  }
}

// ====== Stream Handler ======
async function handleStreamResponse(res) {
  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let fullText = ''
  let buffer = ''

  // Tạo bubble AI trống để append text vào
  const aiMsgIndex = messages.value.length
  messages.value.push({ role: 'model', content: '' })

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })

    // Parse SSE events
    const lines = buffer.split('\n')
    buffer = lines.pop() || ''

    for (const line of lines) {
      if (!line.startsWith('data: ')) continue
      const jsonStr = line.slice(6).trim()
      if (!jsonStr || jsonStr === '[DONE]') continue

      try {
        const data = JSON.parse(jsonStr)
        const chunk = data.candidates?.[0]?.content?.parts?.[0]?.text || ''
        if (chunk) {
          fullText += chunk
          messages.value[aiMsgIndex].content = stripSuggestedOptions(fullText)
          scrollToBottom()
        }
      } catch {
        // Bỏ qua dòng parse lỗi
      }
    }
  }

  // Hoàn tất — parse suggested options
  isLoading.value = false
  parseSuggestedOptions(fullText)
  scrollToBottom()
}

// ====== Non-stream response ======
function processAIResponse(text) {
  const cleanText = stripSuggestedOptions(text)
  messages.value.push({ role: 'model', content: cleanText })
  parseSuggestedOptions(text)
}

// ====== Suggested Options ======
function stripSuggestedOptions(text) {
  // Cắt ngay từ lúc bắt đầu tag [SUGGESTED_OPTIONS] để ẩn hoàn toàn lúc đang stream
  const index = text.indexOf('[SUGGESTED_OPTIONS]')
  if (index !== -1) {
    return text.substring(0, index).trim()
  }
  return text.trim()
}

function parseSuggestedOptions(text) {
  const match = text.match(/\[SUGGESTED_OPTIONS\]\s*([\s\S]*?)\s*\[\/SUGGESTED_OPTIONS\]/)
  if (!match) {
    quickOptions.value = []
    return
  }
  try {
    const options = JSON.parse(match[1])
    if (Array.isArray(options) && options.length > 0) {
      quickOptions.value = options.slice(0, 3).map(opt => ({
        label: opt.label,
        message: opt.msg
      }))
    }
  } catch {
    quickOptions.value = []
  }
}

// ====== Retry ======
function retryLast() {
  if (!lastUserMessage) return
  errorMsg.value = ''
  const lastIdx = messages.value.length - 1
  if (messages.value[lastIdx]?.role === 'user') {
    messages.value.pop()
  }
  sendUserMessage(lastUserMessage)
}

// ====== Markdown rendering nhẹ ======
function renderMarkdown(text) {
  if (!text) return ''
  let html = escapeHtml(text)

  // Bold: **text**
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  // Italic: *text* (không phải **)
  html = html.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
  // Internal links: [text](#/path)
  html = html.replace(/\[([^\]]+)\]\((#\/[^)]+)\)/g, '<a href="$2">$1</a>')
  // External links: [text](http...)
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  // Line breaks
  html = html.replace(/\n/g, '<br>')
  // List items: - text hoặc • text
  html = html.replace(/^[-•]\s+(.+)/gm, '<span style="display:block;padding-left:12px">• $1</span>')

  return html
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }
  return text.replace(/[&<>"']/g, c => map[c])
}

// ====== Scroll & Focus ======
function scrollToBottom() {
  nextTick(() => {
    if (messagesEl.value) {
      messagesEl.value.scrollTop = messagesEl.value.scrollHeight
    }
  })
}

function focusInput() {
  nextTick(() => {
    if (inputEl.value) inputEl.value.focus()
  })
}

// ====== Watch ngôn ngữ — refresh greeting nếu chat chỉ có 1 tin ======
watch(() => state.lang, () => {
  if (messages.value.length <= 1) {
    resetChat()
  }
})
</script>
