import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 2 })
await page.goto('http://localhost:5173/marketplace', { waitUntil: 'networkidle' })
await page.waitForTimeout(2500)

await page.mouse.move(22, 22)
await page.waitForTimeout(900)

// ── 1. Hình học path ────────────────────────────────────────────────────────
const geom = await page.evaluate(() => {
  const out = []
  document.querySelectorAll('.radial-petals-svg path').forEach((p) => {
    const len = p.getTotalLength()
    let minR = Infinity, maxR = -Infinity
    for (let i = 0; i <= 200; i++) {
      const q = p.getPointAtLength((len * i) / 200)
      const r = Math.hypot(q.x, q.y)
      minR = Math.min(minR, r); maxR = Math.max(maxR, r)
    }
    out.push({
      cls: p.getAttribute('class') || 'nucleus',
      minR: +minR.toFixed(1),
      maxR: +maxR.toFixed(1),
    })
  })
  return out
})
console.log('── Hình học path (kỳ vọng cánh hoa: minR=28, maxR=130) ──')
geom.forEach((g) => console.log(`  ${g.cls.padEnd(24)} r = ${g.minR} … ${g.maxR}`))

// ── 2. Hit-test rải khắp quạt ───────────────────────────────────────────────
const hits = await page.evaluate(() => {
  const rows = []
  for (const r of [20, 29, 30, 45, 60, 79, 90, 110, 125, 129, 131]) {
    const cells = []
    for (let a = 3; a <= 87; a += 21) {
      const x = r * Math.cos((a * Math.PI) / 180)
      const y = r * Math.sin((a * Math.PI) / 180)
      const el = document.elementFromPoint(x, y)
      const cls = el ? (el.getAttribute('class') || el.tagName) : 'none'
      let tag = 'other'
      if (cls.includes('petal-sector-path')) tag = 'PETAL'
      else if (cls.includes('petal-btn')) tag = 'btn'
      else if (cls.includes('corner-hub') || cls.includes('hub-')) tag = 'hub'
      else if (cls.includes('petal-items-group')) tag = 'NAV!!'
      else if (cls.includes('radial-petals-svg')) tag = 'SVG!!'
      else if (cls.includes('corner-nav')) tag = 'shell'
      cells.push(tag)
    }
    rows.push(`r=${String(r).padStart(3)}  ${cells.join(' ')}`)
  }
  return rows
})
console.log('\n── Hit-test theo bán kính (góc 3°→87°) ──')
console.log('        ' + [3, 24, 45, 66, 87].map((a) => `${a}°`.padStart(6)).join(''))
hits.forEach((r) => console.log('  ' + r))

// ── 3. Vùng chết ngoài quạt ─────────────────────────────────────────────────
const dead = await page.evaluate(() => {
  const probe = (x, y) => {
    const el = document.elementFromPoint(x, y)
    return el ? (el.getAttribute('class') || el.tagName) : 'none'
  }
  return {
    '129,129 (ngoài quạt, trong hộp vuông)': probe(129, 129),
    '131,0  (ngoài quạt)': probe(131, 0),
    '0,131  (ngoài quạt)': probe(0, 131),
    '125,25 (trong quạt, sát mép)': probe(125, 25),
  }
})
console.log('\n── Vùng chết (kỳ vọng: 3 dòng đầu KHÔNG phải corner-nav-*) ──')
Object.entries(dead).forEach(([k, v]) => console.log(`  ${k.padEnd(38)} → ${v}`))

// ── 4. Chụp ảnh trạng thái ──────────────────────────────────────────────────
await page.screenshot({ path: 'scratch/cn2-idle.png', clip: { x: 0, y: 0, width: 150, height: 150 } })

const marks = {}
for (const a of [81, 63, 45, 27, 9]) {
  const r = 95
  const x = r * Math.cos((a * Math.PI) / 180)
  const y = r * Math.sin((a * Math.PI) / 180)
  await page.mouse.move(22, 22)
  await page.waitForTimeout(350)
  await page.mouse.move(x, y)
  await page.waitForTimeout(600)
  const st = await page.evaluate(() => {
    const hv = document.querySelector('.petal-sector-path.is-hovered')
    const idx = hv ? [...document.querySelectorAll('.petal-sector-path')].indexOf(hv) : null
    const btn = document.querySelector('.petal-btn.is-hovered')
    const tip = document.querySelector('.petal-tooltip')
    return { petal: idx, btn: btn ? [...document.querySelectorAll('.petal-btn')].indexOf(btn) : null, tipOpacity: tip ? getComputedStyle(tip).opacity : null }
  })
  marks[a] = st
  await page.screenshot({ path: `scratch/cn2-hover-${a}.png`, clip: { x: 0, y: 0, width: 150, height: 150 } })
}
console.log('\n── Hover tại r=95, từng góc cánh (kỳ vọng petal = 0..4) ──')
Object.entries(marks).forEach(([a, s]) => console.log(`  ${a}° → petal=${s.petal} btn=${s.btn} tooltip=${s.tipOpacity}`))

await browser.close()
