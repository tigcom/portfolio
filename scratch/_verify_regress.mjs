import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })

const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 160)) })
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + String(e).slice(0, 160)))

const routes = ['/', '/about', '/projects', '/marketplace', '/contact']
for (const r of routes) {
  await page.goto('http://localhost:5173' + r, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2200)

  // đếm phần tử có transition sống
  const stats = await page.evaluate(() => {
    let total = 0
    const all = []
    document.querySelectorAll('*').forEach((el) => {
      const tp = getComputedStyle(el).transitionProperty
      if (tp && tp !== 'none' && tp !== 'all') total++
      if (tp === 'all') all.push(el.tagName + '.' + (el.getAttribute('class') || '').split(' ')[0])
    })
    return { total, transitionAll: [...new Set(all)].slice(0, 12) }
  })
  console.log(`${r.padEnd(14)} transition sống: ${String(stats.total).padStart(5)}   transition:all còn sống: ${stats.transitionAll.length ? stats.transitionAll.join(', ') : '(không)'}`)

  const name = r === '/' ? 'home' : r.replace('/', '')
  await page.screenshot({ path: `scratch/reg-${name}.png` })
}

// ── Đổi theme sáng/tối ──────────────────────────────────────────────────────
await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
await page.waitForTimeout(2000)
const themeBtn = await page.$('.nav-theme-btn')
if (themeBtn) {
  await page.evaluate(() => document.querySelector('.nav-theme-btn').click())
  await page.waitForTimeout(1800)
  const th = await page.evaluate(() => document.documentElement.getAttribute('data-theme'))
  console.log(`\nSau khi bấm nút theme → data-theme = ${th}`)
  await page.screenshot({ path: 'scratch/reg-theme-toggled.png' })
} else {
  console.log('\nKhông tìm thấy nút đổi theme — bỏ qua.')
}

console.log(`\nLỗi console: ${errors.length ? '' : '(không có)'}`)
errors.slice(0, 10).forEach((e) => console.log('  - ' + e))

await browser.close()
