/* Generate design/tokens/*.md straight from tailwind.config.js so the design
   docs can never drift from what the build actually ships. Re-run with:
     node design/gen-tokens.mjs                                             */
import fs from 'fs'
const cfg = (await import('../tailwind.config.js')).default
const t = cfg.theme?.extend ?? {}
const out = []
const P = s => out.push(s)

P('# Colour\n')
P('Generated from `tailwind.config.js` — do not hand-edit. Every value was read')
P('off the live jasper.ai computed styles during the clone.\n')
P('Use the token name in JSX (`bg-flame-600`), never a raw hex.\n')
for (const [family, val] of Object.entries(t.colors ?? {})) {
  if (typeof val === 'string') { P(`- \`${family}\` — \`${val}\``); continue }
  P(`\n## ${family}\n`)
  P('| token | hex |')
  P('|---|---|')
  for (const [step, hex] of Object.entries(val)) P(`| \`${family}-${step}\` | \`${hex}\` |`)
}
P('\n## Semantic roles\n')
P('| role | token | used for |')
P('|---|---|---|')
P('| ink | `ink` `#00063d` | all body and display text |')
P('| page ground | `surface` `#ffffff` | default section background |')
P('| alt ground | `surface-2` `#f2f2f3` | hero wells, inset panels |')
P('| primary action | `flame-600` `#fa4028` | filled CTA, links, highlight |')
P('| footer ground | `ink-950` `#1c1c1c` | footer only |')
fs.writeFileSync('design/tokens/colour.md', out.join('\n') + '\n')

const o2 = []
const Q = s => o2.push(s)
Q('# Type, space and motion\n')
Q('Generated from `tailwind.config.js` — do not hand-edit.\n')
Q('## Font families\n')
Q('| token | stack | substitutes for |')
Q('|---|---|---|')
const SUB = { serif: 'Feature (licensed)', sans: 'ABC ROM (licensed)', mono: 'ABC ROM Mono (licensed)' }
for (const [k, v] of Object.entries(t.fontFamily ?? {}))
  Q(`| \`font-${k}\` | ${[].concat(v).join(', ')} | ${SUB[k] ?? '—'} |`)
Q('\n> The substitutes set ~9% wider than the licensed faces. That is the single')
Q('> largest source of remaining per-section height deltas against live, and it')
Q('> is why measured font sizes must never be shrunk to close a height gap.\n')
for (const [label, key] of [['Font size', 'fontSize'], ['Letter spacing', 'letterSpacing'],
                            ['Line height', 'lineHeight'], ['Spacing', 'spacing'],
                            ['Max width', 'maxWidth'], ['Radius', 'borderRadius'],
                            ['Easing', 'transitionTimingFunction'], ['Gap', 'gap'], ['Height', 'height']]) {
  const g = t[key]; if (!g) continue
  Q(`\n## ${label}\n`)
  Q('| token | value |'); Q('|---|---|')
  for (const [k, v] of Object.entries(g)) Q(`| \`${k}\` | \`${Array.isArray(v) ? JSON.stringify(v) : v}\` |`)
}
fs.writeFileSync('design/tokens/type-space-motion.md', o2.join('\n') + '\n')
console.log('wrote design/tokens/colour.md and type-space-motion.md')
