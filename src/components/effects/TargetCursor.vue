<template>
  <div v-if="!isMobile" ref="cursorRef" class="target-cursor">
    <div ref="dotRef" class="target-cursor__dot" />

    <div class="target-cursor-corner target-cursor-corner--tl" />
    <div class="target-cursor-corner target-cursor-corner--tr" />
    <div class="target-cursor-corner target-cursor-corner--br" />
    <div class="target-cursor-corner target-cursor-corner--bl" />
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useEffectsEnabled } from '../../composables/useEffectsEnabled.js'

const props = defineProps({
  targetSelector: { type: String, default: '.cursor-target' },
  spinDuration: { type: Number, default: 2 },
  hideDefaultCursor: { type: Boolean, default: true },
  hoverDuration: { type: Number, default: 0.2 },
  parallaxOn: { type: Boolean, default: true },
})

const cursorRef = ref(null)
const dotRef = ref(null)
const cornersRef = ref(null)
const spinTl = ref(null)

const isActiveRef = ref(false)

const targetCornerPositionsRef = ref(null)
const tickerFnRef = ref(null)
const activeStrengthRef = ref({ current: 0 })

const isMobile = computed(() => {
  if (typeof window === 'undefined') return false

  const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  const isSmallScreen = window.innerWidth <= 768
  const userAgent = navigator.userAgent || navigator.vendor
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i

  const isMobileUserAgent = mobileRegex.test(userAgent.toLowerCase())

  return (hasTouchScreen && isSmallScreen) || isMobileUserAgent
})

const constants = {
  cornerSize: 16,
  gap: 10,
}

const getTargetPositions = (rect) => {
  const { gap, cornerSize } = constants
  return [
    { x: rect.left - gap, y: rect.top - gap },
    { x: rect.right + gap - cornerSize, y: rect.top - gap },
    { x: rect.right + gap - cornerSize, y: rect.bottom + gap - cornerSize },
    { x: rect.left - gap, y: rect.bottom + gap - cornerSize },
  ]
}

const moveCursor = (x, y) => {
  if (!cursorRef.value) return

  gsap.to(cursorRef.value, {
    x,
    y,
    duration: 0.1,
    ease: 'power3.out',
  })
}

