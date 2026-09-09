import HorizontalVis from '../components/blocks/HorizontalVis'
import ValueProps from '../components/blocks/ValueProps'
import DocLayout from '../components/blocks/DocLayout'
import TrustCards from '../components/blocks/TrustCards'
import PageCta from '../components/PageCta'
import { CtaRow } from '../components/blocks/primitives'
import { useReveal } from '../hooks/useReveal'

/**
 * /security — "Your data is safe with Jasper".
 *
 * Measured live at 1440px (.scrape/plat-security.json + .scrape/plat-security.png):
 *   g_section_space         80
 *   hero_vertical_wrap     589   centred hero on blue-300, 4 compliance chips
 *   horizontal_vis_wrap    905   "Secure by design", art right, flame-300 tile
 *   horizontal_vis_wrap    793   "Privacy at its core", art LEFT
 *   value_props_wrap      1326   80px display heading, badge row, 3 cards +
 *                                photo, on a yellow-300 ground
 *   simple_layout_wrap    4312   the security whitepaper — sticky jump nav on
 *                                a blue-300 ground (see DocLayout)
 *   layout_cards_wrap      835   "Foster AI Trust. Scale AI Adoption." 4-up
 *   cta_main_wrap          925   the shared PageCta
 *
 * Grounds sampled off the capture: hero and whitepaper rgb(206,235,255)
 * blue-300; the value-props band rgb(255,254,239) yellow-300; the hero's
 * compliance chips rgb(129,203,255) blue-400. Everything else white.
 */

/* The four mono chips under the hero lede, each with a 16px check glyph. */
const CHIPS = ['SOC 2 Compliant', 'GDPR Compliant', 'SSO Enabled', 'SCIM Enabled']

/* `.value_props_wrap` cards — three flat tints beside the Riso photograph. */
const VALUE_ITEMS = [
  { title: 'Secure access', tint: 'bg-flame-300',
    body: 'Jasper makes security and privacy simple. With an advanced suite of built-in safety measures, you can rest assured that your data is secure and confidential without any additional set up or configuration. Enjoy peace of mind knowing your information is always safe with Jasper.',
    link: { label: 'Learn More' } },
  { title: 'Built in privacy', tint: 'bg-green-300',
    body: "Securely access Jasper to streamline your writing process and create engaging content. Bring your own identity with SSO, login with Google, or use Jasper's password-less authentication.",
    link: { label: 'Learn More' } },
  { title: 'Jasper API', tint: 'bg-blue-300',
    body: "Securely power your applications with Jasper's powerful API. Our secure API allows you to quickly integrate Jasper into your existing applications, ensuring data is always protected. Streamline the content creation process & access Jasper from any device or platform for maximum efficiency.",
    link: { label: 'Learn More' } },
]

/* The three certification badges that sit under the value-props heading. */
const BADGES = [
  { src: '/assets/AICPA-SOC.png', w: 64, h: 64,
    alt: "Blue circular AICPA SOC logo with text 'SOC for Service Organizations'." },
  { src: '/assets/PCI.avif', w: 121, h: 48,
    alt: 'PCI DSS Compliant badge with a green check mark.' },
  { src: '/assets/GDPR.avif', w: 64, h: 64,
    alt: 'Blue circular emblem with 12 yellow stars arranged in a ring.' },
]

/* The whitepaper body — every paragraph verbatim from the live richtext. */
const DOC_NAV = [
  { label: 'Introduction', id: 'introduction' },
  { label: 'Protecting Customer Data', id: 'protecting-customer-data' },
  { label: 'Independent Attestation', id: 'independent-attestation' },
  { label: "Jasper's Responsibility", id: 'jaspers-responsibility' },
  { label: 'Your Responsibility', id: 'your-responsibility' },
  { label: 'Conclusion', id: 'conclusion' },
]

