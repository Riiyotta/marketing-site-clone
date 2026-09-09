import { useReveal } from '../../hooks/useReveal'

/* ---------------------------------------------------------------------------
   `.simple_layout_wrap u-position-relative` used as a LONG-FORM DOCUMENT —
   the whitepaper body on live /security (section 1440 x 4312).

   MEASURED at 1440px off .scrape/plat-security.png:
     ground   rgb(206,235,255) = blue-300, full bleed, from y=3693 to y=8005
     layout   the 1360px container split into a ~330px left rail and a ~670px
              body column starting at x≈398 (a 12-col 3 | 9 split with the
              body inset), the two separated by the container gutter
     left     an 80px Feature page title ("Security at Jasper") at the top,
              then a sticky jump-nav: 6 underlined 16px links on a 27px
              stride, and a filled navy `btn-tertiary` button 58px below them
     body     h2 Feature 38/38 section headings, h3 ABC ROM 28px sub-headings,
              and 16/22.4 body paragraphs; a 1px rule closes the document and
              an 80px Feature sign-off line sits under it

   The left rail sticks while the body scrolls — measured by the live capture,
   where the nav is still level with "Jasper's responsibility" 1800px into the
   document. The page title scrolls away with the rail's top.

   PROPS
     title     string            the 80px page title in the left rail
     nav       [{label, id}]     jump links; `id` matches a section's id
     cta       {label, variant}  the button under the nav
     sections  [{ id, title, blocks:[ string | {h3, paras:[…]} ] }]
     signoff   node              the 80px line under the closing rule
     bg        tailwind class    section ground (default blue-300)
--------------------------------------------------------------------------- */

export default function DocLayout({
  title, nav = [], cta, sections = [], signoff, bg = 'bg-blue-300',
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className={`clip-bleed ${bg}`}>
      <div aria-hidden="true" className="h-[80px]" />

      <div className="u-container grid grid-cols-1 gap-10
                      lg:grid-cols-[minmax(0,330px)_minmax(0,1fr)] lg:gap-gutter">

        {/* left rail — page title over the sticky jump nav */}
        <div className="lg:sticky lg:top-[120px] lg:self-start">
          {title && (
            <h2 className="reveal max-w-[9ch] font-serif text-ink tracking-tightest
                           text-[clamp(2.5rem,5.55vw,5rem)] leading-1">
              {title}
            </h2>
          )}

          {nav.length > 0 && (
            <nav className="reveal mt-10 flex flex-col items-start gap-[10px]"
                 style={{ '--reveal-delay': '80ms' }}>
              {nav.map((n) => (
                <a key={n.label} href={`#${n.id}`}
                   className="text-text-main text-ink underline underline-offset-4
                              decoration-ink/40 hover:decoration-ink">
                  {n.label}
                </a>
              ))}
            </nav>
          )}

          {cta && (
            <div className="reveal mt-[58px]" style={{ '--reveal-delay': '140ms' }}>
              <a href="#" className={`btn ${cta.variant || 'btn-tertiary'}`}>{cta.label}</a>
            </div>
          )}
        </div>

        {/* body column */}
        <div className="flex flex-col lg:max-w-[672px]">
          {sections.map((s, si) => (
            <section key={s.id} id={s.id}
                     className={`reveal scroll-mt-[120px] ${si ? 'mt-14' : ''}`}
                     style={{ '--reveal-delay': `${(si % 3) * 60}ms` }}>
              <h2 className="font-serif text-ink tracking-tightest
                             text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1">
                {s.title}
              </h2>

              {s.blocks.map((b, bi) =>
                typeof b === 'string' ? (
                  <p key={bi} className="mt-4 text-text-main text-ink text-pretty">{b}</p>
                ) : (
                  <div key={bi} className="mt-8">
                    <h3 className="font-sans font-book text-ink tracking-tighter
                                   text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.1]">
                      {b.h3}
                    </h3>
                    {b.paras.map((p, pi) => (
                      <p key={pi} className="mt-4 text-text-main text-ink text-pretty">{p}</p>
                    ))}
                  </div>
                )
              )}
            </section>
          ))}
        </div>
      </div>

      {signoff && (
        <div className="u-container mt-[100px]">
          <hr className="border-0 border-t border-ink/25" />
          {/* live tags the sign-off line as an h3 at 80px, not a paragraph */}
          <h3 className="reveal mt-[68px] max-w-[18ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1">
            {signoff}
          </h3>
        </div>
      )}

      <div aria-hidden="true" className="h-[80px]" />
    </section>
  )
}
