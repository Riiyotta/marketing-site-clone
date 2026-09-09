import { useMemo, useState } from 'react'
import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `.sticky_scroll_wrap` in its CMS-index form — a sticky left rail carrying the
   section heading, a search field, a "Clear Filters" button and (on /workflows)
   a chip cloud, beside a long grid or list of collection entries.

   Live uses this on the three big Resources index pages:
     /blog       19723px   heading "All posts" 54px, 2-up 497px card grid,
                           plus a flame-200 "Join the official Jasper community"
                           promo card pinned under the rail's Clear Filters
     /webinars   13265px   heading "All past webinars & replays" 54px, a single
                           column of full-width rows split copy | speaker strip
     /workflows   3173px   heading "All Workflows" 54px, 2-up 439px card grid,
                           and a chip cloud of 27 filter labels under the button

   MEASURED at 1440px (.scrape/measure.mjs against .sticky_scroll_content_wrap):
   the block is a 12-column grid inside the 1360px container with a 40px gap —
   `.sticky_scroll_left` spans 3 (310px), `.sticky_scroll_right` spans 9
   (1010px). /workflows narrows the well to 893px, so the rail there runs 427px.
   The rail's search input is ink-bordered with a 16px magnifier glyph inset
   12px; "Clear Filters" is a full-width flame-600 button. The rail sticks below
   the 68px nav.

   The search box and chips FILTER LOCALLY — live posts to a Webflow CMS search
   endpoint, which this clone must not call, so the same input narrows the
   already-rendered collection instead. Both forms preventDefault.

   `.reveal` sits on the GRID CONTAINER, not on each card: an 80-card grid
   staggered per card produced 80 separate observers and, more importantly, a
   rail item scrolled out of view never intersects and would stay invisible.

   PROPS
     title    string          the 54px Feature rail heading
     chips    [string]        optional filter chip labels (workflows)
     promo    node            optional block under the rail's button (blog)
     items    [any]           the collection, already ordered as live orders it
     search   (item, q) => bool   local match predicate
     render   (item, i) => node   one entry
     layout   'grid'|'list'   2-up card grid (default) or single-column rows
     railWidth px             measured rail width (310 blog/webinars, 427 workflows)
     wellWidth px             measured collection well (1010 / 893)
     empty    string          message shown when a search matches nothing
--------------------------------------------------------------------------- */

const Magnifier = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0 text-ink">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

export default function FilterIndex({
  title, chips = [], promo, items = [], search, render,
  layout = 'grid', railWidth = 310, wellWidth = 1010,
  empty = 'No results match that search.',
}) {
  const ref = useReveal({ threshold: 0 })
  const [query, setQuery] = useState('')
  const [active, setActive] = useState([])

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q && !active.length) return items
    return items.filter((it) => {
      if (q && search && !search(it, q)) return false
      return true
    })
  }, [items, query, active, search])

  const clear = (e) => { e.preventDefault(); setQuery(''); setActive([]) }

  return (
    <section ref={ref} className="clip-bleed bg-surface py-[80px]">
      <div className="u-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">

          {/* ---- sticky rail ---- */}
          <div className="shrink-0 lg:sticky lg:top-[100px] lg:self-start"
               style={{ width: '100%', maxWidth: railWidth }}>
            <h2 className="reveal font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2rem,3.75vw,3.375rem)]">
              {title}
            </h2>

            {/* live posts to a Webflow CMS search endpoint; this filters the
                already-rendered collection instead and never leaves the page */}
            <form onSubmit={(e) => e.preventDefault()} className="mt-8">
              <label className="flex items-center gap-2 border border-ink px-3 py-[10px]">
                <Magnifier />
                <span className="sr-only">Search {title}</span>
                <input type="search" value={query} placeholder="Search"
                       onChange={(e) => setQuery(e.target.value)}
                       className="w-full min-w-0 bg-transparent font-sans text-text-small
                                  text-ink placeholder:text-ink/45 focus:outline-none" />
              </label>

              <button type="button" onClick={clear}
                      className="mt-4 w-full bg-flame-600 px-4 py-[10px] font-sans
                                 text-text-small text-white transition-colors
                                 duration-300 ease-jasper hover:bg-flame-700">
                Clear Filters
              </button>
            </form>

            {chips.length > 0 && (
              <div className="reveal mt-6 flex flex-wrap gap-2" style={{ '--reveal-delay': '80ms' }}>
                {chips.map((c) => {
                  const on = active.includes(c)
                  return (
                    <button key={c} type="button"
                            aria-pressed={on}
                            onClick={() => setActive((a) =>
                              a.includes(c) ? a.filter((x) => x !== c) : [...a, c])}
                            className={`border px-2 py-1 font-mono text-text-tiny
                                        transition-colors duration-300 ease-jasper
                                        ${on ? 'border-ink bg-ink text-white'
                                             : 'border-ink/25 text-ink hover:border-ink'}`}>
                      {c}
                    </button>
                  )
                })}
              </div>
            )}

            {promo && <div className="reveal mt-8" style={{ '--reveal-delay': '120ms' }}>{promo}</div>}
          </div>

          {/* ---- collection well ---- */}
          <div className="min-w-0 flex-1" style={{ maxWidth: wellWidth }}>
            {shown.length === 0 ? (
              <p className="text-text-main text-ink/70">{empty}</p>
            ) : (
              <div className={layout === 'list'
                ? 'reveal flex flex-col'
                : 'reveal grid gap-gutter sm:grid-cols-2'}>
                {shown.map(render)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
