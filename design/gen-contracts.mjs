/* Generate the machine-readable layer of the design repo from source, so the
   contracts cannot drift from the code they describe:

     registry/allowlist.json     closed set of components AI may emit
     registry/templates.json     route -> template mapping + section shapes
     contracts/components.json   props, variants, slots, capacities per component
     contracts/composition.json  ordering, uniqueness, required shell
     contracts/responsive.json   the three verified breakpoints
     contracts/motion.json       reveal/animation contract
     registry/assets.json        semantic asset roles
     tokens/tokens.json          LLM-facing token catalog
     tokens/policy.json          how tokens may be used

   Re-run with: node design/gen-contracts.mjs                                */
import fs from 'fs'
import path from 'path'

const R = (p) => fs.readFileSync(p, 'utf8')
const W = (p, o) => {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + '\n')
}
const scrub = (s) =>
  String(s).replace(/\blive jasper\.ai\b/gi, 'the reference site').replace(/\bjasper\.ai\b/gi, 'the reference site')

/* ---- 1. components: props + doc from each block's source ---------------- */
const BLOCK_DIR = 'src/components/blocks'
const SHELL = ['Navbar', 'Footer', 'Layout', 'PageCta', 'SectionSpace']

function readProps(src) {
  const fn =
    src.match(/export default function \w+\(\{([\s\S]*?)\n\}\)/) ||
    src.match(/export default function \w+\(\{([^)]*?)\}\)/)
  if (!fn) return []
  let depth = 0
  let cur = ''
  const parts = []
  for (const ch of fn[1]) {
    if ('{[('.includes(ch)) depth++
    if ('}])'.includes(ch)) depth--
    if (ch === ',' && depth === 0) {
      parts.push(cur)
      cur = ''
    } else cur += ch
  }
  parts.push(cur)
  return parts
    .map((x) => {
      const raw = x.trim()
      const name = raw.split(/[=:]/)[0].trim()
      const def = raw.includes('=') ? raw.slice(raw.indexOf('=') + 1).trim() : undefined
      return { name, default: def }
    })
    .filter((p) => /^[A-Za-z_$][\w$]*$/.test(p.name))
}

