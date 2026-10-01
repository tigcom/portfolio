# Rùa — prompt để tự vẽ

Mô tả nhân vật (dùng nguyên văn ở cả 2 sheet):

> a chibi turtle with a dark olive-green shell, pale sage-green skin, a bright lime-green
> rim along the shell edge, heavy flat brow ridges and a deadpan unimpressed straight mouth

Bảng màu khớp dự án: vỏ ô-liu đậm + da xanh sage nhạt + viền chanh `#bcff67`
(accent của site), đọc tốt trên nền `#050507`.

**Cách dùng:** một chat mới cho mỗi nhân vật, đúng 2 tin nhắn — DIRECTIONS trước, rồi
EXPRESSIONS kèm ảnh kết quả thứ nhất. Lưu thành:

```
characters/turtle/directions.png
characters/turtle/reactions.png
```

rồi báo tôi chạy `mascot.py turtle --skip-generate`.

---

## Bản A — nếu công cụ vẽ được nền trong suốt (alpha thật)

### Tin 1 — DIRECTIONS

```
Generate a 3x3 grid sprite sheet of a chibi turtle with a dark olive-green shell, pale sage-green skin, a bright lime-green rim along the shell edge, heavy flat brow ridges and a deadpan unimpressed straight mouth. Cute storybook sticker art: clean bold black outlines with some weight variation, big expressive eyes each with a bright white catchlight, soft pink cheek blush, and warm saturated colours. Give it several tones per colour -- a lighter belly, a darker shaded edge on each shell scute -- and a textured, bumpy silhouette rather than a smooth blob. Charming and playful, full of small appealing details. Not flat, not plain, not minimal. No photorealism, no heavy 3D gloss, no airbrushed gradients.

This sheet is NINE HEAD DIRECTIONS, not expressions -- the face keeps the same calm expression in every cell and only the direction the head is TURNED changes.

LAYOUT: 3 columns by 3 rows, evenly spaced, fully transparent background. Each drawing is head plus upper shoulders, centred in its cell, same character and same head size in all nine cells.

FRAMING: a PORTRAIT BUST. Head, neck and shoulders only. NO arms, NO hands, NO legs, NO lower body. The shoulders are the lowest thing in the cell.

PROPORTIONS: a BIG HEAD chibi that still has a real body. The head is large and dominant, and the shoulders are roughly TWO THIRDS the width of the head -- narrower than the head, but clearly there. Do NOT draw a floating head.

THE RULE THAT MATTERS MOST: draw the BODY ONCE and reuse it. The neck, chest and shoulders must be the EXACT SAME SHAPE in the EXACT SAME POSITION in all nine cells, identical pixels if you can. The body always faces the viewer. Do NOT redraw the body in profile when the head turns. Only the head rotates, on top of an unchanging body.

MARGINS -- this is what goes wrong most often, so follow it literally: each character must sit ENTIRELY INSIDE its own cell with a wide empty gap on all four sides. Draw it at roughly 75% of the cell height, centred, leaving clear empty space above the head AND below the shoulders. The shoulders must STOP WELL SHORT of the bottom edge of the cell -- do not let the body run off the bottom or bleed into the cell underneath. Nothing may touch or cross a cell boundary. Shrink the character equally in every cell if that is what it takes.

Turn the whole head clearly, do not just move the eyes: looking left swings the muzzle left and brings the far cheek into view.
Row 1: up-left, up, up-right. Row 2: left, straight at the viewer, right.
Row 3: down-left, down, down-right.

NO hearts, NO sparkles, NO "zzz", NO spiral eyes -- no floating symbols of any kind.
No text, no labels, no borders, no drop shadows, no background colour.
Square image, at least 1024x1024, PNG WITH A REAL ALPHA CHANNEL. The background must be genuinely transparent, not white.
```

### Tin 2 — EXPRESSIONS (đính kèm ảnh ở tin 1)

