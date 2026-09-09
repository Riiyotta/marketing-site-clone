import AgentDetail from '../components/blocks/AgentDetail'

/* ---------------------------------------------------------------------------
   /agents/translation — live page height 6150px (footer 1175 of that).

   Same `apps_page_wrap` template as the other two agent detail pages. Live
   sections (.scrape/plat-agents-translation.json):
      315 animation plate / 80 space / 25 breadcrumb
     3249 sticky_scroll_content_wrap
      587 accordion_1
      112 g_section_space
      503 hero_vertical_wrap

   NOTE: unlike the other two, this page's "Use cases" section is a single
   intro line over a BULLETED list rather than h3 + paragraph pairs, so it is
   emitted through the `useCasesBody` node list instead of `useCases.items`.
--------------------------------------------------------------------------- */

const TOC = [
  { label: 'What is the Translation Agent?', href: '#overview' },
  { label: 'Key benefits of the Translation Agent', href: '#benefits' },
  { label: 'Use cases for the Translation Agent', href: '#use-cases' },
  { label: 'Common questions about the Translation Agent', href: '#faqs' },
]

const TRANSCRIPT = [
  'Narrator: Marketing teams today are expected to show up in every market, in every language, and do it without losing what makes their brand theirs.',
  "Narrator: Jasper's translation agent makes that possible.",
  "Narrator: It's a specialized tool that translates your marketing content, such as campaigns, web copy, sales materials and product pages into 27 languages, while keeping your brand, voice and terminology consistent across every single translation available directly within Canvas and Grid, it seamlessly integrates with your knowledge base, existing brand assets and current workflows.",
  "Narrator: In this video, we'll show you exactly how it works.",
  'Narrator: The translation agent runs a multi phase AI pipeline and each phase is doing something meaningfully different from the last.',
  'Narrator: It starts by deeply understanding your content.',
  'Narrator: Not just the words, but the type, token, tone and audience behind it.',
  'Narrator: From there, it loads your brand glossary and uses it as a through line across the entire process.',
  "Narrator: Before any translation happens, the agent does its research, building a picture of how this kind of content actually sounds when it's written natively in the target language.",
  "Narrator: Then it translates the content, guided by everything it's learned.",
  'Narrator: And finally, this is where the translation agent really stands apart.',
  'Narrator: A dedicated review phase reads the output without ever referencing the original source.',
  "Narrator: It's looking for anything that feels translated rather than written, catches it and refines the final output accordingly.",
  'Narrator: The result is copy that feels like it was made for that market.',
  'Narrator: So now that you know what the translation agent is and how it works, let me show you how to use it in Canvas and in Grid.',
  "Narrator: Lets start with Canvas, the best option when you're translating a single document.",
  'Narrator: First, if you have specialized terms that need consistent translation, upload a glossary file to your knowledge base.',
  'Narrator: Make sure the file name includes the word Glossary so Jasper can detect it automatically.',
  'Narrator: All your terms should be in one master file.',
  'Narrator: Also upload the document you want to translate to your knowledge base as well.',
  'Narrator: Now navigate to your project and open chat.',
  'Narrator: At the bottom of the page where it says Default Agent, select this, then switch to Translation agent here.',
  'Narrator: From the drop down, attach your document from the knowledge base and then use a simple prompt to translate this document.',
  'Narrator: Jasper runs the full five phase pipeline and outputs the translated content directly into your canvas with your original formatting intact.',
  'Narrator: One thing to note, Canvas handles one language per session, so if you need multiple languages, just run a separate session for each.',
  'Narrator: So now you know how to use the translation agent in a canvas.',
  "Narrator: But if you need to translate content at scale, that's where Jasper Grid comes in from your dashboard.",
  'Narrator: Open any grid and click the next open tab at the top of the grid to add a column, select the Translation Agent from the Agent section and from here, give your column a name so you can keep Translation Agent.',
  'Narrator: Next, select your source material.',
  'Narrator: So this is what material you would like to have translated.',
  'Narrator: Select the target language you would like to translate to and then reference your glossary.',
  'Narrator: Click Add.',
  'Narrator: Run the row and your translated output appears right alongside your other content.',
  'Narrator: If you want to add a glossary, add a Knowledge Base column to your grid like I have here.',
  'Narrator: To do that again at the top, select this tab, go to Jasper IQ Knowledge Base, name your column and then hit Add.',
  "Narrator: And that's it.",
  'Narrator: You have branded terminology enforced at scale, the Translation agent works across 27 languages, including Spanish, French, German, Japanese, Chinese, Arabic, Hindi and more.',
  "Narrator: Whether you're localizing a single landing page or running a global campaign across dozens of assets, the Translation Agent gives you the speed of AI with the quality your brand actually needs.",
  'Narrator: Give it a try in Canvas or Grid and let Jasper do the heavy lifting.',
]

