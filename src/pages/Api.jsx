import HorizontalVis from '../components/blocks/HorizontalVis'
import StickyScroll from '../components/blocks/StickyScroll'
import SimpleLayout from '../components/blocks/SimpleLayout'
import ValueProps from '../components/blocks/ValueProps'
import Accordion from '../components/blocks/Accordion'
import PageCta from '../components/PageCta'
import { useReveal } from '../hooks/useReveal'
import { ArrowRight } from '../components/Icons'

/* ---------------------------------------------------------------------------
   /api — "The AI API built for marketing success"

   Block order and heights MEASURED on live jasper.ai/api at 1440px
   (.scrape/plat-api.json), page total 8223px:

     670  horizontal_vis_wrap   flame-300 band, "Seamlessly bring AI into your
                                platform or product" + a 660x414 hero image
     872  hero_vertical_wrap    the page h1 (54px) over two tinted feature
                                panels (green-300 / blue-300), 538x300 art each
    1637  sticky_scroll_wrap    "What makes Jasper's API different?" pinned
                                left, six 38px feature rows on the right
     500  simple_layout_wrap    the flame-300 MCP promo, 620x308 screenshot
    1326  value_props_wrap      "Enterprise-grade safety & security" over the
                                yellow-400 band, three tinted cards + a photo
     112  g_section_space
     394  accordion_1           "Questions about Jasper's API" (FAQs chip)
      40  g_section_space
     473  accordion_1           "Other frequently asked questions"
     112  g_section_space
     925  cta_main_wrap         the shared closing CTA (PageCta)

   The hero_vertical_wrap panels are a page-specific shape (heading INSIDE the
   tint, art below it, body + arrow at the foot) rather than the centred
   statement the shared HeroVertical renders, so they live here.
--------------------------------------------------------------------------- */

const FEATURES = [
  { title: 'Your voice, your company facts', tint: 'bg-green-300',
    img: '/assets/api-illo-2.webp',
    alt: 'Illustration of an open book with strategy symbols radiating from it.',
    body: 'Jasper securely grounds AI content in your brand voice, style guide & company knowledge. That means more outputs that sound (and look) like your brand.' },
  { title: 'Designed for 99.99% uptime', tint: 'bg-blue-300',
    img: '/assets/api-illo-1.webp',
    alt: 'Blue clock showing 12:10 surrounded by circular dots and stars.',
    body: 'Platforms can’t afford for features to go down when an API provider goes down. Jasper is designed for 99.99% uptime by using a proprietary AI engine, increasing performance & reliability.' },
]

const DIFFERENT = [
  { title: 'Powered by the best LLMs in the industry', link: 'AI Engine API Docs',
    body: 'Jasper curates best-in-breed, LLM agnostic solutions tailored to specific use cases. We are constantly innovating and integrating new models as they become available, future proofing your AI investment.' },
  { title: "Google's latest news & data", link: 'Data Retrieval API Docs',
    body: 'You need content to be relevant and accurate, but other models are trained on old data. Jasper pulls in knowledge from recent news and content at the top of Google search results to keep things up to date.' },
  { title: 'Editorial checks',
    body: "The most time consuming part of scaling content production is an editorial process. Jasper uses the best grammar, language, and plagiarism tools to save you time and mistakes. It also integrates with tools for SEO and performance ranking, making it easy to ensure that you're creating the highest performing content possible." },
  { title: 'Brand Voice', link: 'Brand Voice API Docs',
    body: "Most importantly, Jasper is trained on your brand's tone, style, and key facts about your business, so that all of your content is on-brand, all the time." },
  { title: 'Image manipulation', link: 'Explore Image APIs',
    body: 'Marketing is visual. Create & edit your content visuals with AI-powered image tools, available via the Jasper API.' },
  { title: 'Use Jasper everywhere',
    body: "With the Jasper app, extension, and API, you have access to the world’s best AI outputs everywhere you work. Enjoy intuitive features you'd expect like saved prompts, team collaboration, project folders, and complex workflows." },
]

const SECURITY = [
  { title: 'Secure access', tint: 'bg-flame-300',
    body: 'Jasper makes security and privacy simple. With an advanced suite of built-in safety measures, you can rest assured that your data is secure and confidential without any additional set up or configuration. Enjoy peace of mind knowing that your information is always safe with Jasper.' },
  { title: 'Built in privacy', tint: 'bg-green-300',
    body: "Securely access Jasper to streamline your writing process and create engaging content. Bring your own identity with SSO, login with Google, or use Jasper's password-less authentication." },
  { title: 'Jasper API', tint: 'bg-blue-300',
    body: "Securely power your applications with Jasper's powerful API. Our secure API allows you to quickly integrate Jasper into your existing applications, ensuring data is always protected. Streamline the content creation process & access Jasper from any device or platform for maximum efficiency." },
]

const FAQ_API = [
  { q: 'Who has access to the Jasper API?',
    a: (
      <ul className="list-disc space-y-1 pl-5">
        <li>Business Plan users</li>
        <li>Jasper Tech Partners (<span className="font-medium underline">Learn more</span>)</li>
      </ul>
    ) },
  { q: 'Why choose Jasper over OpenAI & ChatGPT?',
    a: (
      <>
        Jasper makes security and privacy simple. With an advanced suite of built-in safety
        measures, you can rest assured that your data is secure and confidential without any
        additional set up or configuration. Enjoy peace of mind knowing your information is always
        safe with Jasper. <a href="#" className="underline">Learn more</a>
      </>
    ) },
  { q: 'Where can I access API Documentation?',
    a: (
      <>You can access Jasper's API documentation <a href="#" className="underline">here</a>.</>
    ) },
  { q: 'Is the Jasper API secure & private?',
    a: (
      <>
        Yes! Check out Jasper’s <a href="#" className="underline">Security</a> page for more
        information.
      </>
    ) },
]

