// Extract design tokens (CSS custom properties + fonts) per demo into tokens.json.
// Reads the live rendered page's stylesheets for --var names, then resolves each
// via getComputedStyle on the demo root element for the exact final value.
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const OUT = 'C:/Users/GIGABYTE/Downloads/template/demos'
const BASE = 'https://www.uupm.cc/demo/'

const demos = [
  ['saas-analytics-dashboard', 'saas-analytics-dashboard'],
  ['sales-crm-platform', 'sales-crm-platform'],
  ['fintech-crypto-dashboard', 'fintech-crypto'],
  ['digital-banking-app', 'digital-banking'],
  ['cex-trading-platform', 'cex-trading'],
  ['crypto-wallet', 'crypto-wallet'],
  ['ai-writing-assistant', 'ai-writing-assistant'],
  ['ai-chatbot-platform', 'ai-chatbot-platform'],
  ['ai-image-generator', 'ai-image-generator'],
  ['luxury-ecommerce', 'luxury-ecommerce'],
  ['health-wellness-app', 'health-wellness'],
  ['real-estate-luxury', 'real-estate'],
  ['educational-platform', 'educational-platform'],
  ['restaurant-food', 'restaurant-food'],
  ['travel-tourism', 'travel-tourism'],
  ['fitness-gym-app', 'fitness-gym'],
  ['developer-tools', 'developer-tools'],
  ['creative-agency-portfolio', 'creative-agency'],
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

  for (const [slug, uupm] of demos) {
    const url = BASE + uupm
    try { await page.goto(url, { waitUntil: 'load', timeout: 90000 }) } catch (e) { console.log(slug, 'goto', e.message) }
    await sleep(2200)

    const data = await page.evaluate(() => {
      // 1) find the demo root scope element
      const root = document.querySelector('main')
        || document.querySelector('[class*="min-h-screen"]')
        || document.body

      // 2) collect every --* variable NAME declared anywhere in any stylesheet
      const names = new Set()
      const walk = (list) => {
        for (const rule of list) {
          if (rule.cssRules) walk(rule.cssRules)
          if (!rule.style) continue
          for (let i = 0; i < rule.style.length; i++) {
            const p = rule.style[i]
            if (p.startsWith('--')) names.add(p)
          }
        }
      }
      for (const sheet of document.styleSheets) {
        try { walk(sheet.cssRules) } catch {}
      }

      // 3) resolve each var on the root element (computed final value)
      const cs = getComputedStyle(root)
      const vars = {}
      for (const n of names) {
        const v = cs.getPropertyValue(n).trim()
        if (v) vars[n] = v
      }

      // 4) typography
      const fonts = { body: getComputedStyle(document.body).fontFamily }
      const h1 = document.querySelector('h1')
      if (h1) fonts.h1 = getComputedStyle(h1).fontFamily

      // 5) root element metadata
      const rootInfo = {
        tag: root.tagName.toLowerCase(),
        classes: Array.from(root.classList),
      }

      // 6) background of root
      rootInfo.background = getComputedStyle(root).background
      rootInfo.color = getComputedStyle(root).color

      return { root: rootInfo, vars, fonts, varNames: [...names].sort() }
    })

    fs.writeFileSync(path.join(OUT, slug, 'tokens.json'), JSON.stringify(data, null, 2))
    const keys = Object.keys(data.vars)
    console.log(`[${slug}] ${keys.length} vars | root=${data.root.classes[0] || data.root.tag} | body=${data.fonts.body.slice(0, 60)}`)
  }

  await browser.close()
  console.log('TOKENS DONE')
}

main().catch((e) => { console.error(e); process.exit(1) })
