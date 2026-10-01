import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errs = []
page.on('pageerror', (e) => errs.push(String(e).slice(0, 140)))
await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
await page.waitForTimeout(2800)

const V2 = await page.evaluate(() => Math.round(document.querySelector('.all-templates-section').getBoundingClientRect().top + window.scrollY))
console.log(`View 2 bắt đầu ở scrollY = ${V2}\n`)

const y = () => page.evaluate(() => Math.round(window.scrollY))
const reset = async (to) => { await page.evaluate((v) => window.scrollTo(0, v), to); await page.waitForTimeout(1400) }

let pass = 0, fail = 0
async function check(label, startAt, fn, expectFn, wait = 2400) {
  await reset(startAt)
  const s = await y()
  await fn()
  await page.waitForTimeout(wait)
  const e = await y()
  const ok = expectFn(s, e)
  ok ? pass++ : fail++
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${label.padEnd(52)} ${String(s).padStart(5)} → ${String(e).padStart(5)}`)
}

const wheel = (d) => async () => { await page.mouse.move(720, 450); await page.mouse.wheel(0, d) }

await check('1. View 1, lăn xuống 1 nấc', 0, wheel(120), (s, e) => Math.abs(e - V2) <= 3)
await check('2. View 1, lăn xuống nấc rất nhỏ (9)', 0, wheel(9), (s, e) => Math.abs(e - V2) <= 3)
await check('3. View 1, lăn xuống nấc cực nhỏ (1)', 0, wheel(1), (s, e) => Math.abs(e - V2) <= 3)
await check('4. Mép trên View 2, lăn lên 60', V2, wheel(-60), (s, e) => e <= 3)
await check('5. Mép trên View 2, lăn lên nấc nhỏ (-3)', V2, wheel(-3), (s, e) => e <= 3)
await check('6. Sâu trong View 2 (+2000), lăn lên tự do', V2 + 2000, wheel(-120), (s, e) => e > V2 + 1500 && e < s)
await check('7. Sâu trong View 2 (+2000), lăn xuống tự do', V2 + 2000, wheel(300), (s, e) => e > s + 100)
await check('8. Sâu trong View 2, lăn lên mạnh tới sát mép', V2 + 400, wheel(-600), (s, e) => e <= 3)

// nhảy vào giữa vùng cấm (mô phỏng kéo thanh cuộn) → phải tự đi nốt
await check('9. Đặt vào giữa vùng cấm từ View 1', 0, async () => { await page.evaluate((v) => window.scrollTo(0, v), Math.round(V2 / 2)) }, (s, e) => Math.abs(e - V2) <= 3)
await check('10. Đặt vào giữa vùng cấm từ View 2', 0, async () => {
  await page.evaluate((v) => window.scrollTo(0, v), 400)   // tới View 2 trước
  await page.waitForTimeout(1400)
  await page.evaluate((v) => window.scrollTo(0, v), Math.round(V2 / 2))
}, (s, e) => e <= 3)

await check('11. Bấm nút cue đáy hero', 0, async () => { await page.evaluate(() => document.querySelector('.showcase-scroll-cue').click()) }, (s, e) => Math.abs(e - V2) <= 3)
await check('12. Mũi tên xuống ở View 1 không kéo trang', 0, async () => { await page.keyboard.press('ArrowDown') }, (s, e) => e <= 3)

// ổn định: sau khi snap xong không được rung
await reset(0)
await page.mouse.move(720, 450)
await page.mouse.wheel(0, 120)
await page.waitForTimeout(2500)
const a = await y()
await page.waitForTimeout(1200)
const b = await y()
const stable = a === b && Math.abs(a - V2) <= 3
stable ? pass++ : fail++
console.log(`${stable ? 'OK  ' : 'FAIL'} ${'13. Đứng yên sau khi snap (không rung)'.padEnd(52)} ${a} rồi ${b}`)

await reset(0)
await page.setViewportSize({ width: 1440, height: 700 })
await page.waitForTimeout(800)
const V2b = await page.evaluate(() => Math.round(document.querySelector('.all-templates-section').getBoundingClientRect().top + window.scrollY))
await page.mouse.move(720, 350)
await page.mouse.wheel(0, 120)
await page.waitForTimeout(2500)
const e2 = await y()
const okResize = Math.abs(e2 - V2b) <= 3
okResize ? pass++ : fail++
console.log(`${okResize ? 'OK  ' : 'FAIL'} ${'14. Snap đúng sau khi đổi chiều cao cửa sổ'.padEnd(52)} → ${e2} (kỳ vọng ${V2b})`)

console.log(`\nKết quả: ${pass} đạt, ${fail} hỏng`)
console.log('Lỗi JS:', errs.length ? errs.join(' | ') : '(không có)')
await browser.close()
