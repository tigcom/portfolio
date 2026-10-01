import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 })
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const box = await page.locator('.page-mascot').first().boundingBox()
const cx = box.x + box.width / 2
const cy = box.y + box.height / 2

const clip = { x: cx - 130, y: cy - 230, width: 260, height: 300 }

// closed
await page.screenshot({ path: 'scratch/_shot_closed.png', clip })

// hover somewhere up-left so the turtle turns
await page.evaluate(([x, y]) => window.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })), [cx - 500, cy - 400])
await page.waitForTimeout(150)
await page.screenshot({ path: 'scratch/_shot_upleft.png', clip })

// click -> open menu
await page.locator('.page-mascot').first().click()
await page.waitForTimeout(700)
await page.screenshot({ path: 'scratch/_shot_open.png', clip: { x: cx - 130, y: cy - 400, width: 260, height: 470 } })

console.log('done')
await browser.close()