const BODY = [
  { h2: 'What is the Translation Agent?', id: 'overview' },
  { p: 'The Translation Agent is a multi-step AI agent purpose-built to translate marketing content at enterprise quality — without the cost or delays of a translation agency.' },
  { p: 'Instead of converting text word-by-word, the Agent reads your document the way a professional translator would: analyzing tone, register, and audience before a single word is written. It pulls your brand glossary from the Jasper Knowledge Base, studies the style of the target language natively, produces a full translation, then runs a dedicated editorial review to find anything that sounds translated rather than written. The result reads as if it was originally created for that market.' },
  { p: 'Every output is aligned with your Jasper IQ settings — including Brand Voice and Audiences — and preserves the formatting and structure of your source content, ensuring global content feels as intentional as your original.' },
  { h3: 'How the Translation Agent works', size: 38 },
  { p: "Most translation tools convert text. The Translation Agent thinks like a professional translator. It analyzes your content, loads your brand glossary, studies how native speakers actually write in the target language, translates, then runs an editorial review before it's done. Five phases. Two surfaces Canvas for single-document translation and Grid for high-volume localization across entire asset libraries. Output that reads like it was written for that market." },
]

const BENEFITS = {
  title: 'Key benefits of the Translation Agent',
  items: [
    { title: 'Glossary-enforced brand terminology',
      body: 'The Agent loads your brand glossary directly from the Jasper Knowledge Base and enforces it throughout the translation. Product names, industry terms, and branded language stay consistent across every language, every time. Your glossary file is detected automatically — no manual linking required.' },
    { title: 'Style-first translation',
      body: 'Before translating, the Agent analyzes the tone, register, and audience of your source content. Stylistic anchors are created in the target language to guide the output, so the translation reflects how native speakers in your market actually write, not how software interprets your text.' },
    { title: 'Native speaker editorial review',
      body: 'A dedicated review phase evaluates the translation without reference to the source. If it sounds translated, it gets flagged and refined. The goal is copy that reads as if it was created for that market.' },
    { title: 'Scale with Jasper Grid',
      body: 'For high-volume localization, add a Translation Agent column to any Grid. Point it at your source content column, choose a target language, and it translates every row automatically. Add one column per language to run multiple localizations simultaneously, ideal for campaign libraries, product catalogs, and enablement assets.' },
    { title: 'Large document and file support',
      body: 'Attach PDFs, documents, URLs, audio, and video files directly in chat. The Agent extracts full text from each attachment, bypassing any summarization pipeline so the complete content is translated. Knowledge Base items are supported up to 100,000 characters (roughly 20–30 pages). Image files and spreadsheets are not supported.' },
    { title: '27 supported languages',
      body: 'English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese (Simplified), Chinese (Traditional), Cantonese, Japanese, Korean, Arabic, Hindi, Polish, Swedish, Norwegian, Danish, Finnish, Turkish, Greek, Hebrew, Thai, Vietnamese, Indonesian, and Malay. Regional dialect preferences — such as Brazilian Portuguese or Mexican Spanish — can be specified in your prompt, with results varying by language.' },
  ],
}

/* Live renders this section as ONE intro line plus four bullets whose lead-in
   phrase is bolded inline; the capture returns them run together
   ("Campaign localizationTranslate a full campaign…"), so the split point is
   restored here from the rendered page. */
