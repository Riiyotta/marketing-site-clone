/* Single deterministic verification entry point for CI and AI handoff.

     node design/verify_all.mjs

   Exits 0 when every contract holds, 1 otherwise, and prints one line per
   check. No network, no browser, no dev server — this validates the design
   repo's internal consistency and its agreement with the source it describes.
   Visual/behavioural verification is separate (.scrape/*qa*.mjs).            */
import fs from 'fs'
import path from 'path'

let pass = 0
const failures = []
const ok = (m) => {
  pass++
  console.log(`  ok    ${m}`)
}
const bad = (m) => {
  failures.push(m)
  console.log(`  FAIL  ${m}`)
}
const J = (p) => JSON.parse(fs.readFileSync(p, 'utf8'))
const group = (t) => console.log(`\n${t}`)

/* ---- 1. contract files present and parseable --------------------------- */
group('contracts')
const REQUIRED = [
  'registry.manifest.json',
  'design/schema/pagespec.schema.json',
  'design/contracts/components.json',
  'design/contracts/composition.json',
  'design/contracts/responsive.json',
  'design/contracts/motion.json',
  'design/registry/allowlist.json',
  'design/registry/templates.json',
  'design/registry/assets.json',
  'design/tokens/tokens.json',
  'design/tokens/policy.json',
]
const loaded = {}
for (const f of REQUIRED) {
  if (!fs.existsSync(f)) {
    bad(`missing ${f}`)
    continue
  }
  try {
    loaded[f] = J(f)
    ok(`${f} parses`)
  } catch (e) {
    bad(`${f} is not valid JSON — ${e.message.slice(0, 60)}`)
  }
}
if (failures.length) {
  console.log(`\n=== ${pass} passed, ${failures.length} failed ===`)
  process.exit(1)
}

const manifest = loaded['registry.manifest.json']
const components = loaded['design/contracts/components.json'].components
const allowlist = loaded['design/registry/allowlist.json']
const templates = loaded['design/registry/templates.json']
const composition = loaded['design/contracts/composition.json']
const tokens = loaded['design/tokens/tokens.json']
const schema = loaded['design/schema/pagespec.schema.json']

/* ---- 2. manifest entry points resolve ---------------------------------- */
group('manifest')
for (const [k, p] of Object.entries(manifest.entryPoints)) {
  fs.existsSync(p) ? ok(`entryPoint ${k}`) : bad(`entryPoint ${k} -> ${p} does not exist`)
}
manifest.pagespecVersion === schema.version
  ? ok('pagespecVersion matches schema')
  : bad(`pagespecVersion ${manifest.pagespecVersion} != schema ${schema.version}`)
manifest.productionApproved === false
  ? ok('productionApproved is false (content is not cleared for production)')
  : bad('productionApproved must stay false while the repo carries third-party content')

/* ---- 3. allowlist agrees with source ----------------------------------- */
group('allowlist')
for (const name of allowlist.sections) {
  const c = components[name]
  if (!c) bad(`allowlisted section ${name} has no contract`)
  else if (!fs.existsSync(c.file)) bad(`${name} contract points at missing ${c.file}`)
}
ok(`${allowlist.sections.length} allowlisted sections resolve to source files`)
for (const name of Object.keys(components)) {
  if (components[name].kind !== 'section') continue
  if (!allowlist.sections.includes(name)) bad(`component ${name} exists but is not allowlisted`)
}
ok('no section component is missing from the allowlist')

