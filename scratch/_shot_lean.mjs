import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 })
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const box = await page.locator('.page-mascot').first().boundingBox()
const cx = box.x + box.width / 2
const cy = box.y + box.height / 2
const shift = 9

async function shot(name, dx, dy) {
  await page.evaluate(([x, y]) => {
    window.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true }))
  }, [cx + dx, cy + dy])
  await page.waitForTimeout(320)
  return page.screenshot({
    clip: { x: cx - 60 + shift, y: cy - 60 + shift, width: 120, height: 120 }
  }).then((b) => ({ name, b }))
}

const shots = []
shots.push(await shot('center', 0, 0))
shots.push(await shot('left', -800, 0))
shots.push(await shot('up', 0, -800))
shots.push(await shot('up-left', -600, -600))
shots.push(await shot('up-right', 700, -700))
shots.push(await shot('right', 800, 0))

// stitch into one strip on a dark bg so the file reads back at full size
const { createCanvas, loadImage } = await import('canvas').catch(() => ({}))
console.log('shots taken:', shots.map((s) => `${s.name}(${s.b.length}b)`).join(' '))

// write individually; Read tool handles small PNGs best
const fs = await import('node:fs')
for (const s of shots) fs.writeFileSync(`scratch/_lean_${s.name}.png`, s.b)

await browser.close()
