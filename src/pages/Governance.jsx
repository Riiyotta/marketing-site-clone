import { useState } from 'react'
import { ArrowRight } from '../components/Icons'
import Marquee from '../components/Marquee'
import SimpleLayout from '../components/blocks/SimpleLayout'
import RevealSection from '../components/blocks/RevealSection'
import Closing from '../components/Closing'

/* ---------------------------------------------------------------------------
   /governance — live page height 8751px (footer 1175 of that).

   Live block order and measured heights (.scrape/plat-governance.json):
      720  horizontal_vis_wrap   flame-400 hero, 80/80 h2 + a role-orbit collage
      360  marquee_wrap          "World-class marketing teams trust Jasper"
      222  simple_layout_wrap    "User Roles" centred header
      363  simple_layout_wrap    the four role cards
      151  u-zindex-3            "What can each Jasper role do?" heading
     1128  simple_layout_wrap    the 4-column permissions matrix
      704  quote_m_wrap          the Sage Publishing pull-quote
     1301  hero_vertical_wrap    "Understand your usage with detailed analytics"
                                 — the page's ONLY <h1>, over a 1360x836 shot
      500  simple_layout_wrap    the flame MCP promo panel
     1336  simple_layout_wrap    the ink "Permissions & Settings" tab block
      817  (cards)               "More Jasper enterprise features", 3-up
      900  closing_photo_wrap

   NOTE the hero heading is an <h2> on live even though it reads as the page
   title; the real <h1> is "Understand your usage with detailed analytics"
   further down, which is what the stub table recorded. Both are reproduced
   with their live tags so the document keeps exactly one <h1>.
--------------------------------------------------------------------------- */

const ROLES = [
  { name: 'Admin', img: '/assets/Roles-Card-Admin.webp', w: 118,
    body: 'Full control over every aspect of your Jasper account.' },
  { name: 'Manager', img: '/assets/Roles-Card-Manager.webp', w: 115,
    body: "Manage Knowledge, Brand Voice and access your company's usage data." },
  { name: 'Developer', img: '/assets/Roles-Card-Developer.webp', w: 117,
    body: 'Members with special access to API tokens & documentation.' },
  { name: 'Member', img: '/assets/Roles-Card-Member.webp', w: 113,
    body: 'Content creators with limited access to usage & settings.' },
]

/* The permissions matrix, captured row by row from the live table. `cells` is
   Admin / Manager / Developer / Member; 'yes' renders the Check.svg tick and
   'no' the NA.svg dash, matching the live glyph pair. */
const MATRIX = [
  { q: 'Usage page', desc: 'View detailed analytics about your Jasper instance including total generations, active users, hours saved & more.',
    cells: ['Full Access', 'Full Access', 'Self-Usage Only', 'Self-Usage Only'] },
  { q: 'API Settings & Tokens', desc: 'Special access to API tokens & documentation.',
    cells: ['yes', 'no', 'yes', 'no'] },
  { q: 'Jasper Studio', desc: 'Create, edit, and publish Custom Agents within your Jasper instance when permissions are imposed.',
    cells: ['yes', 'yes', 'no', 'no'] },
  { q: 'Brand Voice & Knowledge', desc: 'Create, edit, and/or delete Knowledge & Brand Voices within your Jasper instance when permissions are imposed.',
    cells: ['yes', 'yes', 'no', 'no'] },
  { q: 'Style Guide', desc: 'Edit and/or delete Grammar/Punctuation rules or Terms List items within your Style Guide.',
    cells: ['yes', 'yes', 'no', 'no'] },
  { q: 'Groups', desc: 'Create Groups within your Jasper instance when permissions are imposed.',
    cells: ['yes', 'yes', 'no', 'no'] },
  { q: 'AI Settings', desc: 'Set default Voice and/or Language for all Workspace users.',
    cells: ['yes', 'no', 'no', 'no'] },
  { q: 'Role Management', desc: 'Assign Admin, Manager or Developer roles.',
    cells: ['yes', 'no', 'no', 'no'] },
  { q: 'Billing', desc: 'View and update billing information, statements & more.',
    cells: ['yes', 'no', 'no', 'no'] },
  { q: 'Audit log', desc: 'Track important actions within your workspace',
    cells: ['yes', 'no', 'no', 'no'] },
  { q: 'AI audit log', desc: 'Track AI outputs within your workspace',
    cells: ['yes', 'no', 'no', 'no'] },
]

