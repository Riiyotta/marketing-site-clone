import { useReveal } from '../hooks/useReveal'

/**
 * Interior-page closing CTA (`.cta_main_wrap`).
 *
 * Measured on live /solutions at 1440px — section is 1440 x 925 and layers,
 * back to front:
 *   cta-bg.avif            1440x925 at 0,0        (blue grid ground)
 *   cta-decoration-3.png    989x707 at 230,79     (navy grid slab, top)
 *   cta-decoration-2.avif   798x718 at 1019,687   (green circles, bottom-right)
 *   cta-decoration-1.avif   411x302 at -105,620   (coral bars, bottom-left)
 *   .cta_main_frame         817x745 at 312,180    (the document mock)
 *      ├ .cta_main_frame_header  815x55  at 313,181  white browser chrome
 *      └ .cta_main_content       815x688 at 313,236  on rgb(237,237,237)
 *
 * The frame is a stylised Jasper document window: a white 3-track header
 * (brand mark | document-name pill | collaborators + Share) sitting on a
 * 12px-rounded top edge, with the light content panel below it.
 *
 * The headline is NOT plain navy — every glyph on live is white on
 * flame-600 (rgb(250,64,40)), painted as an inline highlight that boxes each
 * line raggedly. Live animates it in per character; the resting state is the
 * solid highlight reproduced here per word, which matches the painted pixels
 * without the per-letter span machinery.
 *
 * Floating role pills (avatar-strong-colours*) sit OUTSIDE the panel and are
 * clipped by the section, except `is-1` which floats just above the headline
 * INSIDE the content panel. Each webp already contains avatar + label, so it
 * is drawn as a single image — not composed from parts.
 *
 * Used by /pricing, /platform and /solutions, which close with this block
 * rather than the homepage's "Put AI agents to work" section.
 */

/* .cta_main_cursor is-2/is-3 — the two pills clipped by the section edges.
   Coordinates are section-relative, measured on live. */
const PILLS = [
  { src: '/assets/avatar-strong-colours-1.webp', w: 160, h: 41, x: 1332, y: 745 },
  { src: '/assets/avatar-strong-colours.webp', w: 128, h: 37, x: 33, y: 734 },
]

/* .cta_main_nav_icon — the squared Jasper "j" mark used in the frame chrome.
   Traced from the live inline SVG (viewBox 0 0 57 56); the rounded flame
   square plus the two glyph paths. */
const JMark = ({ className = '' }) => (
  <svg viewBox="0 0 56 56" fill="none" className={className} aria-hidden="true">
    <rect x="12" y="12" width="32" height="32" rx="4" fill="#FA4028" />
    <circle cx="29.6" cy="17.4" r="2.23" fill="#fff" />
    <path d="M27.5 21.9h4.3v13.9c0 2.6-.6 4.4-1.8 5.6-1.2 1.1-3 1.7-5.4 1.7h-1.2v-3.8h.8c1.2 0 2.1-.3 2.6-.8.5-.6.7-1.5.7-2.8V21.9Z"
          fill="#fff" />
  </svg>
)

