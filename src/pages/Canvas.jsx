import Closing from '../components/Closing'
import { useReveal } from '../hooks/useReveal'

/* ---------------------------------------------------------------------------
   /canvas — "Unlimited space for limitless marketing"

   The largest page in the clone: live reports 26,937px. That number is almost
   entirely SCROLL-DRIVE DISTANCE, not content. MEASURED structure
   (.scrape/plat-canvas.json + a viewport frame-stepper at 1000px intervals,
   .scrape/canvas-frames.json + .scrape/canvasf/*.png):

     canvas-hero_sticky_wrap   position:sticky, 2000px  — the hero
     sections-w                26,500px, holding ONE `.sticky-w full` viewport
                               (1440x1000, position:relative) and three
                               `.sticky-c` panels pinned at scroll offsets
                               1000 / 9000 / 22000
     g_background is-white     1012px at top 27,500 — the shared Closing block

   In other words the live page pins a SINGLE 950px viewport and drives a GSAP
   timeline through it for ~26,000px of scroll. The full-page screenshot proves
   this: everything below the hero rasterises as flat grey, because there is no
   stacked content to capture. The frame-stepper recovered the six narrative
   stages the timeline plays (the h3 text is empty in a static capture because
   SplitText clears it, so the copy below comes from the stepped frames):

     y≈2000-7000    Research   "Use AI-powered Agents in Canvas to set every
                               project up for success."  + SEO keyword tables
     y≈8000-9000    Create     "Create and automate in one workspace"
     y≈10000-12000  Agents     "Browse through over 100 Marketing Agents and
                               supercharge how your team works." + "Select any
                               element on the Canvas to instantly use as
                               context in your marketing"
     y≈13000-17000  Draft      "Title: Why Jasper Canvas is the Best AI
                               Marketing Platform for 2024 and Beyond" — the
                               blog-post card with three body paragraphs
     y≈18000-20000  Transform  "Transform Once. Scale Everywhere." + the
                               rewrite/translate toolbar over three LinkedIn
                               post cards
     y≈21000-25000  Export     "Export seamlessly to your preferred platform."

   HOW THIS IS BUILT: reproducing 26,000px of pinned scroll would mean either
   pulling in a scroll library or inventing ~25,000px of empty height to match
   a number that is drive distance, not layout. Neither is honest. Instead the
   six stages are laid out as real stacked sections on the same infinite-canvas
   ground — the same cards, notes, cursors and copy the timeline reveals, in
   the same order, at their measured sizes. The page therefore reads as the
   live narrative but is ~7,000px rather than ~27,000px. This is the single
   largest deliberate height delta in the clone and is called out in the
   report rather than padded over.

   The four `.sticky-w` step captions ("Tap AI-powered Agents in Canvas…" etc.)
   are the timeline's progress rail; they are rendered as the stage rail.
--------------------------------------------------------------------------- */

/* .canvas-hero cards — MEASURED positions in the 1440x950 hero viewport. */
const HERO_CARDS = [
  { src: '/assets/tweets-2.webp', w: 195, h: 209, x: 173, y: 286, r: -4 },
  { src: '/assets/tweets-1.webp', w: 195, h: 209, x: 133, y: 326, r: 2 },
  { src: '/assets/tweets.webp', w: 195, h: 209, x: 93, y: 366, r: -2 },
  { src: '/assets/tweets-4.webp', w: 205, h: 170, x: 1072, y: 286, r: 3 },
  { src: '/assets/tweets-5.webp', w: 191, h: 142, x: 1112, y: 336, r: -3 },
  { src: '/assets/tweets-6.webp', w: 191, h: 155, x: 1152, y: 386, r: 1 },
]
const HERO_CURSORS = [
  { src: '/assets/cursor.webp', w: 225, h: 66, x: 332, y: 572 },
  { src: '/assets/cursor-1.webp', w: 229, h: 72, x: 1040, y: 200 },
]

/* The stage rail — the four `.sticky-w` progress captions, verbatim. */
const RAIL = [
  'Tap AI-powered Agents in Canvas to surface brand insights grounded in real data.',
  'Plan, build, and generate campaigns in a visual workspace—faster and more aligned from the start.',
  'Changes cascade across every asset, instantly.',
  'Move from final edit to live campaign—fast and confident.',
]

/* A Canvas "note" — the yellow agent card the timeline opens each stage with.
   MEASURED: a 440px card, a 32px title bar on yellow-500 with a document glyph
   and the stage name in 14px ABC ROM, then the body on yellow-300. */
