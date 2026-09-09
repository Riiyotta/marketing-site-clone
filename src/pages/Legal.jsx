import Trust from '../components/Trust'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'

/**
 * /legal — the policy index. The SMALLEST page in the Company family.
 *
 * Measured live at 1440px (.scrape/plat-legal.json, .scrape/plat-legal.png),
 * section order and heights:
 *   hero_vertical_wrap   694   h1 + three surface-2 policy cards
 *   trust_wrap           841   the shared <Trust/> section, verbatim
 *   cta_main_wrap        925   the shared <PageCta/> closing block
 *   (footer)
 *
 * The hero is NOT the usual centred statement block: below the centred h1 and
 * its one-line lede sits a 3-up grid of grey cards, each an h2 (Feature 38px),
 * a two-line grey question/answer lede, a 1px rule, and a list of policy links.
 * Superscript markers (¹-⁵) on five of the links point at footnotes that live
 * only in the link's own title attribute on live — they are rendered here as
 * <sup> so the marks read the same and the note text is carried in `note`.
 */

/* .legal_card — three columns, copy taken verbatim from the live capture.
   `note` is the footnote text live carries alongside the superscript. */
const GROUPS = [
  {
    title: 'For customers',
    lede: ['Use our products or services?', "You'll want to give these a read."],
    links: [
      { label: 'Terms of Service', sup: '1',
        note: 'These Terms apply to customers on our Creator and Pro plans.' },
      { label: 'Usage Policies' },
      { label: 'Software as a Service Agreement', sup: '2',
        note: 'This Agreement applies to customers on our Business plan that do not have an MSA.' },
      { label: 'Evaluation Agreement', sup: '3',
        note: 'This Agreement applies to customers on an evaluation trial of our Business plan.' },
      { label: 'Data Processing Agreement', sup: '4',
        note: 'This Agreement only applies to customers who have signed it or otherwise incorporated it into their contract with Jasper.' },
    ],
  },
  {
    title: 'For everyone',
    lede: ['Visiting our website or product?', "We've got some terms for you too."],
    links: [
      { label: 'Privacy Policy' },
      { label: 'Information Security Requirements' },
      { label: 'Sub-Processors' },
      { label: 'In-Product Cookie Policy' },
      { label: 'Google API Disclosure' },
      { label: 'CCPA Notice to Candidates', sup: '5',
        note: 'This Notice applies to California residents seeking employment at Jasper.' },
    ],
  },
  {
    title: 'For partners',
    lede: ['Are you a Jasper partner?', 'Check out out our programs below.'],
    links: [
      { label: 'Reseller Agreement' },
      { label: 'End User License Agreement' },
      { label: 'Marketing Affiliate Program Agreement' },
    ],
  },
]

export default function Legal() {
  const ref = useReveal({ threshold: 0 })

  return (
    <>
      {/* hero_vertical_wrap — 694px: 80px space, centred header, card grid */}
      <section ref={ref} className="relative clip-bleed bg-surface">
        <div aria-hidden="true" className="h-[80px]" />

        <div className="u-container flex flex-col items-center text-center">
          <h1 className="reveal font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1">
            Jasper legal information
          </h1>
          <p className="reveal mt-6 max-w-[560px] text-text-main text-ink"
             style={{ '--reveal-delay': '80ms' }}>
            All of Jasper’s policies and agreements in one convenient place
          </p>
        </div>

        <div className="u-container mt-12 grid grid-cols-1 gap-gutter md:grid-cols-3">
          {GROUPS.map((g, i) => (
            <div key={g.title}
                 className="reveal flex flex-col bg-surface-2 p-6"
                 style={{ '--reveal-delay': `${i * 90}ms` }}>
              <h2 className="font-serif text-ink tracking-tightest
                             text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1">
                {g.title}
              </h2>
              <p className="mt-3 text-text-small text-ink/60">
                {g.lede[0]}<br />{g.lede[1]}
              </p>
              <hr className="mt-5 border-0 border-t border-dark-300" />
              <ul className="mt-5 flex list-none flex-col gap-[10px]">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href="#" title={l.note || undefined}
                       className="text-text-small text-ink underline-offset-4 hover:underline">
                      {l.label}
                      {l.sup && <sup className="ml-[1px] text-[10px]">{l.sup}</sup>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="h-[80px]" />
      </section>

      <Trust />
      <PageCta />
    </>
  )
}
