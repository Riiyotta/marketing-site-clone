# Marketing site clone — React + Vite + Tailwind

A pixel-accurate rebuild of a large marketing site, done as a front-end
engineering exercise. **41 pages** rebuilt from measured values, with a
verification harness that diffs each rendered page against the reference.

Built with React 18, Vite 5 and Tailwind CSS v3. No component library, no
animation dependencies — every block is written from scratch against values
measured off the reference DOM.

## Attribution and intended use

This reproduces the copy, imagery, branding and design of an existing
commercial website (Jasper AI, Inc.). It is **not affiliated with, endorsed by,
or connected to that company**, and it is not a product.

It exists to demonstrate front-end technique: design-token extraction, layout
reconstruction, scroll-animation systems, and automated visual verification.
The text and images belong to their original owner. Do not deploy this as a
live site, use it commercially, or present it as your own brand. Replace all
content before reusing any of the code.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## What is here

| | |
|---|---|
| **41 pages** | 6 top-level, 22 product, 13 solutions |
| **20 shared blocks** | `src/components/blocks/` — prop-driven, each documented with measured values |
| **13 placeholders** | honest "not built yet" pages, never a silent redirect to home |
| **Design system** | `design/` — mostly generated from the code |

### Structure

```
src/
├── App.jsx                 router; explicit routes, then placeholder routes
├── components/
│   ├── blocks/             the reusable layout vocabulary
│   └── ...                 nav, footer, page-level sections
├── data/                   page content, extracted not invented
├── hooks/useReveal.js      IntersectionObserver scroll reveals
├── pages/                  one file per route
└── index.css               tokens, keyframes, utilities

design/
├── Information architecture/   every route, state, height
├── tokens/                     colour, type, space, motion
├── components/                 block library + prop APIs
└── patterns/                   traps, method, deliberate divergences
```

## The idea that made it tractable

The site is not 41 bespoke pages — it is a small block vocabulary recomposed.
One layout block appears 15 times across the product pages, another 12, another
10. Three pages are *exactly* 8 sections and ~6,200px each: one template, three
sets of content.

So each block is built once from measured values and fed content, and blocks are
extended through props rather than forked. That is why 41 pages is a smaller job
than it sounds.

## Verification

Every page is checked at 1440 / 768 / 390 px for real horizontal overflow,
broken images, permanently-invisible scroll reveals, a missing `h1`, and console
errors. Section heights are diffed against the reference per block.

Most pages land within a few percent. The gap that remains is font substitution:
the original licenses commercial typefaces, and the open substitutes set about
9% wider, which is the main source of per-section height differences.

`design/patterns/README.md` records the bugs that shipped during this build and
the rules that prevent them — the `fill: forwards` animation that silently
discards inline transforms, scroll reveals stranded inside horizontal rails,
`position: sticky` killed by an ancestor's overflow, and why automated checks
happily pass a page whose text is invisible.

## Regenerate the design docs

```bash
node design/gen-ia.mjs
node design/gen-tokens.mjs
node design/gen-components.mjs
```
