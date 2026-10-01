import { chromium } from 'playwright'
import fs from 'node:fs'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 })

const atlasReq = []
page.on('request', (r) => { if (r.url().includes('/mascots/')) atlasReq.push(r.url()) })

const errors = []
page.on('pageerror', (e) => errors.push(`[pageerror] ${e.message}`))
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[console.error] ${m.text()}`) })

await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const box = await page.locator('.page-mascot').first().boundingBox()
const cx = box.x + box.width / 2
const cy = box.y + box.height / 2

async function shot(name, dx, dy) {
  await page.evaluate(([x, y]) => {
    window.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }))
  }, [cx + dx, cy + dy])
  await page.waitForTimeout(320)
  const buf = await page.screenshot({ clip: { x: cx - 60, y: cy - 60, width: 120, height: 120 } })
  fs.writeFileSync(`scratch/_fix_${name}.png`, buf)
  return name
}

for (const [n, dx, dy] of [['upleft', -700, -700], ['upright', 700, -700], ['left', -800, 0], ['right', 800, 0]]) {
  await shot(n, dx, dy)
}

console.log('atlas requests:', atlasReq.join('\n  '))
console.log('errors:', errors.length ? errors.join('\n') : '(none)')
await browser.close()
