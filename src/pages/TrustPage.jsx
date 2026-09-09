import StickyScroll from '../components/blocks/StickyScroll'
import { Eyebrow, CtaRow, ArrowLink } from '../components/blocks/primitives'
import { useReveal } from '../hooks/useReveal'

/**
 * /trust — "Marketing led, IT-governed AI", the Trust Foundation landing page.
 *
 * NOT the same thing as `src/components/Trust.jsx`, which is the reusable
 * "Enterprise-grade security, quality outputs" SECTION used on / and /pricing.
 * That component is untouched here; this file is the page.
 *
 * Measured live at 1440px (.scrape/plat-trust.json + .scrape/plat-trust.png):
 *   hero_vertical_wrap   541    centred hero on a blue-300 graph-paper ground
 *   sticky_scroll_wrap  5011    sticky 54px heading | 5 tall blue-300 panels
 *   ("more reasons" group)      54px centred heading, one green-300 split
 *                              panel, then two 660px tinted cards side by side
 *   (footer)                   — the page does NOT close with PageCta.
 *
 * Pixel measurements taken off the capture:
 *   hero ground     rgb(206,235,255) = blue-300, with the site's graph-paper
 *                   lattice over it; hero block 541px tall
 *   panels          x 740-1400 (660 wide), first top edge y=653, heights
 *                   928 / 906 / 884 / 949 / 800, 80px white gutters
 *   green panel     x 40-1400 (the full 1360 container), y 5758-6268 (510)
 *   bottom cards    x 40-700 and 740-1400 (660 each), y 6308-6550 (242)
 */

/* .sticky_scroll_item — five panels, copy and art verbatim from the capture. */
const PANELS = [
  {
    title: 'Enterprise-grade security for marketing excellence',
    body: 'From SOC 2 to GDPR, Jasper meets or exceeds key industry certifications—ensuring safe, secure, and compliant use of generative AI across your organization. With features like SSO, audit logs, and granular permissions, IT has the controls they need—without slowing marketers down.',
    link: 'Explore Security', href: '/security',
    img: { src: '/assets/Security-Privacy.png', w: 660, h: 660,
           alt: 'Blue padlock symbol with shield and checkmark icons on a light blue ground.' },
  },
  {
    title: 'Workflows built for marketing impact, governance built for IT peace of mind',
    body: 'Marketers get intuitive tools for building and iterating on brand-safe content. IT maintains control with policy-based governance, ensuring AI use aligns with enterprise standards for data integrity and content control.',
    link: 'Explore Governance', href: '/governance',
    img: { src: '/assets/Governance.avif', w: 660, h: 660,
           alt: 'Three overlapping blue profile cards with user icons.' },
  },
  {
    title: 'Built for compliance, backed by transparency',
    body: 'Jasper is compliant with SOC 2, PCI, DPA, CCPA, and GDPR—making it easier (and safer) to integrate generative AI across your entire content supply chain.',
    link: 'Explore Compliance', href: '#',
    img: { src: '/assets/Compliance.avif', w: 660, h: 660,
           alt: 'Blue shield icon with checklisted compliance terms.' },
  },
  {
    title: 'Powered by the best LLMs in the industry',
    body: 'The only AI-powered platform designed specifically for the way marketers work. Jasper curates best-in-breed, LLM agnostic solutions tailored to specific use cases. We are constantly innovating and integrating new models as they become available future proofing your AI investment. Your company data and outputs are never used to train third-party LLMs.',
    link: 'Explore LLM Optimization', href: '/llm-optimized',
    img: { src: '/assets/LLM-Agnostic.svg', w: 660, h: 660, alt: '' },
  },
  {
    title: 'Secure and flexible deployment options',
    body: 'Options for secure deployment to meet your data needs.',
    link: 'Explore Brand Voice', href: '/brand-voice',
    img: { src: '/assets/Secure-Deployment.png', w: 660, h: 660,
           alt: 'Illustration of a central large blue cube connected to smaller cubes in a network.' },
  },
]

