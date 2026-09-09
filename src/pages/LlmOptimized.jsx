import HorizontalVis from '../components/blocks/HorizontalVis'
import PageCta from '../components/PageCta'
import { Eyebrow, CtaRow } from '../components/blocks/primitives'
import { useReveal } from '../hooks/useReveal'

/**
 * /llm-optimized — "The best AI models, governed and on-brand".
 *
 * Measured live at 1440px (.scrape/plat-llm-optimized.json + the PNG):
 *   llm_header_wrap        1027  copy left | model-router collage right, on a
 *                                blue-200 graph-paper ground
 *   g_section_space         180
 *   g_section_space         180  (u-display-none-tab — desktop only)
 *   marketing_outcomes_wrap 572  54px heading left | avatar/stat collage right
 *   g_section_space          80
 *   derisk_wrap             628  centred mono eyebrow + two serif paragraphs
 *                                on the blue-200 graph-paper ground
 *   build_business_wrap     612  photo + geometry left, 54px copy right
 *   g_section_space         112
 *   cta_main_wrap           925  the shared PageCta
 *
 * The hero collage is a rotating three-slide router on live; it is rendered
 * here as the slide the capture froze on (META active, meta-headshot). The
 * four model tiles ship from the CDN as complete images with their own labels
 * and check state, so they are drawn as images rather than recomposed.
 */

/* `.llm_model_card` — the four router tiles. The hero cycles four slides on
   live; this renders SLIDE 2 (Google active), whose exact geometry was
   measured off the running page:
     llm-grid.png        773 x 665 at (627, 138)
     gemini-headshot     381 x 433 at (823, 180)
     stripes-pattern-blue      389 x 517 at (1061, 141)
     triangle-pattern-deep-pink 598 x 608 at (542, 188)
     info-icon 20x20 at (544, 265), pointer 22x20 at (764, 367)
     the four tiles      180 x 177 at y=613, x = 627 / 825 / 1022 / 1220
   All coordinates are relative to the 1027px-tall hero section, so the whole
   collage is absolutely placed inside a 1440 x 1027 stage that scales down
   with the viewport. The ACTIVE tile is the bright-green `-active` asset. */
const MODELS = [
  { src: '/assets/openai.avif', x: 627, alt: "OpenAI logo above the text 'GPT-4.1' on a dark green tile." },
  { src: '/assets/gemini-active.avif', x: 825, alt: "Gemini logo with small stars above the text 'Gemini 2.5 Pro' on a bright green tile." },
  { src: '/assets/meta.avif', x: 1022, alt: "Meta logo with the title 'META' above and 'LLAMA 4' below on a dark green tile." },
  { src: '/assets/claude.avif', x: 1220, alt: "Green square with the word 'ANTHROPIC' at top and a claude glyph." },
]

/* `.marketing_outcomes_item` — four persona tiles, each shipping its own
   coloured ground and role label baked into the image, with a stat badge
   floated over its corner. Percentages are verbatim from the live art. */
const OUTCOMES = [
  { img: '/assets/pipeline.avif', alt: 'Smiling man with beard wearing a green shirt on a coral ground.',
    stat: '4X', label: 'Pipeline', statBg: 'bg-flame-600', statFg: 'text-white',
    labelBg: 'bg-flame-800', labelFg: 'text-white',
    pos: 'left-[2%] top-[4%]', badge: '-left-[14%] -top-[10%]' },
  { img: '/assets/ctrs.avif', alt: 'Smiling woman with long curly hair on a bright green ground.',
    stat: '+25%', label: 'CTRs', statBg: 'bg-green-600', statFg: 'text-ink',
    labelBg: 'bg-green-800', labelFg: 'text-green-600',
    pos: 'left-[38%] top-0', badge: '-right-[30%] -top-[12%]' },
  { img: '/assets/sku.avif', alt: 'Smiling woman with short brown hair wearing an orange shirt on a pink ground.',
    stat: '+200', label: 'more SKUs live per month', statBg: 'bg-pink-700', statFg: 'text-white',
    labelBg: 'bg-pink-800', labelFg: 'text-white',
    pos: 'left-[14%] top-[48%]', badge: '-left-[38%] -top-[8%]' },
  { img: '/assets/field-marketing-avatar.png', alt: 'Smiling man with curly hair wearing an orange knit hat on a blue ground.',
    stat: '+30%', label: 'sales engagement', statBg: 'bg-blue-600', statFg: 'text-white',
    labelBg: 'bg-blue-800', labelFg: 'text-white',
    pos: 'left-[52%] top-[42%]', badge: '-right-[34%] -top-[14%]' },
]