const DOC_SECTIONS = [
  {
    id: 'introduction', title: 'Introduction',
    blocks: [
      'Jasper is the future of content creation for enterprise marketing teams. We are committed to providing a highly available and secure environment for you to create content.',
      'This content highlights our security practices to help you understand how we ensure security by design.',
    ],
  },
  {
    id: 'protecting-customer-data', title: 'Protecting customer data',
    blocks: [
      'Jasper’s Security team, led by our Director of Security, is responsible for implementing and managing our security program. The focus of Jasper’s security program is to prevent unauthorized access, use, and disclosure of customer data. Our security program is aligned with AICPA Trust Services Principles and is constantly evolving in accordance with industry best practices.',
    ],
  },
  {
    id: 'independent-attestation', title: 'Independent attestation',
    blocks: [
      'Customers may receive copies of Jasper’s SOC2 report, as well as all other available documentation from our Compliance Portal at security.jasper.ai',
      { h3: 'Security compliance', paras: [
        'Jasper is continuously monitoring and improving upon the design and effectiveness of our security controls. We partner with a reputable third party for their independent assessment of our efforts. All internal and external audit findings are shared with executive management.',
      ] },
      { h3: 'Penetration testing', paras: [
        'Jasper engages an independent third party to conduct annual network and application penetration tests. Identified findings are tracked to resolution, and results reports are shared with executive management.',
      ] },
    ],
  },
  {
    id: 'jaspers-responsibility', title: 'Jasper’s responsibility',
    blocks: [
      { h3: 'Access control', paras: [
        'When provisioning access, IT adheres to the principles of least privilege and role-based access control, meaning that employees are only authorized the access and permissions required to fulfill their job responsibilities. User access reviews, including production access, are performed semi-annually. Access to the production infrastructure and supporting systems requires MFA.',
        'Employee access is revoked within two business days of an employee’s termination. In the event of involuntary termination, access is revoked immediately.',
      ] },
      { h3: 'Cloud hosting', paras: [
        'The Jasper application is hosted across multiple availability zones in the US-East1 & US-East4 regions for increased redundancy.',
      ] },
      { h3: 'Data retention', paras: [
        'Jasper retains customer data for the duration of the agreement. Following termination, data is retained in accordance with Jasper’s Data Retention Policy, unless Jasper receives a written data deletion request.',
        'Jasper’s hosting provider, GCP, is responsible for ensuring the proper sanitization of disks and physical media. Jasper sanitizes employee laptops prior to reuse or disposal.',
      ] },
      { h3: 'Encryption', paras: [
        'Jasper encrypts all customer data at rest and in transit using strong encryption methods. All information is transmitted via HTTPS using TLS1.2+ with AES256 encryption and SHA2 signatures, defaulting to TLS1.3 based on client ability. Data at rest is encrypted at the storage level using AES256. Database connections are verified using TLS certificates, and encrypted in transit using SSL.',
        'Encryption keys are managed by and stored securely in GCP. Jasper personnel do not have access to the encryption keys. All key usage is logged and monitored for anomalous activity.',
      ] },
      { h3: 'Endpoints', paras: [
        'Employees are provisioned company-managed workstations. Employees are not permitted to use their personal devices for work (e.g., BYOD). All workstations are configured with disk encryption, anti-malware, password protection, idle lockout, and automatic OS updates. IT monitors employee workstation for deviations to ensure they are compliant with corporate policy.',
      ] },
      { h3: 'Logging', paras: [
        'Centralized logging is enabled for all production systems. These logs are reviewed for indications of compromise and alerted upon. The Security team is responsible for monitoring and alerting thresholds are reached, tracking security events to resolution in accordance with the incident response plan.',
      ] },
      { h3: 'Network', paras: [
        'Jasper’s firewalls are configured to deny all incoming traffic by default. Firewall rules are reviewed at least annually. Alerts generated by the Intrusion Detection System (IDS) are sent to on-call personnel for investigation and triage. Jasper also utilizes a WAF and CDN in order to both protect against common web application vulnerabilities, like DDoS attacks, and to provide faster access to the application.',
      ] },
      { h3: 'Personnel', paras: [
        'Security of the Jasper environment is the shared responsibility of all Jasper employees and contractors who have access to Jasper’s information systems. Prior to their start date, all employees and contractors must have a completed background check on file, as legally permissible. Employees and contractors must also sign a confidentiality agreement, the employee handbook, and Jasper’s security policies.',
        'All employees are required to complete security awareness training upon hire and annually thereafter. Training curriculum includes phishing awareness, remote work best practices, device security, and incident reporting. Developers are required to complete additional training scoped to secure coding practices.',
        'Violations of any corporate policies may result in disciplinary measures up to and including termination.',
      ] },
      { h3: 'Secure development', paras: [
        'Jasper has built a secure software development lifecycle (SDLC), including requirements like independent peer code review and automated testing. Non-standard changes go through a change management process that covers emergency changes and hotfixes. The agile nature of the process allows for engineers to follow their own release cycles, deploying continuous improvements to the Jasper application.',
        'All code is managed in a version control repository, with branch protections in place. SAST and DAST are also in place. Access to source code requires MFA.',
      ] },
      { h3: 'Third parties', paras: [
        <>Jasper partners with third parties to provide key services. Third parties that handle customer personal data, also known as sub-processors, are continuously monitored in order to ensure that their security programs continue to meet Jasper’s standards. Jasper reassesses its subprocessors annually, which includes a review of their independent audit reports and penetration test reports. For the full list of Jasper’s subprocessors, please see{' '}
        <a href="/legal" className="underline underline-offset-4">jasper.ai/legal/sub-processors.</a></>,
      ] },
      { h3: 'Vulnerability management', paras: [
        'Internal and external vulnerability scans are performed weekly. Identified vulnerabilities are remediated in accordance with severity.',
      ] },
    ],
  },
  {
    id: 'your-responsibility', title: 'Your responsibility',
    blocks: [
      'Though Jasper is responsible for the vast majority of the security controls implemented to securing customer data and the application, our customers are responsible for securing their user accounts. This includes creating strong passwords, provisioning user accounts and permissions, and disabling accounts as needed.',
      'Additionally, customers are responsible for determining the appropriateness of the data entered into the application. By default, Jasper handles limited customer PII (name and email). The sensitivity of the data that customers input to generate content is ultimately their responsibility. Customers should refrain from providing cardholder information, protected health information, and other types of sensitive, regulated information.',
    ],
  },
  {
    id: 'conclusion', title: 'Conclusion',
    blocks: [
      'Ensuring the security and privacy of customer information is vital to our company mission. The success of our customers is at the core of what we do.',
      'We hope this insight into our security program helps to build and maintain your trust in Jasper.',
    ],
  },
]