/* The two 660px cards under the green split panel. */
const REASONS = [
  { title: 'A center for misuse or abuse', tint: 'bg-flame-300',
    body: "If you've found a potential vulnerability, notify us to ensure system security and user privacy.",
    link: 'Report Misuse' },
  { title: 'Designed for 99.99% uptime', tint: 'bg-blue-300',
    body: "If you've found a potential vulnerability, notify us to ensure system security and user privacy.",
    link: 'Check Jasper Status' },
]

export default function TrustPage() {
  const heroRef = useReveal({ threshold: 0 })
  const moreRef = useReveal({ threshold: 0 })

  return (
    <>
      {/* hero_vertical_wrap — 541px on the blue-300 graph-paper ground */}
      <section ref={heroRef} className="relative clip-bleed bg-blue-300"
               style={{ minHeight: 541 }}>
        <div aria-hidden="true" className="absolute inset-0 bg-grid"
             style={{ '--grid-color': 'rgba(255,255,255,.55)', '--grid-size': '40px' }} />

        <div className="relative z-10 u-container flex flex-col items-center py-[80px] text-center">
          <Eyebrow className="reveal text-flame-600">Trust Foundation</Eyebrow>

          <h1 className="reveal mt-8 max-w-[1022px] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
              style={{ '--reveal-delay': '80ms' }}>
            Marketing led, IT-governed AI
          </h1>

          <p className="reveal mt-6 max-w-[620px] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Your AI shouldn’t just be powerful—it should be trustworthy. Jasper delivers
            built-in security, governance, and compliance that meet the standards of IT
            leaders, while empowering marketers to move faster with confidence.
          </p>

          <CtaRow className="reveal mt-8 justify-center" style={{ '--reveal-delay': '200ms' }}
                  ctas={[
                    { label: 'Start a Free Trial', variant: 'btn-secondary' },
                    { label: 'Get a Demo', variant: 'btn-primary' },
                  ]} />
        </div>
      </section>

      {/* sticky_scroll_wrap — 5011px: sticky heading | 5 tall blue-300 panels */}
      <StickyScroll
        variant="panels"
        title="We take security and output quality seriously, so you can focus on marketing—not models or audits."
        body="Whether you're in marketing or IT, trust is non-negotiable. Jasper is LLM-optimized and enterprise-ready by default—designed to meet the needs of security-minded organizations while removing friction for the teams that use it every day."
        items={PANELS}
      />

      {/* "More reasons to trust Jasper" — a centred 54px heading, one green
          split panel, then two 660px tinted cards. */}
      <section ref={moreRef} className="clip-bleed bg-surface pb-[112px]">
        <div className="u-container text-center">
          <h2 className="reveal font-serif text-ink tracking-tightest
                         text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
            More reasons to trust Jasper
          </h2>
        </div>

        {/* green-300 split panel — copy left, 640x510 photo flush right */}
        <div className="u-container mt-12">
          <div className="reveal grid grid-cols-1 items-stretch bg-green-300 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="max-w-[16ch] font-serif text-ink tracking-tightest
                             text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1">
                An ethical, responsible approach to AI
              </h3>
              <p className="mt-4 max-w-[46ch] text-text-small text-ink text-pretty">
                At Jasper, we make ethical development of technology a core principle.
                We are intentional about taking an ethics-focused approach to privacy,
                terms of use, and customer education.
              </p>
              <a href="#" className="btn btn-secondary mt-8 self-start">Explore Ethics</a>
            </div>
            <img src="/assets/work-image.jpg" width={640} height={510} loading="lazy"
                 alt="Man showing a document to a woman who is sitting at a laptop in a bright office."
                 className="h-full w-full object-cover" />
          </div>
        </div>

        {/* two 660px cards */}
        <div className="u-container mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {REASONS.map((r, i) => (
            <div key={r.title} className={`reveal flex flex-col ${r.tint} p-6`}
                 style={{ '--reveal-delay': `${i * 90}ms` }}>
              <h2 className="font-serif text-ink tracking-tightest
                             text-[clamp(1.875rem,2.64vw,2.375rem)] leading-1">
                {r.title}
              </h2>
              <p className="mt-4 max-w-[46ch] text-text-small text-ink text-pretty">{r.body}</p>
              <ArrowLink label={r.link} className="mt-8 self-start" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