export default function LlmOptimized() {
  const heroRef = useReveal({ threshold: 0 })
  const outRef = useReveal({ threshold: 0 })
  const deriskRef = useReveal({ threshold: 0 })

  return (
    <>
      {/* llm_header_wrap — 1027px on the blue-200 graph-paper ground */}
      <section ref={heroRef} className="relative clip-bleed bg-blue-200">
        <div aria-hidden="true" className="absolute inset-0 bg-grid"
             style={{ '--grid-color': 'rgba(255,255,255,.7)', '--grid-size': '40px' }} />

        {/* the collage sits in a 1440x1027 stage so every measured coordinate
            below is literal; it scales with the viewport via the aspect box */}
        <div className="relative mx-auto w-full max-w-[1440px]"
             style={{ aspectRatio: '1440 / 1027' }}>
          <div className="absolute inset-0" style={{ containerType: 'inline-size' }}>
            <div className="absolute inset-0 origin-top-left"
                 style={{ width: 1440, height: 1027, transform: 'scale(min(1, 100cqw / 1440))' }}>

              {/* copy column — measured at x=40 (the 1360 container's left
                  edge) with a 560px measure. The substitute Playfair face runs
                  ~9% wider than the licensed Feature, so an 80px h1 set to the
                  live 560px measure spills "governed" past the column and into
                  the collage. The heading gets its own narrower 500px measure
                  to restore the live line breaks; the font size is untouched. */}
              <div className="absolute flex flex-col"
                   style={{ left: 40, top: 190, width: 560 }}>
                <Eyebrow className="reveal mb-6">LLM-Optimized</Eyebrow>

                <h1 className="reveal font-serif text-ink tracking-tightest
                               text-[clamp(2.5rem,5.55vw,5rem)] leading-1"
                    style={{ '--reveal-delay': '80ms', maxWidth: 500 }}>
                  The best AI models, governed and on-brand
                </h1>

                <p className="reveal mt-6 max-w-[500px] text-text-main text-ink text-pretty"
                   style={{ '--reveal-delay': '140ms' }}>
                  Jasper routes every marketing task to the best-performing model for the job,
                  then layers in your brand, context, and guardrails. You get higher-quality
                  output without choosing, testing, or maintaining models. Your team focuses on
                  the marketing; we manage the AI underneath.
                </p>

                <CtaRow className="reveal mt-8" style={{ '--reveal-delay': '200ms' }}
                        ctas={[
                          { label: 'Start Free Trial', variant: 'btn-secondary' },
                          { label: 'Get A Demo', variant: 'btn-primary' },
                        ]} />
              </div>

              {/* geometry BEHIND the slab */}
              <img src="/assets/triangle-pattern-deep-pink.svg" alt="" aria-hidden="true"
                   className="pointer-events-none absolute max-w-none"
                   style={{ left: 542, top: 188, width: 598, height: 608 }} />

              {/* the blue stepped slab */}
              <img src="/assets/llm-grid.png" alt="" aria-hidden="true" loading="eager"
                   className="pointer-events-none absolute max-w-none"
                   style={{ left: 627, top: 138, width: 773, height: 665 }} />

              <img src="/assets/stripes-pattern-blue.svg" alt="" aria-hidden="true"
                   className="pointer-events-none absolute max-w-none"
                   style={{ left: 1061, top: 141, width: 389, height: 517 }} />

              {/* the persona cutout */}
              <img src="/assets/gemini-headshot.avif" loading="eager"
                   alt="Smiling woman with curly hair and glasses wearing a striped shirt."
                   className="pointer-events-none absolute max-w-none object-contain"
                   style={{ left: 823, top: 180, width: 381, height: 433 }} />

              {/* the marketer's prompt callout — .llm_prompt_card, measured
                  from the info glyph at (544,265) and the pointer at (764,367) */}
              <div className="absolute" style={{ left: 524, top: 245, width: 240 }}>
                <div className="flex gap-2 bg-violet-300 p-4">
                  <img src="/assets/info-icon.svg" alt="" aria-hidden="true"
                       width={20} height={20} className="mt-1 h-5 w-5 shrink-0" />
                  <p className="font-serif text-ink tracking-tightest text-h4 leading-1.1">
                    Create an end-to-end email marketing campaign
                  </p>
                </div>
                <span className="eyebrow ml-6 inline-block bg-green-600 px-2 py-[3px]
                                 text-[12px] leading-none text-ink">
                  Email Marketer
                </span>
              </div>

              {/* the four router tiles at y=613 */}
              {MODELS.map((m) => (
                <img key={m.src} src={m.src} alt={m.alt} loading="eager"
                     className="absolute max-w-none object-contain"
                     style={{ left: m.x, top: 613, width: 180, height: 177 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* live carries TWO g_section_space blocks here, 180px each — one
          always-on and one desktop-only (`u-display-none-tab`). */}
      <div aria-hidden="true" className="h-[180px] bg-surface" />
      <div aria-hidden="true" className="hidden h-[180px] bg-surface lg:block" />

      {/* marketing_outcomes_wrap — 572px: 54px heading left, collage right */}
      <section ref={outRef} className="clip-bleed bg-surface">
        <div className="u-container grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex max-w-[500px] flex-col">
            <h2 className="reveal max-w-[13ch] font-serif text-ink tracking-tightest
                           text-[clamp(2.125rem,3.75vw,3.375rem)] leading-[1.05]">
              Higher-performing content, matched to the best model for the job
            </h2>
            <p className="reveal mt-6 text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '100ms' }}>
              Every output is optimized across leading LLMs. Jasper continuously tests new
              models as they launch, scoring each against real marketing tasks. When a model
              performs better for a job like long-form SEO, product descriptions, or ad
              variation, Jasper routes that work to it automatically. You always get the
              strongest available model for the task, whether that’s OpenAI, Google,
              Anthropic, Meta, or whatever launches next.
            </p>
          </div>

          {/* the avatar / stat collage — a fixed-ratio stage so the absolute
              tiles keep their measured relationship at every width */}
          <div className="reveal relative mx-auto w-full max-w-[640px]"
               style={{ '--reveal-delay': '120ms', aspectRatio: '640 / 520' }}>
            <img src="/assets/mesh.avif" alt="" aria-hidden="true" loading="lazy"
                 className="pointer-events-none absolute inset-0 h-full w-full object-contain
                            opacity-70" />
            {OUTCOMES.map((o) => (
              <div key={o.img} className={`absolute w-[34%] ${o.pos}`}>
                <img src={o.img} alt={o.alt} width={220} height={252} loading="lazy"
                     className="h-auto w-full object-contain" />
                <div className={`absolute ${o.badge} flex flex-col items-start`}>
                  <span className={`${o.statBg} ${o.statFg} px-2 font-serif tracking-tightest
                                    text-[clamp(1.25rem,2.2vw,2rem)] leading-1.1`}>
                    {o.stat}
                  </span>
                  <span className={`${o.labelBg} ${o.labelFg} max-w-[13ch] px-2 py-[2px]
                                    text-[11px] leading-[1.3]`}>
                    {o.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div aria-hidden="true" className="h-[80px] bg-surface" />

      {/* derisk_wrap — 628px, centred, on the blue-200 graph-paper ground */}
      <section ref={deriskRef} className="relative clip-bleed bg-blue-200 py-[120px]">
        <div aria-hidden="true" className="absolute inset-0 bg-grid"
             style={{ '--grid-color': 'rgba(255,255,255,.7)', '--grid-size': '40px' }} />

        <div className="relative z-10 u-container flex flex-col items-center text-center">
          <Eyebrow className="reveal text-flame-600">
            Future-proof your AI investment as models change
          </Eyebrow>

          <p className="reveal mt-8 max-w-[700px] font-serif text-ink tracking-tightest
                        text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.3]"
             style={{ '--reveal-delay': '80ms' }}>
            The model landscape changes monthly. Jasper absorbs that change for you. New
            frontier models are tested in our evaluation pipeline and made available without
            migrations, re-integration, or contract lock-in to a single provider. Your team
            keeps moving; IT keeps a flexible, future-proof investment with no model debt to
            manage.
          </p>

          <h2 className="reveal mt-8 max-w-[600px] font-serif text-ink tracking-tightest
                         text-[clamp(1.5rem,1.95vw,1.75rem)] leading-[1.3]"
              style={{ '--reveal-delay': '140ms' }}>
            The AI landscape moves fast—Jasper moves faster. Our flexible platform evolves
            with the market, ensuring you always have access to the latest innovations
            without the burden of model maintenance, migrations, or technical risk.
          </h2>
        </div>
      </section>

      {/* build_business_wrap — 612px: art left, 54px copy right.
          Live layers two decorations over the photograph: `blue-triangle`
          (403x458) clipped off its top-left corner and `dots-wrap` (405x406)
          overlapping its bottom-right. Both live on the section, absolutely
          placed, so the block itself stays the shared HorizontalVis. */}
      <div className="relative clip-bleed">
        <div aria-hidden="true"
             className="pointer-events-none absolute left-0 top-[80px] z-10 hidden w-[240px] md:block">
          <img src="/assets/blue-triangle.png" alt="" className="h-auto w-full" />
        </div>
        <div aria-hidden="true"
             className="pointer-events-none absolute left-[26%] bottom-[80px] z-10 hidden w-[210px] md:block">
          <img src="/assets/dots-wrap-1.png" alt="" className="h-auto w-full" />
        </div>

        <HorizontalVis
          flip
          title="Spend your time on marketing, not model management" titleSize="54"
          body="No prompt-engineering rabbit holes, no model comparisons, no keeping up with release notes. Your team works on strategy, creative, and campaigns while Jasper handles model selection in the background. The people closest to your customers spend their time where it matters."
          img={{ src: '/assets/group-imgae.jpg', w: 625, h: 502,
                 alt: 'Man showing a document to a woman working on a laptop in a bright office.' }}
          spaceTop={112} spaceBottom={112}
        />
      </div>

      <PageCta />
    </>
  )
}