/* ---- 4. routes agree with the router ----------------------------------- */
group('routes')
const app = fs.readFileSync('src/App.jsx', 'utf8')
const routed = new Set([...app.matchAll(/path="(\/[^"]*)"/g)].map((m) => m[1]))
let routeMiss = 0
for (const r of templates.routes) if (!routed.has(r.route)) { bad(`templates.json lists ${r.route}, App.jsx does not route it`); routeMiss++ }
if (!routeMiss) ok(`all ${templates.routes.length} declared routes are routed in App.jsx`)
const counted = Object.values(templates.countsByTemplate).reduce((a, b) => a + b, 0)
counted === templates.routes.length
  ? ok('countsByTemplate sums to the route total')
  : bad(`countsByTemplate sums to ${counted}, expected ${templates.routes.length}`)
manifest.counts.routes === templates.routes.length
  ? ok('manifest route count matches templates.json')
  : bad(`manifest says ${manifest.counts.routes} routes, templates.json has ${templates.routes.length}`)

/* ---- 5. PageSpec examples validate ------------------------------------- */
group('pagespec examples')
const EX = 'design/examples'
const specs = fs.existsSync(EX) ? fs.readdirSync(EX).filter((f) => f.endsWith('.json')) : []
if (!specs.length) bad('no PageSpec example found — the schema needs at least one native reference')
for (const f of specs) {
  const spec = J(path.join(EX, f))
  const errs = []
  if (spec.pagespecVersion !== schema.version) errs.push(`pagespecVersion ${spec.pagespecVersion}`)
  if (!spec.route || !/^\/[a-z0-9/-]*$/.test(spec.route)) errs.push(`route ${spec.route}`)
  if (!schema.properties.template.enum.includes(spec.template)) errs.push(`template ${spec.template}`)
  if (!Array.isArray(spec.sections) || !spec.sections.length) errs.push('sections empty')

  for (const [i, s] of (spec.sections || []).entries()) {
    if (!allowlist.sections.includes(s.component) && !allowlist.shell.includes(s.component))
      errs.push(`section ${i} uses non-allowlisted "${s.component}"`)
    const c = components[s.component]
    if (c && s.variant && !c.variants.includes(s.variant))
      errs.push(`section ${i} variant "${s.variant}" not in [${c.variants}]`)
    if (s.tint && !(s.tint in tokens.color))
      errs.push(`section ${i} tint "${s.tint}" is not a token`)
    if (/^#|rgb\(/.test(JSON.stringify(s.content || {})))
      errs.push(`section ${i} contains a raw colour value`)
    // content capacity
    const lim = c && c.contentLimits
    if (lim && s.content) {
      for (const [slot, cap] of Object.entries(lim)) {
        const v = s.content[slot]
        if (typeof v === 'string' && cap.maxWords && v.trim().split(/\s+/).length > cap.maxWords)
          errs.push(`section ${i} ${slot} exceeds maxWords ${cap.maxWords}`)
        if (Array.isArray(v) && cap.maxItems && v.length > cap.maxItems)
          errs.push(`section ${i} ${slot} exceeds maxItems ${cap.maxItems}`)
      }
    }
  }

  // composition: uniqueness, hero first, cta last, no adjacent repeat tint
  const names = (spec.sections || []).map((s) => s.component)
  for (const u of composition.uniquePerPage) {
    if (names.filter((n) => n === u).length > 1) errs.push(`${u} appears more than once`)
  }
  if (names.length && !/Hero/.test(names[0])) errs.push(`first section "${names[0]}" is not a hero`)
  if (names.includes('PageCta') && names[names.length - 1] !== 'PageCta')
    errs.push('PageCta is present but not last')
  for (let i = 1; i < (spec.sections || []).length; i++) {
    const a = spec.sections[i - 1].tint
    const b = spec.sections[i].tint
    if (a && b && a === b) errs.push(`sections ${i - 1}/${i} share tint "${a}"`)
  }
  // template fixed order
  const tpl = templates.templates[spec.template]
  if (tpl && tpl.fixedOrder) {
    const want = tpl.fixedOrder.map((s) => s.replace('?', ''))
    const optional = new Set(tpl.optionalSections || [])
    const got = names.filter((n) => want.includes(n))
    let wi = 0
    for (const g of got) {
      while (wi < want.length && want[wi] !== g && optional.has(want[wi])) wi++
      if (want[wi] !== g) { errs.push(`section order breaks template "${spec.template}" at "${g}"`); break }
      wi++
    }
  }

  errs.length ? errs.forEach((e) => bad(`${f}: ${e}`)) : ok(`${f} validates`)
}

/* ---- 6. token policy: no raw hex in component markup ------------------- */
group('token policy')
const scan = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? scan(path.join(dir, d.name)) : d.name.endsWith('.jsx') ? [path.join(dir, d.name)] : []
  )
let hexHits = 0
for (const f of scan('src')) {
  const src = fs.readFileSync(f, 'utf8')
  // className strings only — inline SVG fill/stroke is traced artwork, not theme
  for (const m of src.matchAll(/className="[^"]*?(#[0-9a-fA-F]{6})[^"]*?"/g)) {
    bad(`raw hex ${m[1]} in className — ${f}`)
    hexHits++
  }
}
if (!hexHits) ok('no raw hex in className across src/')

/* ---- 7. contract self-consistency -------------------------------------- */
group('coherence')
const secCount = Object.values(components).filter((c) => c.kind === 'section').length
manifest.counts.sectionComponents === secCount
  ? ok('manifest section count matches contracts')
  : bad(`manifest says ${manifest.counts.sectionComponents} sections, contracts have ${secCount}`)
Object.keys(tokens.color).length === manifest.counts.colorTokens
  ? ok('manifest colour-token count matches tokens.json')
  : bad('manifest colour-token count is stale')
composition.headings.h1PerPage === 1 ? ok('composition pins one h1 per page') : bad('h1PerPage must be 1')

console.log(`\n=== ${pass} passed, ${failures.length} failed ===`)
process.exit(failures.length ? 1 : 0)
