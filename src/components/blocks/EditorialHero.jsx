import { useReveal } from '../../hooks/useReveal'
import { ArrowRight } from '../Icons'

/* ---------------------------------------------------------------------------
   `.editorial_hero_wrap` — the split "one big card | ranked list" band that
   opens both /blog (h=865) and /webinars (h=948).

   MEASURED at 1440px (.scrape/plat-blog.json #4, plat-webinars.json #3,
   .scrape/leaves-blog.json, .scrape/leaves-webinars.json):

     the band sits on the page's flame-300 hero ground, no separate g_background
     .u-container 1360px, split 832px | 1px rule | 463px with a 32px gutter

     LEFT  the lead card, 832px wide on white:
             art     832 x 468, flush to the card's top edge
             h2      Feature 54/56.7 ink, 24px in from the card edge
             summary ABC ROM 16/22.4 ink
             meta    mono 14px, "September 4, 2026  |  Jasper Marketing", with
                     the date in flame-600 and the author in ink/70
           /webinars' lead card is the same box with a poster image and a
           "Register Now ->" arrow link in place of the meta row.

     RIGHT the ranked list, 463px wide:
             a rotated serif ribbon ("Popular posts" / "Featured Webinars") on
             a white chip, then 3 rows separated by nothing but 40px of space:
               meta  mono 14px chip pair (date | author) — /webinars shows only
                     the date, in ink/60, BELOW the title
               h2    Feature 28/30.8 ink
               body  ABC ROM 14/19.6 ink (blog only; webinars rows are bare)

   The rotated ribbon lives on a WRAPPER div — never on the `.reveal` element,
   whose fill:forwards animation silently overrides an inline transform.

   PROPS
     lead      {title, summary, date, author, href, img, cta}
                 `img` renders the 832x468 art; omit for a text-only lead.
                 `cta` renders an arrow link instead of the date/author meta.
     listLabel string   the rotated ribbon text
     items     [{title, summary, date, author, href}]
     metaBelow bool     /webinars puts the row date UNDER the title, in ink/60,
                        and drops the author; /blog puts a date|author chip
                        pair ABOVE it. Default false (the /blog form).
     leadCta   string   label for the lead card's arrow link
--------------------------------------------------------------------------- */

export default function EditorialHero({
  lead, listLabel, items = [], metaBelow = false, leadCta,
}) {
  const ref = useReveal({ threshold: 0 })

  return (
    <section ref={ref} className="clip-bleed">
      <div className="u-container pb-[80px] pt-[56px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,832px)_minmax(0,463px)] lg:gap-8">

          {/* ---- lead card ---- */}
          <article className="reveal flex flex-col overflow-hidden bg-surface">
            {lead.img && (
              <img src={lead.img} alt="" aria-hidden="true" width={832} height={468}
                   className="aspect-[832/468] w-full object-cover" />
            )}

            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-serif text-ink tracking-tightest leading-[1.05]
                             text-[clamp(1.875rem,3.75vw,3.375rem)]">
                <a href={lead.href} className="transition-opacity duration-300 ease-jasper hover:opacity-70">
                  {lead.title}
                </a>
              </h2>

              {lead.summary && (
                <p className="mt-4 max-w-[64ch] text-text-main text-ink text-pretty">
                  {lead.summary}
                </p>
              )}

              {leadCta ? (
                <a href={lead.href}
                   className="link-arrow mt-8 self-start font-mono text-text-small text-flame-600">
                  {leadCta}<ArrowRight />
                </a>
              ) : (
                <p className="mt-8 flex flex-wrap items-center gap-2 font-mono text-text-small">
                  <span className="text-flame-600">{lead.date}</span>
                  <span aria-hidden="true" className="text-ink/40">|</span>
                  <span className="text-ink/70">{lead.author}</span>
                </p>
              )}
            </div>
          </article>

          {/* ---- ranked list ---- */}
          <div className="lg:border-l lg:border-ink/15 lg:pl-8">
            {/* rotation on a wrapper, never on the .reveal element */}
            <div className="mb-8 inline-block" style={{ transform: 'rotate(-1.5deg)' }}>
              <h2 className="reveal inline-block bg-surface px-3 py-1 font-serif
                             text-ink tracking-tightest leading-1
                             text-[clamp(2rem,3.75vw,3.375rem)]">
                {listLabel}
              </h2>
            </div>

            <ul className="flex flex-col gap-10">
              {items.map((it, i) => (
                <li key={it.href + it.title} className="reveal"
                    style={{ '--reveal-delay': `${80 + i * 70}ms` }}>
                  {!metaBelow && (
                    <p className="mb-2 flex flex-wrap items-center gap-2 font-mono text-text-tiny">
                      <span className="bg-flame-200 px-1 text-flame-600">{it.date}</span>
                      <span aria-hidden="true" className="text-ink/40">|</span>
                      <span className="bg-flame-200 px-1 text-ink/70">{it.author}</span>
                    </p>
                  )}

                  <h3 className="font-serif text-ink tracking-tighter leading-[1.1]
                                 text-[clamp(1.375rem,1.95vw,1.75rem)]">
                    <a href={it.href} className="transition-opacity duration-300 ease-jasper hover:opacity-70">
                      {it.title}
                    </a>
                  </h3>

                  {metaBelow ? (
                    <p className="mt-2 font-sans text-text-small text-ink/60">{it.date}</p>
                  ) : (
                    it.summary && (
                      <p className="mt-2 text-text-small text-ink/85 text-pretty">{it.summary}</p>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