/* `.layout_cards_wrap` — the closing 4-up. Heading colours are the tint's own
   dark step, measured on live (olive-700 / green-700 / ink / flame-800). */
const TRUST_CARDS = [
  { title: 'Secure & private.', tint: 'bg-yellow-500', fg: 'text-olive-700',
    body: 'Scale AI across your entire marketing org with enterprise-grade security alongside marketing-grade quality.' },
  { title: 'LLM-optimized.', tint: 'bg-green-400', fg: 'text-green-700',
    body: 'We curate top LLMs, future-proofing your AI investment so marketers can focus on marketing, not model maintenance.' },
  { title: 'Governable.', tint: 'bg-blue-300', fg: 'text-ink',
    body: 'Put automated guardrails in place with advanced admin controls, secure group settings, and AI audit logs.' },
  { title: 'Compliant.', tint: 'bg-flame-300', fg: 'text-flame-800',
    body: 'Enterprise-grade encryption, secure and flexible deployment, SSO-enabled, SOC2 and GDPR compliant.' },
]

export default function Security() {
  const heroRef = useReveal({ threshold: 0 })

  return (
    <>
      <div aria-hidden="true" className="h-[80px] bg-surface" />

      {/* hero_vertical_wrap — 589px on blue-300 */}
      <section ref={heroRef} className="clip-bleed bg-blue-300">
        {/* live's hero_vertical_wrap measures 589px around a ~429px content
            well — 80px of g_section_space above and below it. Our substitute
            face sets the same copy ~35px shorter, so the block is padded to
            115px to land on the measured section height rather than shrinking
            or growing any type. */}
        <div className="u-container flex flex-col items-center py-[115px] text-center">
          {/* live breaks this as "Your data is safe / with Jasper" in a 640px
              measure; the substitute Playfair runs wider, so the measure is
              narrowed to hold the same two lines. Font size is unchanged. */}
          <h1 className="reveal max-w-[540px] font-serif text-ink tracking-tightest
                         text-[clamp(2.5rem,5.55vw,5rem)] leading-1">
            Your data is safe with Jasper
          </h1>

          <p className="reveal mt-6 max-w-[460px] text-text-main text-ink text-pretty"
             style={{ '--reveal-delay': '80ms' }}>
            Experience unparalleled safety and security with our cutting-edge AI
            solutions designed with your data &amp; privacy in mind.
          </p>

          <ul className="reveal mt-6 flex list-none flex-wrap items-center justify-center gap-3"
              style={{ '--reveal-delay': '140ms' }}>
            {CHIPS.map((c) => (
              <li key={c} className="flex items-center gap-2 bg-blue-400 px-2 py-1">
                <img src="/assets/Icon---Checkmark-Circle.svg" alt="" aria-hidden="true"
                     width={16} height={16} className="h-4 w-4 shrink-0" />
                <span className="eyebrow text-ink leading-none">{c}</span>
              </li>
            ))}
          </ul>

          <CtaRow className="reveal mt-8 justify-center" style={{ '--reveal-delay': '200ms' }}
                  ctas={[
                    { label: 'Get the Whitepaper', variant: 'btn-secondary' },
                    { label: 'Get A Demo', variant: 'btn-primary' },
                  ]} />
        </div>
      </section>

      {/* horizontal_vis_wrap — 905px, "Secure by design", art on the right */}
      <HorizontalVis
        title="Secure by design" titleSize="54"
        body="Security is part of who we are. Its been considered in every decision we make, and has been a part of our product from the very start."
        img={{ src: '/assets/Security-Page---Security.png', w: 660, h: 681,
               alt: 'Outline of a shield with a padlock in the center above SOC2, SSO and GDPR pills.' }}
        spaceTop={112} spaceBottom={112}
      />

      {/* horizontal_vis_wrap — 793px, "Privacy at its core", art on the LEFT */}
      <HorizontalVis
        flip
        title="Privacy at its core" titleSize="54"
        body="We partner with Transcend to provide industry-best privacy controls, giving you complete authority over your data."
        link={{ label: 'Transcend' }}
        img={{ src: '/assets/Security-Page---Privacy.png', w: 660, h: 681,
               alt: 'Toggle switch in off position with an eye icon crossed out inside a shield.' }}
        spaceTop={0} spaceBottom={112}
      />

      {/* value_props_wrap — 1326px on the yellow-300 ground */}
      <ValueProps
        eyebrow="Security & Compliance"
        title="Enterprise-grade safety & security"
        tint="bg-yellow-300"
        items={VALUE_ITEMS}
        photo={{ src: '/assets/Riso-1.png',
                 alt: 'Three colleagues having a discussion around a laptop in a bright office.' }}
      >
        <ul className="mt-8 flex list-none flex-wrap items-center gap-6">
          {BADGES.map((b) => (
            <li key={b.src}>
              <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy"
                   className="h-16 w-auto object-contain" />
            </li>
          ))}
        </ul>
      </ValueProps>

      {/* simple_layout_wrap — 4312px whitepaper on blue-300 */}
      <DocLayout
        title="Security at Jasper"
        nav={DOC_NAV}
        cta={{ label: 'Get The Whitepaper', variant: 'btn-tertiary' }}
        sections={DOC_SECTIONS}
        signoff={<>Have additional questions? Email us at{' '}
          <a href="mailto:security@jasper.ai" className="underline underline-offset-[6px]">
            security@jasper.ai
          </a>
        </>}
      />

      {/* layout_cards_wrap — 835px, the "Foster AI Trust" 4-up */}
      <TrustCards
        eyebrow="Trust"
        title="Foster AI Trust. Scale AI Adoption."
        body="Scale AI across your entire marketing org with enterprise-grade security alongside marketing-grade quality."
        link={{ label: 'Explore Trust', href: '/trust' }}
        cards={TRUST_CARDS}
      />

      <PageCta />
    </>
  )
}
