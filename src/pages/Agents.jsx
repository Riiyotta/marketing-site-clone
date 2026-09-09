import { ArrowRight } from '../components/Icons'
import SideBlockStack from '../components/blocks/SideBlockStack'
import AgentLibrary from '../components/blocks/AgentLibrary'
import Accordion from '../components/blocks/Accordion'
import RevealSection from '../components/blocks/RevealSection'
import Closing from '../components/Closing'
import { AGENT_CARDS } from '../data/agentLibrary'

/* ---------------------------------------------------------------------------
   /agents — live page height 14264px (footer 1175 of that). The family hub.

   Live block order and measured heights (.scrape/plat-agents.json plus a full
   geometry walk of the live DOM):
        80  g_section_space
      1000  agent_header_wrap             green-400 grid hero, 672|672 split
       530  flexible_automation_section   blue-300 band, "A different approach"
       822  layout_cards_wrap             the 5-up Content Pipeline card row
      3622  agents_wrap                   sticky art + 001-004 numbered blocks
      4445  the Agent Library             flame-200 filter + card grid
       632  build_business_wrap           "Execution, not experimentation"
      2859  page_main                     FAQ accordion + closing_photo_wrap

   MEASURED hero (1440 x 1000):
     ground   green-400 (rgb 210,255,193) ruled with a white grid, plus four
              solid green-400 blocks bitten out of the corners
              (90x126 top-left, 70x196 top-right, 70x350 bottom-right,
               90x126 + 410x62 bottom-left)
     left     672px text column at x=40: a mono eyebrow, an 80/80 Feature h1,
              a 16/22.4 body and two 48px buttons
     right    672px asset column at x=728 holding a 672x380 flame-200 video
              poster, a 806x752 "jasper-agents-bg-2" collage behind it, a
              233x192 green triangle at the top-right and the 262x258 Pink
              Pattern SVG at the bottom-left.
     Live embeds a Wistia player in the poster; per the third-party-embed
     policy it renders as the still with a play affordance.

   MEASURED layout_cards_wrap (822): five 259x256 `trust_card_wrap` tiles on a
   16px gutter, each a flat tint with a 24px Feature h3 in the stage colour —
   the same five stages and the same tint/heading pairs the /platform Content
   Pipelines block uses, but as a 5-up ROW rather than a stacked column, so it
   is emitted inline here rather than by reusing PlatformPipelines.
--------------------------------------------------------------------------- */

/* Tints and heading colours read off the live computed styles — identical to
   the /platform pipeline stages. */
const STAGES = [
  ['01. Plan', 'bg-yellow-500', 'text-olive-700',
   'Jasper agents streamline planning by embedding governance and insights, ensuring strategies are data-driven and aligned with goals.'],
  ['02. Create', 'bg-green-400', 'text-green-700',
   'Agents produce high-quality, on-brand content tailored for multi-channel use, guided by Jasper IQ for consistency and compliance.'],
  ['03. Adapt', 'bg-blue-300', 'text-ink',
   'Jasper agents localize and personalize content, maintaining brand consistency while tailoring messaging for diverse audiences and regions.'],
  ['04. Activate', 'bg-flame-300', 'text-flame-800',
   'Agents coordinate content launches across channels, turning activation into a seamless, efficient step in your workflow.'],
  ['05. Optimize', 'bg-violet-400', 'text-violet-800',
   'Jasper agents refine campaigns using SEO, AEO, and GEO strategies to boost rankings, drive traffic, and enhance audience trust'],
]

/* `agents_wrap` — four numbered blocks over a sticky art stack. Each state
   pairs a 672px background plate with a ~538px product still, measured at
   x=728 / x=795. The visible (top) state on the live capture is BG-Green +
   "Agents 4", so the stack is ordered to land that one first. */