const USE_CASES_BODY = [
  { h2: 'Use cases for the Translation Agent', id: 'use-cases' },
  { p: 'The Translation Agent is built for enterprise marketing teams managing content across multiple markets.' },
  { ul: [
    <><strong className="font-medium">Campaign localization</strong>{" Translate a full campaign (email, landing page, social, ads) into your target market's language. Run separate sessions per language in Canvas, or set up one Translation Agent column per language in Grid to localize an entire asset library in one run."}</>,
    <><strong className="font-medium">Product and website content</strong>{' Translate product pages, feature announcements, and marketing copy that needs to sound native, not adapted.'}</>,
    <><strong className="font-medium">Sales and enablement materials</strong>{' Localize pitch decks, battlecards, and customer-facing content for regional teams without losing brand precision.'}</>,
    <><strong className="font-medium">Partner and channel content</strong>{' Translate materials for distributors, resellers, and agency partners across markets at scale.'}</>,
  ] },
]

const FAQ = {
  title: 'Common questions about the Translation Agent',
  items: [
    { q: 'How does the Translation Agent ensure output sounds natural, not translated?',
      a: 'The Agent uses a five-phase pipeline that separates style research from translation. Before translating, it generates native-language writing samples that show how content of this type sounds when written originally in the target language, not just converted from English. A separate editorial review phase then reads the translation without the source text and flags anything that sounds unnatural, which is addressed in a final refinement pass.' },
    { q: 'How does the brand glossary work?',
      a: "Upload your glossary as a text file to the Jasper Knowledge Base. The file name must include the word 'glossary' — Jasper uses this to detect and load it automatically. It supports common formats including arrow notation, tab-separated, CSV, and free-form entries like 'X means Y.' During translation, the glossary serves as a soft guide to preserve natural flow. In the final refinement phase, every glossary term is strictly enforced." },
    { q: 'What file types can the Translation Agent handle?',
      a: 'You can attach PDFs, Word documents, plain text files, URLs, audio files, and video files directly in chat. The Agent extracts the full text from each, bypassing any summarization pipeline so nothing gets truncated. Image files and spreadsheets are not supported for translation.' },
    { q: 'Is there a document size limit?',
      a: 'Knowledge Base attachments are capped at 100,000 characters (roughly 20–30 pages). Documents exceeding 175,000 characters are automatically split into chunks for translation, with continuity context passed between each chunk to preserve consistency. There is a 10-minute stream timeout for very large documents.' },
    { q: 'Which languages are supported?',
      a: 'The Agent supports 27 languages: English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Chinese (Simplified), Chinese (Traditional), Cantonese, Japanese, Korean, Arabic, Hindi, Polish, Swedish, Norwegian, Danish, Finnish, Turkish, Greek, Hebrew, Thai, Vietnamese, Indonesian, and Malay. Regional dialect preferences — such as Mexican Spanish or Brazilian Portuguese — can be specified directly in your prompt, with results varying by language.' },
    { q: 'Does the Translation Agent integrate with Jasper IQ?',
      a: 'Yes. Brand Voice shapes tone and register across languages. Your Knowledge Base is where the Agent sources your brand glossary. Audiences help the Agent calibrate messaging for who will actually read the content. The Agent also preserves the formatting and structure of your source content throughout. The same brand intelligence that governs your source content governs everything the Translation Agent produces.' },
  ],
}

export default function AgentTranslation() {
  return (
    <AgentDetail
      title="Deliver Global Content at Scale with the Translation Agent"
      intro="Global marketing demands more than word-for-word conversion. The Translation Agent translates marketing content into 27 languages with the fluency of a native writer and the consistency of your brand glossary — inside the same workflow where you create. Built by Jasper, it eliminates the cost and delays of external agencies while delivering output that reads as if it was originally written in the target language. Every translation is governed by your Jasper IQ context, including Brand Voice and your Jasper Knowledge Base."
      card={{
        name: 'Translation',
        icon: '/assets/translate.svg',
        still: { src: '/assets/Translation-Agent.png', w: 395, h: 518,
                 alt: 'Translation Agent panel showing a Japanese translation running through glossary, research, review and refinement phases.' },
        includedIn: 'Business Only',
      }}
      toc={TOC}
      transcript={TRANSCRIPT}
      body={BODY}
      benefits={BENEFITS}
      useCasesBody={USE_CASES_BODY}
      faq={FAQ}
      closing={{
        title: 'Global reach. Brand precision. Built into your workflow.',
        body: 'The Translation Agent is available now for Jasper Business customers in Canvas for single-document translation and in Grid for high-volume localization. Get started with location-native translation today!',
        cta: 'Get A Demo Of This Agent',
      }}
    />
  )
}
