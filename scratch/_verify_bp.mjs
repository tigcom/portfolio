import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errs = []
page.on('pageerror', e => errs.push(String(e).slice(0,140)))
let pass = 0, fail = 0
const log = (ok, label, extra = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'OK  ' : 'FAIL'} ${label.padEnd(54)} ${extra}`) }
const y = () => page.evaluate(() => Math.round(window.scrollY))
const snap = () => page.evaluate(() => Math.round(document.querySelector('.all-templates-section').getBoundingClientRect().top + window.scrollY))

await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
await page.waitForTimeout(2600)

log((await snap()) === 900, 'Desktop: khởi đầu đúng, hero 900px', `v2Top=${await snap()}`)

// thu hẹp xuống mobile
await page.setViewportSize({ width: 390, height: 800 })
await page.waitForTimeout(1200)
let heroH = await page.evaluate(() => document.querySelector('.hero-showcase-viewport').offsetHeight)
log(heroH === 0, 'Thu hẹp → hero ẩn ngay', `heroHeight=${heroH}`)

// cuộn tự do trên mobile
await page.mouse.move(195, 400)
await page.mouse.wheel(0, 400)
await page.waitForTimeout(1600)
const yMobile = await y()
log(yMobile > 30, 'Mobile sau khi thu hẹp: cuộn tự do', `scrollY=${yMobile}`)

// giãn lại desktop
await page.setViewportSize({ width: 1440, height: 900 })
await page.waitForTimeout(1400)
heroH = await page.evaluate(() => document.querySelector('.hero-showcase-viewport').offsetHeight)
log(heroH === 900, 'Giãn lại → hero hiện lại đúng 900px', `heroHeight=${heroH}`)

// đưa về View 1 rồi kiểm tra snap còn hoạt động
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(1400)
await page.mouse.move(720, 450)
await page.mouse.wheel(0, 120)
await page.waitForTimeout(2400)
const yAfter = await y()
log(Math.abs(yAfter - 900) <= 3, 'Sau khi giãn lại: snap hoạt động lại', `0 → ${yAfter}`)

// và chiều ngược lại
await page.mouse.wheel(0, -60)
await page.waitForTimeout(2400)
log((await y()) <= 3, 'Sau khi giãn lại: snap ngược về View 1', `→ ${await y()}`)

log(errs.length === 0, 'Không lỗi JS', errs.join(' | '))
console.log(`\nKết quả: ${pass} đạt, ${fail} hỏng`)
await browser.close()
