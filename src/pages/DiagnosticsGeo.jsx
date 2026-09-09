import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Eyebrow } from '../components/blocks/primitives'
import Accordion from '../components/blocks/Accordion'
import ClosingPhoto from '../components/blocks/ClosingPhoto'
import { GEO_FAQ } from '../data/geoDiagnostic'

/**
 * /diagnostics/geo — rebuilt against the live page (7500px at 1440).
 *
 * Section order and heights from .scrape/plat-diagnostics-geo.json and the
 * deeper .scrape/geo-full.json walk:
 *
 *   hero (u-position-relative)  1636  a white lead-capture card floating on a
 *                                     full-bleed flame-600 grid ground. The
 *                                     card carries the mono "GEO Diagnostic"
 *                                     chip, a two-line 54px display where the
 *                                     first line is faded ink and the SECOND is
 *                                     the page h1, two 16px paragraphs, a 14px
 *                                     italic footnote, the Name/Email/URL form,
 *                                     and two inset panels ("What you'll get",
 *                                     "How it works").
 *   value_props_wrap             817  "The buyer journey just changed." over
 *                                     three tinted stat cards (94% green-400,
 *                                     60% flame-300, 4.4x-23x blue-300), each
 *                                     an 80px Feature number, a 16px claim and
 *                                     a 16px italic source line
 *   build_business_wrap          660  the photo collage beside a 54px heading
 *                                     and four 16px paragraphs
 *   derisk_wrap                  778  "How It Works" on a blue-grid ground: a
 *                                     28px lede, three 001/002/003 score cards
 *                                     on blue-300, and a 28px closer
 *   g_section_space              112
 *   accordion_1                       the 13-row FAQ (src/data/geoDiagnostic.js)
 *   closing_photo_wrap           900  "Your buyers are already asking AI."
 *
 * The hero form is a React lead-capture widget on live, posting to Jasper's own
 * endpoint. It is reproduced as a real form that preventDefaults and shows an
 * inline acknowledgement — it never posts anywhere.
 *
 * The stat cards' faded 54px first line and the italic footnote both use
 * `text-ink/60`, matching live's measured color(srgb 0 .0235 .2392 / 0.6).
 */

/* value_props_wrap — the three evidence cards, verbatim from the capture.
   Live paints each number in the DARKEST step of its card's own ramp:
   green-700 on green-400, flame-800 on flame-300, ink on blue-300. */
const STATS = [
  {
    stat: '94', suffix: '%',
    body: 'of B2B buyers use generative AI in their purchasing decisions.',
    source: 'Source: Forrester, "Beyond The Click" (2026)',
    tint: 'bg-green-400', numColor: 'text-green-700',
  },
  {
    stat: '60', suffix: '%',
    body: "of AI answers cite the wrong source or misrepresent the brand they're describing.",
    source: 'Source: Columbia University',
    tint: 'bg-flame-300', numColor: 'text-flame-800',
  },
  {
    stat: '4.4x–23x', suffix: null,
    body: "higher conversion rate on AI-referred visitors compared to standard organic traffic. The audience is smaller. It's also your highest-intent audience by a wide margin.",
    source: 'Source: Semrush, Ahrefs',
    tint: 'bg-blue-300', numColor: 'text-ink',
  },
]

/* derisk_wrap — the three score cards. */
const SCORES = [
  { n: '001', title: 'Brand Presence', body: 'How often AI mentions you' },
  { n: '002', title: 'Citation Rate', body: 'How often AI actually links to you' },
  { n: '003', title: 'Brand Sentiment', body: 'How AI describes you' },
]

/* The hero card's two inset panels. */
const GETS = [
  'AI visibility score (0-100)',
  'Top 3 AI discoverability blockers with evidence',
  'Originate / Optimize / Outrank action plan',
  'Shareable report URL',
]
const STEPS = ['Discover content', 'Analyze structure', 'Score visibility', 'Generate report']

const Check = () => (
  <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-3 w-3 shrink-0 text-green-700">
    <path d="m2 6 3 3 5-6" stroke="currentColor" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/**
 * The lead-capture form. Live posts to Jasper's diagnostic service; this clone
 * must not call it, so submit is intercepted and acknowledged inline.
 */
function DiagnosticForm() {
  const [sent, setSent] = useState(false)

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          className="mt-8 border border-ink/15 p-6">
      {[
        { id: 'geo-name', label: 'Name', type: 'text', ph: 'Your name' },
        { id: 'geo-email', label: 'Email', type: 'email', ph: 'you@company.com' },
        { id: 'geo-url', label: 'Website URL', type: 'url', ph: 'https://yourcompany.com' },
      ].map((f) => (
        <div key={f.id} className="mb-4">
          <label htmlFor={f.id} className="block font-sans text-text-tiny text-ink/70">
            {f.label} <span className="text-flame-600">*</span>
          </label>
          <input id={f.id} type={f.type} placeholder={f.ph} required
                 className="mt-1 w-full border border-ink/25 px-3 py-2 font-sans
                            text-text-small text-ink placeholder:text-ink/40
                            focus:border-ink focus:outline-none" />
        </div>
      ))}

      <button type="submit"
              className="mt-2 w-full bg-flame-600 px-4 py-3 font-sans text-text-small
                         font-medium text-white transition-colors duration-300
                         ease-jasper hover:bg-flame-700">
        Run My Diagnostic
      </button>

      <p aria-live="polite"
         className="mt-3 text-center font-sans text-text-tiny italic text-ink/60">
        {sent
          ? 'Thanks — this is a clone, so nothing was sent anywhere.'
          : 'By submitting, you agree to receive the report and relevant follow-ups from Jasper.'}
      </p>
    </form>
  )
}

