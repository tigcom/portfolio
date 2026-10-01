import { chromium } from 'playwright'

const URL = 'http://localhost:5199/'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })

const errors = []
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))

await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

const box = await page.locator('.page-mascot').first().boundingBox()
const cx = box.x + box.width / 2
const cy = box.y + box.height / 2
console.log('mascot box:', JSON.stringify(box), 'center:', cx, cy)

// Synthetic pointermove -> no viewport clamping, so every sector is reachable.
async function probe(dx, dy) {
  await page.evaluate(([x, y]) => {
    window.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }))
  }, [cx + dx, cy + dy])
  await page.waitForTimeout(40)
  return page.evaluate(() => {
    const l = document.querySelectorAll('.page-mascot__layer')
    const p = getComputedStyle(l[0]).backgroundPosition
    const map = { '0% 0%': 'up-left', '50% 0%': 'up', '100% 0%': 'up-right', '0% 50%': 'left', '50% 50%': 'center', '100% 50%': 'right', '0% 100%': 'down-left', '50% 100%': 'down', '100% 100%': 'down-right' }
    return map[p] || p
  })
}

const R = 400
const cases = [
  ['9h  left',        -R, 0],
  ['10h30 up-left',   -R * 0.707, -R * 0.707],
  ['12h up',          0, -R],
  ['1h30 up-right',   R * 0.707, -R * 0.707],
  ['3h  right',       R, 0],
  ['4h30 down-right', R * 0.707, R * 0.707],
  ['6h  down',        0, R],
  ['7h30 down-left',  -R * 0.707, R * 0.707],
]

console.log('\n--- walking the full circle CLOCKWISE (each probe far apart) ---')
for (const [name, dx, dy] of cases) {
  console.log(`${name.padEnd(18)} -> ${await probe(dx, dy)}`)
}

console.log('\n--- walking the circle in ORDER, continuous (tests hysteresis) ---')
await page.evaluate(([x, y]) => {
  window.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }))
}, [cx - R, cy])
await page.waitForTimeout(50)
const seq = []
for (let i = 0; i <= 32; i++) {
  const a = (i / 32) * Math.PI * 2
  seq.push(await probe(Math.cos(a) * R, Math.sin(a) * R))
}
console.log(seq.join(' '))

console.log('\n--- returning to same sector after leaving (stickiness check) ---')
await probe(-R, 0); const a1 = await probe(R * 0.707, -R * 0.707)
await probe(0, -R); const a2 = await probe(R * 0.707, -R * 0.707)
console.log('up-right after left:', a1, '| up-right after up:', a2)

console.log('\n--- deadZone size (mascot is 76px) ---')
for (const d of [10, 20, 30, 37, 39, 50, 70]) {
  console.log(`dist ${String(d).padStart(3)} -> ${await probe(d, 0)}`)
}

console.log('\nerrors:', errors.length ? errors.join('\n') : '(none)')
await browser.close()
