import { chromium, devices } from 'playwright'
const browser = await chromium.launch()
let pass = 0, fail = 0
const log = (ok, label, extra = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'OK  ' : 'FAIL'} ${label.padEnd(56)} ${extra}`) }

for (const [dev, label] of [['iPhone 12', 'iPhone 12'], ['Pixel 7', 'Pixel 7'], ['iPad Mini', 'iPad Mini (768)']]) {
  const ctx = await browser.newContext({ ...devices[dev] })
  const page = await ctx.newPage()
  const errs = []
  page.on('pageerror', e => errs.push(String(e).slice(0,120)))
  await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2600)

  const st = await page.evaluate(() => {
    const hero = document.querySelector('.hero-showcase-viewport')
    const nav = document.querySelector('#navbar')
    const fan = document.querySelector('.corner-nav-shell')
    const grid = document.querySelector('.all-templates-section')
    const navHidden = nav ? Math.round(nav.getBoundingClientRect().bottom) <= 0 || parseFloat(getComputedStyle(nav).opacity) < 0.5 : null
    return {
      heroShown: !!hero && hero.offsetHeight > 0,
      vw: window.innerWidth,
      navOpacity: nav ? getComputedStyle(nav).opacity : null,
      navTop: nav ? Math.round(nav.getBoundingClientRect().top) : null,
      navHidden,
      fanCount: fan ? document.querySelectorAll('.corner-nav-shell').length : 0,
      fanOpacity: fan ? getComputedStyle(fan).opacity : null,
      gridTop: grid ? Math.round(grid.getBoundingClientRect().top + window.scrollY) : null,
      scrollY: Math.round(window.scrollY),
    }
  })
  console.log(`\n── ${label} (vw=${st.vw}) ──`)
  log(!st.heroShown, 'Hero fullscreen đã bị ẩn', `heroShown=${st.heroShown}`)
  log(st.gridTop === 0, 'Lưới nằm ngay đầu trang', `gridTop=${st.gridTop}`)
  log(st.navHidden === false, 'Navbar vẫn hiện', `opacity=${st.navOpacity} top=${st.navTop}`)
  log(st.fanOpacity === null || parseFloat(st.fanOpacity) === 0, 'Fan góc không hiện', `opacity=${st.fanOpacity}`)

  // cuộn thử: không được có snap, phải cuộn tự do
  await page.mouse.move(st.vw / 2, 400)
  await page.mouse.wheel(0, 300)
  await page.waitForTimeout(1600)
  const y1 = await page.evaluate(() => Math.round(window.scrollY))
  log(y1 > 50, 'Cuộn xuống tự do (không bị snap kéo về)', `scrollY=${y1}`)
  await page.mouse.wheel(0, -150)
  await page.waitForTimeout(1600)
  const y2 = await page.evaluate(() => Math.round(window.scrollY))
  log(y2 < y1, 'Cuộn lên tự do (không nhảy về đỉnh)', `${y1} → ${y2}`)
  log(errs.length === 0, 'Không lỗi JS', errs.join(' | '))
  await ctx.close()
}

console.log(`\nKết quả: ${pass} đạt, ${fail} hỏng`)
await browser.close()
