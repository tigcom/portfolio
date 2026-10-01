import { chromium, devices } from 'playwright'

const browser = await chromium.launch()
let pass = 0, fail = 0
const log = (ok, label, extra) => { ok ? pass++ : fail++; console.log(`${ok ? 'OK  ' : 'FAIL'} ${label.padEnd(50)} ${extra}`) }

// ── Mobile ──────────────────────────────────────────────────────────────────
{
  const ctx = await browser.newContext({ ...devices['iPhone 12'] })
  const page = await ctx.newPage()
  const errs = []
  page.on('pageerror', (e) => errs.push(String(e).slice(0, 120)))
  await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2800)

  const V2 = await page.evaluate(() => Math.round(document.querySelector('.all-templates-section').getBoundingClientRect().top + window.scrollY))
  const vh = await page.evaluate(() => window.innerHeight)
  const heroH = await page.evaluate(() => Math.round(document.querySelector('.hero-showcase-viewport').getBoundingClientRect().height))
  const y = () => page.evaluate(() => Math.round(window.scrollY))

  // Đặc tả hiện tại: màn hẹp bỏ hẳn View 1, chỉ còn lưới, KHÔNG còn snap.
  log(heroH === 0, 'Mobile: hero fullscreen bị ẩn hẳn', `heroHeight=${heroH}`)

  await page.mouse.move(200, 400)
  await page.mouse.wheel(0, 300)
  await page.waitForTimeout(1800)
  const afterDown = await y()
  log(afterDown > 30 && afterDown < vh - 30, 'Mobile: cuộn xuống tự do, không bị snap', `0 → ${afterDown}`)

  await page.mouse.wheel(0, -100)
  await page.waitForTimeout(1800)
  const afterUp = await y()
  log(afterUp < afterDown && afterUp > 0, 'Mobile: cuộn lên tự do, không nhảy về đỉnh', `${afterDown} → ${afterUp}`)

  log(errs.length === 0, 'Mobile: không lỗi JS', errs.join(' | '))
  await ctx.close()
}

// ── Desktop: slider + snap chồng nhau ───────────────────────────────────────
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  const errs = []
  page.on('pageerror', (e) => errs.push(String(e).slice(0, 120)))
  await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2800)

  // Double-buffer: hai panel cùng tồn tại, phải đọc panel đang hiện (opacity cao nhất)
  const activeSlug = () => page.evaluate(() => {
    let best = null, bestOp = -1
    document.querySelectorAll('.showcase-details-panel').forEach((p) => {
      const op = parseFloat(getComputedStyle(p).opacity)
      if (op > bestOp) { bestOp = op; best = p }
    })
    return best?.querySelector('.action-btn-details')?.getAttribute('href') || null
  })
  const V2 = await page.evaluate(() => Math.round(document.querySelector('.all-templates-section').getBoundingClientRect().top + window.scrollY))
  const y = () => page.evaluate(() => Math.round(window.scrollY))

  // mũi tên đổi slide, không cuộn trang
  const s1 = await activeSlug()
  await page.keyboard.press('ArrowRight')
  await page.waitForTimeout(1400)
  const s2 = await activeSlug()
  log(s1 !== s2 && (await y()) === 0, 'Mũi tên phải: đổi slide, trang đứng yên', `${s1} → ${s2}, scrollY=${await y()}`)

  // click 1 card trong dock → đổi slide, vẫn ở View 1
  await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.slider-card')]
    cards[cards.length - 1].dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  await page.waitForTimeout(1600)
  log((await y()) === 0, 'Click card trong dock: đổi slide, không kéo trang', `scrollY=${await y()}`)

  // hai cú snap chồng nhau liên tiếp
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(1200)
  await page.mouse.move(720, 450)
  await page.mouse.wheel(0, 120)
  await page.waitForTimeout(120)
  await page.mouse.wheel(0, 120)
  await page.waitForTimeout(2600)
  const afterDouble = await y()
  log(Math.abs(afterDouble - V2) <= 3, 'Hai cú lăn xuống liên tiếp → vẫn dừng đúng View 2', `→ ${afterDouble}`)

  // kéo thanh cuộn xuống sâu rồi lăn lên liên tục cho tới mép
  await page.evaluate((v) => window.scrollTo(0, v + 2500), V2)
  await page.waitForTimeout(1300)
  for (let i = 0; i < 8; i++) { await page.mouse.wheel(0, -400); await page.waitForTimeout(200) }
  await page.waitForTimeout(2600)
  const afterLongUp = await y()
  log(afterLongUp <= 3, 'Cuộn lên liên tục từ sâu trong View 2 → về hẳn View 1', `→ ${afterLongUp}`)

  // điều hướng sang trang khác rồi quay lại vẫn đúng
  await page.goto('http://localhost:5173/projects', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)
  await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2400)
  const backY = await y()
  log(backY === 0, 'Quay lại trang: bắt đầu ở View 1', `scrollY=${backY}`)

  log(errs.length === 0, 'Desktop: không lỗi JS', errs.join(' | '))
  await page.close()
}

console.log(`\nKết quả: ${pass} đạt, ${fail} hỏng`)
await browser.close()
