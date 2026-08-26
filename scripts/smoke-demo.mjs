// Generic smoke-test for a rebuilt demo page. Usage:
//   node scripts/smoke-demo.mjs <slug> <rootClass> <expectedString1> [expectedString2 ...]
// Loads http://localhost:5174/portfolio/#/marketplace/<slug>/demo, collects console
// errors, verifies the root class + expected strings, captures a screenshot.
import { chromium } from 'playwright'

const [slug, rootClass, ...expected] = process.argv.slice(2)
if (!slug || !rootClass) {
  console.error('usage: node scripts/smoke-demo.mjs <slug> <rootClass> <expected...>')
  process.exit(1)
}

const port = process.env.PORT || 5173
const URL = `http://localhost:${port}/portfolio/#/marketplace/${slug}/demo`
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
p.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

await p.goto(URL, { waitUntil: 'networkidle', timeout: 60000 }).catch((e) => errors.push('goto: ' + e.message))
await p.waitForTimeout(2500)

const info = await p.evaluate(({ rootClass, expected }) => {
  const body = document.body.innerText
  const has = (s) => body.includes(s)
  return {
    title: document.querySelector(rootClass) ? 'rendered' : `MISSING ${rootClass}`,
    checks: expected.map((s) => ({ s, ok: has(s) })),
    bodyBg: getComputedStyle(document.querySelector(rootClass) || document.body).backgroundColor,
    bodyFont: getComputedStyle(document.body).fontFamily,
    exitBtn: !!document.querySelector('.demo-exit'),
    noPortfolioNav: !document.querySelector('.app-navbar'),
  }
}, { rootClass, expected })

await p.screenshot({ path: `C:/Users/GIGABYTE/Downloads/template/demos/${slug}/rebuild-check.png`, fullPage: true })
console.log(JSON.stringify(info, null, 2))
console.log('CONSOLE ERRORS:', errors.length ? errors : 'none')
await b.close()
process.exit(errors.length ? 1 : 0)
