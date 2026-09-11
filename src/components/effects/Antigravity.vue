<template>
  <div ref="containerRef" class="antigravity" />
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import * as THREE from 'three'
import { useThemeVar } from '../../composables/useThemeVar.js'
import { useEffectsEnabled } from '../../composables/useEffectsEnabled.js'

const props = defineProps({
  count: { type: Number, default: 300 },
  magnetRadius: { type: Number, default: 10 },
  ringRadius: { type: Number, default: 10 },
  waveSpeed: { type: Number, default: 0.4 },
  waveAmplitude: { type: Number, default: 1 },
  particleSize: { type: Number, default: 2 },
  lerpSpeed: { type: Number, default: 0.1 },
  color: { type: String, default: '' },
  autoAnimate: { type: Boolean, default: true },
  particleVariance: { type: Number, default: 1 },
  rotationSpeed: { type: Number, default: 0 },
  depthFactor: { type: Number, default: 1 },
  pulseSpeed: { type: Number, default: 3 },
  particleShape: { type: String, default: 'capsule' },
  fieldStrength: { type: Number, default: 10 },
})

const containerRef = ref(null)
const { enabled: effectsEnabled } = useEffectsEnabled()
const highlight = useThemeVar('--highlight', '#bcff67')

let renderer = null
let scene = null
let camera = null
let mesh = null
let animationFrameId = 0
let particles = []
let dummy = null
let lastMousePos = { x: 0, y: 0 }
let lastMouseMoveTime = 0
let virtualMouse = { x: 0, y: 0 }
let pointer = { x: 0, y: 0 }
let clock = null
let resizeObserver = null

const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function createGeometry(shape) {
  switch (shape) {
    case 'sphere':
      return new THREE.SphereGeometry(0.2, 16, 16)
    case 'box':
      return new THREE.BoxGeometry(0.3, 0.3, 0.3)
    case 'tetrahedron':
      return new THREE.TetrahedronGeometry(0.3)
    case 'capsule':
    default:
      return new THREE.CapsuleGeometry(0.1, 0.4, 4, 8)
  }
}

function initParticles(viewportWidth, viewportHeight) {
  particles = []
  for (let i = 0; i < props.count; i++) {
    const t = Math.random() * 100
    const factor = 20 + Math.random() * 100
    const speed = 0.01 + Math.random() / 200
    const xFactor = -50 + Math.random() * 100
    const yFactor = -50 + Math.random() * 100
    const zFactor = -50 + Math.random() * 100
    const x = (Math.random() - 0.5) * viewportWidth
    const y = (Math.random() - 0.5) * viewportHeight
    const z = (Math.random() - 0.5) * 20
    const randomRadiusOffset = (Math.random() - 0.5) * 2

    particles.push({
      t, factor, speed, xFactor, yFactor, zFactor,
      mx: x, my: y, mz: z,
      cx: x, cy: y, cz: z,
      vx: 0, vy: 0, vz: 0,
      randomRadiusOffset,
    })
  }
}

function getViewportAtDepth(cam, depth) {
  const fovInRadians = (cam.fov * Math.PI) / 180
  const height = 2 * Math.tan(fovInRadians / 2) * depth
  const width = height * cam.aspect
  return { width, height }
}

function onPointerMove(event) {
  const container = containerRef.value
  if (!container) return
  const rect = container.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
}

function onResize() {
  const container = containerRef.value
  if (!container || !renderer || !camera) return
  const { clientWidth, clientHeight } = container
  camera.aspect = clientWidth / clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(clientWidth, clientHeight)
}

