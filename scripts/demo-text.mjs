// Extract readable text from a downloaded demo index.html. Usage:
//   node scripts/demo-text.mjs <slug>          -> prints text to stdout
//   node scripts/demo-text.mjs <slug> --html   -> writes _body.html (pretty-printed)
//   node scripts/demo-text.mjs <slug> --head   -> prints <html>/<body> open tag (theme)
import fs from 'fs'

const slug = process.argv[2]
const mode = process.argv[3]
if (!slug) { console.error('usage: node scripts/demo-text.mjs <slug> [--html|--head]'); process.exit(1) }

const base = `C:/Users/GIGABYTE/Downloads/template/demos/${slug}`
const html = fs.readFileSync(`${base}/index.html`, 'utf8')

if (mode === '--head') {
  const bodyIdx = html.indexOf('<body')
  console.log('HTML OPEN:', html.slice(html.indexOf('<html'), html.indexOf('<head>')))
  console.log('BODY OPEN:', html.slice(bodyIdx, bodyIdx + 320))
  process.exit(0)
}

const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, '\n')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
  .replace(/\n{2,}/g, '\n').replace(/[ \t]+/g, ' ').trim()

if (mode === '--html') {
  const pretty = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/</g, '\n<').replace(/\n{2,}/g, '\n')
  fs.writeFileSync(`${base}/_body.html`, pretty)
  console.log('wrote _body.html', pretty.length)
} else {
  fs.writeFileSync(`${base}/_text.txt`, text)
  console.log(text)
}
