// Generate downscaled JPEG thumbnails (max width 1280px) for gallery images.
// The horizontal gallery displays at ~640px; full-res screenshots (~1920px wide,
// some 4-5 megapixels) make scroll compositing heavy. Usage: node scripts/generate-thumbs.mjs
import { Jimp } from 'jimp'
import fs from 'node:fs'
import path from 'node:path'

const TARGET_DIRS = [
  'public/image/projects/internet-banking',
  'public/image/projects/kplus-digital-banking',
]
const MAX_W = 1280
const QUALITY = 82

const IMG_EXT = /\.(png|jpe?g)$/i

for (const dir of TARGET_DIRS) {
  const files = fs.readdirSync(dir).filter((f) => IMG_EXT.test(f))
  for (const file of files) {
    const src = path.join(dir, file)
    const base = file.replace(IMG_EXT, '')
    const out = path.join(dir, `${base}-thumb.jpg`)
    try {
      const img = await Jimp.read(src)
      const w = img.bitmap.width
      const h = img.bitmap.height
      if (w > MAX_W) img.resize({ w: MAX_W })
      await img.write(out, { quality: QUALITY })
      console.log(`OK  ${out}  (${w}x${h} -> ${img.bitmap.width}x${img.bitmap.height})`)
    } catch (err) {
      console.error(`ERR ${src}: ${err.message}`)
    }
  }
}
console.log('done')
