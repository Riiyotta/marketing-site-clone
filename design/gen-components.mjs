/* Generate design/components/README.md by reading the block library itself:
   each component's leading comment block is its measured spec, and its props
   are its API. Documenting from source means the doc cannot drift.
   Re-run with: node design/gen-components.mjs                              */
import fs from 'fs'
import path from 'path'

const DIRS = ['src/components/blocks', 'src/components']

/* Pull the first /* ... *​/ comment and the exported component's destructured
   props out of a file. */
function inspect(file) {
  const src = fs.readFileSync(file, 'utf8')
  const doc = src.match(/\/\*[\s\S]*?\*\//)
  /* Take only TOP-LEVEL destructured props: split on commas that are not inside
     a nested {...} or [...], otherwise a prop destructured further (AgentDetail
     takes objects) leaks its inner keys into the table as garbage names. */
  const fn = src.match(/export default function \w+\(\{([\s\S]*?)\n\}\)/)
    || src.match(/export default function \w+\(\{([^)]*?)\}\)/)
  let props = []
  if (fn) {
    let depth = 0
    let cur = ''
    const parts = []
    for (const ch of fn[1]) {
      if ('{[('.includes(ch)) depth++
      if ('}])'.includes(ch)) depth--
      if (ch === ',' && depth === 0) { parts.push(cur); cur = '' } else cur += ch
    }
    parts.push(cur)
    props = parts
      .map((x) => x.trim().split(/[=:]/)[0].trim())
      .filter((x) => /^[A-Za-z_$][\w$]*$/.test(x))
  }
  // first sentence of the doc comment, cleaned of comment furniture
  const summary = doc
    ? doc[0]
        .replace(/^\/\*+|\*+\/$/g, '')
        .split('\n')
        .map((l) => l.replace(/^\s*\*?\s?/, '').trim())
        // drop the ---- rule lines the block headers use as separators
        .filter((l) => l && !/^-{5,}$/.test(l))
        .slice(0, 3)
        .join(' ')
        .slice(0, 190)
    : ''
  return { props, summary }
}

const O = []
const P = (s) => O.push(s)

P('# Component library\n')
P('Generated from the source files. Regenerate with `node design/gen-components.mjs`.\n')
P('Every block carries a header comment recording the values MEASURED off live')
P('jasper.ai — section height, grid tracks, font sizes, colours. Read that')
P('comment before changing a block; the numbers are evidence, not preference.\n')
P('The 22 Platform pages and the Solutions/Resources/Company sub-pages are')
P('compositions of these blocks, not bespoke builds. Webflow reuses a small')
P('vocabulary across the whole site — `simple_layout_wrap` appears 15 times,')
P('`horizontal_vis_wrap` 12, `hero_vertical_wrap` 10 — which is what makes')
P('cloning ~50 pages tractable.\n')
P('**Extend a block through props. Never fork a second copy.**\n')

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.jsx'))
    .sort()
  if (!files.length) continue
  P(`\n## \`${dir}\`\n`)
  P('| component | props | measured spec |')
  P('|---|---|---|')
  for (const f of files) {
    const full = path.join(dir, f)
    if (fs.statSync(full).isDirectory()) continue
    const { props, summary } = inspect(full)
    const name = f.replace('.jsx', '')
    const pl = props.length ? props.map((p) => `\`${p}\``).join(' ') : '—'
    P(`| **${name}** | ${pl} | ${summary.replace(/\|/g, '/') || '—'} |`)
  }
}

P('\n## The five core blocks\n')
P('| block | live class | measured at 1440px |')
P('|---|---|---|')
P('| `HorizontalVis` | `.horizontal_vis_wrap` | 670px: 140px spacer, 1360px container 418px tall, 112px spacer, over a full-bleed colour layer |')
P('| `HeroVertical` | `.hero_vertical_wrap` | 872px on /api: 54px h1, then 38px h3 feature rows with ~538x300 art |')
P('| `SimpleLayout` | `.simple_layout_wrap` | 500px on /api: 54px h2, eyebrow, one CTA link, one ~620x308 image |')
P('| `LayoutCards` | `.layout_cards_wrap` | 822px on /agents: 54px h2 plus numbered 24px h3 stage cards |')
P('| `PageCta` | `.cta_main_wrap` | 925px: blue grid ground, navy slab, a 817x745 document frame holding the copy |')

fs.writeFileSync('design/components/README.md', O.join('\n') + '\n')
console.log(`wrote design/components/README.md`)
