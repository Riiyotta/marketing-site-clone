# Design repo

A machine-readable design system: contracts a generator can validate against,
not only documentation a person reads. Almost all of it is **generated from the
code**, so it cannot drift from what ships.

```
registry.manifest.json          ← machine entry point: identity, versions, counts
design/
├── gallery.html                ← human entry point: the visual system
├── schema/pagespec.schema.json   the page contract
├── examples/                     native reference PageSpecs
├── registry/
│   ├── allowlist.json            CLOSED set of components AI may emit
│   ├── templates.json            route -> template, section shapes
│   └── assets.json               semantic asset roles
├── contracts/
│   ├── components.json           props, variants, slots, capacities
│   ├── composition.json          ordering, uniqueness, required shell
│   ├── responsive.json           the three verified breakpoints
│   └── motion.json               reveal + animation contract
├── tokens/
│   ├── tokens.json               LLM-facing catalog
│   ├── policy.json               how tokens may be used
│   └── *.md                      human-readable mirror
├── information-architecture/     every route, state, template, measured height
├── components/                   block library, prose
├── patterns/                     hand-written: traps, method, divergences
└── verify_all.mjs                one deterministic verification entry point
```

## Verify

```bash
node design/verify_all.mjs        # exits 0/1, one line per check
```

39 checks: contracts parse, manifest entry points resolve, every allowlisted
component exists in source, every declared route is routed in `App.jsx`, every
example PageSpec satisfies the schema *and* the composition rules, and no raw
hex appears in markup.

It is a real gate, not a formality — planting an invented component, a raw hex
tint, an over-long headline, a misplaced CTA and a broken template order in one
spec produces six distinct failures.

## Generating a page

1. Read `registry.manifest.json` for versions and entry points.
2. Pick a template from `registry/templates.json`.
3. Compose sections **only** from `registry/allowlist.json`. The list is closed —
   if a design needs something absent, stop and request a new component contract
   rather than improvising one.
4. Respect `contracts/components.json` for props, variants and content
   capacities, and `contracts/composition.json` for order and uniqueness.
5. Reference colour by token name from `tokens/tokens.json`; raw hex fails.
6. Validate with `verify_all.mjs` before emitting anything.

## Look at it first

```bash
open design/gallery.html
```

Real swatches for every colour token, type specimens at the measured sizes, the
spacing scale drawn to scale, the block library and the reference captures. A
table telling you `flame-600` is `#fa4028` is not the same as seeing it.

## Regenerate

```bash
node design/gen-contracts.mjs   # allowlist, templates, contracts, tokens.json, assets
node design/gen-manifest.mjs    # registry.manifest.json  (run after gen-contracts)
node design/gen-ia.mjs          # information-architecture/
node design/gen-tokens.mjs      # tokens/*.md
node design/gen-components.mjs  # components/
node design/gen-gallery.mjs     # gallery.html
```

`patterns/README.md` is the only hand-written file — it records bugs that
shipped and the rules that stop them recurring, which no generator can infer.

`gen-tokens.mjs` prefers the committed `tokens/tokens.json` and falls back to
`../tailwind.config.js`, so this repo still works when packaged on its own.

## The one idea worth carrying

The site is not N bespoke pages. It is a small block vocabulary recomposed —
one layout block appears 15 times across the product routes, another 12, another
10. Three pages (`/brand-voice`, `/style-guide`, `/visual-guidelines`) are each
*exactly* 8 sections and ~6,200px: the same template with different content, and
two templates cover twelve of the Solutions pages.

That is what makes ~50 pages tractable. Build the block once from measured
values, then feed it content. **Extend through props; never fork a second copy.**

## Ground rules

1. **Measure before writing.** Every number in `tokens/` and every block header
   comment came off the reference DOM. Nothing is a preference.
2. **Use token names, never raw hex**, in JSX.
3. **Automated QA cannot see design.** It passes a page whose text is invisible.
   Read the reference screenshot against the rendered page.
4. **Never shrink a measured value to close a derived gap.**

`patterns/README.md` has the full list, each entry tied to a bug that shipped.

## Behavioural harness

`verify_all.mjs` checks the contracts. Visual and behavioural verification lives
in `.scrape/`, outside this folder because it is tooling, not design:

| script | does |
|---|---|
| `harness.mjs both <path>` | captures reference + clone, diffs sections/copy/CTAs/heights |
| `platqa.mjs` / `remqa.mjs` | route sweeps at 1440/768/390 |
| `qa3.mjs` | the six main pages |
| `platcap.mjs <paths…>` | reference section trees + full-page screenshots |
