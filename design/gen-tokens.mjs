/* Generate design/tokens/*.md straight from tailwind.config.js so the design
   docs can never drift from what the build actually ships.
   Re-run with: node design/gen-tokens.mjs                                   */
import fs from 'fs'

const cfg = (await import('../tailwind.config.js')).default
const t = (cfg.theme && cfg.theme.extend) || {}

/* Component comments name the reference site; the docs should not. Scrub on
   output so regenerating never reintroduces it. */
const scrub = (s) => String(s)
  .replace(/\blive jasper\.ai\b/gi, 'the reference site')
  .replace(/\bjasper\.ai\b/gi, 'the reference site')

const out = []
const P = (s) => out.push(s)

P('# Colour\n')
P('Generated from `tailwind.config.js` — do not hand-edit. Every value here was')
P(scrub('read off the reference site computed styles during the clone, not chosen.\n'))
P('Use the token name in JSX (`bg-flame-600`), never a raw hex.\n')

for (const [family, val] of Object.entries(t.colors || {})) {
  if (typeof val === 'string') {
    P(`\n\`${family}\` — \`${val}\``)
    continue
  }
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
P('\n> Text is `ink` navy on light grounds. Watch for navy-on-navy: a closing CTA')
P('> once rendered navy copy directly on the navy decoration slab and was')
P('> invisible while passing every automated check. Colour errors need eyes.')

fs.writeFileSync('design/tokens/colour.md', out.join('\n') + '\n')

const o2 = []
const Q = (s) => o2.push(s)

Q('# Type, space and motion\n')
Q('Generated from `tailwind.config.js` — do not hand-edit.\n')
Q('## Font families\n')
Q('| token | stack | substitutes for |')
Q('|---|---|---|')
const SUB = {
  serif: 'Feature (licensed)',
  sans: 'ABC ROM (licensed)',
  mono: 'ABC ROM Mono (licensed)',
}
for (const [k, v] of Object.entries(t.fontFamily || {})) {
  Q(`| \`font-${k}\` | ${[].concat(v).join(', ')} | ${SUB[k] || '—'} |`)
}
Q('\n> The substitutes set ~9% wider than the licensed faces. That is the single')
Q('> largest source of remaining per-section height deltas against live, and it is')
Q('> why a measured font size must never be shrunk to close a height gap — that')
Q('> breaks a verified value to fix a derived one.\n')

const GROUPS = [
  ['Font size', 'fontSize'],
  ['Letter spacing', 'letterSpacing'],
  ['Line height', 'lineHeight'],
  ['Spacing', 'spacing'],
  ['Max width', 'maxWidth'],
  ['Radius', 'borderRadius'],
  ['Gap', 'gap'],
  ['Height', 'height'],
  ['Easing', 'transitionTimingFunction'],
]
for (const [label, key] of GROUPS) {
  const g = t[key]
  if (!g) continue
  Q(`\n## ${label}\n`)
  Q('| token | value |')
  Q('|---|---|')
  for (const [k, v] of Object.entries(g)) {
    Q(`| \`${k}\` | \`${Array.isArray(v) ? JSON.stringify(v) : v}\` |`)
  }
}

Q('\n## Grid\n')
Q('12 columns in a 1360px container with a 16px gutter, so one column is')
Q('98.667px. The container carries `padding-inline: 0` — the page gutter sits')
Q('OUTSIDE the well. Adding padding shrinks every track and was an early bug.\n')
Q('Section rhythm is NOT section padding: sections carry `padding: 0` and the')
Q('rhythm lives in standalone `g_section_space` divs (commonly 80px or 112px)')
Q('plus per-section internal gaps.')

fs.writeFileSync('design/tokens/type-space-motion.md', o2.join('\n') + '\n')
console.log('wrote design/tokens/colour.md and design/tokens/type-space-motion.md')
