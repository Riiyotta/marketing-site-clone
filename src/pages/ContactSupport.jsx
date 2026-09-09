import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/**
 * /contact-support — rebuilt against the live page (2366px at 1440).
 *
 * Section order and measurements from .scrape/plat-contact-support.json and
 * .scrape/plat-contact-support.png:
 *
 *   hero          h1 Feature 80/80 ink centred on a full-bleed flame-400 ground,
 *                 a 16px lede under it, then a row pairing an outline "Get
 *                 Support" button (with a 24px envelope glyph) and a three-up
 *                 40px avatar stack captioned "Responds in 4-8 hours".
 *   resources     two centred 54px Feature lines ("Looking for answers?" /
 *                 "Try one of these helpful resources:") over a 3-up grid of
 *                 surface-2 cards, each an h4 Feature 28px + a 16px body with
 *                 a coral mono arrow link pinned to the card's foot.
 *
 * Live has NO closing cta_main_wrap here — the footer follows the card grid
 * directly — so PageCta is deliberately not rendered.
 *
 * The live h2 on the second card is marked up as an h2 at 28px while its two
 * neighbours are h4s at the same size; that is reproduced verbatim so the
 * heading outline matches live rather than being tidied.
 */

/* .contact_avatar — the three 40px support-team portraits under the CTA. */
const AVATARS = [
  '/assets/2.avif',
  '/assets/1.avif',
  '/assets/3.avif',
]

/* The three resource cards, verbatim from the capture. */
const RESOURCES = [
  {
    tag: 'h4',
    title: 'Search our knowledge center',
    body: 'The Jasper Knowledge Center is full of helpful tutorials and guides, from tool tips to billing support.',
    cta: 'Visit Knowledge Center',
  },
  {
    tag: 'h2',
    title: 'Watch Jasper Foundations',
    body: 'This course gives new Jasper members and admins the foundational knowledge and skills to leverage Jasper to help create any piece of content.',
    cta: 'Watch Lesson',
  },
  {
    tag: 'h4',
    title: 'Connect with our community',
    body: "Inside our community, you'll find self-paced guides and courses, a library of events, resources, and channels to connect with other marketers.",
    cta: 'Visit the Community',
  },
]

/* The 24px duotone envelope that sits inside the "Get Support" button. */
const Envelope = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6 shrink-0">
    <rect x="2.5" y="5" width="19" height="14" stroke="currentColor" strokeWidth="1.5" />
    <path d="m2.5 6 9.5 7 9.5-7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export default function ContactSupport() {
  const heroRef = useReveal({ threshold: 0 })
  const cardsRef = useReveal({ threshold: 0 })

  return (
    <>
      {/* 1 — hero on the flame-400 ground */}
      <section ref={heroRef} className="clip-bleed bg-flame-400">
        <div aria-hidden="true" className="h-[80px]" />

        <div className="u-container flex flex-col items-center text-center">
          <h1 className="reveal max-w-[16ch] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]">
            How can Jasper customer support help you today?
          </h1>

          <p className="reveal mt-6 max-w-[60ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Our friendly customer support team is ready &amp; excited to help with any issue!
          </p>

          <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-6"
               style={{ '--reveal-delay': '160ms' }}>
            <a href="#" className="btn btn-secondary gap-2">
              <Envelope />
              Get Support
            </a>

            <div className="flex flex-col items-center gap-1">
              <div className="flex -space-x-2">
                {AVATARS.map((src) => (
                  <img key={src} src={src} alt="" aria-hidden="true" width={40} height={40}
                       className="h-10 w-10 rounded-full object-cover ring-2 ring-flame-400" />
                ))}
              </div>
              <span className="font-sans text-text-small text-ink">Responds in 4-8 hours</span>
            </div>
          </div>
        </div>

        <div aria-hidden="true" className="h-[80px]" />
      </section>

      {/* 2 — the resource card grid on white */}
      <section ref={cardsRef} className="clip-bleed bg-surface">
        <div aria-hidden="true" className="h-[112px]" />

        <div className="u-container">
          <div className="flex flex-col items-center text-center">
            <h2 className="reveal font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]">
              Looking for answers?
            </h2>
            <h2 className="reveal font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]"
                style={{ '--reveal-delay': '60ms' }}>
              Try one of these helpful resources:
            </h2>
          </div>

          <div className="mt-12 grid gap-gutter md:grid-cols-3">
            {RESOURCES.map((r, i) => {
              const Tag = r.tag
              return (
                <article key={r.title}
                         className="reveal flex flex-col bg-surface-2 p-6"
                         style={{ '--reveal-delay': `${i * 90}ms` }}>
                  <Tag className="font-serif text-ink tracking-tighter leading-[1.1]
                                  text-[clamp(1.5rem,1.95vw,1.75rem)]">
                    {r.title}
                  </Tag>
                  <p className="mt-4 text-text-small text-ink text-pretty">{r.body}</p>
                  <a href="#"
                     className="link-arrow mt-auto self-start pt-10 font-mono
                                text-text-small text-flame-600">
                    {r.cta}<ArrowRight />
                  </a>
                </article>
              )
            })}
          </div>
        </div>

        <div aria-hidden="true" className="h-[112px]" />
      </section>
    </>
  )
}