```
The attached image is a 3x3 head-direction sprite sheet. Produce the MATCHING EXPRESSIONS sheet for that same character. The character is a chibi turtle with a dark olive-green shell, pale sage-green skin, a bright lime-green rim along the shell edge, heavy flat brow ridges and a deadpan unimpressed straight mouth. Copy the character from the attached image exactly: the same colours, the same markings, the same shell scute detail, the same line weight. Every marking visible in the attached sheet must appear here too. Do not restyle, simplify or redraw it.

NOT head directions. The character faces STRAIGHT AT THE VIEWER in all nine cells, head perfectly straight. The only thing that changes between cells is the FACE, plus one small floating symbol in three of them.

CRITICAL: same art style, same palette, same line weight, same proportions, and EXACTLY THE SAME SIZE AND POSITION IN THE CELL as the attached sheet. The chest and shoulders must be the same drawing, the same width, and the same height off the bottom of the cell as in the attached sheet, identical in all nine cells here. If the two sheets do not line up the character visibly jumps, so match them.

Wide margin on all four sides, nothing touching a cell edge including the floating symbols, and clear empty space below the shoulders.

The nine expressions, left to right, top to bottom:
1. Eyes closed as two upward curved arcs. No symbol.
2. Same closed arc eyes, plus one clearly visible SMALL RED HEART floating in the empty space above the head. The heart must be present.
3. Same closed arc eyes, plus THREE SMALL YELLOW SPARKLE STARS above the head.
4. Eyes wide open and very round, mouth open in a small round O of surprise.
5. Starstruck: both eyes drawn as bright star shapes, big happy smile.
6. Eyes closed arcs, strong pink blush on both cheeks.
7. Eyes closed sleeping curves, plus a small blue "z z z" above the head.
8. Both eyes drawn as spiral swirls, wavy wobbly mouth. Dizzy.
9. Eyes closed arcs, mouth wide open in a big happy grin.

No text, no labels, no borders, no drop shadows, no background colour.
Square image, at least 1024x1024, PNG WITH A REAL ALPHA CHANNEL. The background must be genuinely transparent, not white.
```

---

## Bản B — nếu công cụ CHỈ vẽ được nền đục

> **Quan trọng:** đừng nhắc chữ "transparent"/"trong suốt" ở bản này. Vừa đòi trong suốt
> vừa xin nền xanh là model sẽ vẽ **bàn cờ xám-trắng** — thứ không cứu được.
>
> Rùa vốn màu xanh nên khoá phải là **magenta `#FF00FF`**, không dùng xanh lá.

Lấy y hệt 2 prompt trên, sửa đúng 2 chỗ:

1. Thay dòng `fully transparent background` trong LAYOUT bằng:

```
a solid flat pure magenta (#FF00FF) background filling the whole cell
```

2. Thay 2 dòng cuối (`No text, no labels ... genuinely transparent, not white.`) bằng:

```
No text, no labels, no borders, no drop shadows. The background is one flat uniform pure magenta (#FF00FF) covering the entire canvas edge to edge, with no gradient, texture, pattern or checkerboard, and nothing else on it. Square image, at least 1024x1024.
```

Và thêm vào đầu tin 2, ngay sau câu mô tả nhân vật:

```
Draw it on the same solid pure magenta (#FF00FF) background described below.
```

---

## TRẠNG THÁI HƯỚNG CỦA `directions.png` (cập nhật 22/09/2026)

Cách model trả sheet về **không ổn định**, nên trạng thái đúng phải chốt lại ở đây,
đừng suy đoán lại từ đầu mỗi lần.

**Trạng thái ĐÚNG hiện tại — hàng 1 và 2 đã đổi cột, hàng 0 thì KHÔNG:**

| hàng | ô | thao tác | lý do |
|---|---|---|---|
| 0 (chéo trên) | 0 và 2 | **giữ nguyên** | model vẽ hàng này đúng chiều ngay từ đầu |
| 1 (ngang) | 0 và 2 | **đổi cột** | model vẽ gương: ô trái chứa hình quay phải |
| 2 (chéo dưới) | 0 và 2 | **đổi cột** | cùng lý do |

**Bẫy đã từng mắc:** đổi cột cho **cả 3 hàng** — vá được hàng 1,2 nhưng làm
hỏng hàng 0 (vốn đã đúng). Triệu chứng trên trang: trỏ chuột lên-trái thì rùa
nhìn lên-**phải** và ngược lại, trong khi trái/phải và chéo dưới vẫn đúng.

**Không có cách nào kiểm tra hướng bằng script.** Với nhân vật đối xứng, "ô
up-left bị lật" và "ô up-right vẽ đúng" cho ra **cùng một ảnh** — mọi phép đo
(tương quan, blob con ngươi, silhouette) đều bất lực. **Chỉ mắt người mới phân
biệt được.** Nên sau mỗi lần build lại, phải mở trang và tự trỏ chuột 8 hướng
để nghiệm thu.

Bản backup trước khi sửa hàng 0: `directions.before-row0-fix.png`.
Sau khi đổi cột phải build lại atlas (`mascot.py turtle --skip-generate`) và
tăng tham số `?v=` trong `src/components/FloatingMenu.vue`, nếu không trình
duyệt sẽ dùng bản webp cũ đã cache.
