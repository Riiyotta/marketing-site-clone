import ValueProps from '../components/blocks/ValueProps'
import StickyScroll from '../components/blocks/StickyScroll'
import LayoutCards from '../components/blocks/LayoutCards'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'

/* ---------------------------------------------------------------------------
   /studio — "Design and deploy context-rich AI agents and workflows…"

   Block order and heights MEASURED on live jasper.ai/studio at 1440px
   (.scrape/plat-studio.json), page total 6805px:

     796  hero            a full-bleed FLAME-400 band. The live <h1> is the
                          18px ABC ROM sub-line ("Design and deploy context-rich
                          AI agents and workflows that transform your marketing
                          processes."); the 80px Feature line above it
                          ("Unlock AI for every marketer") is a paragraph, and
                          "Jasper Studio" is a white eyebrow chip above that.
                          Below the copy sits an isometric block illustration
                          (Studio Hero 1, 1413x489) bleeding to the band edge.
    1000  studio_animation_trigger — a 10px-wide scroll driver, no content.
     860  window_wrap     a Wistia product film over bg_flame_circles.svg.
                          Third-party embed -> the Studio Hero still is used.
    1275  value_props_wrap "Automate marketing tasks with a no-code agent
                          builder" (80px) over three tinted cards + a photo
     811  sticky_scroll_wrap "Design end-to-end workflows and embed them where
                          marketers work" (54px) pinned left, 3 rows right
     963  layout_cards_wrap "Go from idea to impact—faster" + 3 cards
     925  cta_main_wrap   shared closing CTA

   The 1000px animation trigger is scroll-drive distance with no content of its
   own, so it is NOT reproduced as empty height.
--------------------------------------------------------------------------- */

const BUILDER = [
  { title: 'Automate marketing processes', tint: 'bg-flame-300',
    body: 'Put repeatable tasks on autopilot, so your teams can focus on strategy initiatives with pre-built Agents.' },
  { title: 'Maintain quality at scale', tint: 'bg-green-300',
    body: 'Ensure every output is a product of your brand guidelines, company knowledge, and marketing best practices.' },
  { title: 'Map to your marketing KPIs', tint: 'bg-blue-300',
    body: 'Nobody does marketing quite like you. Build custom agents that map to your business processes and drive business impact.' },
]

const WORKFLOWS = [
  { title: 'Integrated & automated', link: 'AI Engine API Docs',
    body: 'Orchestrate work across critical marketing workflows with an API that embeds AI across your martech stack.' },
  { title: 'Visual & multimodal', link: 'AI Engine API Docs',
    body: 'Build campaign workflows that create and transform on-brand images, and scale them across formats and channels.' },
  { title: 'Powered by world-class LLMs', link: 'AI Engine API Docs',
    body: 'Orchestrate work across critical marketing workflows with an API that embeds AI across your martech stack.' },
]

const FEATURES = [
  { title: 'Agents', tint: 'bg-pink-300', link: { label: 'Explore Agents' },
    img: { src: '/assets/Agents.avif', w: 443, h: 249,
           alt: 'Vertical flow chart with four connected circles on a pink grid.' },
    body: 'Jasper Agents understand your marketing needs, adapt to your working model, and execute fast.' },
  { title: 'Canvas', tint: 'bg-green-300/40', link: { label: 'Explore Canvas' },
    img: { src: '/assets/Canvas.avif', w: 443, h: 249,
           alt: 'Illustration of digital-cursor arrows interacting with documents on a green grid.' },
    body: 'The modern, digital workspace where marketers can plan, create, and collaborate – intuitively and at scale.' },
  { title: 'Audiences', tint: 'bg-violet-400/40', link: { label: 'Explore Audiences' },
    img: { src: '/assets/Audiences.avif', w: 443, h: 249,
           alt: 'Illustration of two faces and four speech-like bubbles on a violet grid.' },
    body: 'Tailor every message to the right audience—without losing your voice.' },
]