let cleanupFn = null
let cursorStyleEl = null
const { enabled: effectsEnabled } = useEffectsEnabled()
const setup = () => {
  if (isMobile.value || !cursorRef.value) return

  const originalCursor = document.body.style.cursor

  if (props.hideDefaultCursor) {
    document.body.style.cursor = 'none'
    // `cursor: none` on <body> is overridden by any deeper `cursor: pointer`
    // (e.g. card links), so also inject a global rule to hide it everywhere.
    if (!cursorStyleEl) {
      cursorStyleEl = document.createElement('style')
      cursorStyleEl.textContent = '*, *::before, *::after { cursor: none !important; }'
      document.head.appendChild(cursorStyleEl)
    }
  }

  const cursor = cursorRef.value
  cornersRef.value = cursor.querySelectorAll('.target-cursor-corner')

  let activeTarget = null
  let currentLeaveHandler = null
  let resumeTimeout = null

  const cleanupTarget = (target) => {
    if (currentLeaveHandler) {
      target.removeEventListener('mouseleave', currentLeaveHandler)
    }

    currentLeaveHandler = null
  }

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })

  const createSpinTimeline = () => {
    if (spinTl.value) {
      spinTl.value.kill()
    }

    spinTl.value = gsap.timeline({ repeat: -1 }).to(cursor, {
      rotation: '+=360',
      duration: props.spinDuration,
      ease: 'none',
    })
  }

  createSpinTimeline()

  const tickerFn = () => {
    if (!activeTarget || !cursorRef.value || !cornersRef.value) {
      return
    }

    const strength = activeStrengthRef.value.current
    if (strength === 0) return

    // Recompute the corners every frame so the bracket tracks the element live
    // — including while the page scrolls under the cursor (the rect captured on
    // enter would otherwise drift out of sync).
    const positions = getTargetPositions(activeTarget.getBoundingClientRect())

    const cursorX = gsap.getProperty(cursorRef.value, 'x')
    const cursorY = gsap.getProperty(cursorRef.value, 'y')
    const corners = Array.from(cornersRef.value)

    corners.forEach((corner, i) => {
      const currentX = gsap.getProperty(corner, 'x')
      const currentY = gsap.getProperty(corner, 'y')

      const targetX = positions[i].x - cursorX
      const targetY = positions[i].y - cursorY
      const finalX = currentX + (targetX - currentX) * strength
      const finalY = currentY + (targetY - currentY) * strength

      const duration = strength >= 0.99 ? (props.parallaxOn ? 0.2 : 0) : 0.05

      gsap.to(corner, {
        x: finalX,
        y: finalY,
        duration,
        ease: duration === 0 ? 'none' : 'power1.out',
        overwrite: 'auto',
      })
    })
  }

  tickerFnRef.value = tickerFn

  const moveHandler = (e) => moveCursor(e.clientX, e.clientY)

  window.addEventListener('mousemove', moveHandler)

  const scrollHandler = () => {
    if (!activeTarget || !cursorRef.value) return

    const mouseX = gsap.getProperty(cursorRef.value, 'x')
    const mouseY = gsap.getProperty(cursorRef.value, 'y')

    const elementUnderMouse = document.elementFromPoint(mouseX, mouseY)

    const isStillOverTarget =
      elementUnderMouse &&
      (elementUnderMouse === activeTarget || elementUnderMouse.closest(props.targetSelector) === activeTarget)
    if (!isStillOverTarget) {
      currentLeaveHandler?.()
    }
  }

  window.addEventListener('scroll', scrollHandler, {
    passive: true,
  })

  const mouseDownHandler = () => {
    if (!dotRef.value || !cursorRef.value) return

    gsap.to(dotRef.value, {
      scale: 0.7,
      duration: 0.3,
    })
    gsap.to(cursorRef.value, {
      scale: 0.9,
      duration: 0.2,
    })
  }

  const mouseUpHandler = () => {
    if (!dotRef.value || !cursorRef.value) return

    gsap.to(dotRef.value, {
      scale: 1,
      duration: 0.3,
    })
    gsap.to(cursorRef.value, {
      scale: 1,
      duration: 0.2,
    })
  }

  window.addEventListener('mousedown', mouseDownHandler)
  window.addEventListener('mouseup', mouseUpHandler)

  const enterHandler = (e) => {
    const directTarget = e.target
    const allTargets = []
    let current = directTarget

    while (current && current !== document.body) {
      if (current.matches(props.targetSelector)) {
        allTargets.push(current)
      }

      current = current.parentElement
    }

    const target = allTargets[0] || null
    if (!target || !cursorRef.value || !cornersRef.value) return
    if (activeTarget === target) return
    if (activeTarget) {
      cleanupTarget(activeTarget)
    }

    if (resumeTimeout) {
      clearTimeout(resumeTimeout)
      resumeTimeout = null
    }

    activeTarget = target

    const corners = Array.from(cornersRef.value)
    corners.forEach((corner) => gsap.killTweensOf(corner))

    gsap.killTweensOf(cursorRef.value, 'rotation')

    spinTl.value?.pause()

    gsap.set(cursorRef.value, {
      rotation: 0,
    })

    const rect = target.getBoundingClientRect()

    const cursorX = gsap.getProperty(cursorRef.value, 'x')
    const cursorY = gsap.getProperty(cursorRef.value, 'y')
    targetCornerPositionsRef.value = getTargetPositions(rect)

    isActiveRef.value = true
    gsap.ticker.add(tickerFnRef.value)

    gsap.to(activeStrengthRef.value, {
      current: 1,
      duration: props.hoverDuration,
      ease: 'power2.out',
    })

    corners.forEach((corner, i) => {
      gsap.to(corner, {
        x: targetCornerPositionsRef.value[i].x - cursorX,
        y: targetCornerPositionsRef.value[i].y - cursorY,
        duration: 0.2,
        ease: 'power2.out',
      })
    })

    const leaveHandler = () => {
      gsap.ticker.remove(tickerFnRef.value)
      isActiveRef.value = false
      targetCornerPositionsRef.value = null
      gsap.set(activeStrengthRef.value, {
        current: 0,
        overwrite: true,
      })

      activeTarget = null

      if (cornersRef.value) {
        const corners = Array.from(cornersRef.value)
        gsap.killTweensOf(corners)

        const { cornerSize } = constants

        const positions = [
          {
            x: -cornerSize * 1.5,
            y: -cornerSize * 1.5,
          },
          {
            x: cornerSize * 0.5,
            y: -cornerSize * 1.5,
          },
          {
            x: cornerSize * 0.5,
            y: cornerSize * 0.5,
          },
          {
            x: -cornerSize * 1.5,
            y: cornerSize * 0.5,
          },
        ]

        const tl = gsap.timeline()

        corners.forEach((corner, index) => {
          tl.to(
            corner,
            {
              x: positions[index].x,
              y: positions[index].y,
              duration: 0.3,
              ease: 'power3.out',
            },
            0
          )
        })
      }

      resumeTimeout = setTimeout(() => {
        if (!activeTarget && cursorRef.value && spinTl.value) {
          const currentRotation = gsap.getProperty(cursorRef.value, 'rotation')

          const normalizedRotation = currentRotation % 360

          spinTl.value.kill()

          spinTl.value = gsap.timeline({ repeat: -1 }).to(cursorRef.value, {
            rotation: '+=360',
            duration: props.spinDuration,
            ease: 'none',
          })

          gsap.to(cursorRef.value, {
            rotation: normalizedRotation + 360,
            duration: props.spinDuration * (1 - normalizedRotation / 360),
            ease: 'none',
            onComplete: () => {
              spinTl.value?.restart()
            },
          })
        }

        resumeTimeout = null
      }, 50)

      cleanupTarget(target)
    }

    currentLeaveHandler = leaveHandler

    target.addEventListener('mouseleave', leaveHandler)
  }

  window.addEventListener('mouseover', enterHandler)

  cleanupFn = () => {
    if (tickerFnRef.value) {
      gsap.ticker.remove(tickerFnRef.value)
    }

    window.removeEventListener('mousemove', moveHandler)
    window.removeEventListener('mouseover', enterHandler)
    window.removeEventListener('scroll', scrollHandler)
    window.removeEventListener('mousedown', mouseDownHandler)
    window.removeEventListener('mouseup', mouseUpHandler)

    if (activeTarget) {
      cleanupTarget(activeTarget)
    }

    spinTl.value?.kill()
    document.body.style.cursor = originalCursor
    if (cursorStyleEl) {
      cursorStyleEl.remove()
      cursorStyleEl = null
    }
    isActiveRef.value = false
    targetCornerPositionsRef.value = null
    activeStrengthRef.value.current = 0
  }
}

