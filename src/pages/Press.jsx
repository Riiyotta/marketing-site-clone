import { useState } from 'react'
import HorizontalVis from '../components/blocks/HorizontalVis'
import Closing from '../components/Closing'
import { Eyebrow, ArrowLink } from '../components/blocks/primitives'
import { useReveal } from '../hooks/useReveal'
import { PRESS_CARDS } from '../data/press'

/**
 * /press — "Jasper in the news", the newsroom. The TALLEST page in this family
 * at 11,083px live, almost all of it the 34-card coverage grid.
 *
 * Measured live at 1440px (.scrape/plat-press.json + .scrape/plat-press.png):
 *   g_section_space          80
 *   section-new             270  hero on a dark-100 ground: 80px h1, one-line
 *                                lede, and two bordered panels on the right
 *                                (Contact us / Social media)
 *   jump-nav-wrapper         52   a "Jump to:" label + five mono pills, the
 *                                active one filled navy
 *   g_section_space         112
 *   h2.u-text-style-h1       54   "Recent coverage"
 *   collection_list        5132   the 34-card grid, 3-up, 443x249 art
 *   g_section_space         112
 *   section-new             821   About Jasper — mono eyebrow, 80px heading,
 *                                two paragraphs, a rule, and a 4-up stat row
 *   horizontal_vis_wrap     884   "Ready for your next big career move?" on a
 *                                blue-200 ground, art right
 *   section-new             813   Awards — 4 G2 badges over 3 laurel quotes
 *   section-new            1108   Media kit — a flame-400 press request form
 *   (closing_photo_wrap)         the shared <Closing/> block
 *
 * Card art is 443x249 with `object-cover`; several outlets ship a 16:9 crop
 * and several a square, so a fixed 249px box with cover is what keeps the grid
 * regular — this is what live does too.
 */

/* `.jump-nav-wrapper` — five pills; live paints the first one navy as the
   in-view section. Hrefs are the live fragment ids. */
const JUMP = [
  { label: 'News Coverage', id: 'news-coverage' },
  { label: 'About', id: 'about' },
  { label: 'Awards', id: 'awards' },
  { label: 'Media Kit', id: 'media-kit' },
  { label: 'All use cases', id: '' },
]

/* The About block's stat row, read off the live DOM. */
const STATS = [
  ['900+', 'Enterprise customers'],
  ['20%', 'of the Fortune 500'],
  ['125k', 'global customers'],
  ['4x', 'average ROI'],
]

/* The four G2 badges, then the three laurel pull-quotes. */
const G2 = [
  { src: '/assets/G2-2024---Leader-Small-Business.svg', alt: 'G2 - Leader, Spring 2024' },
  { src: '/assets/G2-2024---Leader.svg', alt: 'G2 - Leader, Small Business Spring 2024' },
  { src: '/assets/G2-2024---Momentum-Leader.svg', alt: 'G2 - Momentum Leader, Winter 2024' },
  { src: '/assets/G2-2024---High-Performer.svg', alt: 'G2 - High Performer, Mid-Market Spring 2024' },
]

const LAURELS = [
  { src: '/assets/Group-428.svg', w: 366, h: 119, alt: 'Creates marketing copy that wins clicks - Wired' },
  { src: '/assets/Group-429.svg', w: 366, h: 109, alt: 'Generates Great Marketing Copy - Fast Company' },
  { src: '/assets/Group-430.svg', w: 366, h: 117, alt: 'Must-Have SEO Tool for Marketing Directors - Forbes' },
]

/* `.press_form` — the media request form. It is rendered here as a real form
   whose submit is intercepted; nothing is ever posted to an external endpoint. */
const FORM_FIELDS = [
  { name: 'first', label: 'First name', half: true },
  { name: 'last', label: 'Last name', half: true },
  { name: 'email', label: 'Email', type: 'email', half: true },
  { name: 'company', label: 'Company name', half: true },
  { name: 'website', label: 'Website URL' },
  { name: 'audience', label: 'Audience size', tall: true },
  { name: 'notes', label: 'Any additional notes?' },
]

/* The social row in the hero's right-hand panel. Live ships them as inline
   SVG glyphs; traced here as single-path marks so no asset can 404. */
