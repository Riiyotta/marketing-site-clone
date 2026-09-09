# Design repo

The design system behind this clone. Most of it is **generated from the code**,
so it cannot drift from what actually ships.

```
design/
├── gallery.html                ← START HERE. The visual system, in a browser.
├── Information architecture/   every route, its state, its live height
├── tokens/                     colour, type, space, motion — from tailwind.config.js
├── components/                 the block library and its prop APIs — from source
└── patterns/                   hand-written: traps, method, deliberate divergences
```

## Look at it first

```bash
open design/gallery.html
```

One page with real swatches for every colour token, type specimens set at the
measured sizes, the spacing scale drawn to scale, the block library, and every
reference page capture. A table telling you `flame-600` is `#fa4028` is not the
same as seeing it — the Markdown files are the reference, the gallery is how you
actually read the system.

## Regenerate

```bash
node design/gen-gallery.mjs     # gallery.html  ← the visual system
node design/gen-ia.mjs          # Information architecture/README.md
node design/gen-tokens.mjs      # tokens/colour.md, tokens/type-space-motion.md
node design/gen-components.mjs  # components/README.md
```

Run all four after adding routes, tokens or blocks. `patterns/README.md` is the
only hand-written file — it records bugs that shipped and the rules that stop
them recurring, which no generator can infer.

## The one idea worth carrying

The site is not N bespoke pages. It is a small Webflow block vocabulary
recomposed — `simple_layout_wrap` appears 15 times across the Platform routes,
`horizontal_vis_wrap` 12, `hero_vertical_wrap` 10. Three pages
(`/brand-voice`, `/style-guide`, `/visual-guidelines`) are each *exactly* 8
sections and ~6,200px: the same template with different content.

That is what makes cloning ~50 pages tractable. Build the block once from
measured values, then feed it content. **Extend a block through props; never
fork a second copy.**

## Ground rules

1. **Measure before writing.** Every number in `tokens/` and every block header
   comment came off the live DOM. Nothing is a preference.
2. **Use token names, never raw hex**, in JSX.
3. **Automated QA cannot see design.** It passes a page whose text is invisible.
   Read the live screenshot against the rendered page.
4. **Never shrink a measured value to close a derived gap.**

`patterns/README.md` has the full list, each entry tied to a bug that shipped.

## Verification harness

Lives in `.scrape/`, outside this folder because it is tooling, not design:

| script | does |
|---|---|
| `harness.mjs both <path>` | captures live + clone, diffs sections/copy/CTAs/heights |
| `platqa.mjs` / `remqa.mjs` | route sweeps at 1440/768/390 |
| `qa3.mjs` | the six main pages |
| `platcap.mjs <paths…>` | live section trees + full-page screenshots |