export default function Studio() {
  const ref = useReveal()

  return (
    <>
      {/* 796px — full-bleed flame-400 band, isometric art bleeding to the foot */}
      <section ref={ref} className="clip-bleed relative bg-flame-400">
        <div className="u-container pt-[64px] text-center md:pt-[80px]">
          <p className="reveal eyebrow inline-block bg-surface px-2 py-1 leading-none text-ink">
            Jasper Studio
          </p>
          {/* live: an 80px Feature PARAGRAPH — the page <h1> is the line below */}
          <p className="reveal mx-auto mt-6 max-w-[14ch] font-serif text-ink tracking-tightest
                        leading-1 text-[clamp(2.5rem,5.55vw,5rem)]"
             style={{ '--reveal-delay': '80ms' }}>
            Unlock AI for every marketer
          </p>
          <h1 className="reveal mx-auto mt-6 max-w-[54ch] font-sans text-[18px] leading-[21.6px]
                         text-ink text-pretty"
              style={{ '--reveal-delay': '140ms' }}>
            Design and deploy context-rich AI agents and workflows that transform your marketing
            processes.
          </h1>
          <div className="reveal mt-8" style={{ '--reveal-delay': '200ms' }}>
            <a href="#" className="btn btn-primary">Get A Demo</a>
          </div>
        </div>

        {/* .hero art — the isometric block cluster. Live ships it as THIRTEEN
            separate 2984x1032 avifs, one per column, each already positioned
            on the full canvas; the hero animation drops them in one at a time.
            Rendering only the first (as an earlier draft did) shows a single
            stray block, so all thirteen are stacked at the same origin to
            reconstruct the complete cluster at rest. */}
        <div className="reveal relative mt-10 w-full" style={{ '--reveal-delay': '160ms' }}>
          <img src="/assets/Studio-Hero-1.avif"
               alt="Isometric cluster of coral blocks, each face carrying a marketing tool glyph."
               loading="lazy"
               className="w-full max-w-none object-contain"
               style={{ aspectRatio: '2984/1032' }} />
          {Array.from({ length: 12 }, (_, i) => i + 2).map((n) => (
            <img key={n} src={`/assets/Studio-Hero-${n}.avif`} alt="" aria-hidden="true"
                 loading="lazy"
                 className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
          ))}
        </div>
      </section>

      {/* 860px — window_wrap. Live embeds a Wistia product film over the
          flame-circles SVG; per the iframe policy the still frame is used and
          the surrounding panel geometry is reproduced, not invented height. */}
      <section className="clip-bleed relative bg-flame-200 py-[80px]">
        <img src="/assets/bg_flame_circles.svg" alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <img src="/assets/bg_sticky_lines.svg" alt="" aria-hidden="true" loading="lazy"
             className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-container
                        object-cover opacity-60" />
        <div className="u-container relative">
          <img src="/assets/Studio-Hero-7.avif" alt="Jasper Studio agent builder, testing an app against product context."
               loading="lazy"
               className="reveal mx-auto w-full max-w-[1200px] border border-dark-150 object-contain" />
        </div>
      </section>

      {/* 1275px */}
      <ValueProps
        eyebrow="Create Custom Agents"
        title="Automate marketing tasks with a no-code agent builder"
        items={BUILDER}
        photo={{ src: '/assets/Riso-1.png',
                 alt: 'Three colleagues having a discussion around a laptop in a bright office.' }}
      />

      {/* 811px */}
      <StickyScroll
        eyebrow="Create Custom Workflows"
        title="Design end-to-end workflows and embed them where marketers work"
        body="Interested in learning more?"
        cta={{ label: 'Get A Demo', variant: 'btn-primary' }}
        items={WORKFLOWS}
      />

      {/* 963px */}
      <LayoutCards
        eyebrow="Features"
        title="Go from idea to impact—faster"
        body="Jasper gives you the tools to build, scale, and optimize campaigns in one place."
        ctas={[{ label: 'Explore The Platform', variant: 'btn-secondary' }]}
        cards={FEATURES}
        spaceBottom={0}
      />

      <PageCta />
    </>
  )
}
