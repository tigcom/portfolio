// Dump computed styles of key elements in the saas-analytics demo to nail the rebuild.
import { chromium } from 'playwright'

const url = 'https://www.uupm.cc/demo/saas-analytics-dashboard'
const b = await chromium.launch()
const p = await b.newPage({ viewport: { width: 1440, height: 900 } })
await p.goto(url, { waitUntil: 'load', timeout: 90000 })
await p.waitForTimeout(2500)

const info = await p.evaluate(() => {
  const g = (e) => getComputedStyle(e)
  const q = (s) => document.querySelector(s)
  const out = {}
  out.bodyFont = g(document.body).fontFamily
  const h1 = q('h1')
  out.h1 = h1 ? { font: g(h1).fontFamily, size: g(h1).fontSize, weight: g(h1).fontWeight, color: g(h1).color } : null
  const h2 = q('h2')
  out.h2 = h2 ? { font: g(h2).fontFamily, size: g(h2).fontSize, weight: g(h2).fontWeight } : null
  const gt = q('.gradient-text')
  out.gradientText = gt ? {
    bgImage: g(gt).backgroundImage,
    color: g(gt).color,
    webkitFill: g(gt).webkitTextFillColor,
    font: g(gt).fontFamily,
  } : null
  const btns = [...document.querySelectorAll('a, button')]
  const start = btns.find((b) => (b.textContent || '').trim().includes('Start Free Trial'))
  out.btnPrimary = start ? {
    bg: g(start).backgroundColor, bgImage: g(start).backgroundImage, color: g(start).color,
    radius: g(start).borderRadius, pad: g(start).padding, shadow: g(start).boxShadow,
  } : null
  const watch = btns.find((b) => (b.textContent || '').trim().includes('Watch Demo'))
  out.btnGhost = watch ? { bg: g(watch).backgroundColor, color: g(watch).color, border: g(watch).borderColor, radius: g(watch).borderRadius, pad: g(watch).padding } : null
  const root = q('.saas-analytics') || q('main')
  out.root = root ? { bg: g(root).background, bgImage: g(root).backgroundImage, font: g(root).fontFamily } : null
  // eyebrow badge
  const badge = [...document.querySelectorAll('span, div')].find((e) => (e.textContent || '').trim() === 'Real-time Analytics')
  out.eyebrow = badge ? { bg: g(badge).backgroundColor, color: g(badge).color, radius: g(badge).borderRadius, pad: g(badge).padding } : null
  return out
})

console.log(JSON.stringify(info, null, 2))
await b.close()
