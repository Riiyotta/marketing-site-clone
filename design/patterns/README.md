# Patterns and traps

Hand-written. Every entry here is a bug that actually shipped in this clone and
the rule that prevents it recurring. Read before editing a component.

## Method

**Measure the live DOM before writing any value.** Not "looks about right" —
open the live page, read the computed style, write that number down in a
comment. This caught repeated inventions: three Trust feature rows that do not
exist, a card hover lift/shadow/zoom, a nav underline sweep, a navy Closing
band, a navy footer. None were on the live site.

Corollary: **never shrink a measured value to close a derived gap.** Font
substitution makes sections ~40px taller than live. Shrinking a verified 80px
headline to 54px "fixes" the height by breaking the thing that was correct.

## Automated checks cannot see design

The QA sweep tests horizontal overflow, broken images, stuck reveals, missing
h1 and JS errors. It passes a page whose text is invisible.

Real bugs found only by looking at screenshots:

| bug | why the sweep missed it |
|---|---|
| Navy headline on the navy decoration slab | element present, visible, correctly sized — just unreadable |
| Two cards in one grid sharing an image | both images loaded fine |
| Company ribbon hero rendering dead flat | rotation silently dropped, nothing errored |
| Studio hero as one stray block | it is 13 separate images pre-positioned on a shared canvas |
| `/image/*` endpoint cards with no stills | lazy-loaded, so the tree-walk reported zero images |

**Always read the live PNG against the rendered page, section by section.**

## Reveal animation traps

`.reveal` uses an entrance animation with `fill: forwards`.

1. **An inline `transform` on a `.reveal` element is silently discarded** — the
   animation outranks it. This shipped twice, most visibly on `/company`, whose
   rotated ribbon hero rendered flat. Put rotation/offset on a *wrapper* and the
   reveal on the inner element.
2. **Never put `.reveal` inside a horizontally-scrolling rail.** Items outside
   the viewport never intersect, so they stay at `opacity: 0` permanently —
   invisible even after you scroll the rail. Put the reveal on the rail
   container. This stranded two leadership cards on `/company` at 390px.
3. A finished animation keeps the element on its own compositor layer, which
   inflates the document and can drop the element from a full-page raster.
   `useReveal` adds `.is-settled` on `animationend` to return it to normal
   paint. That fix also removed a real 3592px document-width inflation.

## Layout traps

- **`position: sticky` is silently defeated by any ancestor with `overflow`
  other than `visible`.** Nothing errors; it just does not stick. Walk the
  ancestor chain when a sticky header will not pin.
- **`overflow: hidden` alone does not stop layout overflow bubbling to the root
  in Chrome.** A clipped-but-wide carousel rail still inflated
  `documentElement.scrollWidth` to 5032px. Use `.clip-bleed`
  (`overflow: hidden; contain: paint`) on full-bleed sections.
- **Measure real overflow by probing the scroll**, not by reading
  `documentElement.scrollWidth`. With `body { overflow-x: hidden }` that number
  reports overflow a user can never reach — a false positive that cost real time.
- The 1360px container has `padding-inline: 0`. Adding padding shrinks every
  one of the 12 tracks.

## JSX

A comment between `return (` and the opening element is a syntax error. Put
comments above the `return`. This has bitten more than once.

## Scraping live

- `networkidle` never fires on jasper.ai (persistent analytics beacons). Use
  `domcontentloaded` plus a wait, and dismiss the cookie banner.
- Page content lives in `.page_wrap`, not `<main>`. Reading `<main>` returns
  only the footer — which is how a whole round of interior pages got built from
  guesswork instead of ground truth.
- The Playwright browser CDN is blocked here. Drive system Chrome with
  `channel: 'chrome'`.
- Some routes nest the whole page in one tall wrapper, so a naive walk returns a
  single 27,500px "section". Expand any block over 2500px, but reject an
  expansion whose children sum to more than ~1.35x the parent — absolutely
  positioned overlays double-count and inflated one page to 115,000px.

## Verifying agent work

Do not take a report at face value. Claims that turned out to be wrong on
checking: that two speaker names were unavailable in the live DOM (they were
there), that a "Register Now" CTA was missing 11 times (74 anchors exist, 73
hidden), that stuck reveals were a measurement artifact (they were real until
fixed, then genuinely zero).

Equally, a reported failure is often the harness, not the page. Three separate
QA runs failed for reasons that were not defects: a broken intermediate build, a
killed dev server, and an agent overwriting the route list down to 8 entries.
The sweep now aborts loudly if the app is not mounted, and the route list lives
in the repo rather than `/tmp`.

## Deliberate divergences

These are documented in the relevant file headers, not accidents:

- **Fonts** — Playfair/Inter/JetBrains substitute for licensed Feature/ABC ROM
  and set ~9% wider. Source of most remaining per-section deltas.
- **`/canvas` is 45% shorter than live.** Live's 26,937px is almost entirely
  scroll-drive distance: one pinned viewport with a GSAP timeline. All six
  narrative stages and their content are present. Matching the number would mean
  inventing ~19,000px of empty height.
- **Third-party product-demo iframes** (`*.jasperpreview.app`) are replaced with
  the nearest still. Panel geometry is reproduced; the height they occupy is not
  padded out.
- Jasper's copy, imagery, logo, licensed fonts and Rive artwork are their IP.
  Fine locally; replace before any public deployment.
