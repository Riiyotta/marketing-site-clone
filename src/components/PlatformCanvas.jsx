/**
 * "Create, edit, and collaborate in real time" — `.canvas_wrap`.
 *
 * Measured at 1440px on the live /platform (section height 1847):
 *   80px g_section_space top and bottom.
 *   header .g_content 1266px, centred, gap: eyebrow chip (green-400 ground,
 *   mono 16/16, 2px padding) mb 24px; h2 Feature 80/80 ls -2.4px max 50ch
 *   mb 16px; two 16/22.4 paragraphs in a 616px measure; the block then sits
 *   80px (u-gap-9) above `.canvas_inner`.
 *
 *   .canvas_inner  1360 x 1306 — 12-col grid, row-gap 12px, col-gap 16px,
 *   rows 284 / 370 / 513, padding 80px 32px 32px, 1px dark-150 border,
 *   radius 0 0 16px 16px, overflow hidden, a cover background image, and an
 *   absolutely-positioned 49px faux app bar pinned to the top edge.
 *
 *   Tiles (measured spans / sizes, all radius 12px + a soft drop shadow):
 *     col 1-3  stack: 312x400 then 312x223, flex column gap 12px
 *     span 3   312x271  x3 across row 1
 *     span 4   421x326  row 2 col 4
 *     span 5   stack: 530x492 then 530x392, rows 2-3
 *     span 4   421x433  row 3 col 1
 *     span 3   312x469  row 3 col 5
 *   Two 166x38 / 141x40 cursor avatars float over the board.
 *
 *   The live board also carries a GSAP scroll parallax that skews and offsets
 *   each tile; that is reproduced here as a static tilt per tile so the board
 *   reads the same at rest without pulling in a scroll library.
 *
 *   Header background: `.canvas_background`, a 1016x600 image centred behind
 *   the copy, top -74px relative to the section.
 */
const CTA = (
  <a href="#" className="link-arrow font-mono text-text-main">
    Explore
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M4.96 9.84834L3.968 8.84034L7.184 5.70434H0V4.31234H7.152L3.952 1.17634L4.96 0.152344L9.84 5.01634L4.96 9.84834Z"
            fill="currentColor" />
    </svg>
  </a>
)

const Tile = ({ src, className = '', style, tilt = 0 }) => (
  <div
    className={`overflow-hidden rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,.08)] ${className}`}
    style={{ ...style, transform: tilt ? `rotate(${tilt}deg)` : undefined }}
  >
    <img src={src} alt="" aria-hidden="true" loading="lazy"
         className="h-full w-full object-cover" />
  </div>
)