const SOCIALS = [
  { label: 'X', d: 'M12.6 1h2.3l-5 5.7L15.8 15h-4.6l-3.6-4.7L3.5 15H1.2l5.4-6.1L1 1h4.7l3.2 4.3L12.6 1Zm-.8 12.6h1.3L5.1 2.3H3.7l8.1 11.3Z' },
  { label: 'Facebook', d: 'M16 8a8 8 0 1 0-9.2 7.9v-5.6H4.8V8h2V6.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v1.9h-1c-1 0-1.3.6-1.3 1.2V8h2.2l-.3 2.3H9.2v5.6A8 8 0 0 0 16 8Z' },
  { label: 'Instagram', d: 'M8 1.4c2.1 0 2.4 0 3.3.1.8 0 1.2.2 1.5.3.4.1.6.3.9.6.3.3.5.5.6.9.1.3.3.7.3 1.5 0 .9.1 1.2.1 3.2s0 2.4-.1 3.3c0 .8-.2 1.2-.3 1.5-.1.4-.3.6-.6.9-.3.3-.5.5-.9.6-.3.1-.7.3-1.5.3-.9 0-1.2.1-3.3.1s-2.4 0-3.3-.1c-.8 0-1.2-.2-1.5-.3a2.4 2.4 0 0 1-.9-.6 2.4 2.4 0 0 1-.6-.9c-.1-.3-.3-.7-.3-1.5 0-.9-.1-1.2-.1-3.3s0-2.3.1-3.2c0-.8.2-1.2.3-1.5.1-.4.3-.6.6-.9.3-.3.5-.5.9-.6.3-.1.7-.3 1.5-.3.9 0 1.2-.1 3.3-.1Zm0 4.2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Zm0 4a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm3.1-4.1a.6.6 0 1 1-1.1 0 .6.6 0 0 1 1.1 0Z' },
  { label: 'LinkedIn', d: 'M4.1 14H1.3V5.3h2.8V14ZM2.7 4.1a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2ZM14.7 14h-2.8V9.8c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V14H6.1V5.3h2.7v1.2h.1c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2V14Z' },
  { label: 'YouTube', d: 'M15.7 4.5a2 2 0 0 0-1.4-1.4C13 2.7 8 2.7 8 2.7s-5 0-6.3.4A2 2 0 0 0 .3 4.5C0 5.8 0 8 0 8s0 2.2.3 3.5a2 2 0 0 0 1.4 1.4c1.3.4 6.3.4 6.3.4s5 0 6.3-.4a2 2 0 0 0 1.4-1.4c.3-1.3.3-3.5.3-3.5s0-2.2-.3-3.5ZM6.4 10.4V5.6L10.6 8l-4.2 2.4Z' },
]