/* The second accordion. Live tags only three questions here; the answers are
   the long-form marketing copy read from .scrape/cap-api-live.json. */
const FAQ_OTHER = [
  { q: 'How much does Jasper cost?',
    a: (
      <>
        <p>Jasper's pricing is transparent and meets your business needs as you grow. There are two
          plans to choose from:</p>
        <p className="mt-3">The most popular plan is the Business plan for its rich feature-set and
          ability to add teammates into your workspace. If you need personalized AI features with
          additional control, security, team training &amp; tech support, then The Business Plan is
          for you. If you prefer to explore Jasper on your own, start a free trial and see for
          yourself how Jasper is the better AI for business.</p>
      </>
    ) },
  { q: 'What is Jasper?',
    a: 'Jasper is the generative platform built for marketing success, empowering marketers to create on-brand written and visual content with AI. Unlike typical AI tools limited to single functions and generic outputs, Jasper can be trained on your brand and used seamlessly across platforms, from email and social media to your website. Over 100,000 businesses, both small and large, use Jasper to scale up content and rate their experience 4.8/5 stars in over 10k reviews.' },
  { q: 'Why should I choose Jasper?',
    a: (
      <>
        <p>These 4 key differentiators are why Jasper is the best AI for businesses:</p>
        <p className="mt-3">So in summary, Jasper is for you if you want high-performing content
          created quickly with AI that is factually accurate and always on-brand. You may start
          alone on the Pro plan and then upgrade to Business as your team grows and you need access
          to enterprise-ready features like API access, custom AI templates, and hands-on
          support.</p>
        <p className="mt-3">Start your free trial today to see what amazing content Jasper will
          write for you!</p>
      </>
    ) },
]

export default function Api() {
  const ref = useReveal()

  return (
    <>
      {/* 670px — flame-300 band. The h1 is NOT here: on live the opening band
          carries a 54px Feature paragraph, and the page <h1> sits in the
          hero_vertical_wrap below it. */}
      <HorizontalVis
        eyebrow="Jasper API"
        title="Seamlessly bring AI into your platform or product"
        titleSize="display"
        body="Bring the power of on-brand AI directly into your own platform with the Jasper API."
        ctas={[
          { label: 'API Documentation', variant: 'btn-secondary' },
          { label: 'Get a Demo', variant: 'btn-primary' },
        ]}
        img={{ src: '/assets/API-Hero.avif', w: 660, h: 414,
               alt: 'Split screen showing a code snippet for a curl command beside a generated press release.' }}
        bg="bg-flame-300"
        spaceTop={140}
        spaceBottom={112}
      />

      {/* 872px — the page h1 over two tinted feature panels. */}
      <section ref={ref} className="bg-surface pb-[80px] pt-[80px] md:pb-section-main md:pt-section-main">
        <div className="u-container">
          <h1 className="reveal mx-auto max-w-[16ch] text-center font-serif text-ink
                         tracking-tightest leading-[1.05]
                         text-[clamp(2.125rem,3.75vw,3.375rem)]">
            The AI API built for marketing success
          </h1>
          <p className="reveal mx-auto mt-6 max-w-[60ch] text-center text-text-large text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Integrate Jasper directly into your platform, whether you have a custom CMS or
            content platform of any type.
          </p>

          <div className="mt-12 grid gap-gutter md:grid-cols-2">
            {FEATURES.map((f, i) => (
              <article key={f.title} className={`reveal flex flex-col ${f.tint}`}
                       style={{ '--reveal-delay': `${i * 100}ms` }}>
                <h2 className="px-6 pt-6 font-serif text-ink tracking-tightest leading-1
                               text-[clamp(1.5rem,2.64vw,2.375rem)]">
                  {f.title}
                </h2>
                <img src={f.img} alt={f.alt} loading="lazy"
                     className="mt-6 w-full object-cover" style={{ aspectRatio: '538/300' }} />
                <div className="flex flex-1 items-end gap-4 p-6">
                  <p className="flex-1 text-text-small text-ink text-pretty">{f.body}</p>
                  <ArrowRight className="mb-1 h-4 w-4 shrink-0 text-ink" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 1637px */}
      <StickyScroll
        eyebrow="API Overview"
        title="What makes Jasper’s API different?"
        items={DIFFERENT}
      />

      {/* 500px */}
      <SimpleLayout
        variant="promo"
        eyebrow="NEW!"
        title="Introducing the Jasper MCP: scale your content without losing control"
        titleSize="54"
        cta={{ label: 'Explore The MCP', variant: 'btn-secondary' }}
        img={{ src: '/assets/MCP-Hero-B.png', w: 620, h: 308,
               alt: 'ChatGPT interface showing a prompt to rewrite blogs in the brand voice, with the Jasper MCP applying brand IQ.' }}
        tint="bg-flame-300"
        spaceTop={0}
        spaceBottom={0}
      />

      {/* 1326px — the yellow-400 safety band */}
      <ValueProps
        eyebrow="Security & Compliance"
        title="Enterprise-grade safety & security"
        items={SECURITY}
        photo={{ src: '/assets/Riso-1.png',
                 alt: 'Three colleagues having a discussion around a laptop in a bright office.' }}
        tint="bg-yellow-400"
      />

      <div aria-hidden="true" className="h-[112px]" />
      <Accordion chip="FAQs" title="Questions about Jasper's API" items={FAQ_API} openFirst />
      <div aria-hidden="true" className="h-[40px]" />
      <Accordion title="Other frequently asked questions" items={FAQ_OTHER} />
      <div aria-hidden="true" className="h-[112px]" />

      <PageCta />
    </>
  )
}
