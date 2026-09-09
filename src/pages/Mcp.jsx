import HorizontalVis from '../components/blocks/HorizontalVis'
import ValueProps from '../components/blocks/ValueProps'
import Accordion from '../components/blocks/Accordion'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'

/* ---------------------------------------------------------------------------
   /mcp — "Jasper MCP"

   Block order and heights MEASURED on live jasper.ai/mcp at 1440px
   (.scrape/plat-mcp.json), page total 6433px:

      80  g_section_space
     824  horizontal_vis_wrap  the h1 is the MONO EYEBROW "Jasper MCP" (16px
                               ABC ROM Mono, #00063d) — the 80px Feature line
                               below it is an h2, "Scale your content without
                               losing control". 660x600 hero image on the right.
    1360  hero_vertical_wrap   "Why marketing teams choose Jasper MCP" (54px)
                               over FOUR 38px feature rows, each with a
                               446x245 illustration
    1398  value_props_wrap     "What makes Jasper's MCP different?" (80px) over
                               four flat cards and a 941x910 photo
     559  accordion_1          "Questions about Jasper's MCP", 6 rows
     112  g_section_space
     925  cta_main_wrap        shared closing CTA

   The hero_vertical_wrap here is a 2x2 grid of illustrated rows rather than
   the shared block's centred statement, so it is composed in this file.
--------------------------------------------------------------------------- */

const WHY = [
  { title: 'Enterprise‑grade security', img: '/assets/Security.avif',
    alt: 'Yellow and orange digital illustration of a keyhole formed from stacked blocks.',
    body: 'Encrypted delivery, API key authentication, and full audit logs ensure compliance and IT oversight.' },
  { title: 'Centralized governance', img: '/assets/Governance-2.avif',
    alt: 'Abstract illustration of chat bubbles with check marks.',
    body: 'Brand guidelines flow downstream to every tool, reducing risk of prompt sprawl and shadow IT.' },
  { title: 'Seamless integration', img: '/assets/Integrated.avif',
    alt: 'Vertical green progress indicator with an information panel beside it.',
    body: 'Drive growth and engagement with content that is optimized and personalized across regions, channels, and audiences.' },
  { title: 'Future‑proofed architecture', img: '/assets/Architecture.avif',
    alt: 'Illustration of three smiling faces connected by a network of lines.',
    body: 'Designed to support emerging copilots and AI platforms, so IT teams never start from scratch.' },
]

const DIFFERENT = [
  { title: 'The brain, not the bot', tint: 'bg-flame-300',
    body: 'We’re not another generic AI writer. The Jasper MCP is the intelligence layer that powers the tools you already use.' },
  { title: 'Enterprise scale, out of the box', tint: 'bg-green-300',
    body: 'From global campaigns to ecommerce pages, the Jasper MCP handles high-volume content while keeping IT, compliance, & legal happy.' },
  { title: 'Future-proof your workflows', tint: 'bg-blue-300',
    body: 'As new copilots and AI tools pop up, MCP plugs right in, so your brand never has to start from scratch.' },
  { title: 'Built with marketers in mind', tint: 'bg-violet-400',
    body: 'SEO. Campaigns. Localization. Personalization. MCP is made to output quality content for workflows marketers actually run.' },
]

const FAQ = [
  { q: 'What is the Jasper MCP?',
    a: 'The Jasper MCP (Model Context Protocol) is an API that connects your brand intelligence—voice, compliance, audiences—to the AI tools your teams already use.' },
  { q: 'How does the Jasper MCP work with Claude, Copilot, and OpenAI?',
    a: "The Jasper MCP isn't a replacement for those tools. It powers them with your brand's voice and rules, so every output is on-brand." },
  { q: 'Can the Jasper MCP help with SEO and AEO?',
    a: 'Yes. The Jasper MCP lets you scale organic and digital content strategies while keeping messaging consistent and optimized for search and AI-driven discovery.' },
  { q: "Does Jasper's MCP handle localization?",
    a: 'Absolutely. You can use the Jasper MCP to adapt and localize content across regions and languages at scale, while preserving brand tone.' },
  { q: 'What kind of content can the Jasper MCP scale?',
    a: 'The Jasper MCP can scale everything from product descriptions and ecommerce pages to multi-channel campaigns, emails, and personalized assets.' },
  { q: 'Is the Jasper MCP secure for enterprise use?',
    a: 'Yes. The Jasper MCP is built with enterprise-grade security, compliance, and IT readiness from day one.' },
]

export default function Mcp() {
  const ref = useReveal()

  return (
    <>
      <div aria-hidden="true" className="h-[80px]" />

      {/* 824px — the <h1> is the mono eyebrow on live, not the display line. */}
      <HorizontalVis
        eyebrow="Jasper MCP"
        eyebrowTag="h1"
        title="Scale your content without losing control"
        titleSize="display"
        body="Generate high-quality, on-brand content across every tool in your stack."
        ctas={[
          { label: 'MCP Documentation', variant: 'btn-secondary' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        img={{ src: '/assets/MCP-Hero-A.avif', w: 660, h: 600,
               alt: 'ChatGPT interface showing a prompt to rewrite blogs in the brand voice.' }}
        bg="bg-flame-300"
        spaceTop={112}
        spaceBottom={112}
      />

      {/* 1360px — 2x2 illustrated feature rows */}
      <section ref={ref} className="bg-surface py-[80px] md:py-section-main">
        <div className="u-container">
          <h2 className="reveal mx-auto max-w-[20ch] text-center font-serif text-ink
                         tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]">
            Why marketing teams choose Jasper MCP
          </h2>
          <p className="reveal mx-auto mt-6 max-w-[62ch] text-center text-text-large text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Jasper isn’t another content generator. It’s a control center that makes all your AI
            tools smarter, safer, and more scalable.
          </p>

          <div className="mt-12 grid gap-x-gutter gap-y-12 md:grid-cols-2">
            {WHY.map((w, i) => (
              <article key={w.title} className="reveal"
                       style={{ '--reveal-delay': `${(i % 2) * 100}ms` }}>
                <img src={w.img} alt={w.alt} loading="lazy"
                     className="w-full object-cover" style={{ aspectRatio: '446/245' }} />
                <h3 className="mt-6 max-w-[20ch] font-serif text-ink tracking-tightest leading-1
                               text-[clamp(1.5rem,2.64vw,2.375rem)]">
                  {w.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-text-main text-ink text-pretty">{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 1398px */}
      <ValueProps
        eyebrow="MCP Overview"
        title="What makes Jasper’s MCP different?"
        items={DIFFERENT}
        cardTitleSize="text-[clamp(1.375rem,1.95vw,1.75rem)]"
        photo={{ src: '/assets/Ethics-Hero.png',
                 alt: 'Two people typing on laptops placed on a wooden table.' }}
      />

      <Accordion title="Questions about Jasper's MCP" items={FAQ} />
      <div aria-hidden="true" className="h-[112px]" />

      <PageCta />
    </>
  )
}