export default function DiagnosticsGeo() {
  const heroRef = useReveal({ threshold: 0 })
  const statsRef = useReveal({ threshold: 0 })
  const bizRef = useReveal({ threshold: 0 })
  const worksRef = useReveal({ threshold: 0 })
  const faqRef = useReveal({ threshold: 0 })

  return (
    <>
      {/* 1 — hero, h=1636: the lead-capture card on the flame grid */}
      <section ref={heroRef} className="relative clip-bleed bg-flame-600">
        <img src="/assets/grid-bg.avif" alt="" aria-hidden="true"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />

        <div className="relative z-10 u-container py-[80px]">
          <div className="reveal mx-auto max-w-[840px] bg-surface p-8 md:p-10">
            <Eyebrow className="mb-6 inline-block bg-flame-300 px-1">GEO Diagnostic</Eyebrow>

            {/* live tags the FIRST line as a faded paragraph and the second as
                the page h1, both at 54px — reproduced rather than merged so the
                heading outline matches */}
            <p className="font-serif text-ink/60 tracking-tightest leading-[1.05]
                          text-[clamp(2.125rem,3.75vw,3.375rem)]">
              Search has changed.
            </p>
            <h1 className="font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]">
              Make sure AI recommends you, not your competitors.
            </h1>

            <p className="mt-8 max-w-[62ch] text-text-main text-ink text-pretty">
              <strong className="font-medium">
                ChatGPT, Claude, Gemini, and AI Overviews are now the first surface buyers
                see — describing your brand, recommending alternatives, and citing
                competitors before any human conversation begins.
              </strong>
            </p>
            <p className="mt-6 max-w-[62ch] text-text-main text-ink text-pretty">
              The GEO Diagnostic from Jasper shows you what AI is saying about your brand
              today, where the gaps are, and what governs the brands AI cites instead.
            </p>
            <p className="mt-6 max-w-[62ch] text-text-small italic text-ink/60 text-pretty">
              Scores reflect a sample of up to 15 site pages and should be read as
              directional signal rather than exhaustive measurement.
            </p>

            <DiagnosticForm />

            <div className="mt-6 border border-ink/15 p-6">
              <h2 className="font-serif text-ink tracking-tighter leading-[1.1] text-h4">
                What you&apos;ll get
              </h2>
              <ul className="mt-4 flex flex-col gap-2">
                {GETS.map((g) => (
                  <li key={g} className="flex items-center gap-2 font-mono text-text-small text-ink">
                    <Check />{g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border border-ink/15 p-6">
              <h2 className="font-serif text-ink tracking-tighter leading-[1.1] text-h4">
                How it works
              </h2>
              <ol className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
                {STEPS.map((s, i) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="flex items-center gap-2 font-mono text-text-small text-ink">
                      <span className="grid h-5 w-5 place-items-center bg-green-400
                                       text-text-tiny text-green-700">
                        {i + 1}
                      </span>
                      {s}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span aria-hidden="true" className="text-ink/40">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — value_props_wrap, h=817 */}
      <section ref={statsRef} className="relative clip-bleed bg-surface py-[112px]">
        {/* the Pink Pattern lattice, rotated on a WRAPPER so the reveal
            animation's forwards fill cannot override it */}
        <div aria-hidden="true"
             className="pointer-events-none absolute right-0 top-0 hidden w-[44%] lg:block"
             style={{ transform: 'rotate(-14deg) translate(8%, -18%)' }}>
          <img src="/assets/Pink-Pattern.svg" alt="" className="h-auto w-full" />
        </div>

        <div className="relative z-10 u-container">
          <h2 className="reveal max-w-[22ch] font-serif text-ink tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]">
            The buyer journey just changed. Most content hasn&apos;t caught up.
          </h2>

          <p className="reveal mt-8 max-w-[52ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Today, the average buyer arrives at your site already informed by AI: about
            your category, your competitors, your claims, and your brand. They&apos;ve
            asked ChatGPT what your product does. They&apos;ve asked Perplexity to compare
            you to alternatives. They&apos;ve read what AI Overviews said about your space.
          </p>
          <p className="reveal mt-6 max-w-[52ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '120ms' }}>
            By the time they reach a sales conversation, their first impression of your
            brand has already been formed — not by your content, but by AI&apos;s
            interpretation of it.
          </p>

          <div className="reveal mt-12 grid gap-gutter md:grid-cols-3"
               style={{ '--reveal-delay': '160ms' }}>
            {STATS.map((s) => (
              <article key={s.stat} className={`flex flex-col ${s.tint}`}>
                <p className={`px-6 pb-4 pt-6 font-serif tracking-tightest leading-1
                               text-[clamp(2.5rem,5.55vw,5rem)] ${s.numColor}`}>
                  {s.stat}
                  {s.suffix && (
                    <sub className="align-baseline text-[0.4em] leading-none">{s.suffix}</sub>
                  )}
                </p>
                <div className="border-t border-ink/10 px-6 pb-6 pt-4">
                  <p className="text-text-small text-ink text-pretty">{s.body}</p>
                  <p className="mt-4 text-text-small italic text-ink/60">{s.source}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — build_business_wrap, h=660 — the photo collage beside the copy */}
      <section ref={bizRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container grid gap-12 lg:grid-cols-2 lg:gap-gutter">
          {/* collage: the 642x794 photo with the coral bars behind and the
              green circles lapping its lower-right, both decorative */}
          <div className="relative">
            <img src="/assets/jasp-sol-hero-decor-1.webp" alt="" aria-hidden="true"
                 loading="lazy"
                 className="pointer-events-none absolute -left-6 -top-8 hidden w-[45%] lg:block" />
            <img src="/assets/Closing-1-p-1600.avif" alt="" aria-hidden="true"
                 loading="lazy"
                 className="reveal relative z-10 w-full object-cover" />
            <img src="/assets/cta-decoration-2-p-1600.avif" alt="" aria-hidden="true"
                 loading="lazy"
                 className="pointer-events-none absolute -bottom-10 right-0 z-20 hidden w-[45%] lg:block" />
          </div>

          <div>
            <h2 className="reveal max-w-[18ch] font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]">
              A mention is not a citation, and only one of them brings a buyer to your site
            </h2>

            {[
              "Most enterprise brands have the same hidden gap. AI knows about them, mentions them, and describes them in answers , but doesn't cite their site as the source. The buyer reads someone else's narrative about your brand, and clicks someone else's CTA.",
              "This isn't an SEO problem. SEO optimizes for ranking. AI search optimizes for trust signals — clear claims, sourced evidence, comparison-friendly formatting, and consistent brand context across every page. Most content was built for human readers and search crawlers, not for AI engines deciding which brand to recommend at the moment a buyer asks.",
              'The first wave of AI search tools tried to close this gap by flooding AI systems with more content — generating volume to maximize mentions. The published customer outcomes have not been encouraging. Several customer cases now show traffic declines within months of deployment, and brand representations that didn’t hold up under scrutiny.',
              'The brands winning in AI search are not optimizing for volume of mentions. They are governing for accuracy of representation.',
            ].map((p, i) => (
              <p key={p.slice(0, 24)}
                 className="reveal mt-6 max-w-[56ch] text-text-main text-ink text-pretty"
                 style={{ '--reveal-delay': `${80 + i * 50}ms` }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — derisk_wrap, h=778 — "How It Works" on the blue grid */}
      <section ref={worksRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container">
          <div className="reveal relative overflow-hidden bg-blue-200 p-8 md:p-14">
            <Eyebrow className="mb-6">How It Works</Eyebrow>

            <p className="max-w-[26ch] font-serif text-ink tracking-tighter leading-[1.2]
                          text-[clamp(1.5rem,1.95vw,1.75rem)] md:max-w-[40ch]">
              Enter your URL, and we&apos;ll analyze your site&apos;s most important pages
              and generate the buyer queries that matter for your category.{' '}
              <strong className="font-medium">
                In minutes, you&apos;ll get three scores that tell the real story:
              </strong>
            </p>

            <div className="mt-10 grid gap-gutter md:grid-cols-3">
              {SCORES.map((s) => (
                <article key={s.n} className="bg-blue-300 p-6">
                  <p className="font-mono text-text-small text-ink/70">{s.n}</p>
                  <h2 className="mt-2 font-serif text-ink tracking-tighter leading-[1.1]
                                 text-[clamp(1.5rem,1.95vw,1.75rem)]">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-[18px] leading-[21.6px] text-ink text-pretty">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-10 max-w-[40ch] font-serif text-ink tracking-tighter leading-[1.2]
                          text-[clamp(1.5rem,1.95vw,1.75rem)]">
              Plus, per-model breakdowns across ChatGPT, Claude, and Gemini, so you see
              exactly where you&apos;re winning and where you&apos;re invisible. Every
              finding comes with{' '}
              <strong className="font-medium">
                severity, evidence, a recommended fix, and a permanent shareable link
              </strong>{' '}
              for your team.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — g_section_space 112 + accordion_1, the 13-row FAQ */}
      <div ref={faqRef} className="clip-bleed bg-surface pb-[112px]">
        <Accordion chip="FAQs"
                   title="Questions about the Jasper GEO Diagnostic"
                   items={GEO_FAQ}
                   openFirst />
      </div>

      {/* 6 — closing_photo_wrap, h=900 */}
      <ClosingPhoto
        title="Your buyers are already asking AI. Find out what it's telling them."
        ctas={[{ label: 'Run Your Free Diagnostic', variant: 'btn-primary' }]}
        photo={{ src: '/assets/Closing-2.avif', alt: '' }} />
    </>
  )
}