const SETTINGS_TABS = [
  { label: 'Permissions', img: '/assets/Permission-Settings.avif', w: 1279, h: 918,
    body: 'Decide who can take action regarding voices, Knowledge Base, Style Guide or Spaces.',
    alt: 'The Jasper permission settings screen listing who can create Groups, publish Apps and edit Brand Voice.' },
  { label: 'Team Settings', img: '/assets/Team-Settings.avif', w: 1112, h: 798,
    body: 'Invite new team members, manage existing members and assign user roles.',
    alt: 'The Jasper team settings screen listing workspace members and their assigned roles.' },
  { label: 'AI Settings', img: '/assets/AI-Settings.avif', w: 946, h: 678,
    body: 'Manage or set a default Voice and/or Language for all Workspace users.',
    alt: 'The Jasper AI settings screen setting a default brand voice and language for the workspace.' },
]

const ENTERPRISE = [
  { title: 'Responsible AI for Enterprise', img: '/assets/Ethics-Hero.png',
    body: 'All the features you need to take a secure, controlled and impactful approach to AI.',
    link: 'Explore Enterprise',
    alt: 'Two people working side by side on laptops at a shared desk.' },
  { title: 'Security & Privacy', img: '/assets/Enterprise-Security-1.svg',
    body: 'Experience unparalleled safety and security with our cutting-edge AI solutions designed with your data & privacy in mind.',
    link: 'Explore Security',
    alt: 'A padlock illustration flanked by SOC2, SSO and GDPR badges.' },
  { title: 'Customer Success', img: '/assets/Enterprise-Support-1.png',
    body: 'Find AI success with Jasper’s dedicated support, custom services & solutions, and resources for training & enablement.',
    link: 'Meet the Team',
    alt: 'A ring of customer-success team member headshots.' },
]

/* `.simple_layout_wrap` matrix cell — the live glyph pair. */
function Cell({ v }) {
  if (v === 'yes') {
    return <img src="/assets/check.svg" alt="Included" width={16} height={17}
                className="mx-auto h-4 w-4 object-contain" />
  }
  if (v === 'no') {
    return <img src="/assets/NA.svg" alt="Not included" width={16} height={17}
                className="mx-auto h-4 w-4 object-contain opacity-60" />
  }
  return <span className="font-mono text-text-small text-ink">{v}</span>
}