const Note = ({ label, children, className = '', width = 440, style }) => (
  <div className={`overflow-hidden border border-yellow-800/20 ${className}`}
       style={{ maxWidth: width, ...style }}>
    <div className="flex items-center gap-2 bg-yellow-500 px-3 py-2">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 text-ink" fill="none" aria-hidden="true">
        <path d="M4 2h5l3 3v9H4V2Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 2v3h3" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span className="font-sans text-text-small text-ink">{label}</span>
    </div>
    <div className="bg-yellow-300 px-5 py-5">{children}</div>
  </div>
)

/* A collaborator cursor — avatar + coloured name label, shipped as one webp. */
const Cursor = ({ src, className = '', width = 229 }) => (
  <img src={src} alt="" aria-hidden="true" loading="lazy"
       className={`pointer-events-none absolute hidden max-w-none lg:block ${className}`}
       style={{ width }} />
)

export default function Canvas() {
  const hero = useReveal()
  const board = useReveal()

  return (
    <>
      {/* ---- hero: 1440x950 board viewport on the dotted canvas ground ---- */}
      <section ref={hero} className="clip-bleed relative bg-surface-2">
        <img src="/assets/background.webp" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />

        <div className="relative mx-auto min-h-[620px] w-full max-w-[1440px] px-4 py-[88px]
                        md:min-h-[760px] lg:min-h-[950px]">
          {/* scattered board cards — hidden below lg where they would collide */}
          {HERO_CARDS.map((c) => (
            <div key={c.src} className="pointer-events-none absolute hidden lg:block"
                 style={{ left: c.x, top: c.y, transform: `rotate(${c.r}deg)` }}>
              <img src={c.src} alt="" aria-hidden="true" loading="lazy"
                   className="max-w-none object-contain shadow-[0_6px_20px_rgba(0,0,0,.10)]"
                   style={{ width: c.w, height: c.h }} />
            </div>
          ))}
          {HERO_CURSORS.map((c) => (
            <img key={c.src} src={c.src} alt="" aria-hidden="true" loading="lazy"
                 className="pointer-events-none absolute hidden max-w-none lg:block"
                 style={{ left: c.x, top: c.y, width: c.w, height: c.h }} />
          ))}

          <div className="relative z-10 mx-auto max-w-[672px] text-center">
            {/* the rotated flame "NEW" chip that sits above the eyebrow on
                live. Rotation is on a WRAPPER, never on the `.reveal` element
                — the reveal animation fills forwards and would override an
                inline transform. */}
            <div className="mb-1 inline-block" style={{ transform: 'rotate(-8deg)' }}>
              <span className="reveal inline-block bg-flame-600 px-2 font-serif text-h4 text-white">
                NEW
              </span>
            </div>
            <p className="reveal eyebrow block bg-transparent leading-none text-ink">
              <span className="bg-yellow-700 px-1">Jasper Canvas</span>
            </p>
            <h1 className="reveal mt-5 font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Unlimited space for limitless marketing
            </h1>
            <p className="reveal mx-auto mt-6 max-w-[42ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Speed, scale, and brand consistency—all in one collaborative platform.
            </p>
            <div className="reveal mt-8" style={{ '--reveal-delay': '200ms' }}>
              <a href="#" className="btn btn-primary">Get A Demo</a>
            </div>
          </div>
        </div>

        {/* .canvas-nav_wrap — the faux app bar pinned to the viewport foot */}
        <div className="relative z-10 flex h-[49px] items-center justify-between gap-4
                        border-y border-dark-200 bg-surface px-4">
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ink" fill="none" aria-hidden="true">
            <path d="M3 10.5 12 3l9 7.5V21H3V10.5Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="flex items-center gap-2 rounded-DEFAULT bg-surface-2 px-3 py-1">
            <span className="font-sans text-text-small text-ink">Canvas Launch</span>
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-dark-600" fill="none" aria-hidden="true">
              <path d="M2 5h8m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM6 11h8m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </div>
          <div className="flex items-center gap-2">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-500
                             text-text-tiny text-ink">DK</span>
            <span className="rounded-DEFAULT bg-blue-500 px-3 py-1 text-text-small leading-none text-white">
              Share
            </span>
          </div>
        </div>
      </section>

      {/* ---- the six narrative stages on the canvas ground ---- */}
      <section ref={board} className="clip-bleed relative bg-surface-2">
        <img src="/assets/background.webp" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70" />

        <div className="relative u-container flex flex-col gap-[120px] py-[96px]">

          {/* 1 — RESEARCH */}
          <div className="relative grid items-center gap-8 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-10">
            <Note label="Research">
              <h2 className="font-serif text-ink tracking-tighter leading-[1.1] text-h3">
                Use AI-powered Agents in Canvas to set every project up for success.
              </h2>
            </Note>
            <div className="reveal relative">
              <img src="/assets/s3-collage.webp"
                   alt="SEO keyword tables showing High Volume Head Terms and Long Tail Opportunities with search volume, difficulty and priority."
                   loading="lazy"
                   className="w-full border border-dark-200 bg-surface object-contain" />
              <Cursor src="/assets/jasp-canvas-cursor-cm-balanced.avif"
                      className="-bottom-6 left-[38%]" />
            </div>
          </div>

          {/* 2 — CREATE */}
          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-10">
            <div className="reveal relative order-2 lg:order-1">
              <img src="/assets/s2-collage.webp"
                   alt="Jasper Canvas interface showing the steps of activating an agent inside a campaign board."
                   loading="lazy"
                   className="w-full border border-dark-200 bg-surface object-contain" />
              <Cursor src="/assets/jasp-canvas-cursor-headcom.webp"
                      className="-top-6 right-[32%]" />
            </div>
            <Note label="Create" className="order-1 lg:order-2">
              <h2 className="font-serif text-ink tracking-tighter leading-[1.1] text-h3">
                Create and automate in one workspace
              </h2>
              <p className="mt-4 text-text-small text-ink text-pretty">
                Unlike chat-based tools, Canvas gives marketers a visual space to plan, build, and
                generate campaigns at scale. Easily create assets, automate variations, and keep
                everything on brand.
              </p>
            </Note>
          </div>

          {/* 3 — AGENTS */}
          <div className="relative flex flex-col items-center gap-8 text-center">
            <h2 className="reveal max-w-[26ch] font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]">
              Browse through over 100 Marketing Agents and supercharge how your team works.
            </h2>
            <p className="reveal max-w-[46ch] font-serif text-ink tracking-tighter leading-[1.1] text-h4"
               style={{ '--reveal-delay': '80ms' }}>
              Select any element on the Canvas to instantly use as context in your marketing
            </p>
            <div className="reveal relative w-full" style={{ '--reveal-delay': '140ms' }}>
              <img src="/assets/s4-collage.webp"
                   alt="Tables of long tail and question keywords showing search volume and relevance scores."
                   loading="lazy"
                   className="mx-auto w-full max-w-[1100px] border border-dark-200 bg-surface object-contain" />
              {/* the two Canvas toolbars the timeline floats over the board */}
              <img src="/assets/toolbar-1.webp" alt="" aria-hidden="true" loading="lazy"
                   className="pointer-events-none absolute -top-5 left-1/2 hidden h-[38px] w-[352px]
                              max-w-none -translate-x-1/2 lg:block" />
            </div>
          </div>

          {/* 4 — DRAFT */}
          <div className="relative mx-auto w-full max-w-[720px]">
            <div className="reveal overflow-hidden border border-dark-200 bg-surface">
              <div className="flex items-center gap-2 border-b border-dark-150 px-4 py-3">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-dark-700" fill="none" aria-hidden="true">
                  <path d="M4 2h5l3 3v9H4V2Z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span className="font-sans text-text-small text-dark-800">Blog Post</span>
              </div>
              <div className="px-8 py-8">
                <h2 className="max-w-[34ch] font-sans text-[18px] font-medium leading-[1.35] text-ink">
                  Title: Why Jasper Canvas is the Best AI Marketing Platform for 2024 and Beyond
                </h2>
                <p className="mt-5 text-text-small text-ink text-pretty">
                  If you’re comparing the best AI tools for marketers, evaluating AI content
                  creation platforms, or wondering how to choose the right AI marketing platform in
                  2024, you’re in the right place.
                </p>
                <p className="mt-4 text-text-small text-ink text-pretty">
                  Built specifically for marketing teams, Jasper Canvas is the intelligent workspace
                  that combines AI-powered content generation, SEO insights, and campaign planning
                  tools—all in one place.
                </p>
                <p className="mt-4 text-text-small text-ink text-pretty">
                  Unlike general-purpose AI tools, Jasper is built for scale and brand control. If
                  your team is tired of juggling disconnected tools and spending hours aligning
                  content to strategy, Jasper Canvas offers a smarter way to work.
                </p>
              </div>
            </div>
            <Cursor src="/assets/jasp-canvas-cursor-cm-balanced.avif" className="right-6 top-[26%]" />
            <Cursor src="/assets/jasp-canvas-cursor-headcom.webp" className="left-2 top-[38%]" />
          </div>

          {/* 5 — TRANSFORM */}
          <div className="relative flex flex-col items-center gap-8">
            <Note label="Rewrite" width={420} className="reveal self-center">
              <p className="text-text-small text-ink text-pretty">
                Need to rephrase, rewrite, or translate? Select the canvas items to instantly
                transform.
              </p>
            </Note>

            <h2 className="reveal max-w-[24ch] text-center font-serif text-ink tracking-tightest
                           leading-1 text-[clamp(1.875rem,2.64vw,2.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Transform Once. Scale Everywhere.
            </h2>

            <div className="reveal relative w-full" style={{ '--reveal-delay': '140ms' }}>
              <img src="/assets/toolbar-2.webp" alt="" aria-hidden="true" loading="lazy"
                   className="pointer-events-none absolute -top-6 left-1/2 hidden h-[38px] w-[352px]
                              max-w-none -translate-x-1/2 lg:block" />
              <div className="grid gap-gutter md:grid-cols-3">
                {[
                  { src: '/assets/create-panel.webp',
                    alt: 'LinkedIn post about the repetitive task of updating headlines across assets.' },
                  { src: '/assets/create-panel-1.webp',
                    alt: 'LinkedIn post promoting Jasper Canvas for automatic brand consistency.' },
                  { src: '/assets/create-panel-2.webp',
                    alt: 'LinkedIn post discussing resolving manual update pain across multiple assets.' },
                ].map((c) => (
                  <img key={c.src} src={c.src} alt={c.alt} loading="lazy"
                       className="w-full border border-blue-600/40 bg-surface object-contain" />
                ))}
              </div>
              <Cursor src="/assets/jasp-canvas-cursor-socmed.webp" className="-left-2 top-[36%]" />
            </div>

            <Note label="Translate" width={420} className="reveal self-center"
                  style={{ '--reveal-delay': '200ms' }}>
              <p className="text-text-small text-ink text-pretty">
                And voila! Your copy is translated by Jasper at the click of a button.
              </p>
            </Note>

            {/* the French variants the translate step produces */}
            <div className="reveal grid w-full gap-gutter md:grid-cols-3"
                 style={{ '--reveal-delay': '240ms' }}>
              {[
                { src: '/assets/create-panel-3.webp',
                  alt: 'French LinkedIn post explaining the repetitive process of editing titles across assets.' },
                { src: '/assets/create-panel-4.webp',
                  alt: 'French LinkedIn post about Jasper Canvas eliminating version chaos.' },
                { src: '/assets/create-panel-5.webp',
                  alt: 'French LinkedIn post promoting Jasper Canvas and automatic brand consistency.' },
              ].map((c) => (
                <img key={c.src} src={c.src} alt={c.alt} loading="lazy"
                     className="w-full border border-blue-600/40 bg-surface object-contain" />
              ))}
            </div>
          </div>

          {/* 6 — EXPORT */}
          <div className="relative flex flex-col items-center gap-8 text-center">
            <h2 className="reveal max-w-[22ch] font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]">
              Export seamlessly to your preferred platform.
            </h2>
            <div className="reveal relative w-full" style={{ '--reveal-delay': '100ms' }}>
              <img src="/assets/s7-collage.webp"
                   alt="Collage of three LinkedIn posts promoting Jasper Canvas, ready to export."
                   loading="lazy"
                   className="mx-auto w-full max-w-[1100px] object-contain" />
              <Cursor src="/assets/cursor-2.webp" className="bottom-4 left-[30%]" width={225} />
            </div>
            <img src="/assets/s8-collage.webp"
                 alt="Three overlapping LinkedIn post mockups in French promoting Jasper Canvas."
                 loading="lazy"
                 className="reveal mx-auto w-full max-w-[1100px] object-contain"
                 style={{ '--reveal-delay': '160ms' }} />
          </div>

          {/* the timeline's progress rail — the four `.sticky-w` captions.
              `.reveal` is on the RAIL, not the items: this scrolls sideways at
              small widths and an off-viewport item would never intersect. */}
          <div className="reveal no-scrollbar flex gap-gutter overflow-x-auto border-t
                          border-dark-200 pt-8">
            {RAIL.map((r, i) => (
              <div key={r} className="flex min-w-[240px] flex-1 flex-col gap-3">
                <span className="font-mono text-text-tiny text-flame-600">0{i + 1}</span>
                <p className="text-text-small text-ink text-pretty">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1012px — g_background is-white: the shared Closing block */}
      <Closing />
    </>
  )
}