const HOW_IT_WORKS = [
  { eyebrow: '001',
    title: 'Intelligent execution, grounded in your business',
    body: 'Jasper’s marketing agents don’t rely on generic prompts or public knowledge. They operate using your context, your rules, and your systems.',
    lead: 'Every agent is powered by:',
    bullets: ['Your brand and voice', 'Audience and persona definitions',
              'Company and product knowledge', 'Marketing best practices',
              'Permissions, policies, and controls'],
    tail: 'This context is shared across agents, so work stays consistent no matter who—or what—is executing it.',
    label: 'Personalization Agent',
    art: { bg: '/assets/BG-Green.avif', graphic: '/assets/Agents-4.avif',
           alt: 'A Jasper Grid of AEO-optimized blogs with the AEO/GEO/SEO Rewriter agent panel open over it.' } },

  { eyebrow: '002',
    title: 'Integrated into your systems of record',
    body: 'Jasper agents don’t operate in a silo.',
    extra: ['They integrate with the systems marketers already rely on—so execution flows naturally into your existing stack, rather than creating more work downstream.',
            'Agents can pull in inputs, enrich data, generate outputs, and prepare assets for activation—without breaking the workflow marketers already use.'],
    label: 'Optimization Agent',
    art: { bg: '/assets/BG-Yellow.avif', graphic: '/assets/personalisation-agent.webp',
           alt: 'Personalization Agent panel fetching customer data from a CRM and parsing a Gen Z segment.' } },

  { eyebrow: '003',
    title: 'Autonomous, but not uncontrolled',
    body: 'Jasper agents are designed to work autonomously within defined guardrails.',
    lead: 'They can:',
    bullets: ['Execute multi-step workflows', 'Run long-running tasks',
              'Maintain memory across steps', 'Iterate and refine outputs over time'],
    tail: 'At the same time, humans stay firmly in control—setting intent, approving outputs, and adjusting direction as needed. This balance between autonomy and orchestration is what makes agents operational, not risky.',
    label: 'Research Agent',
    art: { bg: '/assets/seo-agent-bg.png', graphic: '/assets/optimisation-agent2.webp',
           alt: 'Optimization Agent panel running company research, keyword research and SEO analysis steps.' } },

  { eyebrow: '004',
    title: 'One workspace. Many agents.',
    body: 'Orchestrate agents across Canvas, Grid, and Chat. Jasper agents work across the surfaces where marketing actually happens:',
    bullets: ['Canvas for real-time creation and collaboration',
              'Grid for structured, no-code execution at scale',
              'Chat for guided interaction and exploration'],
    tail: 'Marketers don’t have to learn new tools for each agent. Agents meet teams where they already work.',
    label: 'Research Agent',
    art: { bg: '/assets/ai-bg-item.png', graphic: '/assets/research-agent.avif',
           alt: 'Research Agent panel identifying competitors, aggregating third-party data and extracting product features.' } },
]

const FAQ = [
  { q: 'What is a Jasper Agent?',
    a: 'A Jasper Agent is an AI-powered marketing teammate built on the Jasper Platform that executes work using embedded brand intelligence and governance.Jasper Agents are designed to handle marketing tasks such as content creation, optimization, campaign support, and AI Search Visibility improvement. Each Agent is powered by Jasper IQ, which embeds brand voice, messaging, audience context, and performance signals directly into execution.' },
  { q: 'Will Agents replace my marketing team?',
    a: 'Jasper Agents are designed to augment marketing teams by executing repeatable, high-leverage work within defined brand guardrails.Jasper Agents enables teams to scale production and optimization while maintaining governance and strategic oversight. Jasper Agents handle structured execution tasks, allowing marketers to focus on strategy and creative direction.' },
  { q: 'How do Jasper Agents know what’s on-brand?',
    a: 'Jasper Agents know what is on-brand because they are powered by Jasper IQ, which embeds brand context directly into how decisions are made rather than added through manual review.Jasper IQ integrates brand voice, messaging pillars, product positioning, audience nuance, and administrative controls. This creates persistent brand memory across tasks and campaigns. By embedding governance into execution, Jasper Agents help ensure accurate brand representation across AI Search Visibility surfaces.' },
  { q: 'What kinds of tasks can Jasper Agents handle?',
    a: 'Jasper Agents can execute a wide range of enterprise marketing tasks within structured brand guardrails. This includes campaign support, content generation, persona adaptation, optimization, and AI Search Visibility improvement. Each Jasper Agent is purpose-built for a specific marketing task and can evolve with your team’s needs.' },
  { q: 'How do I set up Agents in Jasper?',
    a: 'Jasper Agents can be configured directly within the platform without engineering resources.Marketing teams define the objective, brand parameters, audience context, performance goals, and governance settings to create custom Agents. You can launch Agents from within Jasper Chat, Canvas, or Grid and connect them to your existing systems and knowledge bases without complicated setup or developer handoffs.' },
  { q: 'Are Agents secure enough for enterprise use?',
    a: 'Absolutely. Jasper is built for enterprise standards, including SOC 2 compliance, granular permission controls, secure data handling, and role-based access. Jasper Agents operate within the same secure, governed environment organizations already trust, with centralized visibility and administrative oversight built into the Marketing Agent Platform. Because Jasper Agents are powered by Jasper IQ, they execute using structured brand memory and defined guardrails rather than uncontrolled prompts.' },
]