/* .cta_main_page_svg — the tune/filter glyph inside the document-name pill. */
const FilterGlyph = ({ className = '' }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path d="M2 5.334h8m0 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM6 10.667h8m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)

/* .cta_main_user_arrow — the collaborator-stack disclosure chevron. */
const UserChevron = ({ className = '' }) => (
  <svg viewBox="0 0 16 17" fill="none" className={className} aria-hidden="true">
    <path d="m4 6.73 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>
)

/* The headline is highlighted per word so the flame boxes break raggedly at
   the line ends exactly as they do on live. */
const HEADLINE = ['Start', 'creating', 'with', 'Jasper', 'today']

/* /grid closes on the same block with its own wording — measured live:
   headline "Start creating with Grid today", a single "Learn More" button —
   so both are props that default to the /platform | /pricing | /solutions
   wording rather than a second copy of the component. */
export default function PageCta({ headline = HEADLINE, ctas, docName = 'Jasper Closing CTA' }) {
  const ref = useReveal()
  const words = typeof headline === 'string' ? headline.split(' ') : headline
  const buttons = ctas || [
    { label: 'Start Free Trial', variant: 'btn-secondary' },
    { label: 'Get A Demo', variant: 'btn-primary' },
  ]

  return (
    <section ref={ref} className="relative overflow-hidden bg-surface" style={{ height: 925 }}>
      <img src="/assets/cta-bg.avif" alt="" aria-hidden="true"
           className="absolute inset-0 h-full w-full object-cover" />

      <img src="/assets/cta-decoration-3.png" alt="" aria-hidden="true"
           className="pointer-events-none absolute max-w-none"
           style={{ width: 989, height: 707, left: 230, top: 79 }} />
      <img src="/assets/cta-decoration-2.avif" alt="" aria-hidden="true"
           className="pointer-events-none absolute max-w-none"
           style={{ width: 798, height: 718, left: 1019, top: 687 }} />
      <img src="/assets/cta-decoration-1.avif" alt="" aria-hidden="true"
           className="pointer-events-none absolute max-w-none"
           style={{ width: 411, height: 302, left: -105, top: 620 }} />

      {PILLS.map((p) => (
        <img key={p.src} src={p.src} alt="" aria-hidden="true"
             className="pointer-events-none absolute hidden max-w-none md:block"
             style={{ width: p.w, height: p.h, left: p.x, top: p.y }} />
      ))}

      {/* .cta_main_frame — the document mock: chrome header + content panel */}
      <div className="absolute left-1/2 flex w-[min(817px,calc(100%-2rem))] -translate-x-1/2
                      flex-col overflow-hidden rounded-t-[12px] border border-dark-200"
           style={{ top: 180 }}>

        {/* .cta_main_frame_header — 3 equal tracks, 55px tall, on white */}
        <div className="grid h-[55px] shrink-0 grid-cols-[1fr_auto_1fr] items-center
                        bg-surface pr-s2 sm:grid-cols-3">
          <div className="flex items-center">
            <JMark className="h-[56px] w-[56px] shrink-0" />
          </div>

          {/* .cta_main_nav_page — the document-name pill */}
          <div className="flex items-center justify-center gap-2 justify-self-center
                          rounded-lg bg-surface-2 p-2">
            <span className="font-sans text-text-small text-ink">{docName}</span>
            <FilterGlyph className="h-4 w-4 shrink-0 text-dark-500" />
          </div>

          {/* .cta_main_frame_user — collaborator stack + Share */}
          <div className="hidden items-center justify-end gap-3 justify-self-end sm:flex">
            <div className="flex items-center gap-1">
              {/* .cta_main_user_list — four 24px avatars on an 8px stride, so
                  each overlaps the last by two thirds (live: x=975/983/991/999) */}
              <div className="flex -space-x-4">
                <img src="/assets/cta-user.avif" alt="" aria-hidden="true"
                     className="h-6 w-6 rounded-full object-cover ring-2 ring-surface" />
                {[1, 3, 2].map((n) => (
                  <img key={n} src={`/assets/cta-nav-avatar-${n}.png`} alt="" aria-hidden="true"
                       className="h-6 w-6 rounded-full object-cover ring-2 ring-surface" />
                ))}
              </div>
              <UserChevron className="h-4 w-4 shrink-0 text-dark-900" />
            </div>
            <span className="rounded-lg border border-dark-200 px-4 py-2
                             font-sans text-text-small text-ink">
              Share
            </span>
          </div>
        </div>

        {/* .cta_main_content — the light document body */}
        <div className="relative flex flex-col items-center justify-center gap-s7
                        bg-dark-100 px-6 py-20 text-center md:h-[688px] md:py-[156px]">

          {/* .cta_main_cursor is-1 — floats just above the headline */}
          <img src="/assets/avatar-strong-colours-2.webp" alt="" aria-hidden="true"
               className="pointer-events-none absolute hidden max-w-none md:block"
               style={{ width: 160, height: 41, left: 149, top: 80 }} />

          <h2 className="reveal mx-auto max-w-[13ch] font-serif tracking-tightest
                         text-[clamp(2.25rem,5.6vw,5rem)] leading-1">
            {words.map((w, i) => (
              <span key={`${w}-${i}`} className="bg-flame-600 text-white box-decoration-clone">
                {w}{i < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h2>

          <div className="reveal flex flex-wrap items-center justify-center gap-3"
               style={{ '--reveal-delay': '120ms' }}>
            {buttons.map((b) => (
              <a key={b.label} href="#" className={`btn ${b.variant || 'btn-primary'}`}>{b.label}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
