/* Generate the Information architecture doc from the ACTUAL router + nav data,
   so it reflects what is built rather than what was planned.
   Re-run with: node design/gen-ia.mjs                                       */
import fs from 'fs'

const app = fs.readFileSync('src/App.jsx', 'utf8')
const stubs = fs.readFileSync('src/data/stubRoutes.js', 'utf8')
const nav = fs.readFileSync('src/components/NavMenuData.js', 'utf8')
const live = JSON.parse(fs.readFileSync('.scrape/subpages.json', 'utf8'))

/* Explicit <Route path="..."> entries are the CLONED pages. The placeholder
   routes are rendered from STUB_ROUTES via a .map(), so they never appear as a
   literal path= in App.jsx — union the two lists or the totals silently lie. */
const routed = [...app.matchAll(/path="(\/[^"]*)"/g)].map((m) => m[1]).filter((p) => p !== '*')
const stubbed = [...stubs.matchAll(/path: "([^"]+)"/g)].map((m) => m[1])
const stubSet = new Set(stubbed)
const real = routed.filter((p) => !stubSet.has(p))
const built = [...new Set([...routed, ...stubbed])]

/* Which mega-menu does a route hang off? Read from NavMenuData's exported
   panels, falling back to the path prefix for routes the nav links indirectly. */
const panel = (name) => {
  const i = nav.indexOf(`export const ${name}`)
  if (i < 0) return []
  const j = nav.indexOf('export const', i + 10)
  const blk = nav.slice(i, j > 0 ? j : nav.length)
  return [...blk.matchAll(/href: '([^']+)'/g)].map((m) => m[1].split('#')[0])
}

const MENUS = {
  Platform: panel('PLATFORM'),
  Solutions: panel('SOLUTIONS'),
  Resources: panel('RESOURCES'),
  Company: panel('COMPANY'),
}

const RESOURCE_PATHS = ['/blog', '/webinars', '/customer-stories', '/customer-success',
  '/contact-support', '/workflows']
const COMPANY_PATHS = ['/careers', '/press', '/legal', '/trust', '/security', '/llm-optimized']

const menuOf = (p) => {
  for (const [m, hrefs] of Object.entries(MENUS)) if (hrefs.includes(p)) return m
  if (p.startsWith('/solutions')) return 'Solutions'
  if (p.startsWith('/agents') || p.startsWith('/image')) return 'Platform'
  if (RESOURCE_PATHS.includes(p) || p.startsWith('/diagnostics')) return 'Resources'
  if (COMPANY_PATHS.includes(p)) return 'Company'
  return 'Top level'
}

/* Template per route, read from the generated registry so this table and the
   machine-readable contract cannot disagree. */
let tplByRoute = {}
try {
  const reg = JSON.parse(fs.readFileSync('design/registry/templates.json', 'utf8'))
  for (const r of reg.routes) tplByRoute[r.route] = r.template
} catch {}

const O = []
const P = (s) => O.push(s)

P('# Information architecture\n')
P('Generated from `src/App.jsx`, `src/data/stubRoutes.js` and')
P('`src/components/NavMenuData.js`. Regenerate with `node design/gen-ia.mjs`.\n')
P(`**${real.length} pages cloned · ${stubbed.length} placeholders · ${built.length} routes total**\n`)
P('A placeholder is an honest "Not cloned yet" page carrying that route\'s real')
P('live headline — not a 404, and never the homepage. Before these existed, every')
P('unbuilt nav link silently rendered the homepage, which reads as a finished page')
P('and hides the gap.\n')

const groups = {}
for (const p of built) {
  const g = menuOf(p)
  if (!groups[g]) groups[g] = []
  groups[g].push(p)
}

const ORDER = ['Top level', 'Platform', 'Solutions', 'Resources', 'Company']
for (const g of ORDER) {
  const ps = groups[g]
  if (!ps) continue
  const done = ps.filter((p) => !stubSet.has(p))
  P(`\n## ${g} — ${done.length}/${ps.length} cloned\n`)
  P('| route | state | template | live height |')
  P('|---|---|---|---|')
  for (const p of ps.sort()) {
    const h = live[p] && live[p].h
    const tpl = tplByRoute[p] || '—'
    P(`| \`${p}\` | ${stubSet.has(p) ? 'placeholder' : '**cloned**'} | \`${tpl}\` | ${h ? h.toLocaleString() + 'px' : '—'} |`)
  }
}

P('\n## Navigation model\n')
P('Only one `.nav_dropdown_wrap` exists; the mega-menu swaps its contents per')
P('hover rather than mounting four panels. That is why capturing the live menus')
P('needed a fresh page load per item. Panel content lives in')
P('`src/components/NavMenuData.js`, measured from the live DOM.\n')
P('| menu | shape | links |')
P('|---|---|---|')
for (const [m, hrefs] of Object.entries(MENUS)) {
  const shape = m === 'Solutions' ? 'three stacked rows' : 'column grid + spotlight'
  P(`| ${m} | ${shape} | ${hrefs.length} |`)
}

fs.writeFileSync('design/information-architecture/README.md', O.join('\n') + '\n')
console.log(`wrote Information architecture: ${real.length} cloned, ${stubbed.length} placeholders`)