export default function Governance() {
  const [tab, setTab] = useState(0)

  return (
    <>
      {/* ============ horizontal_vis_wrap hero — flame-400, h=720 ========= */}
      <RevealSection className="clip-bleed relative bg-flame-400">
        <div className="u-container grid items-center gap-12 py-24 lg:min-h-[720px]
                        lg:grid-cols-2 lg:gap-gutter lg:py-0">
          <div className="max-w-[660px]">
            <p className="reveal eyebrow inline-block bg-surface px-1 text-ink">Governance</p>
            {/* live tags this as an h2, not the page h1 */}
            <h2 className="reveal mt-6 font-serif text-ink tracking-tightest leading-1
                           text-[clamp(2.5rem,5.55vw,5rem)]"
                style={{ '--reveal-delay': '80ms' }}>
              Better security &amp; greater control with roles &amp; permissions
            </h2>
            <p className="reveal mt-6 max-w-[46ch] text-text-main text-ink text-pretty"
               style={{ '--reveal-delay': '140ms' }}>
              Ensure brand consistency and security with complete control over access to global
              knowledge, brand voice, API tokens and more.
            </p>
            <div className="reveal mt-8 flex flex-wrap items-center gap-4"
                 style={{ '--reveal-delay': '200ms' }}>
              <a href="#" className="btn btn-secondary">Start Free Trial</a>
              <a href="#" className="btn btn-primary">Get A Demo</a>
            </div>
          </div>

          {/* the role-orbit collage — four 1296px role plates stacked on the
              same origin, drawn at the section's scale so the ring lines up */}
          <div className="reveal relative aspect-square w-full lg:justify-self-end"
               style={{ '--reveal-delay': '120ms', maxWidth: 648 }}>
            {['Member', 'Admin', 'Manager'].map((r) => (
              <img key={r} src={`/assets/Roles-Hero-Top-${r}.png`} alt="" aria-hidden="true"
                   loading="lazy"
                   className="absolute inset-0 h-full w-full object-contain" />
            ))}
            <img src="/assets/Roles-Hero-Top-Developer.png" alt="" aria-hidden="true" loading="lazy"
                 className="absolute inset-0 h-full w-full object-contain" />
            <img src="/assets/Roles-Hero-Bottom.png"
                 alt="Four Jasper user roles — Admin, Manager, Developer and Member — arranged on concentric rings."
                 loading="lazy"
                 className="absolute inset-0 h-full w-full object-contain" />
          </div>
        </div>
      </RevealSection>

      {/* ============ marquee_wrap, h=360 =================================
          The shared Marquee already carries the measured "World-class
          marketing teams trust Jasper" headline this page uses. */}
      <Marquee space="py-[80px]" />

      {/* ============ User Roles header + the four role cards ============= */}
      <RevealSection className="bg-surface pt-[80px]">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal eyebrow text-flame-600">User Roles</p>
          <p className="reveal mt-6 font-serif text-ink tracking-tightest leading-[1.05]
                        text-[clamp(2.125rem,3.75vw,3.375rem)]"
             style={{ '--reveal-delay': '80ms' }}>
            Defined roles for every user
          </p>
        </div>

        <div className="u-container mt-12 grid gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {ROLES.map((r, i) => (
            <article key={r.name} className="reveal flex flex-col bg-surface-2 p-6"
                     style={{ '--reveal-delay': `${i * 80}ms` }}>
              <img src={r.img} alt="" aria-hidden="true" loading="lazy"
                   width={r.w} height={96} className="h-24 w-auto object-contain" />
              <h2 className="mt-4 font-serif text-ink tracking-tightest leading-1
                             text-[clamp(1.875rem,2.64vw,2.375rem)]">{r.name}</h2>
              <p className="mt-3 text-text-small text-ink text-pretty">{r.body}</p>
              <a href="#" className="link-arrow mt-auto pt-6 self-start text-text-small">
                Learn More<ArrowRight className="h-3 w-3" />
              </a>
            </article>
          ))}
        </div>
      </RevealSection>

      {/* ============ the permissions matrix, h=1128 ====================== */}
      <RevealSection className="bg-surface pt-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal max-w-[16ch] font-serif text-ink tracking-tightest leading-[1.05]
                        text-[clamp(2.125rem,3.75vw,3.375rem)]">
            What can each Jasper role do?
          </p>
        </div>

        {/* wide tables scroll inside their OWN container so the page body
            never scrolls horizontally */}
        <div className="u-container mt-12 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse border border-dark-150">
            <thead>
              <tr>
                <th className="w-[280px] border border-dark-150 p-4" />
                {ROLES.map((r) => (
                  <th key={r.name}
                      className="border border-dark-150 p-4 text-center font-serif text-h4
                                 font-normal text-ink">
                    {r.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MATRIX.map((row, i) => (
                <tr key={row.q} className={i % 2 ? 'bg-dark-50' : 'bg-surface'}>
                  <th scope="row" className="border border-dark-150 p-4 text-left align-top">
                    <span className="block font-sans text-text-main font-medium text-ink">{row.q}</span>
                    <span className="mt-1 block text-text-tiny text-dark-700">{row.desc}</span>
                  </th>
                  {row.cells.map((c, j) => (
                    <td key={j} className="border border-dark-150 p-4 text-center align-middle">
                      <Cell v={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RevealSection>

      {/* ============ quote_m_wrap — the Sage pull-quote, h=704 =========== */}
      <RevealSection className="clip-bleed relative bg-surface py-section-main">
        <div className="u-container grid items-center gap-12 lg:grid-cols-2 lg:gap-gutter">
          <div className="reveal relative">
            <img src="/assets/Pink-Pattern.svg" alt="" aria-hidden="true" loading="lazy"
                 className="pointer-events-none absolute -left-16 -top-10 hidden max-w-none lg:block"
                 style={{ width: 513, height: 480 }} />
            <img src="/assets/Shellie-Johnson-Sage.avif"
                 alt="Shellie Johnson, Director of Global Marketing at Sage Publishing."
                 loading="lazy"
                 className="relative mx-auto h-auto w-full max-w-[427px] object-cover" />
          </div>

          <div>
            <h3 className="reveal max-w-[26ch] font-serif text-ink tracking-tightest leading-[1.1]
                           text-[clamp(1.5rem,2.64vw,2.375rem)]">
              “We did a pilot and were really pleased with not only the outputs, but also with the
              security of Jasper. There’s a lot of information that we wouldn’t want outside of a
              secure wall, and that’s why we decided to move forward with Jasper.”
            </h3>
            <h2 className="reveal mt-10 font-serif text-ink tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]"
                style={{ '--reveal-delay': '100ms' }}>
              Shellie Johnson
            </h2>
            <p className="reveal mt-2 text-text-main text-ink" style={{ '--reveal-delay': '140ms' }}>
              Director of Global Marketing, Sage Publishing
            </p>
          </div>
        </div>
      </RevealSection>

      {/* ==== hero_vertical_wrap — the page's only <h1>, h=1301 ========== */}
      <RevealSection className="clip-bleed relative bg-surface pb-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal eyebrow inline-block bg-yellow-600 px-1 text-ink">Usage Dashboard</p>
          <h1 className="reveal mt-6 max-w-[1035px] font-serif text-ink tracking-tightest leading-1
                         text-[clamp(2.5rem,5.55vw,5rem)]"
              style={{ '--reveal-delay': '80ms' }}>
            Understand your usage with detailed analytics
          </h1>
        </div>

        <div className="u-container mt-12">
          <img src="/assets/Usage-dashboard.avif"
               alt="The Jasper usage dashboard showing total generations, hours saved, a daily generation chart and top skills used."
               width={1360} height={836} loading="lazy"
               className="reveal h-auto w-full object-contain" />
        </div>
      </RevealSection>

      {/* ============ the flame MCP promo panel, h=500 ==================== */}
      <SimpleLayout
        variant="promo"
        tint="bg-flame-300"
        eyebrow="NEW!"
        title="Introducing the Jasper MCP: scale your content without losing control"
        titleSize="54"
        cta={{ label: 'Explore The MCP', variant: 'btn-secondary' }}
        img={{ src: '/assets/MCP-Hero-B.png', w: 620, h: 308,
               alt: 'A ChatGPT window calling the Jasper MCP, which applies brand voice, style guide and audience before generating.' }}
        spaceTop={0}
        spaceBottom={112}
      />

      {/* ==== Permissions & Settings — the ink tab block, h=1336 ========= */}
      <RevealSection className="clip-bleed relative bg-surface-2 py-section-main">
        <div className="u-container grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-gutter">
          <div className="reveal bg-flame-600 p-6 lg:self-start">
            <p className="eyebrow inline-block bg-surface px-1 text-ink">Permissions &amp; Settings</p>
            <h2 className="mt-6 max-w-[18ch] font-serif text-white tracking-tightest leading-1
                           text-[clamp(1.875rem,2.64vw,2.375rem)]">
              Settings to help enforce standards &amp; streamline efficiency
            </h2>

            <div role="tablist" aria-label="Settings"
                 className="mt-10 flex flex-wrap gap-2">
              {SETTINGS_TABS.map((t, i) => (
                <button key={t.label} type="button" role="tab" aria-selected={tab === i}
                        onClick={() => setTab(i)}
                        className={`px-2 py-1 font-mono text-text-small transition-colors duration-300 ease-jasper
                                    ${tab === i ? 'bg-surface text-dark-900' : 'bg-transparent text-white'}`}>
                  {t.label}
                </button>
              ))}
            </div>

            <p className="mt-4 text-text-small text-white text-pretty">{SETTINGS_TABS[tab].body}</p>
          </div>

          <div className="reveal min-w-0" style={{ '--reveal-delay': '120ms' }}>
            <img src={SETTINGS_TABS[tab].img} alt={SETTINGS_TABS[tab].alt}
                 width={SETTINGS_TABS[tab].w} height={SETTINGS_TABS[tab].h} loading="lazy"
                 className="h-auto w-full border border-dark-200 bg-surface object-contain" />
          </div>
        </div>
      </RevealSection>

      {/* ============ More Jasper enterprise features, h=817 ============== */}
      <RevealSection className="bg-surface py-section-main">
        <div className="u-container flex flex-col items-center text-center">
          <p className="reveal eyebrow text-ink">More Jasper enterprise features</p>
          <p className="reveal mt-6 max-w-[20ch] font-serif text-ink tracking-tightest leading-[1.05]
                        text-[clamp(2.125rem,3.75vw,3.375rem)]"
             style={{ '--reveal-delay': '80ms' }}>
            All the features you need to take a secure, controlled and impactful approach to AI.
          </p>
        </div>

        <div className="u-container mt-12 grid gap-gutter md:grid-cols-3">
          {ENTERPRISE.map((c, i) => (
            <article key={c.title} className="reveal flex flex-col"
                     style={{ '--reveal-delay': `${i * 90}ms` }}>
              <img src={c.img} alt={c.alt} width={443} height={249} loading="lazy"
                   className="h-[249px] w-full object-cover" />
              <h3 className="mt-6 font-serif text-ink tracking-tightest leading-[1.1]
                             text-[clamp(1.5rem,1.95vw,1.75rem)]">{c.title}</h3>
              <p className="mt-3 text-[18px] leading-[21.6px] text-ink text-pretty">{c.body}</p>
              <a href="#" className="link-arrow mt-auto pt-6 self-start text-text-main">
                {c.link}<ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </RevealSection>

      <Closing photo="/assets/Closing_photo_1.avif" />
    </>
  )
}
