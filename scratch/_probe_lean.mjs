import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } })
const errors = []
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[console.error] ${m.text()}`) })

await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

const box = await page.locator('.page-mascot').first().boundingBox()
const cx = box.x + box.width / 2
const cy = box.y + box.height / 2

async function probe(dx, dy) {
  await page.evaluate(([x, y]) => {
    window.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }))
  }, [cx + dx, cy + dy])
  await page.waitForTimeout(260) // outrun the 160ms transition
  return page.evaluate(() => {
    const lean = document.querySelector('.page-mascot__lean')
    const layer = document.querySelectorAll('.page-mascot__layer')
    const pos = getComputedStyle(layer[0]).backgroundPosition
    const map = { '0% 0%': 'up-left', '50% 0%': 'up', '100% 0%': 'up-right', '0% 50%': 'left', '50% 50%': 'center', '100% 50%': 'right', '0% 100%': 'down-left', '50% 100%': 'down', '100% 100%': 'down-right' }
    const m = new DOMMatrixReadOnly(getComputedStyle(lean).transform)
    return { dir: map[pos] || pos, tx: +m.m41.toFixed(2), ty: +m.m42.toFixed(2), rot: +(Math.atan2(m.m12, m.m11) * 180 / Math.PI).toFixed(2) }
  })
}

console.log('--- cell still snaps correctly ---')
for (const [n, dx, dy] of [['9h left', -500, 0], ['12h up', 0, -500], ['3h right', 500, 0], ['6h down', 0, 500], ['center', 0, 0]]) {
  const r = await probe(dx, dy)
  console.log(`  ${n.padEnd(10)} -> cell=${r.dir.padEnd(10)} tx=${String(r.tx).padStart(6)} ty=${String(r.ty).padStart(6)} rot=${String(r.rot).padStart(6)}`)
}

console.log('\n--- LEAN IS CONTINUOUS: 5 angles inside ONE sector must all differ ---')
for (const deg of [-30, -25, -20, -15, -10]) {
  const a = deg * Math.PI / 180
  const r = await probe(Math.cos(a) * 600, Math.sin(a) * 600)
  console.log(`  ${String(deg).padStart(4)} deg -> cell=${r.dir.padEnd(9)} tx=${String(r.tx).padStart(6)} ty=${String(r.ty).padStart(6)} rot=${String(r.rot).padStart(6)}`)
}

console.log('\n--- SATURATION: far pointer must not keep dragging ---')
for (const d of [100, 260, 520, 900, 1400]) {
  const r = await probe(d, -d)
  console.log(`  dist~${String(d).padStart(4)} -> tx=${String(r.tx).padStart(6)} ty=${String(r.ty).padStart(6)} rot=${String(r.rot).padStart(6)}`)
}

console.log('\n--- BOUNDS: max shift for size 76 is 0.07*76 = 5.3px, max tilt 3.2deg ---')
let maxT = 0, maxR = 0
for (let i = 0; i < 48; i++) {
  const a = (i / 48) * Math.PI * 2
  const r = await probe(Math.cos(a) * 2000, Math.sin(a) * 2000)
  maxT = Math.max(maxT, Math.abs(r.tx), Math.abs(r.ty))
  maxR = Math.max(maxR, Math.abs(r.rot))
}
console.log(`  observed max |translate| = ${maxT.toFixed(2)}px (limit 5.32)`)
console.log(`  observed max |rotate|    = ${maxR.toFixed(2)}deg (limit 3.2)`)

console.log('\n--- RESET when pointer returns to centre ---')
await probe(0, 0)
const c = await page.evaluate(() => {
  const m = new DOMMatrixReadOnly(getComputedStyle(document.querySelector('.page-mascot__lean')).transform)
  return { tx: +m.m41.toFixed(2), ty: +m.m42.toFixed(2) }
})
console.log('  at centre ->', JSON.stringify(c))

console.log('\nerrors:', errors.length ? errors.join('\n') : '(none)')
await browser.close()