onMounted(() => {
  if (effectsEnabled.value) setup()
})

onBeforeUnmount(() => {
  cleanupFn?.()
})

// Start/stop the custom cursor when the global effects switch flips.
watch(effectsEnabled, (v) => {
  if (v) setup()
  else cleanupFn?.()
})

watch(
  () => [props.targetSelector, props.spinDuration, props.hideDefaultCursor, props.hoverDuration, props.parallaxOn],
  () => {
    if (!effectsEnabled.value) return
    cleanupFn?.()
    setup()
  }
)

watch(
  () => props.spinDuration,
  () => {
    if (isMobile.value || !cursorRef.value || !spinTl.value) {
      return
    }

    if (spinTl.value.isActive()) {
      spinTl.value.kill()

      spinTl.value = gsap.timeline({ repeat: -1 }).to(cursorRef.value, {
        rotation: '+=360',
        duration: props.spinDuration,
        ease: 'none',
      })
    }
  }
)
</script>

<style scoped>
/* The cursor uses --highlight (the site accent) so it stays on-brand with the
   rest of the effects and visible in both themes. */
.target-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 0;
  height: 0;
  pointer-events: none;
  will-change: transform;
}

.target-cursor__dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: var(--highlight);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.target-cursor-corner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  border: 3px solid var(--highlight);
  will-change: transform;
}

.target-cursor-corner--tl {
  border-right: 0;
  border-bottom: 0;
  transform: translate(-150%, -150%);
}

.target-cursor-corner--tr {
  border-bottom: 0;
  border-left: 0;
  transform: translate(50%, -150%);
}

.target-cursor-corner--br {
  border-top: 0;
  border-left: 0;
  transform: translate(50%, 50%);
}

.target-cursor-corner--bl {
  border-top: 0;
  border-right: 0;
  transform: translate(-150%, 50%);
}
</style>