/* A `.playbook_line_wrap` runs behind the whole agents_wrap: eleven 1px
   green-500 hairlines on a ~67px pitch, spanning the right 672px column. */
const HAIRLINES = {
  backgroundImage: 'repeating-linear-gradient(to right, #96ff6f 0 1px, transparent 1px 67.2px)',
}

export default function Agents() {

  return (
    <>
      {/* ================= hero — agent_header_wrap, 1440 x 1000 ============ */}
      <RevealSection className="clip-bleed relative bg-green-400 bg-grid"
               style={{ '--grid-color': 'rgba(255,255,255,.75)', '--grid-size': '45px' }}>
        {/* the four solid blocks bitten out of the ground's corners */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute left-0 top-0 bg-green-400" style={{ width: 90, height: 126 }} />
          <div className="absolute right-0 top-0 bg-green-400" style={{ width: 70, height: 196 }} />
          <div className="absolute bottom-0 right-0 bg-green-400" style={{ width: 70, height: 350 }} />
          <div className="absolute bottom-[62px] left-0 bg-green-400" style={{ width: 90, height: 126 }} />
          <div className="absolute bottom-0 left-0 bg-green-400" style={{ width: 410, height: 62 }} />
        </div>

        <div className="u-container relative grid items-center gap-12 py-24
                        lg:min-h-[1000px] lg:grid-cols-2 lg:gap-gutter lg:py-0">
          {/* left — text_group_wrap, 672px */}
          <div className="max-w-[672px]">
            <p className="reveal eyebrow text-ink">Marketing AI Agents</p>
            <h1 className="reveal mt-6 font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              AI agents that execute marketing end to end
            </h1>
            <p className="reveal mt-6 max-w-[46ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Jasper agents are purpose-built to execute real marketing work across every stage of
              the content pipeline. Instead of isolated bots or generic assistants, Jasper provides
              a coordinated system of specialized agents—each designed to do a specific job, in
              context, at scale.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4"
                 style={{ '--reveal-delay': '200ms' }}>
              <a href="#library" className="btn btn-secondary">Explore Agent Library</a>
              <a href="#" className="btn btn-primary">Get A Demo</a>
            </div>
          </div>

          {/* right — agent_header_assets_wrap, 672 x 471 */}
          <div className="reveal relative lg:justify-self-end" style={{ '--reveal-delay': '120ms' }}>
            <img src="/assets/jasper-agents-bg-2.webp" alt="" aria-hidden="true" loading="lazy"
                 className="pointer-events-none absolute -left-16 -top-24 hidden max-w-none lg:block"
                 style={{ width: 806, height: 752 }} />
            <img src="/assets/agents_header_triangle.svg" alt="" aria-hidden="true"
                 className="pointer-events-none absolute -right-8 -top-14 hidden max-w-none lg:block"
                 style={{ width: 233, height: 192 }} />
            <img src="/assets/Pink-Pattern.svg" alt="" aria-hidden="true"
                 className="pointer-events-none absolute -bottom-24 -left-24 hidden max-w-none lg:block"
                 style={{ width: 262, height: 258 }} />

            {/* agent_header_assets_video — 672 x 380 flame-200 poster. Live is
                a Wistia embed; rendered as the still per the embed policy. */}
            <div className="relative grid w-full place-items-center bg-flame-200"
                 style={{ maxWidth: 672, height: 380 }}>
              <span className="grid h-16 w-24 place-items-center bg-flame-600"
                    aria-label="Play the Jasper agents overview video" role="img">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#fff" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ========== flexible_automation_section — blue-300, 1440 x 530 ====== */}
      <RevealSection className="clip-bleed relative bg-blue-300">
        <div className="u-container grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-gutter">
          <div className="reveal relative min-h-[240px] lg:min-h-[400px]">
            <img src="/assets/Agents-New.avif" alt="" aria-hidden="true" loading="lazy"
                 className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2
                            object-contain"
                 style={{ width: 952, height: 883 }} />
          </div>

          <div className="relative">
            <h2 className="reveal font-serif text-ink tracking-tightest leading-[1.05]
                           text-[clamp(2.125rem,3.75vw,3.375rem)]">
              A <em className="italic">different</em> approach to agentic marketing
            </h2>
            <p className="reveal mt-6 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '80ms' }}>
              Most marketing AI platforms treat agents as standalone tools. You spin one up, give
              it a task, and hope the output fits.
            </p>
            <p className="reveal mt-4 font-medium text-text-main text-ink"
               style={{ '--reveal-delay': '120ms' }}>
              Jasper takes a fundamentally different approach.
            </p>
            <p className="reveal mt-4 text-text-main text-ink" style={{ '--reveal-delay': '140ms' }}>
              Every Jasper agent is:
            </p>
            <ul className="reveal mt-3 flex list-disc flex-col gap-[6px] pl-5"
                style={{ '--reveal-delay': '160ms' }}>
              {['Designed for a specific step in the content pipeline',
                'Grounded in shared brand, audience, and business context',
                'Built to work alongside other agents—not in isolation',
                'Orchestrated by humans, not left to run unchecked'].map((b) => (
                <li key={b} className="text-text-main text-ink">{b}</li>
              ))}
            </ul>
            <p className="reveal mt-5 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '200ms' }}>
              The result isn’t more automation. It’s execution you can trust.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ========== layout_cards_wrap — the 5-up pipeline row, h=822 ======== */}
      <RevealSection className="bg-surface py-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal eyebrow text-ink">Aligned to the Content Pipeline</p>
          <h2 className="reveal mt-6 max-w-[18ch] font-serif text-ink tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Built to run marketing as a system
          </h2>
          <p className="reveal mt-6 max-w-[60ch] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '140ms' }}>
            Each agent is purpose-built to execute one or more stages of the Content Pipeline—whether
            that’s research and planning, content creation, personalization and localization,
            activation, or performance optimization.
          </p>
          <p className="reveal mt-6 font-medium text-text-main text-ink"
             style={{ '--reveal-delay': '180ms' }}>
            Jasper agents are mapped directly to the AI Content Pipeline:
          </p>
        </div>

        {/* five 259x256 trust_card_wrap tiles */}
        <div className="u-container mt-12 grid gap-gutter sm:grid-cols-2 lg:grid-cols-5">
          {STAGES.map(([step, tint, tone, body], i) => (
            <article key={step} className={`reveal flex min-h-[256px] flex-col ${tint} pt-3`}
                     style={{ '--reveal-delay': `${i * 80}ms` }}>
              <div className="px-3">
                <h3 className={`${tone} font-serif tracking-none leading-[1.1]
                                text-[clamp(1.25rem,1.67vw,1.5rem)]`}>
                  {step}
                </h3>
              </div>
              <div className="flex-1 px-3 pb-3 pt-6">
                <p className="text-text-main text-ink text-pretty">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </RevealSection>

      {/* ========== agents_wrap — sticky art + numbered blocks, h=3622 ====== */}
      <RevealSection className="clip-bleed relative bg-surface pt-[180px]">
        {/* playbook_line_wrap — hairlines behind the right column only */}
        <div aria-hidden="true"
             className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
             style={{ ...HAIRLINES, width: 712 }} />

        <div className="u-container relative">
          <h2 className="reveal max-w-[10ch] font-serif tracking-tightest leading-[1.05]
                         text-[clamp(1.875rem,2.64vw,2.375rem)]">
            {/* live paints this heading as two ragged highlight boxes:
                flame-600 with white text on line 1, flame-300 with flame-800
                on line 2 */}
            <span className="bg-flame-600 text-white box-decoration-clone">How Jasper </span>
            <span className="bg-flame-300 text-flame-800 box-decoration-clone">Agents Work</span>
          </h2>
        </div>

        <div className="u-container relative mt-16">
          <SideBlockStack rowH={880} items={HOW_IT_WORKS.map((s) => ({
            eyebrow: s.eyebrow,
            title: s.title,
            body: s.body,
            art: s.art,
            /* the numbered blocks carry a lead-in line, a bullet list and a
               closing paragraph beyond the single `body` string, so the rest
               goes through the block's `content` escape hatch. */
            content: (
              <>
                {s.extra?.map((p) => (
                  <p key={p} className="mt-4 text-text-main text-ink text-pretty">{p}</p>
                ))}
                {s.lead && <p className="mt-4 font-medium text-text-main text-ink">{s.lead}</p>}
                {s.bullets && (
                  <ul className="mt-3 flex list-disc flex-col gap-[6px] pl-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-text-main text-ink">{b}</li>
                    ))}
                  </ul>
                )}
                {s.tail && (
                  <p className="mt-5 text-text-main text-ink text-pretty">{s.tail}</p>
                )}
              </>
            ),
          }))} />
        </div>
      </RevealSection>

      {/* ========== The Agent Library ======================================= */}
      <AgentLibrary
        capTop="/assets/Agents-Top.avif"
        capBottom="/assets/Agents-Bottom.avif"
        eyebrow="The Agent Library"
        title="Explore all Jasper agents"
        body="Jasper offers 100+ specialized marketing agents, each designed to execute a specific job within the content pipeline."
        workflows={['Outrank', 'Optimize', 'Originate']}
        roles={['Content Marketers', 'Product Marketers', 'PR & Communications',
                'Performance Marketers', 'Brand Marketers']}
        promo={{ title: 'Create custom Agents with Jasper Studio',
                 body: 'Design and deploy context-rich AI Agents and workflows that transform your marketing processes.',
                 link: 'Learn More', href: '/studio' }}
        cards={AGENT_CARDS}
      />

      {/* ========== build_business_wrap — h=632 ============================= */}
      <RevealSection className="clip-bleed relative bg-surface py-section-main">
        <div className="u-container grid items-center gap-12 lg:grid-cols-2 lg:gap-gutter">
          <div className="reveal relative min-h-[300px] lg:min-h-[460px]">
            <img src="/assets/blue-triangle.png" alt="" aria-hidden="true" loading="lazy"
                 className="absolute -left-24 top-0 hidden max-w-none lg:block"
                 style={{ width: 403, height: 458 }} />
            <img src="/assets/dots-wrap-1.png" alt="" aria-hidden="true" loading="lazy"
                 className="absolute bottom-[-60px] left-[300px] hidden max-w-none lg:block"
                 style={{ width: 405, height: 406 }} />
            <img src="/assets/demo_cta_img.jpg"
                 alt="Three colleagues talking over a laptop in a plant-filled office."
                 loading="lazy"
                 className="relative mx-auto h-auto w-full max-w-[622px] object-cover" />
          </div>

          <div>
            <p className="reveal eyebrow text-ink">Why Jasper Agents Are Different</p>
            <h2 className="reveal mt-6 max-w-[20ch] font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Execution, not experimentation
            </h2>
            <p className="reveal mt-6 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '120ms' }}>
              Most AI agents help you generate ideas. Jasper agents help you run marketing.
            </p>
            <p className="reveal mt-4 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '150ms' }}>
              Because they’re pipeline-native, governance-first, and built for orchestration,
              Jasper agents enable:
            </p>
            <ul className="reveal mt-3 flex list-disc flex-col gap-[6px] pl-5"
                style={{ '--reveal-delay': '180ms' }}>
              {['Faster execution without rework', 'Consistent quality at scale',
                'Reduced operational complexity', 'Measurable business impact'].map((b) => (
                <li key={b} className="text-text-main text-ink">{b}</li>
              ))}
            </ul>
            <p className="reveal mt-5 max-w-[52ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '210ms' }}>
              This is what it looks like when AI becomes part of the operating model—not just
              another tool.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ========== FAQ + closing ========================================== */}
      <Accordion chip="FAQs" title="Frequently asked questions about Jasper Agents"
                 items={FAQ} openFirst />

      <Closing title="Put AI agents to work—on your terms"
               body="Explore how Jasper agents help teams turn strategy into execution across every channel, market, and audience."
               cta="Get A Demo"
               photo="/assets/KB-Hero.avif" />
    </>
  )
}
