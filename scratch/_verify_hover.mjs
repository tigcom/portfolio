import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
await page.waitForTimeout(2500)

await page.evaluate(() => document.querySelector('.templates-grid-container').scrollIntoView())
await page.waitForTimeout(800)

const box = await page.evaluate(() => {
  const r = document.querySelector('.ui-card-item').getBoundingClientRect()
  return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + 20) }
})

// ── Trace nội suy từng frame ────────────────────────────────────────────────
await page.mouse.move(5, 5)
await page.waitForTimeout(600)

const tracePromise = page.evaluate(() => {
  const card = document.querySelector('.ui-card-item')
  const img = card.querySelector('.card-thumb-img')
  const ov = card.querySelector('.card-hover-overlay')
  const out = []
  const start = performance.now()
  return new Promise((resolve) => {
    const tick = () => {
      const cs = getComputedStyle(card)
      const m = cs.transform === 'none' ? null : new DOMMatrix(cs.transform)
      out.push({
        t: Math.round(performance.now() - start),
        ty: m ? Math.round(m.m42 * 100) / 100 : 0,
        sc: Math.round(new DOMMatrix(getComputedStyle(img).transform).a * 10000) / 10000,
        op: Math.round(parseFloat(getComputedStyle(ov).opacity) * 1000) / 1000,
      })
      if (performance.now() - start < 700) requestAnimationFrame(tick)
      else resolve(out)
    }
    tick()
  })
})
await page.mouse.move(box.x, box.y)
const trace = await tracePromise

const distinctTy = new Set(trace.map((s) => s.ty))
const distinctOp = new Set(trace.map((s) => s.op))
const distinctSc = new Set(trace.map((s) => s.sc))
console.log(`Số frame ghi được    : ${trace.length}`)
console.log(`Giá trị translateY   : ${distinctTy.size} mức khác nhau  → ${[...distinctTy].join(', ')}`)
console.log(`Giá trị scale ảnh    : ${distinctSc.size} mức khác nhau`)
console.log(`Giá trị opacity      : ${distinctOp.size} mức khác nhau`)
console.log(`\nMẫu diễn biến translateY theo frame:`)
console.log('  ' + trace.filter((_, i) => i % 6 === 0).map((s) => `${s.t}ms:${s.ty}`).join('  '))

// ── Chụp lưới theo breakpoint ───────────────────────────────────────────────
for (const [w, h, name] of [[1440, 900, '1440'], [1024, 800, '1024'], [900, 800, '900'], [768, 900, '768'], [390, 844, '390']]) {
  const p2 = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })
  await p2.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
  await p2.waitForTimeout(1800)
  await p2.evaluate(() => document.querySelector('.templates-grid-container').scrollIntoView())
  await p2.waitForTimeout(800)
  await p2.screenshot({ path: `scratch/vgrid-${name}.png` })
  const g = await p2.evaluate(() => {
    const el = document.querySelector('.templates-grid-container')
    const c = document.querySelector('.ui-card-item').getBoundingClientRect()
    return {
      cols: getComputedStyle(el).gridTemplateColumns,
      cardW: Math.round(c.width),
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    }
  })
  console.log(`${name.padEnd(5)} cols=${g.cols.padEnd(28)} cardW=${String(g.cardW).padStart(4)}  tràn ngang=${g.overflowX}`)
  await p2.close()
}

await browser.close()