export default function PlatformCanvas() {
  return (
    <section className="clip-bleed relative bg-surface py-[80px]">
      {/* .canvas_background — 1016x600 behind the header copy */}
      <img src="/assets/canvas-head-bg.png" alt="" aria-hidden="true" loading="lazy"
           className="pointer-events-none absolute left-1/2 top-[80px] h-[600px] w-[1016px]
                      max-w-none -translate-x-1/2 -translate-y-[74px] object-cover" />

      <div className="u-container relative flex flex-col items-center gap-tabs">
        <div className="flex flex-col items-center text-center">
          <p className="reveal eyebrow bg-green-400 px-[2px] py-[2px] leading-none">Canvas</p>
          <h2 className="reveal mt-6 max-w-[40ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.25rem,4.7vw,4.25rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            Create, edit, and collaborate in real time
          </h2>
          <div className="reveal mt-4 max-w-[616px] space-y-6 text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
            <p>
              Canvas is a collaborative execution surface where teams work directly with
              agents to draft, refine, and optimize content. It’s designed for hands-on
              creation, iteration, and decision-making—while staying fully connected to
              pipelines and governance.
            </p>
            <p>
              Agents assist with research, drafting, adaptation, and optimization, while humans
              guide direction and quality.
            </p>
          </div>
          <div className="reveal mt-6" style={{ '--reveal-delay': '200ms' }}>{CTA}</div>
        </div>

        {/* .canvas_inner — 12-col board */}
        <div className="reveal relative w-full overflow-hidden rounded-b-[16px]
                        border border-dark-150 px-4 pb-4 pt-[64px] sm:px-8 sm:pb-8 sm:pt-[80px]"
             style={{ '--reveal-delay': '120ms' }}>
          <img src="/assets/canvas-bg.webp" alt="" aria-hidden="true" loading="lazy"
               className="pointer-events-none absolute inset-0 h-full w-full object-cover" />

          {/* .canvas-nav_wrap — 49px faux app bar */}
          <div className="absolute inset-x-0 top-0 z-10 hidden h-[49px] items-center
                          justify-between gap-gutter bg-white px-3 py-2 sm:flex">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true"
                 className="shrink-0 text-ink">
              <rect x="1" y="1" width="26" height="26" stroke="currentColor" />
              <path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="flex items-center gap-2 rounded-DEFAULT bg-surface-2 p-2">
              <span className="text-text-large text-ink leading-none">Canvas Launch</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full
                               bg-violet-500 text-text-small text-ink">DK</span>
              <span className="h-7 w-[2px] bg-surface-2" aria-hidden="true" />
              <span className="rounded-DEFAULT bg-blue-500 p-2 text-text-main leading-none text-white">
                Share
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-6 lg:grid-cols-12
                          lg:gap-x-gutter lg:gap-y-3">
            {/* col 1-3, rows 1-2: 400 + 223 stack */}
            <div className="flex flex-col gap-3 sm:col-span-3 lg:col-span-3 lg:row-span-2">
              <Tile src="/assets/canvas-seo.webp" className="aspect-[312/400]" tilt={-1.2} />
              <Tile src="/assets/canvas-chat.webp" className="aspect-[312/223]" tilt={0.8} />
            </div>

            <Tile src="/assets/canvas-chat4.webp"
                  className="aspect-[312/271] sm:col-span-3 lg:col-span-3" tilt={1.8} />
            <Tile src="/assets/canvas-chat-new2.webp"
                  className="aspect-[312/271] sm:col-span-3 lg:col-span-3" tilt={-4.4} />
            <Tile src="/assets/canvas-chat6.webp"
                  className="aspect-[312/271] sm:col-span-3 lg:col-span-3" tilt={2.5} />

            <Tile src="/assets/canvas-chat-default.webp"
                  className="aspect-[421/326] sm:col-span-4 lg:col-span-4" tilt={1.6} />

            {/* span 5, rows 2-3: 492 + 392 stack */}
            <div className="flex flex-col gap-3 sm:col-span-5 lg:col-span-5 lg:row-span-2">
              <Tile src="/assets/canvas-chat2.webp" className="aspect-[530/492]" tilt={-0.9} />
              <Tile src="/assets/canvas-chat7.webp" className="aspect-[530/392]" tilt={1.1} />
            </div>

            <Tile src="/assets/canvas-chat8.webp"
                  className="aspect-[421/433] sm:col-span-4 lg:col-span-4" tilt={-2.4} />
            <Tile src="/assets/canvas-chat1.webp"
                  className="aspect-[312/469] sm:col-span-3 lg:col-span-3" tilt={1} />
          </div>

          {/* floating collaborator cursors */}
          <img src="/assets/canvas-cursor-1.png" alt="" aria-hidden="true" loading="lazy"
               className="pointer-events-none absolute left-[41%] top-[41%] hidden h-[38px]
                          w-[166px] max-w-none lg:block" />
          <img src="/assets/canvas-cursor-2.png" alt="" aria-hidden="true" loading="lazy"
               className="pointer-events-none absolute left-[36%] top-[87%] hidden h-[40px]
                          w-[141px] max-w-none lg:block" />
        </div>
      </div>
    </section>
  )
}
