import { useEffect, useRef, useState } from 'react'
import { Eyebrow, ArrowLink } from './primitives'

/* ---------------------------------------------------------------------------
   `.side_block` x N inside a `.simple_layout_inner` — the scroll-pinned
   feature stack. Used on live /jasper-iq for the four IQ components.

   MEASURED on live /jasper-iq at 1440px (.scrape/row-jasper-iq.json):
     the four `.side_block` rows are 1360 x 782 each, stacked with no gap
     (y = 2845 / 3627 / 4410 / 5192), sitting on a `.simple_layout_inner`
     3129px tall (4 x 782 + 1).
     Each row is a 2-col grid of 672px tracks:
       LEFT   `.side_block_left` 672 x 782, copy vertically centred in it
                eyebrow  mono 16/16 ink          (253px into the row)
                h2       Feature 38/38 ink, 672px measure, 2 lines
                body     ABC ROM 16/22.4 ink, 514px measure
                link     coral mono 18/25.2 "Explore X"
       RIGHT  `.side_media_wrap` 672 x 782 holding a STICKY visual that pins
                for the whole stack and cross-fades as each row scrolls into
                view. Measured art per state: a 601x663..700 background plate
                at x=729 and a 421x421 graphic centred on it at x=819.
     Behind the media column runs `.simple_layout_lines_wrap` — a 601px-wide
     vertical hairline rail that spans the whole 3129px inner.

   The pinning is a GSAP ScrollTrigger on live; reproduced here with
   `position: sticky` plus an IntersectionObserver that reports which row owns
   the viewport, so the art cross-fades on the same beats.

   PROPS
     items  [{ eyebrow, title, titleTag, body, link, art: { bg, graphic, alt } }]
            titleTag defaults to 'h2'; pass 'p' where live has no heading
     rowH   px   measured row height (default 782)
--------------------------------------------------------------------------- */

export default function SideBlockStack({ items = [], rowH = 782 }) {
  const [active, setActive] = useState(0)
  const rowRefs = useRef([])

  useEffect(() => {
    const nodes = rowRefs.current.filter(Boolean)
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return
    // A row "owns" the art once its midpoint crosses the viewport middle, so
    // the swap lands on the same scroll beat the live ScrollTrigger uses.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i))
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [items.length])

  return (
    <div className="relative">
      {/* `.simple_layout_lines_wrap` — the 601px hairline rail behind the art */}
      <div aria-hidden="true"
           className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
           style={{
             width: 601,
             backgroundImage:
               'repeating-linear-gradient(to right, rgba(0,6,61,.06) 0 1px, transparent 1px 75.125px)',
           }} />

      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* copy column — one row per item */}
        <div className="flex flex-col">
          {items.map((it, i) => (
            <div key={it.title}
                 ref={(el) => { rowRefs.current[i] = el }}
                 data-i={i}
                 className="flex flex-col justify-center py-16 lg:py-0"
                 style={{ minHeight: rowH }}>
              <div className="reveal flex max-w-[672px] flex-col">
                {it.eyebrow && <Eyebrow className="mb-[26px]">{it.eyebrow}</Eyebrow>}
                {/* live's /jasper-iq "Product IQ" row tags its 38px Feature line
                    as a <p>, not an <h2> — every other row uses <h2>. `titleTag`
                    reproduces that per-row inconsistency verbatim. */}
                {(() => {
                  const T = it.titleTag || 'h2'
                  return (
                    <T className="font-serif text-ink tracking-tightest
                                  text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1">
                      {it.title}
                    </T>
                  )
                })()}
                {it.body && (
                  <p className="mt-6 max-w-[514px] text-text-main text-ink text-pretty">
                    {it.body}
                  </p>
                )}
                {/* `content` is an escape hatch for rows whose copy is more
                    than one paragraph — /agents' numbered 001-004 blocks each
                    carry an intro, a lead-in line, a bullet list and a closing
                    paragraph. Rendered in the same 514px measure as `body`. */}
                {it.content && <div className="mt-4 max-w-[514px]">{it.content}</div>}
                {it.link && <ArrowLink {...it.link} className="mt-6 self-start" />}
              </div>

              {/* below lg the art stacks under its own row instead of pinning */}
              {it.art && (
                <div className="relative mt-10 lg:hidden">
                  <img src={it.art.bg} alt="" aria-hidden="true"
                       className="h-auto w-full object-contain" />
                  <img src={it.art.graphic} alt={it.art.alt || ''}
                       className="absolute left-1/2 top-1/2 w-[70%] -translate-x-1/2 -translate-y-1/2
                                  object-contain" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* media column — sticky for the whole stack, cross-fading per row */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <div className="relative" style={{ width: 601, height: 700 }}>
              {items.map((it, i) => (
                it.art && (
                  <div key={it.title}
                       className="absolute inset-0 grid place-items-center transition-opacity duration-500 ease-jasper"
                       style={{ opacity: active === i ? 1 : 0 }}
                       aria-hidden={active !== i}>
                    <img src={it.art.bg} alt="" aria-hidden="true"
                         className="absolute inset-0 h-full w-full object-contain" />
                    <img src={it.art.graphic} alt={active === i ? (it.art.alt || '') : ''}
                         width={421} height={421}
                         className="relative h-[421px] w-[421px] object-contain" />
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