function renderFrame(elapsedTime) {
  if (!mesh || !camera || !renderer || !scene) return

  const viewport = getViewportAtDepth(camera, camera.position.z)

  const mouseDist = Math.sqrt(
    Math.pow(pointer.x - lastMousePos.x, 2) + Math.pow(pointer.y - lastMousePos.y, 2)
  )
  if (mouseDist > 0.001) {
    lastMouseMoveTime = Date.now()
    lastMousePos = { x: pointer.x, y: pointer.y }
  }

  let destX = (pointer.x * viewport.width) / 2
  let destY = (pointer.y * viewport.height) / 2

  if (props.autoAnimate && Date.now() - lastMouseMoveTime > 2000) {
    destX = Math.sin(elapsedTime * 0.5) * (viewport.width / 4)
    destY = Math.cos(elapsedTime * 0.5 * 2) * (viewport.height / 4)
  }

  const smoothFactor = 0.05
  virtualMouse.x += (destX - virtualMouse.x) * smoothFactor
  virtualMouse.y += (destY - virtualMouse.y) * smoothFactor

  const targetX = virtualMouse.x
  const targetY = virtualMouse.y
  const globalRotation = elapsedTime * props.rotationSpeed

  particles.forEach((particle, i) => {
    let { t, speed, mx, my, mz, cz, randomRadiusOffset } = particle
    t = particle.t += speed / 2

    const projectionFactor = 1 - cz / 50
    const projectedTargetX = targetX * projectionFactor
    const projectedTargetY = targetY * projectionFactor

    const dx = mx - projectedTargetX
    const dy = my - projectedTargetY
    const dist = Math.sqrt(dx * dx + dy * dy)

    let targetPos = { x: mx, y: my, z: mz * props.depthFactor }

    if (dist < props.magnetRadius) {
      const angle = Math.atan2(dy, dx) + globalRotation
      const wave = Math.sin(t * props.waveSpeed + angle) * (0.5 * props.waveAmplitude)
      const deviation = randomRadiusOffset * (5 / (props.fieldStrength + 0.1))
      const currentRingRadius = props.ringRadius + wave + deviation

      targetPos.x = projectedTargetX + currentRingRadius * Math.cos(angle)
      targetPos.y = projectedTargetY + currentRingRadius * Math.sin(angle)
      targetPos.z = mz * props.depthFactor + Math.sin(t) * (1 * props.waveAmplitude * props.depthFactor)
    }

    particle.cx += (targetPos.x - particle.cx) * props.lerpSpeed
    particle.cy += (targetPos.y - particle.cy) * props.lerpSpeed
    particle.cz += (targetPos.z - particle.cz) * props.lerpSpeed

    dummy.position.set(particle.cx, particle.cy, particle.cz)
    dummy.lookAt(projectedTargetX, projectedTargetY, particle.cz)
    dummy.rotateX(Math.PI / 2)

    const currentDistToMouse = Math.sqrt(
      Math.pow(particle.cx - projectedTargetX, 2) + Math.pow(particle.cy - projectedTargetY, 2)
    )
    const distFromRing = Math.abs(currentDistToMouse - props.ringRadius)
    let scaleFactor = 1 - distFromRing / 10
    scaleFactor = Math.max(0, Math.min(1, scaleFactor))
    const finalScale =
      scaleFactor * (0.8 + Math.sin(t * props.pulseSpeed) * 0.2 * props.particleVariance) * props.particleSize
    dummy.scale.set(finalScale, finalScale, finalScale)

    dummy.updateMatrix()
    mesh.setMatrixAt(i, dummy.matrix)
  })

  mesh.instanceMatrix.needsUpdate = true
  renderer.render(scene, camera)
}

function animate() {
  if (prefersReducedMotion()) {
    renderFrame(clock.getElapsedTime())
    return
  }
  animationFrameId = requestAnimationFrame(animate)
  renderFrame(clock.getElapsedTime())
}

function setupScene() {
  const container = containerRef.value
  if (!container) return

  const { clientWidth, clientHeight } = container

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(clientWidth, clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(35, clientWidth / clientHeight, 0.1, 1000)
  camera.position.z = 50

  const viewport = getViewportAtDepth(camera, camera.position.z)
  initParticles(viewport.width, viewport.height)

  const geometry = createGeometry(props.particleShape)
  const material = new THREE.MeshBasicMaterial({ color: props.color || highlight.value || '#bcff67' })
  mesh = new THREE.InstancedMesh(geometry, material, props.count)
  scene.add(mesh)

  dummy = new THREE.Object3D()
  clock = new THREE.Clock()

  // Listen on window (not the container) so the effect still tracks the cursor
  // when used as a pointer-events:none background layer.
  window.addEventListener('pointermove', onPointerMove)
  // ResizeObserver re-sizes after the hero image loads / layout settles (a
  // window resize event never fires for that).
  resizeObserver = new ResizeObserver(onResize)
  resizeObserver.observe(container)

  animate()
}

function cleanup() {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  window.removeEventListener('pointermove', onPointerMove)
  if (resizeObserver) {
    resizeObserver.disconnect()
    resizeObserver = null
  }

  if (mesh) {
    mesh.geometry.dispose()
    mesh.material.dispose()
  }
  if (renderer) {
    renderer.dispose()
    const container = containerRef.value
    if (container && renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement)
    }
  }
  renderer = null
  scene = null
  camera = null
  mesh = null
}

onMounted(() => {
  if (effectsEnabled.value) setupScene()
})
onUnmounted(cleanup)

// Start/stop the three.js loop when the global effects switch flips.
watch(effectsEnabled, (v) => {
  if (v) setupScene()
  else cleanup()
})

// Re-tint the particles when the theme highlight colour changes.
watch(highlight, (c) => {
  if (mesh && c) mesh.material.color.set(c)
})

watch(
  () => props,
  () => {
    if (!effectsEnabled.value) return
    cleanup()
    setupScene()
  },
  { deep: true }
)
</script>

<style scoped>
.antigravity {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