function readDoc(src) {
  const m = src.match(/\/\*[\s\S]*?\*\//)
  if (!m) return ''
  return scrub(
    m[0]
      .replace(/^\/\*+|\*+\/$/g, '')
      .split('\n')
      .map((l) => l.replace(/^[\s*]+/, '').trim())
      .filter((l) => l && !/^-{4,}$/.test(l))
      .slice(0, 4)
      .join(' ')
      .slice(0, 300)
  )
}

/* Variants are declared by a `variant` prop whose values appear as string
   comparisons in the body. Read them rather than assume a fixed list. */
function readVariants(src) {
  const found = new Set()
  for (const m of src.matchAll(/variant\s*===?\s*['"]([a-zA-Z0-9_-]+)['"]/g)) found.add(m[1])
  for (const m of src.matchAll(/variant\s*=\s*['"]([a-zA-Z0-9_-]+)['"]/g)) found.add(m[1])
  return [...found]
}

const components = {}
for (const f of fs.readdirSync(BLOCK_DIR).filter((f) => f.endsWith('.jsx')).sort()) {
  const src = R(path.join(BLOCK_DIR, f))
  const name = f.replace('.jsx', '')
  if (name === 'primitives') continue
  const props = readProps(src)
  const variants = readVariants(src)
  components[name] = {
    kind: 'section',
    file: `${BLOCK_DIR}/${f}`,
    description: readDoc(src),
    variants: variants.length ? variants : ['default'],
    props: props.map((p) => ({
      name: p.name,
      required: p.default === undefined,
      default: p.default === undefined ? undefined : p.default.slice(0, 60),
    })),
    contentLimits: {
      title: { maxWords: 14, maxChars: 120 },
      eyebrow: { maxWords: 5, maxChars: 40 },
      body: { maxWords: 90, maxChars: 600 },
      ctas: { maxItems: 2 },
      items: { maxItems: 12 },
    },
    responsive: { breakpoints: [1440, 768, 390], stacksBelow: 768 },
  }
}
for (const s of SHELL) {
  const f = `src/components/${s}.jsx`
  if (!fs.existsSync(f)) continue
  const src = R(f)
  components[s] = {
    kind: 'shell',
    file: f,
    description: readDoc(src),
    variants: readVariants(src).length ? readVariants(src) : ['default'],
    props: readProps(src).map((p) => ({ name: p.name, required: p.default === undefined })),
  }
}
W('design/contracts/components.json', {
  version: '1.0.0',
  generated: 'node design/gen-contracts.mjs',
  note: 'Props and variants are read from source. contentLimits are policy, tuned to the measured layouts; exceeding them overflows the block rather than reflowing it.',
  components,
})

/* ---- 2. allowlist: the closed set ------------------------------------- */
const sectionNames = Object.entries(components).filter(([, c]) => c.kind === 'section').map(([n]) => n)
const shellNames = Object.entries(components).filter(([, c]) => c.kind === 'shell').map(([n]) => n)
W('design/registry/allowlist.json', {
  version: '1.0.0',
  policy: 'CLOSED. A generator MUST NOT emit a component outside this list. If a design needs something absent here, stop and request a new component contract — do not improvise one.',
  sections: sectionNames,
  shell: shellNames,
  primitives: ['Eyebrow', 'ArrowLink', 'CtaRow'],
  forbidden: [
    'raw hex colours in markup',
    'inline transform on a .reveal element',
    'components not listed above',
    'section-level padding for rhythm (use SectionSpace)',
  ],
})

/* ---- 3. templates + routes -------------------------------------------- */
const app = R('src/App.jsx')
const routes = [...app.matchAll(/path="(\/[^"]*)"\s+element=\{<(\w+)/g)].map((m) => ({
  route: m[1],
  page: m[2],
}))
const templateOf = (r) => {
  if (r.startsWith('/solutions/by-industry/')) return 'industry'
  if (r.startsWith('/solutions/by-role/')) return 'role'
  if (['/blog', '/webinars', '/customer-stories', '/press'].includes(r)) return 'editorial.index'
  if (['/legal', '/security'].includes(r)) return 'document'
  if (['/', '/platform', '/solutions', '/resources', '/company', '/pricing'].includes(r)) return 'marketing.standard'
  return 'product.detail'
}
const templates = {
  'marketing.standard': {
    description: 'Top-level marketing page: hero, alternating feature bands, social proof, closing CTA.',
    requiredSections: ['PageCta'],
    allows: sectionNames,
  },
  'product.detail': {
    description: 'A single product or capability. The most common shape across the product menu.',
    requiredSections: ['PageCta'],
    allows: sectionNames,
  },
  industry: {
    description: 'Industry page. Eight or nine sections; the customer-story panel is conditional — two of six industries ship without one.',
    fixedOrder: ['IndustryHero', 'LogoBlade', 'ChecklistVis', 'StoryPanel?', 'LayoutCards', 'Accordion', 'ClosingPhoto'],
    optionalSections: ['StoryPanel'],
  },
  role: {
    description: 'Role page. Five sections, identical order on all six; the slider and CTA are byte-identical across them and take no props.',
    fixedOrder: ['RoleHero', 'UseCaseCards', 'AgentSlider', 'IntegrationsVis', 'PageCta'],
  },
  'editorial.index': {
    description: 'Card index over a CMS collection: editorial hero then a filtered grid.',
    requiredSections: ['PageCta'],
  },
  document: { description: 'Long-form document with a sticky jump-nav rail.' },
  placeholder: { description: 'Honest not-built page. Never silently renders another page.' },
}
const byTemplate = {}
for (const { route } of routes) {
  const t = templateOf(route)
  ;(byTemplate[t] ||= []).push(route)
}
W('design/registry/templates.json', {
  version: '1.0.0',
  note: 'The site is a small reusable block vocabulary, not N bespoke pages. Three pages are each exactly 8 sections and ~6200px: one template, three content sets.',
  templates,
  routes: routes.map((r) => ({ ...r, template: templateOf(r.route) })),
  countsByTemplate: Object.fromEntries(Object.entries(byTemplate).map(([k, v]) => [k, v.length])),
})

/* ---- 4. composition rules --------------------------------------------- */
W('design/contracts/composition.json', {
  version: '1.0.0',
  shell: {
    required: ['Navbar', 'Footer'],
    note: 'Every route mounts these via Layout. A PageSpec never declares them.',
  },
  uniquePerPage: ['PageCta', 'HeroVertical', 'IndustryHero', 'RoleHero', 'GridHero', 'SplitHero'],
  headings: {
    h1PerPage: 1,
    note: 'Exactly one h1. PageCta carries NO heading — the reference marks that line as a <p>; emitting an h2 there injects a phantom section into the outline.',
  },
  ordering: [
    { rule: 'a hero component must be the first section' },
    { rule: 'PageCta, when present, must be the last section' },
    { rule: 'Accordion must not directly follow another Accordion' },
    { rule: 'two adjacent sections must not share the same tint' },
  ],
  rhythm: {
    note: 'Sections carry padding:0. Vertical rhythm lives in standalone SectionSpace blocks (80px or 112px) plus per-section internal gaps.',
    spacers: [80, 112],
  },
})

/* ---- 5. responsive ------------------------------------------------------ */
W('design/contracts/responsive.json', {
  version: '1.0.0',
  breakpoints: { desktop: 1440, tablet: 768, mobile: 390 },
  verifiedAt: [1440, 768, 390],
  grid: { columns: 12, container: 1360, gutter: 16, columnWidth: 98.667, paddingInline: 0 },
  rules: [
    'The page must never scroll horizontally. Measure by probing the scroll, not by reading documentElement.scrollWidth — with body{overflow-x:hidden} that number reports overflow a user can never reach.',
    'A full-bleed section that overflows needs .clip-bleed (overflow:hidden; contain:paint). Plain overflow-hidden still lets layout overflow reach the root in Chrome.',
    'Multi-column sections stack below 768.',
    'A fixed desktop stage (e.g. a 1440px collage) must shrink or restack below lg, or it slices content off at 390.',
  ],
})

/* ---- 6. motion ---------------------------------------------------------- */
W('design/contracts/motion.json', {
  version: '1.0.0',
  reveal: {
    mechanism: 'IntersectionObserver adds .is-visible; CSS animates opacity+translateY with fill:forwards. .is-settled is added on animationend to drop the transform.',
    stagger: { property: '--reveal-delay', typical: [0, 80, 120, 160, 200], unit: 'ms' },
    easing: 'cubic-bezier(0.625, 0.05, 0, 1)',
  },
  rules: [
    'NEVER put .reveal on an element inside a horizontally-scrolling rail. Off-viewport items never intersect and stay at opacity:0 permanently. Put it on the rail container.',
    'NEVER rely on an inline transform on a .reveal element. The animation uses fill:forwards and silently overrides it — put rotation/offset on a wrapper.',
    'A finished animation keeps the element on its own compositor layer, which can inflate the document. .is-settled returns it to normal paint.',
    'Honour prefers-reduced-motion: reveal everything immediately.',
  ],
})

/* ---- 7. asset roles ----------------------------------------------------- */
const ROLE_RULES = [
  [/^cta-/, 'cta.decoration'],
  [/^nav-/, 'nav.card'],
  [/^team-/, 'person.portrait'],
  [/^sp-/, 'person.portrait'],
  [/^jasp-|logo/i, 'brand.logo'],
  [/^cs-/, 'customer.logo'],
  [/^eb-/, 'resource.cover'],
  [/^wb-/, 'partner.badge'],
  [/grid-bg|bg-|pattern|texture/i, 'background.texture'],
  [/hero/i, 'hero.visual'],
  [/agent-/, 'product.screenshot'],
]
const assets = {}
if (fs.existsSync('public/assets')) {
  for (const f of fs.readdirSync('public/assets')) {
    const hit = ROLE_RULES.find(([re]) => re.test(f))
    assets[`/assets/${f}`] = { role: hit ? hit[1] : 'content.image' }
  }
}
const roleCounts = {}
for (const v of Object.values(assets)) roleCounts[v.role] = (roleCounts[v.role] || 0) + 1
W('design/registry/assets.json', {
  version: '1.0.0',
  note: 'Semantic role per asset, derived from naming conventions. Select imagery by ROLE, not by path — a path tells a generator nothing about what the image is for.',
  roles: Object.keys(roleCounts).sort(),
  counts: roleCounts,
  total: Object.keys(assets).length,
  assets,
})

/* ---- 8. token catalog + policy ----------------------------------------- */
const cfg = (await import('../tailwind.config.js')).default
const t = (cfg.theme && cfg.theme.extend) || {}
const flat = {}
for (const [family, val] of Object.entries(t.colors || {})) {
  if (typeof val === 'string') flat[family] = { value: val, type: 'color' }
  else for (const [step, hex] of Object.entries(val)) flat[`${family}-${step}`] = { value: hex, type: 'color' }
}
W('design/tokens/tokens.json', {
  version: '1.0.0',
  note: 'Machine-readable mirror of tailwind.config.js. Markdown alone is not sufficient for deterministic generation.',
  color: flat,
  fontFamily: t.fontFamily || {},
  fontSize: t.fontSize || {},
  letterSpacing: t.letterSpacing || {},
  lineHeight: t.lineHeight || {},
  spacing: t.spacing || {},
  radius: t.borderRadius || {},
  easing: t.transitionTimingFunction || {},
  semantic: {
    ink: 'ink',
    pageGround: 'surface',
    altGround: 'surface-2',
    primaryAction: 'flame-600',
    footerGround: 'ink-950',
  },
})
W('design/tokens/policy.json', {
  version: '1.0.0',
  rules: [
    'Reference tokens by name. A raw hex, rgb() or named CSS colour in markup is a hard failure.',
    'Text is ink on light grounds. Never place ink text on an ink-family ground — navy-on-navy passes every automated check while being invisible.',
    'Do not shrink a measured font size to close a height gap. The substitute faces set ~9% wider than the licensed originals; that width is expected, and shrinking type breaks a verified value to fix a derived one.',
    'Adjacent sections must not share a tint.',
    'New tokens require a documented source measurement, not a preference.',
  ],
  contrast: { minimumRatio: 4.5, note: 'Body text against its ground.' },
})

console.log(
  `contracts: ${Object.keys(components).length} components, ${routes.length} routes, ` +
    `${Object.keys(templates).length} templates, ${Object.keys(assets).length} assets, ` +
    `${Object.keys(flat).length} colour tokens`
)
