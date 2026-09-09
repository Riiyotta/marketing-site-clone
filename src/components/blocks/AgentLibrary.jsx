import { useMemo, useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { ArrowRight, ChevronDown } from '../Icons'

/* ---------------------------------------------------------------------------
   The Agent Library — the 4445px filter-and-grid block on live /agents.

   MEASURED at 1440px:
     ground     flame-200 (rgb 255,247,245) full-bleed, with a 1440x195
                "Agents Top" stepped avif capping the band and a matching
                "Agents Bottom" closing it.
     layout     the 1360px container split 413px | minmax(0,1fr):
       LEFT rail (sticky)
         eyebrow  mono "The Agent Library" on a flame-300 chip
         h2       Feature 54/56.7 ink, ~14ch measure
         body     ABC ROM 16/22.4
         a 48px search field with a magnifier glyph, then two collapsible
         filter groups ("Filter by AEO Workflow" with Outrank / Optimize /
         Originate radios, "Filter by Marketing Role"), a "Business Only"
         checkbox, a full-width ink "Clear Filters" button, and a bordered
         promo card for Jasper Studio.
       RIGHT grid  two 439px columns on a 16px gutter, 30 cards on load with
         a "Load More" button beneath (live holds 122 in total).
     card       439 x 248 (135-293 by copy length), WHITE on the flame ground,
                1px dark-150 border, 24px pad:
                  a 32px blue-400 icon tile, top-left
                  badges top-RIGHT: Business = green-500, New = yellow-600 with
                    flame-600 label, Popular = blue-400 — mono 14px
                  h3 Feature 24/26.4 ink
                  body ABC ROM 16/22.4
                  "Learn more →" in green-700 at the card foot

   The search box and filters are live UI on the original; they are wired here
   so the rail actually narrows the grid rather than being decorative.

   PROPS
     eyebrow, title, body        left rail header
     promo {title, body, link}   the Jasper Studio card
     workflows / roles           filter group labels
     cards  [{title, desc, icon, badges, workflow, role}]
     pageSize   how many cards render before "Load More" (live: 30)
--------------------------------------------------------------------------- */

/* Measured badge tints. `New` is the only one whose label is not ink. */
const BADGE = {
  Business: 'bg-green-500 text-ink',
  New: 'bg-yellow-600 text-flame-600',
  Popular: 'bg-blue-400 text-ink',
}

function Search({ value, onChange }) {
  return (
    <label className="mt-8 flex h-12 items-center gap-2 border border-dark-200 bg-surface px-3">
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0 text-dark-600">
        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="m10.5 10.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
      </svg>
      <input type="search" value={value} onChange={(e) => onChange(e.target.value)}
             placeholder="Search"
             className="w-full bg-transparent font-sans text-text-main text-ink outline-none
                        placeholder:text-dark-600" />
    </label>
  )
}

function FilterGroup({ label, options, value, onChange, type = 'radio' }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="border-b border-dark-200 py-4">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 text-left">
        <span className="font-sans text-text-main text-ink">{label}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-ink transition-transform duration-300 ease-jasper
                                 ${open ? '' : '-rotate-90'}`} />
      </button>
      {open && (
        <div className="mt-3 flex flex-col gap-2">
          {options.map((o) => (
            <label key={o} className="flex cursor-pointer items-center gap-2">
              <input type={type} name={label} checked={value === o}
                     onChange={() => onChange(value === o ? '' : o)}
                     className="h-3.5 w-3.5 shrink-0 accent-flame-600" />
              <span className="font-sans text-text-small text-ink">{o}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function AgentLibrary({
  eyebrow, title, body, promo, workflows = [], roles = [], cards = [],
  pageSize = 30, capTop, capBottom,
}) {
  const ref = useReveal()
  const [q, setQ] = useState('')
  const [workflow, setWorkflow] = useState('')
  const [role, setRole] = useState('')
  const [businessOnly, setBusinessOnly] = useState(false)
  const [shown, setShown] = useState(pageSize)

  const filtered = useMemo(() => cards.filter((c) => {
    if (q && !(`${c.title} ${c.desc}`.toLowerCase().includes(q.toLowerCase()))) return false
    if (workflow && c.workflow !== workflow) return false
    if (role && c.role !== role) return false
    if (businessOnly && !(c.badges || []).includes('Business')) return false
    return true
  }), [cards, q, workflow, role, businessOnly])

  const clear = () => { setQ(''); setWorkflow(''); setRole(''); setBusinessOnly(false); setShown(pageSize) }

  return (
    <section ref={ref} id="library" className="clip-bleed relative bg-flame-200">
      {capTop && (
        <img src={capTop} alt="" aria-hidden="true"
             className="pointer-events-none w-full object-cover" style={{ height: 195 }} />
      )}

      <div className="u-container grid gap-10 py-12 lg:grid-cols-[413px_minmax(0,1fr)] lg:gap-gutter">

        {/* ---- left rail ---- */}
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          {eyebrow && (
            <p className="reveal eyebrow inline-block bg-flame-300 px-1 text-ink">{eyebrow}</p>
          )}
          <h2 className="reveal mt-4 max-w-[14ch] font-serif text-ink tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            {title}
          </h2>
          {body && (
            <p className="reveal mt-4 max-w-[42ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>{body}</p>
          )}

          <Search value={q} onChange={(v) => { setQ(v); setShown(pageSize) }} />

          {workflows.length > 0 && (
            <FilterGroup label="Filter by AEO Workflow" options={workflows}
                         value={workflow} onChange={(v) => { setWorkflow(v); setShown(pageSize) }} />
          )}
          {roles.length > 0 && (
            <FilterGroup label="Filter by Marketing Role" options={roles}
                         value={role} onChange={(v) => { setRole(v); setShown(pageSize) }} />
          )}

          <label className="mt-4 flex cursor-pointer items-center gap-2">
            <input type="checkbox" checked={businessOnly}
                   onChange={(e) => { setBusinessOnly(e.target.checked); setShown(pageSize) }}
                   className="h-4 w-4 shrink-0 accent-flame-600" />
            <span className="font-sans text-text-main text-ink">Business Only</span>
          </label>

          <button type="button" onClick={clear}
                  className="mt-6 w-full bg-ink px-5 py-3 font-sans text-text-main text-white
                             transition-colors duration-300 ease-jasper hover:bg-blue-700">
            Clear Filters
          </button>

          {promo && (
            <div className="mt-6 border border-dark-200 bg-surface p-6">
              <h3 className="max-w-[20ch] font-serif text-ink tracking-tightest leading-[1.1]
                             text-[clamp(1.5rem,1.95vw,1.75rem)]">
                {promo.title}
              </h3>
              <p className="mt-3 text-text-small text-ink text-pretty">{promo.body}</p>
              <a href={promo.href || '#'} className="link-arrow mt-4 text-text-main">
                {promo.link}<ArrowRight />
              </a>
            </div>
          )}
        </div>

        {/* ---- card grid ---- */}
        <div>
          <div className="grid gap-gutter sm:grid-cols-2">
            {filtered.slice(0, shown).map((c, i) => (
              <article key={c.title}
                       className="reveal flex flex-col border border-dark-150 bg-surface p-6"
                       style={{ '--reveal-delay': `${(i % 6) * 60}ms` }}>
                <div className="flex items-start justify-between gap-3">
                  {c.icon
                    ? <span className="grid h-8 w-8 shrink-0 place-items-center bg-blue-400">
                        <img src={c.icon} alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
                      </span>
                    : <span aria-hidden="true" />}
                  <div className="flex flex-wrap justify-end gap-2">
                    {(c.badges || []).map((b) => (
                      <span key={b} className={`px-2 font-mono text-text-small ${BADGE[b] || 'bg-surface-2 text-ink'}`}>
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mt-4 font-serif text-ink tracking-tighter leading-[1.1]
                               text-[clamp(1.375rem,1.67vw,1.5rem)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-text-main text-ink text-pretty">{c.desc}</p>

                <a href="#" className="link-arrow mt-auto pt-6 self-start text-text-small text-green-700">
                  Learn more<ArrowRight className="h-3 w-3" />
                </a>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-text-main text-dark-700">
              No agents match those filters.
            </p>
          )}

          {shown < filtered.length && (
            <div className="mt-10 flex justify-center">
              <button type="button" onClick={() => setShown(shown + pageSize)}
                      className="btn btn-secondary">
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {capBottom && (
        <img src={capBottom} alt="" aria-hidden="true"
             className="pointer-events-none w-full object-cover" style={{ height: 195 }} />
      )}
    </section>
  )
}
