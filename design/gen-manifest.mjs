/* Generate registry.manifest.json — the repository's identity card. Anything
   consuming this design repo reads this file first to learn what version it is
   speaking, what is inside, and whether it is approved for production use.

   Counts are derived, never asserted by hand, so the manifest cannot claim more
   than the repo contains.

   Re-run with: node design/gen-manifest.mjs                                 */
import fs from 'fs'
import { execSync } from 'child_process'

const J = (p) => JSON.parse(fs.readFileSync(p, 'utf8'))
const exists = (p) => fs.existsSync(p)

const components = J('design/contracts/components.json').components
const templates = J('design/registry/templates.json')
const allowlist = J('design/registry/allowlist.json')
const tokens = J('design/tokens/tokens.json')
const assets = J('design/registry/assets.json')

const sections = Object.values(components).filter((c) => c.kind === 'section').length
const shell = Object.values(components).filter((c) => c.kind === 'shell').length

let commit = 'unknown'
try {
  commit = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
} catch {}

/* productionApproved is deliberately false and stays false until someone
   decides otherwise. It is not a build artifact: the repo reproduces another
   company's copy, imagery and branding, so shipping it as a live product is a
   human decision, not a generator's. */
const manifest = {
  repositoryId: 'marketing-site-clone.design',
  repositoryVersion: '1.0.0',
  pagespecVersion: '1.0.0',
  schemaVersions: {
    pagespec: '1.0.0',
    components: J('design/contracts/components.json').version,
    composition: J('design/contracts/composition.json').version,
    responsive: J('design/contracts/responsive.json').version,
    motion: J('design/contracts/motion.json').version,
    tokens: tokens.version,
    tokenPolicy: J('design/tokens/policy.json').version,
    allowlist: allowlist.version,
    templates: templates.version,
    assets: assets.version,
  },
  status: 'complete',
  productionApproved: false,
  productionApprovalNote:
    'This repository reproduces the copy, imagery and branding of an existing commercial site for engineering study. It is not cleared for production use. Replace all content and assets before any deployment.',
  generatedAt: new Date().toISOString().slice(0, 10),
  sourceCommit: commit,
  counts: {
    routes: templates.routes.length,
    templates: Object.keys(templates.templates).length,
    sectionComponents: sections,
    shellComponents: shell,
    allowlistedSections: allowlist.sections.length,
    colorTokens: Object.keys(tokens.color).length,
    fontSizes: Object.keys(tokens.fontSize).length,
    assets: assets.total,
    assetRoles: assets.roles.length,
  },
  routesByTemplate: templates.countsByTemplate,
  themes: ['light', 'tinted', 'dark'],
  breakpoints: J('design/contracts/responsive.json').verifiedAt,
  entryPoints: {
    humanStart: 'design/gallery.html',
    machineStart: 'registry.manifest.json',
    pageSpecSchema: 'design/schema/pagespec.schema.json',
    pageSpecExample: 'design/examples/marketing-standard.pagespec.json',
    allowlist: 'design/registry/allowlist.json',
    tokens: 'design/tokens/tokens.json',
    tokenPolicy: 'design/tokens/policy.json',
    componentContracts: 'design/contracts/components.json',
    compositionRules: 'design/contracts/composition.json',
    responsiveContract: 'design/contracts/responsive.json',
    motionContract: 'design/contracts/motion.json',
    assetRoles: 'design/registry/assets.json',
    informationArchitecture: 'design/information-architecture/README.md',
    implementationTraps: 'design/patterns/README.md',
    verify: 'design/verify_all.mjs',
  },
  verification: {
    command: 'node design/verify_all.mjs',
    checks: [
      'every contract file present and parseable',
      'entry points resolve on disk',
      'every allowlisted component exists in source',
      'every PageSpec example validates against the schema and composition rules',
      'every route in templates.json is routed in App.jsx',
      'token policy: no raw hex in component markup',
    ],
  },
}

fs.writeFileSync('registry.manifest.json', JSON.stringify(manifest, null, 2) + '\n')

const missing = Object.entries(manifest.entryPoints).filter(([, p]) => !exists(p))
console.log(
  `manifest: ${manifest.counts.routes} routes, ${manifest.counts.sectionComponents} sections, ` +
    `${manifest.counts.colorTokens} colour tokens` +
    (missing.length ? `\n  MISSING entry points: ${missing.map(([k]) => k).join(', ')}` : '')
)
