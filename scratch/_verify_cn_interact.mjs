import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const errs = []
page.on('pageerror', (e) => errs.push(String(e).slice(0, 140)))
await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
await page.waitForTimeout(2200)

// cuộn xuống để corner nav hiện ra (nó chỉ hiện khi hero đã bị che)
await page.evaluate(() => window.scrollTo(0, 1400))
await page.waitForTimeout(1200)

const vis = await page.evaluate(() => {
  const s = document.querySelector('.corner-nav-shell')
  return s ? { cls: s.getAttribute('class'), w: s.offsetWidth, opacity: getComputedStyle(s).opacity } : null
})
console.log('Nút menu sau khi cuộn:', JSON.stringify(vis))

// thu gọn: kích thước hub
const hubCollapsed = await page.evaluate(() => {
  const h = document.querySelector('.corner-hub')
  return { w: h.offsetWidth, h: h.offsetHeight }
})

// mở rộng bằng click hub
await page.evaluate(() => document.querySelector('.corner-hub').click())
await page.waitForTimeout(900)
const expanded = await page.evaluate(() => {
  const s = document.querySelector('.corner-nav-shell')
  const h = document.querySelector('.corner-hub')
  return {
    shell: `${s.offsetWidth}×${s.offsetHeight}`,
    hub: `${h.offsetWidth}×${h.offsetHeight}`,
    expanded: s.classList.contains('is-expanded'),
  }
})
console.log(`Hub lúc thu gọn: ${hubCollapsed.w}×${hubCollapsed.h}`)
console.log('Sau khi click hub  :', JSON.stringify(expanded))
await page.screenshot({ path: 'scratch/cn3-expanded.png', clip: { x: 0, y: 0, width: 170, height: 170 } })

// click một cánh hoa → phải điều hướng
const before = page.url()
await page.evaluate(() => {
  const paths = [...document.querySelectorAll('.petal-sector-path')]
  paths[3].dispatchEvent(new MouseEvent('click', { bubbles: true }))
})
await page.waitForTimeout(1200)
console.log(`Điều hướng khi click cánh 3: ${before} → ${page.url()}`)

await page.waitForTimeout(800)
await page.screenshot({ path: 'scratch/cn3-after-nav.png', clip: { x: 0, y: 0, width: 170, height: 170 } })

console.log('Lỗi JS:', errs.length ? errs.join(' | ') : '(không có)')
await browser.close()
