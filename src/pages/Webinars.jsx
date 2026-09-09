import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'
import { Eyebrow } from '../components/blocks/primitives'
import EditorialHero from '../components/blocks/EditorialHero'
import FilterIndex from '../components/blocks/FilterIndex'
import PageCta from '../components/PageCta'
import { FEATURED_WEBINARS, UPCOMING_WEBINARS, PAST_WEBINARS } from '../data/webinars'

/**
 * /webinars — rebuilt against the live page (17312px at 1440).
 *
 * Section order and heights from .scrape/plat-webinars.json:
 *   hero_vertical_wrap     340   mono "Webinars & Events" eyebrow + 80px h1
 *   editorial_hero_wrap    948   the lead webinar card | "Featured Webinars"
 *                                3-up list, on the shared flame-300 ground
 *   simple_layout_wrap     659   an 80px "Upcoming webinars" heading on a
 *                                full-bleed flame-400 band, over the single
 *                                upcoming row (copy | speaker strip)
 *   sticky_scroll_wrap   13265   "All past webinars & replays" sticky rail
 *                                beside 36 full-width rows, each a copy column
 *                                and a "Hosted by" speaker strip, separated by
 *                                a hairline rule
 *   cta_main_wrap          925   the shared closing CTA
 *
 * All 36 past webinars plus the 1 upcoming and 3 featured entries are the live
 * collection in full — see src/data/webinars.js. Speaker portraits render at
 * 104px with the speaker's OWN 28px company badge overlapping the lower-right;
 * a BCG X guest keeps the BCG mark while the Jasper host keeps the Jasper
 * square, so two speakers in one row can differ.
 */

/**
 * `.webinar_speaker` — a 104px portrait with the speaker's brand badge lapping
 * its lower-right corner, the name in ABC ROM 20px and the role in mono 12px.
 * Falls back to a token-coloured initial so a missing portrait never renders
 * as a broken image.
 */
function Speaker({ name, role, img, badge }) {
  return (
    <li className="flex min-w-0 flex-1 basis-0 flex-col items-center text-center">
      <span className="relative">
        {img ? (
          <img src={img} alt={name} loading="lazy"
               className="h-[104px] w-[104px] rounded-full bg-surface-2 object-cover" />
        ) : (
          <span aria-hidden="true"
                className="grid h-[104px] w-[104px] place-items-center rounded-full
                           bg-flame-400 font-serif text-h3 text-ink">
            {name.charAt(0)}
          </span>
        )}
        {badge && (
          <img src={badge} alt="" aria-hidden="true" loading="lazy"
               className="absolute bottom-0 right-0 h-7 w-7 rounded-full border-2
                          border-surface bg-surface object-contain" />
        )}
      </span>

      <p className="mt-3 font-sans text-h5 leading-1.2 tracking-tight text-ink">{name}</p>
      {role && (
        <p className="mt-1 font-mono text-text-tiny text-ink/70 text-pretty">{role}</p>
      )}
    </li>
  )
}

/**
 * One webinar row: a copy column beside the "Hosted by" speaker strip.
 * Live renders the upcoming row on a flame-200 plate inside the flame-400
 * band, and the past rows flat on white with a hairline rule between them.
 *
 * MEASURED live (.scrape/measure.mjs on `.sticky_scroll_right > * > *`): the
 * past list is a 1010px flex column with a 40px gap, and each row runs
 * 323-340px depending on how long its summary and speaker roles are — so the
 * row carries a 283px minimum and grows with its copy rather than being fixed.
 */
function WebinarRow({ item, tint = '', divider = false }) {
  return (
    <article className={`grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)]
                         ${tint ? `${tint} p-6` : 'min-h-[283px] py-5'}
                         ${divider ? 'mt-10 border-t border-ink/15 pt-10' : ''}`}>
      <div className="flex min-w-0 flex-col">
        <p className="font-sans text-text-small text-ink/60">
          {item.date}{item.tz ? ` ${item.tz}` : ''}
        </p>

        <h3 className="mt-2 max-w-[22ch] font-serif text-ink tracking-tightest leading-[1.05]
                       text-[clamp(1.5rem,2.64vw,2.375rem)]">
          <a href={item.href}
             className="transition-opacity duration-300 ease-jasper hover:opacity-70">
            {item.title}
          </a>
        </h3>

        {item.summary && (
          <p className="mt-4 max-w-[48ch] text-text-small text-ink text-pretty">
            {item.summary}
          </p>
        )}

        <a href={item.href}
           className="link-arrow mt-auto self-start pt-8 font-mono text-text-small text-flame-600">
          {item.cta}<ArrowRight />
        </a>
      </div>

      <div className={tint ? 'bg-flame-300 p-4' : ''}>
        <p className="font-sans text-text-small text-ink/60">Hosted by</p>
        <ul className="mt-4 flex items-start gap-3">
          {item.speakers.map((s) => <Speaker key={s.name + s.role} {...s} />)}
        </ul>
      </div>
    </article>
  )
}

export default function Webinars() {
  const heroRef = useReveal({ threshold: 0 })
  const upRef = useReveal({ threshold: 0 })

  /* The editorial lead is the live upcoming webinar, shown there with a poster
     and a "Register Now" arrow rather than a date/author meta row. */
  const lead = UPCOMING_WEBINARS[0]

  return (
    <>
      {/* 1 + 2 — hero over editorial_hero_wrap, one flame-300 ground */}
      <div ref={heroRef} className="clip-bleed bg-flame-300">
        <section>
          <div aria-hidden="true" className="h-[80px]" />

          <div className="u-container flex flex-col items-center text-center">
            <Eyebrow className="reveal mb-[38px]">Webinars &amp; Events</Eyebrow>

            <h1 className="reveal max-w-[20ch] font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '60ms' }}>
              Learn AI best practices, how to use Jasper, &amp; more
            </h1>
          </div>
        </section>

        <EditorialHero
          lead={{
            title: lead.title, summary: lead.summary, href: lead.href,
            /* MEASURED live: the lead card carries an 832x468 poster (the
               webinar's OG image) above the copy, same box as /blog's art. */
            img: '/assets/webinar-lead-og.png',
          }}
          leadCta="Register Now"
          listLabel="Featured Webinars"
          metaBelow
          items={FEATURED_WEBINARS} />
      </div>

      {/* 3 — simple_layout_wrap, h=659 — the flame-400 upcoming band */}
      <section ref={upRef} className="clip-bleed bg-flame-400">
        <div aria-hidden="true" className="h-[80px]" />

        <div className="u-container">
          <h2 className="reveal text-center font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]">
            Upcoming webinars
          </h2>

          <div className="reveal mt-12" style={{ '--reveal-delay': '80ms' }}>
            {UPCOMING_WEBINARS.map((w) => (
              <WebinarRow key={w.href} item={w} tint="bg-flame-200" />
            ))}
          </div>
        </div>

        <div aria-hidden="true" className="h-[80px]" />
      </section>

      {/* 4 — sticky_scroll_wrap, h=13265 — the 36 past webinars */}
      <FilterIndex
        title="All past webinars & replays"
        layout="list"
        items={PAST_WEBINARS}
        empty="No webinars match that search."
        search={(w, q) =>
          w.title.toLowerCase().includes(q) ||
          (w.summary || '').toLowerCase().includes(q) ||
          w.speakers.some((s) => s.name.toLowerCase().includes(q))}
        render={(w, i) => <WebinarRow key={w.href} item={w} divider={i > 0} />} />

      {/* 5 — cta_main_wrap, h=925 */}
      <PageCta />
    </>
  )
}