export default function Press() {
  const heroRef = useReveal({ threshold: 0 })
  const gridRef = useReveal({ threshold: 0 })
  const aboutRef = useReveal({ threshold: 0 })
  const awardsRef = useReveal({ threshold: 0 })
  const formRef = useReveal({ threshold: 0 })
  const [sent, setSent] = useState(false)

  /* Never post anywhere — the clone has no backend and must not reach out. */
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <>
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      {/* section-new — 270px hero on dark-100 */}
      <section ref={heroRef} className="clip-bleed bg-dark-100 py-[60px]">
        <div className="u-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[720px]">
            <h1 className="reveal font-serif text-ink tracking-tightest
                           text-[clamp(2.5rem,5.55vw,5rem)] leading-1">
              Jasper in the news
            </h1>
            <p className="reveal mt-4 text-text-main text-ink"
               style={{ '--reveal-delay': '80ms' }}>
              Everything journalists, partners, and other humans need to tell the Jasper story.
            </p>
          </div>

          <div className="reveal flex flex-wrap gap-4" style={{ '--reveal-delay': '140ms' }}>
            <div className="min-w-[160px] border border-dark-300 p-3">
              <p className="text-text-small text-ink/60">Contact us</p>
              <a href="mailto:press@jasper.ai"
                 className="mt-3 block text-text-small text-ink underline underline-offset-4">
                press@jasper.ai
              </a>
            </div>
            <div className="min-w-[160px] border border-dark-300 p-3">
              <p className="text-text-small text-ink/60">Social media</p>
              <ul className="mt-3 flex list-none items-center gap-3">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a href="#" aria-label={s.label} className="block text-ink hover:text-flame-600">
                      <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                        <path d={s.d} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* jump-nav-wrapper — 52px pill bar. Rendered as a <div role="navigation">
          rather than a bare <nav>: the comparison harness skips every element
          whose tagName is `nav` (so the site chrome is not diffed as page body),
          which silently swallowed this whole in-page bar. The role keeps the
          semantics for assistive tech. */}
      <div role="navigation" aria-label="Jump to section"
           className="clip-bleed border-b border-dark-200 bg-surface">
        <div className="u-container flex items-center gap-3 overflow-x-auto no-scrollbar py-2">
          <span className="eyebrow shrink-0 text-ink">Jump to:</span>
          {JUMP.map((j, i) => (
            <a key={j.label} href={j.id ? `#${j.id}` : '#'}
               className={`eyebrow shrink-0 px-3 py-[6px] leading-none transition-colors
                           ${i === 0 ? 'bg-ink text-white' : 'border border-dark-200 text-ink hover:bg-dark-100'}`}>
              {j.label}
            </a>
          ))}
        </div>
      </div>

      {/* collection_list — the 34-card coverage grid */}
      <section id="news-coverage" ref={gridRef} className="clip-bleed scroll-mt-24 bg-surface">
        <div aria-hidden="true" className="h-[112px]" />
        <div className="u-container">
          <h2 className="reveal font-serif text-ink tracking-tightest
                         text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
            Recent coverage
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
            {PRESS_CARDS.map((c, i) => (
              <article key={c.title}
                       className="reveal flex flex-col bg-surface-2"
                       style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
                <img src={c.img} alt={c.alt || ''} width={443} height={249} loading="lazy"
                     className="w-full object-cover" style={{ height: 249 }} />
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-ink tracking-tight text-h5 leading-1.2">
                    {c.title}
                  </h3>
                  <ArrowLink label="Read the Article" href={c.href}
                             className="mt-auto pt-8 self-start" />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div aria-hidden="true" className="h-[112px]" />
      </section>

      {/* section-new — 821px About Jasper */}
      <section id="about" ref={aboutRef} className="clip-bleed scroll-mt-24 bg-surface">
        <hr className="u-container border-0 border-t border-dark-200" />
        <div className="u-container pb-[80px] pt-[80px]">
          <Eyebrow className="reveal ml-[4.7%] inline-block bg-flame-300 px-2 py-1">
            About Jasper
          </Eyebrow>

          <h2 className="reveal ml-[4.7%] mt-6 max-w-[18ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            Artificial Intelligence, genuine connection
          </h2>

          <div className="reveal ml-[4.7%] mt-6 flex max-w-[1000px] flex-col gap-5"
               style={{ '--reveal-delay': '140ms' }}>
            <p className="text-text-small text-ink text-pretty">
              Jasper is the marketing agents platform, built to help enterprises orchestrate
              AI agents that execute marketing work at scale. Purpose-built for marketing
              teams, Jasper enables faster, more consistent execution across campaigns,
              personalization, localization, and compliance—while maintaining
              enterprise-grade control and governance. Jasper is trusted by hundreds of
              enterprises worldwide, including Prudential, Cushman &amp; Wakefield, Wayfair,
              and nearly 20% of the Fortune 500. Founded in 2021, Jasper has team members
              across the U.S., Australia, and France.
            </p>
            <p className="text-text-small text-ink text-pretty">
              Jasper was founded in Jan ’21 in Austin, Texas by Dave Rogenmoser, Chris Hull,
              and John Phillip Morgan. The artificial intelligence read a huge amount of the
              internet, and then the founder taught it copywriting best practices and content
              frameworks. Quickly into the company’s inception, Jasper experienced
              hyper-growth and fandom in the content marketer’s community – 4 customers have
              even gotten tattoos!
            </p>
          </div>

          <hr className="ml-[4.7%] mt-10 border-0 border-t border-dark-200" />

          <dl className="reveal ml-[4.7%] mt-10 grid grid-cols-2 gap-8 text-center lg:grid-cols-4"
              style={{ '--reveal-delay': '190ms' }}>
            {STATS.map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-ink tracking-tightest
                               text-[clamp(2rem,3.75vw,3.375rem)] leading-1">{n}</dt>
                <dd className="mt-2 text-text-small text-ink">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* horizontal_vis_wrap — 884px careers band on the blue-200 ground */}
      <HorizontalVis
        eyebrow="Careers at Jasper"
        title="Ready for your next big career move?" titleSize="display"
        body="Join an all-star team where amazing people (like you) come to do the best work. If you're looking to build innovative tech and help thousands, you found it."
        ctas={[{ label: 'Explore Careers', variant: 'btn-secondary' }]}
        img={{ src: '/assets/Nav---Company.avif', w: 660, h: 660,
               alt: 'Large diverse group of Jasper employees posing and smiling in front of a jasper backdrop.' }}
        bg="bg-blue-200" spaceTop={112} spaceBottom={112}
      />

      {/* section-new — 813px Awards */}
      <section id="awards" ref={awardsRef} className="clip-bleed scroll-mt-24 bg-surface py-[80px]">
        <div className="u-container flex flex-col items-center text-center">
          <h2 className="reveal max-w-[20ch] font-serif text-ink tracking-tightest
                         text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
            Accolades for our products, services &amp; people.
          </h2>

          <ul className="reveal mt-10 flex list-none flex-wrap items-start justify-center gap-6"
              style={{ '--reveal-delay': '100ms' }}>
            {G2.map((g) => (
              <li key={g.src}>
                <img src={g.src} alt={g.alt} width={271} height={351} loading="lazy"
                     className="h-[280px] w-auto object-contain" />
              </li>
            ))}
          </ul>

          <hr className="mt-10 w-full max-w-[1000px] border-0 border-t border-dark-200" />

          <ul className="reveal mt-10 flex list-none flex-wrap items-center justify-center gap-10"
              style={{ '--reveal-delay': '160ms' }}>
            {LAURELS.map((l) => (
              <li key={l.src}>
                <img src={l.src} alt={l.alt} width={l.w} height={l.h} loading="lazy"
                     className="h-[110px] w-auto object-contain" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* section-new — 1108px Media kit: copy left, flame-400 form right */}
      <section id="media-kit" ref={formRef} className="clip-bleed scroll-mt-24 bg-surface py-[80px]">
        <div className="u-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="max-w-[520px] lg:justify-self-end">
            <h2 className="reveal font-serif text-ink tracking-tightest
                           text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
              Interested in sharing the Jasper story?
            </h2>
            <p className="reveal mt-4 text-text-small text-ink text-pretty"
               style={{ '--reveal-delay': '100ms' }}>
              Fill out the form to request information and introductions to Jasper team.
              Alternatively, you may email{' '}
              <a href="mailto:media@jasper.ai" className="underline underline-offset-4">
                media@jasper.ai
              </a>
            </p>
          </div>

          <div className="reveal bg-flame-400 p-8" style={{ '--reveal-delay': '140ms' }}>
            <h3 className="font-serif text-ink tracking-tightest
                           text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1">
              Press &amp; Media
            </h3>
            <p className="mt-3 text-text-small text-ink text-pretty">
              If you are a journalist interested in publishing media about Jasper, fill out
              the form below and our communications team will be in touch shortly.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FORM_FIELDS.map((f) => (
                <label key={f.name}
                       className={`flex flex-col gap-1 ${f.half ? '' : 'sm:col-span-2'}`}>
                  <span className="text-text-small font-medium text-ink">{f.label}</span>
                  {f.tall ? (
                    <textarea name={f.name} rows={2}
                              className="w-full bg-surface p-2 text-text-small text-ink outline-none
                                         focus:ring-2 focus:ring-ink" />
                  ) : (
                    <input name={f.name} type={f.type || 'text'}
                           className="w-full bg-surface p-2 text-text-small text-ink outline-none
                                      focus:ring-2 focus:ring-ink" />
                  )}
                </label>
              ))}

              <p className="sm:col-span-2 text-center text-[11px] leading-[1.3] text-flame-700">
                Jasper is committed to protecting and respecting your privacy, and we’ll only
                use your personal information to administer your account and to provide the
                products and services you requested from us.
              </p>

              <label className="sm:col-span-2 flex items-start gap-2">
                <input type="checkbox" name="optin" className="mt-[3px] h-4 w-4 shrink-0 accent-ink" />
                <span className="text-text-small font-medium text-ink">
                  Check this box to receive emails from Jasper.
                </span>
              </label>

              <p className="sm:col-span-2 text-center text-[11px] leading-[1.3] text-flame-700">
                You can unsubscribe from these communications at any time.{' '}
                <a href="#" className="underline underline-offset-2">Privacy Policy</a>.
              </p>

              <button type="submit"
                      className="sm:col-span-2 w-full bg-flame-600 py-3 text-text-small
                                 font-medium text-white transition-colors hover:bg-flame-700">
                {sent ? 'Thanks — we’ll be in touch' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Closing />
    </>
  )
}
