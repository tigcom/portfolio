// Re-extract tokens for the 2 demos whose root detection fell back to <body>,
// using their known theme-scope class selectors.
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const OUT = 'C:/Users/GIGABYTE/Downloads/template/demos'
const targets = [
  ['sales-crm-platform', 'sales-crm-platform', '.sales-crm-platform'],
  ['cex-trading-platform', 'cex-trading', '.cex-trading'],
]
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  for (const [slug, uupm, sel] of targets) {
    await page.goto('https://www.uupm.cc/demo/' + uupm, { waitUntil: 'load', timeout: 90000 })
    await sleep(2200)
    const data = await page.evaluate((sel) => {
      const root = document.querySelector(sel) || document.body
      const names = new Set()
      const walk = (list) => {
        for (const r of list) {
          if (r.cssRules) walk(r.cssRules)
          if (!r.style) continue
          for (let i = 0; i < r.style.length; i++) {
            const p = r.style[i]
            if (p.startsWith('--')) names.add(p)
          }
        }
      }
      for (const s of document.styleSheets) { try { walk(s.cssRules) } catch {} }
      const cs = getComputedStyle(root)
      const vars = {}
      for (const n of names) { const v = cs.getPropertyValue(n).trim(); if (v) vars[n] = v }
      return {
        root: { tag: root.tagName.toLowerCase(), classes: Array.from(root.classList) },
        vars,
        fonts: { body: getComputedStyle(document.body).fontFamily },
      }
    }, sel)
    fs.writeFileSync(path.join(OUT, slug, 'tokens.json'), JSON.stringify(data, null, 2))
    console.log(slug, 'done —', Object.keys(data.vars).length, 'vars | root =', data.root.classes[0])
  }
  await browser.close()
}
main().catch((e) => { console.error(e); process.exit(1) })
