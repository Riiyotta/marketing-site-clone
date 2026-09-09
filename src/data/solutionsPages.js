/* ---------------------------------------------------------------------------
   Content for the 13 Solutions sub-pages, captured VERBATIM from live
   jasper.ai at 1440px. Nothing here is written by hand: every string, image
   src and measured box was read out of .scrape/plat-solutions-*.json and
   .scrape/solx.json, then emitted into this file.

   Twelve of the thirteen routes are two Webflow templates fed by CMS content,
   so the shapes below match exactly what IndustryTemplate / RoleTemplate
   consume:

     INDUSTRY_PAGES[slug] = { hero, blade, features[3], story?, cards, faq, closing }
     ROLE_PAGES[slug]     = { hero, useCases, integrations }

   `story` is deliberately absent on professional-services and
   retail-and-consumer-goods — those two live pages ship EIGHT sections with
   no customer-story panel, and the template skips the block rather than
   inventing a quote to fill the slot.
--------------------------------------------------------------------------- */

export const INDUSTRY_PAGES = {
    "financial-services": {
      "hero": {
        "eyebrow": "Solutions for Financial Services",
        "title": "Jasper is the governed AI marketing platform for financial services teams reducing marketing risk",
        "body": "Financial services firms and institutions trust Jasper to scale marketing, improve quality, reduce risk, and eliminate messaging drift. Engaging content? Check. On-brand? Check. Faster compliance reviews? Check, check, and check.",
        "ctas": [
          {
            "label": "Get a Demo",
            "variant": "btn-solid-light"
          }
        ],
        "photo": {
          "src": "/assets/Financial-Services-.avif",
          "alt": "Four financial services professionals celebrating "
        }
      },
      "blade": {
        "title": "The AI marketing platform for financial institutions",
        "logos": [
          {
            "src": "/assets/jasp-morningstar.webp",
            "alt": "Morningstar logo",
            "w": 193,
            "h": 79
          },
          {
            "src": "/assets/jasp-prudential.webp",
            "alt": "Prudential logo",
            "w": 193,
            "h": 79
          },
          {
            "src": "/assets/jasp-AAA.webp",
            "alt": "AAA logo",
            "w": 193,
            "h": 79
          },
          {
            "src": "/assets/USBank.png",
            "alt": "U.S. Bank logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/Wesley-Financial.png",
            "alt": "Wesley Financial logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/AKBANK.png",
            "alt": "Akbank logo",
            "w": 193,
            "h": 80
          }
        ]
      },
      "features": [
        {
          "eyebrow": "Regulated Content Execution",
          "title": "Create compelling financial content in your brand's voice while staying compliant.",
          "lede": [
            "Jasper IQ provides the foundational intelligence layer for regulated content execution from product pages to thought leadership pieces. It unifies brand governance, policy enforcement, knowledge management, and contextual guidance, operating at runtime across all agents and workflows to ensure content is consistent, compliant, and auditable at scale."
          ],
          "items": [
            {
              "title": "Built-in compliance by default",
              "body": "Execute content within pre-approved guardrails using Jasper IQ and Knowledge Base as a unified source of truth. Approved claims, positioning, and disclosures are embedded directly into workflows to maintain consistent branding across every touchpoint.",
              "links": [
                {
                  "label": "Jasper IQ",
                  "href": "/jasper-iq"
                }
              ]
            },
            {
              "title": "Centralized control",
              "body": "Streamline your workflow and move content smoothly through review, approval, and publishing with status tracking in Canvas and seamless routing to workflow tools like Adobe Workfront."
            },
            {
              "title": "Consistent disclosures everywhere",
              "body": "Ensure claims, disclaimers, and required regulatory language remain aligned across web, email, paid, and product content by grounding execution in Knowledge Base."
            }
          ],
          "bg": {
            "src": "/assets/BG-1.png",
            "w": 636,
            "h": 815
          },
          "art": {
            "src": "/assets/Finance-1.png",
            "alt": "Jasper's Brand IQ Style Guide Rules panel showing ",
            "w": 636,
            "h": 693
          }
        },
        {
          "eyebrow": "Personalized Customer Communications",
          "title": "Deliver relevance without increasing risk.",
          "lede": [
            "Customers expect personalized financial experiences across lifecycle stages, products, and channels. But personalization introduces complexity, especially in regulated environments. Jasper enables financial institutions to tailor messaging at scale, while keeping every variation aligned with approved positioning and regulatory standards."
          ],
          "items": [
            {
              "title": "Audience-aware execution",
              "body": "Adapt messaging across customer segments, products, and journeys with confidence using Jasper Grid. Generate variations at scale while preserving regulatory context.",
              "links": [
                {
                  "label": "Jasper Grid",
                  "href": "/grid"
                }
              ]
            },
            {
              "title": "Centralized control",
              "body": "Ensure personalization aligns with approved language, positioning, and disclosures. Jasper IQ works in the background across all workflows to enforce brand and compliance guardrails.",
              "links": [
                {
                  "label": "Jasper IQ",
                  "href": "/jasper-iq"
                }
              ]
            },
            {
              "title": "Safe scaling",
              "body": "Deliver personalized content across email, web, and mobile campaigns using built-in audience structures, customizable agents, and governed workflows."
            }
          ],
          "bg": {
            "src": "/assets/BG-2.png",
            "w": 636,
            "h": 691
          },
          "art": {
            "src": "/assets/Finance-2.png",
            "alt": "Jasper showing a Stonegate Financial social post g",
            "w": 636,
            "h": 588
          }
        },
        {
          "eyebrow": "Always-On Campaigns & Content",
          "title": "Keep financial messaging current as markets change.",
          "lede": [
            "Rates change. Products evolve. Market conditions shift. Without a structured system, marketing teams are forced into reactive updates, manually refreshing content across dozens or hundreds of assets, increasing the likelihood of inconsistencies. Jasper enables continuous, governed marketing execution."
          ],
          "items": [
            {
              "title": "Update content at scale",
              "body": "Mass refresh web pages, offers, emails, and campaign assets using Jasper Grid when rates, disclosures, or positioning change, ensuring updates propagate consistently."
            },
            {
              "title": "Reduced messaging drift",
              "body": "Jasper IQ combines marketing best practices with your unique brand and company knowledge to ensure alignment across every asset, minimizing fragmentation across teams and regions."
            },
            {
              "title": "Operational efficiency",
              "body": "Stop making reactive edits and start implementing a content engineering system codifying your brand, product, and regulatory intelligence into a structured format."
            }
          ],
          "bg": {
            "src": "/assets/BG-3.png",
            "w": 636,
            "h": 691
          },
          "art": {
            "src": "/assets/Finance-3.png",
            "alt": "Jasper Grid running an AEO-Optimized Blogs workflo",
            "w": 636,
            "h": 588
          }
        }
      ],
      "cards": {
        "eyebrow": "Features",
        "title": "How Jasper Powers Financial Services Marketing",
        "body": "Financial services companies of all kinds trust Jasper for complete AI transformation without compromising control. Modernize marketing operations, build sophisticated content pipelines and AI workflows, meet compliance guidelines, and stick to your style guide.",
        "cards": [
          {
            "title": "Brand IQ",
            "body": "Easily engage with and fine-tune brand settings so that every output looks and sounds like you.",
            "link": {
              "label": "Explore Brand IQ",
              "href": "#"
            },
            "img": {
              "src": "/assets/Brand-IQ.avif",
              "alt": "Illustration of an open book with green checkmarks",
              "w": 443,
              "h": 309
            },
            "tint": "bg-green-300/40"
          },
          {
            "title": "Content Pipelines",
            "body": "A structured workflow system that enables repeatability and scale.",
            "link": {
              "label": "Explore Content Pipelines",
              "href": "#"
            },
            "img": {
              "src": "/assets/Content-Pipelines.avif",
              "alt": "Flowchart with two rectangles connected via arrows",
              "w": 443,
              "h": 309
            },
            "tint": "bg-flame-300/60"
          },
          {
            "title": "Jasper Grid",
            "body": "Systematic high-quality content and brand-safe execution, all in an easy-to-use, collaborative spreadsheet.",
            "link": {
              "label": "Explore Jasper Grid",
              "href": "#"
            },
            "img": {
              "src": "/assets/Jasper-Grid.avif",
              "alt": "Illustration of a spreadsheet being collaborativel",
              "w": 443,
              "h": 309
            },
            "tint": "bg-blue-300/50"
          }
        ]
      },
      "faq": {
        "title": "Questions about Jasper for Financial Services",
        "items": [
          {
            "q": "What is Jasper for financial services marketing?",
            "a": "Jasper is an enterprise AI marketing platform designed for regulated industries like financial services. It enables banks, wealth management firms, fintech companies, and insurers to create, scale, and govern marketing content while maintaining compliance oversight and brand consistency."
          },
          {
            "q": "How does Jasper support compliance in regulated financial services?",
            "a": "Jasper supports compliance by embedding approved brand standards, disclosures, and regulatory guidance directly into content workflows. Jasper IQ enforces brand and policy guardrails at runtime, Knowledge Base serves as a centralized source of truth, and Canvas provides status tracking and structured review processes."
          },
          {
            "q": "How does Jasper reduce marketing risk and messaging drift?",
            "a": "Jasper reduces marketing risk by centralizing approved product and compliance knowledge, enforcing guardrails during content generation, enabling large-scale updates with Jasper Grid, and maintaining auditability across workflows."
          },
          {
            "q": "How can AI be used safely in financial institutions?",
            "a": "AI can be used safely in regulated financial institutions when it operates within governed systems. Jasper enables safe AI adoption through role-based access controls, human-in-the-loop approvals, embedded brand and compliance guardrails, auditability across content workflows, and an LLM-agnostic architecture aligned with enterprise security policies."
          },
          {
            "q": "What is content engineering in financial services marketing?",
            "a": "Content engineering is the structured design of governed content systems. Instead of manually producing assets, financial institutions codify approved brand standards, disclosures, and product information into Jasper IQ and Knowledge Base. Teams then use agents and workflows to generate compliant, repeatable content at scale."
          },
          {
            "q": "How does Jasper enable personalized marketing without increasing compliance risk?",
            "a": "Jasper enables safe personalization by combining scalable content generation with embedded guardrails. Using Jasper Grid and customizable agents, teams can create audience-specific variations across products and lifecycle stages. Jasper IQ ensures all variations remain aligned with approved claims, disclosures, and positioning."
          }
        ]
      },
      "closing": {
        "title": "Reduce Marketing Risk. Accelerate Execution.",
        "body": "See how financial institutions modernize marketing operations with governance, speed, and measurable impact.",
        "ctas": [
          {
            "label": "Get A Demo",
            "variant": "btn-primary"
          }
        ],
        "photo": {
          "src": "/assets/Photo-with-Overaly.png",
          "alt": "Two people typing on laptops at a wooden table wit"
        }
      },
      "story": {
        "tint": "green",
        "logo": {
          "src": "/assets/USBank.png",
          "alt": "U.S. Bank logo",
          "w": 185,
          "h": 33
        },
        "stats": [],
        "quote": [
          "Jasper was outperforming 75% of our human generated content.",
          "In March of 2025, I had people knocking on my door saying, 'Hey, how do I get access to Jasper?'"
        ],
        "name": "John Dotto",
        "role": "Senior Vice President, Digital Marketing, U.S. Bank",
        "portrait": {
          "src": "/assets/U.S.-Bank-John-Dotto.png",
          "alt": "Man smiling, wearing a dark blazer and white dress",
          "w": 326,
          "h": 407
        }
      }
    },
    "healthcare": {
      "hero": {
        "eyebrow": "Solutions for Healthcare & Life Sciences",
        "title": "Jasper is the governed AI marketing platform for healthcare & life sciences teams operating in regulated environments",
        "body": "From global therapy launches to HCP engagement and patient education campaigns, Jasper enables life sciences and healthcare marketing teams to move faster, without sacrificing control. Deploy governed AI workflows grounded in approved claims, brand standards, and medical context. Reduce production cycles from months to days. Scale across markets. Always keeping humans in the loop.",
        "ctas": [
          {
            "label": "Get a Demo",
            "variant": "btn-solid-light"
          }
        ],
        "photo": {
          "src": "/assets/Healthcare-Life-Sciences-.avif",
          "alt": "Three healthcare marketing professionals reviewing"
        }
      },
      "blade": {
        "title": "The world's leading life sciences teams rely on Jasper for governed AI",
        "logos": [
          {
            "src": "/assets/jasp-sanoflif.webp",
            "alt": "Sanofi logo",
            "w": 205,
            "h": 84
          },
          {
            "src": "/assets/Healthcare-Triangle.png",
            "alt": "Healthcare Triangle logo",
            "w": 205,
            "h": 84
          }
        ]
      },
      "features": [
        {
          "eyebrow": "Compliant Campaign Execution at Scale",
          "title": "Campaign velocity, without compliance risk",
          "lede": [
            "Healthcare marketing doesn't move slowly because teams lack ideas, it slows down because production is fragmented, approvals are manual, and guardrails live outside the workflow. Jasper embeds compliance and brand standards directly into structured campaign execution, so speed and control operate together."
          ],
          "items": [
            {
              "title": "Launch faster without losing control",
              "body": "Compress campaign timelines from weeks to days and cut drafting time from days to hours, all grounded in approved claims and brand standards with Jasper IQ.",
              "links": [
                {
                  "label": "Jasper IQ",
                  "href": "/jasper-iq"
                }
              ]
            },
            {
              "title": "Scale HCP and patient engagement",
              "body": "Start with an approved campaign foundation and produce email, HCP materials, landing pages, paid media variations, and lifecycle touchpoints, all grounded in the same source of truth via Brand IQ and Knowledge Base."
            },
            {
              "title": "Keep humans in the approval loop",
              "body": "Jasper does not replace regulatory or MLR review. It supports it. Workflows are structured so that medical, legal, and brand stakeholders remain in control, with AI accelerating preparation, not bypassing oversight."
            }
          ],
          "bg": {
            "src": "/assets/BG-1.png",
            "w": 636,
            "h": 736
          },
          "art": {
            "src": "/assets/Healthcare-1.png",
            "alt": "Jasper Canvas showing a Patient UGC Content campai",
            "w": 586,
            "h": 626
          }
        },
        {
          "eyebrow": "Launch Excellence in Regulated Markets",
          "title": "One launch. Dozens of markets. Zero misalignment.",
          "lede": [
            "Therapy launches and commercialization programs demand precision. Messaging must evolve as indications expand, data updates, and markets localize. Jasper helps life sciences teams launch faster and stay aligned as products evolve."
          ],
          "items": [
            {
              "title": "Coordinate global launches across markets",
              "body": "Support campaigns across dozens of regions with centralized messaging and localized execution. Global email timelines that once took two months are reduced to weeks."
            },
            {
              "title": "Scale HCP and patient engagement",
              "body": "Generate personalized content variations for HCP engagement, patient education, and lifecycle marketing, producing tailored variants in minutes instead of manual duplication."
            },
            {
              "title": "Update messaging from one governed source",
              "body": "When positioning or claims evolve, update centrally through Brand IQ and Knowledge Base, ensuring that derivative assets across channels remain aligned and controlled."
            }
          ],
          "bg": {
            "src": "/assets/BG-2.png",
            "w": 636,
            "h": 677
          },
          "art": {
            "src": "/assets/Healthcare-2.png",
            "alt": "Jasper Grid showing a Personalized ABM Campaign al",
            "w": 608,
            "h": 576
          }
        },
        {
          "eyebrow": "Governed Content Operations for Life Sciences",
          "title": "AI that works within your guardrails, not around them",
          "lede": [
            "In regulated industries, AI must operate within guardrails, not outside them. Jasper enables controlled AI adoption by embedding medical, brand, and regulatory intelligence directly into execution workflows."
          ],
          "items": [
            {
              "title": "Ground AI in approved claims and medical context",
              "body": "Manage claims libraries with approved statements. Reference clinical documents through Knowledge Base grounding. Reduce hallucination risk by ensuring outputs pull from validated sources.",
              "links": [
                {
                  "label": "Knowledge Base",
                  "href": "/knowledge-base"
                }
              ]
            },
            {
              "title": "Enforce brand and regulatory guardrails",
              "body": "Brand IQ centralizes positioning, tone, safety language, and approved proof points acting as a single source of truth across campaigns."
            },
            {
              "title": "Enable secure, controlled AI usage",
              "body": "Jasper provides enterprise-grade security and governance controls, giving organizations confidence that AI is deployed intentionally, not informally through disconnected chat tools."
            }
          ],
          "bg": {
            "src": "/assets/BG-3.png",
            "w": 636,
            "h": 669
          },
          "art": {
            "src": "/assets/Healthcare-3.png",
            "alt": "Jasper's Add to Knowledge Base interface showing t",
            "w": 636,
            "h": 569
          }
        }
      ],
      "cards": {
        "eyebrow": "Features",
        "title": "How Jasper Powers Healthcare & Life Sciences Marketing Teams",
        "body": "Securely upload your product messaging, regulatory guidelines, disclosures, and brand standards into Jasper. Structured workflows and built-in governance ensure every asset reflects approved language, claims, and tone while keeping execution fast and consistent. Jasper connects compliance, content, and campaign execution into one system, so financial services teams can scale marketing without increasing risk.",
        "cards": [
          {
            "title": "Brand IQ",
            "body": "Easily engage with and fine-tune brand settings so that every output looks and sounds like you.",
            "link": {
              "label": "Explore Brand IQ",
              "href": "#"
            },
            "img": {
              "src": "/assets/Brand-IQ.avif",
              "alt": "Illustration of an open book with green checkmarks",
              "w": 443,
              "h": 309
            },
            "tint": "bg-green-300/40"
          },
          {
            "title": "Content Pipelines",
            "body": "A structured workflow system that enables repeatability and scale.",
            "link": {
              "label": "Explore Content Pipelines",
              "href": "#"
            },
            "img": {
              "src": "/assets/Content-Pipelines.avif",
              "alt": "Flowchart with two rectangles connected via arrows",
              "w": 443,
              "h": 309
            },
            "tint": "bg-flame-300/60"
          },
          {
            "title": "Jasper Grid",
            "body": "Systematic high-quality content and brand-safe execution, all in an easy-to-use, collaborative spreadsheet.",
            "link": {
              "label": "Explore Jasper Grid",
              "href": "#"
            },
            "img": {
              "src": "/assets/Jasper-Grid.avif",
              "alt": "Illustration of a spreadsheet being collaborativel",
              "w": 443,
              "h": 309
            },
            "tint": "bg-blue-300/50"
          }
        ]
      },
      "faq": {
        "title": "Questions about Jasper for Healthcare & Life Sciences",
        "items": [
          {
            "q": "What is Jasper?",
            "a": "Jasper is a governed AI marketing platform designed for enterprise teams. In healthcare and life sciences, it enables marketing organizations to scale compliant campaign production, accelerate launches, and maintain brand and regulatory oversight through structured workflows and embedded guardrails."
          },
          {
            "q": "Is Jasper secure for healthcare and life sciences organizations?",
            "a": "Yes. Jasper is built with enterprise-grade security and governance controls to support highly regulated industries. Organizations maintain control over users, workflows, and knowledge sources. AI operates within defined parameters rather than as an open-ended chat environment."
          },
          {
            "q": "Will AI hallucinate clinical or medical claims?",
            "a": "Jasper reduces hallucination risk by grounding outputs in approved knowledge sources. With Knowledge Base and Brand IQ, teams can anchor AI-generated content to validated claims libraries, clinical documents, and brand standards. AI accelerates drafting, but human review and approval remain part of the workflow."
          },
          {
            "q": "Can content created in Jasper pass regulatory review?",
            "a": "Jasper does not replace regulatory or MLR review. Instead, it supports those processes by generating content grounded in approved claims and structured within compliant workflows. Final approval remains with designated reviewers, ensuring appropriate oversight."
          },
          {
            "q": "How does Jasper enforce brand and regulatory guardrails?",
            "a": "Brand IQ centralizes approved messaging, tone, positioning, and proof points. Knowledge Base grounds outputs in validated medical and clinical content. Structured workflows ensure content creation happens within defined parameters, not outside them."
          },
          {
            "q": "How is Jasper different from general-purpose AI tools?",
            "a": "General-purpose AI tools operate as standalone chat interfaces. Jasper is a governed marketing platform. It embeds brand standards, approved claims, and structured workflows directly into execution, enabling AI to operate within enterprise controls rather than around them."
          }
        ]
      },
      "closing": {
        "title": "Faster execution within a controlled environment built for regulated marketing.",
        "body": "Modern life sciences marketing requires speed, precision, and control. See how Jasper enables all three within a governed, enterprise-ready platform built for regulated industries.",
        "ctas": [
          {
            "label": "Get A Demo",
            "variant": "btn-primary"
          }
        ],
        "photo": {
          "src": "/assets/Photo-with-Overaly.png",
          "alt": "Two people typing on laptops at a wooden table wit"
        }
      },
      "story": {
        "tint": "green",
        "logo": {
          "src": "/assets/Sanofi_logo.webp",
          "alt": "Sanofi logo",
          "w": 185,
          "h": 33
        },
        "stats": [],
        "quote": [
          "From 2024 to 2025, we've cut our content creation costs and we've been able to accelerate our content production by 68%."
        ],
        "name": "Madelene Glomsten",
        "role": "Head of Global Marketing, Sanofi",
        "portrait": {
          "src": "/assets/Sanofi-Madelene-Glomsten.png",
          "alt": "Smiling woman with glasses and short blonde hair w",
          "w": 326,
          "h": 407
        }
      }
    },
    "media-and-entertainment": {
      "hero": {
        "eyebrow": "Solutions for Media & Entertainment",
        "title": "Jasper is the AI marketing platform for media & entertainment teams producing content at scale",
        "body": "Jasper gives media and entertainment marketing teams the AI tools they need to create great content at scale. Our pre-made and customizable agents and Canvas help you create. Jasper Grid and IQ provide automation, knowledge management, and governance. You'll manage distinct brand voices across properties, create amazing content, and turn one piece of source material into a full campaign with ease.",
        "ctas": [
          {
            "label": "Get a Demo",
            "variant": "btn-solid-light"
          }
        ],
        "photo": {
          "src": "/assets/Media-Entertainment-.avif",
          "alt": "Two content creators sitting at a wooden desk in a"
        }
      },
      "blade": {
        "title": "Leading media and entertainment brands trust Jasper",
        "logos": [
          {
            "src": "/assets/jasp-harpercollins.webp",
            "alt": "HarperCollins logo",
            "w": 193,
            "h": 79
          },
          {
            "src": "/assets/jasp-iheartmedia.webp",
            "alt": "iHeartMedia logo",
            "w": 193,
            "h": 79
          },
          {
            "src": "/assets/Bestplaces.png",
            "alt": "BestPlaces logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/Localsearch.png",
            "alt": "LocalSearch logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/Merge.png",
            "alt": "MERGE logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/Sage.png",
            "alt": "Sage Publishing logo",
            "w": 193,
            "h": 80
          }
        ]
      },
      "features": [
        {
          "eyebrow": "High-Volume Content Production & Publishing",
          "title": "Content pipelines turn pressure to publish into competitive advantage",
          "lede": [
            "Jasper's AI platform enables editorial and marketing teams to create powerful content pipelines. Lean teams produce high-quality content at scale, grounded in your brand's voice and editorial standards."
          ],
          "items": [
            {
              "title": "Publish more without hiring more",
              "body": "Engineer content generation workflows in Jasper Studio that take a headline, brief, or news hook and produce publish-ready articles, complete with summaries, keywords, and formatted output in minutes.",
              "links": [
                {
                  "label": "Jasper Studio",
                  "href": "/studio"
                }
              ]
            },
            {
              "title": "Brand-neutral workflows",
              "body": "Upload manuscripts, press releases, scripts, show notes, and research to Jasper IQ's Knowledge Base. Jasper uses that source material to generate accurate, on-topic content rather than generic filler.",
              "links": [
                {
                  "label": "Knowledge Base",
                  "href": "/knowledge-base"
                }
              ]
            },
            {
              "title": "Maintain editorial standards across the whole organization",
              "body": "Brand IQ uses past work and brand guidelines to enforce your style guide and voice so content quality stays consistent whether your team produces 10 pieces a week or 100.",
              "links": [
                {
                  "label": "Brand IQ",
                  "href": "/brand-iq"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-1.png",
            "w": 636,
            "h": 748
          },
          "art": {
            "src": "/assets/Media-1.png",
            "alt": "Jasper Grid running the Everstream Q1 Slate Campai",
            "w": 636,
            "h": 636
          }
        },
        {
          "eyebrow": "Multi-Brand, Multi-Channel Campaign Execution",
          "title": "Run campaigns across properties without losing your voice",
          "lede": [
            "Jasper's AI platform enables you to engineer reusable content pipelines for all your brands and channels. Canvas, Grid, and Studio connect our AI agents into workflows you can apply across all your brands and channels. Jasper IQ enables you to set context for each brand. The result? Your teams use consistent structures while producing content that fits each brand's voice, audience, and channel."
          ],
          "items": [
            {
              "title": "One platform, multiple voices",
              "body": "Configure distinct brand voices, audiences, and style rules for every property. Whether you are writing promotional copy for a true crime podcast or a morning radio show, Jasper keeps each voice sharp and separate."
            },
            {
              "title": "Brand-neutral workflows",
              "body": "Custom agents built in Jasper Studio let teams codify their campaign playbook once, so a single brief produces landing page copy, email sequences, social posts, and ad variations, all following a consistent structure while tailoring content to each property's audience.",
              "links": [
                {
                  "label": "Jasper Studio",
                  "href": "/studio"
                }
              ]
            },
            {
              "title": "Launch integrated campaigns faster",
              "body": "Use Jasper's Optimization Agent to analyze existing content, identify key themes and coverage gaps, and generate derivative campaign assets.",
              "links": [
                {
                  "label": "Optimization Agent",
                  "href": "/agents/optimization"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-2.png",
            "w": 636,
            "h": 838
          },
          "art": {
            "src": "/assets/Media-2.png",
            "alt": "Jasper Brand Voice selector open showing multiple ",
            "w": 636,
            "h": 712
          }
        },
        {
          "eyebrow": "Content Repurposing & Promotional Asset Creation",
          "title": "Get more mileage out of every piece of content you create",
          "lede": [
            "In the media and entertainment industry, a single piece of source content, whether it's a book, podcast, research report, or event recording, has the potential to fuel dozens of marketing assets. The challenge is that most teams lack the bandwidth to repurpose this content effectively. Jasper empowers your team to become content engineers, creating repeatable systems that transform one asset into many, and scale your marketing efforts."
          ],
          "items": [
            {
              "title": "From source material to full campaign",
              "body": "Upload a title sheet, episode transcript, event brief, or press release to Knowledge Base, then use agents to generate an entire promotional package: PR materials, social posts, email sequences, ad copy, and web content, all grounded in the original source.",
              "links": [
                {
                  "label": "Knowledge Base",
                  "href": "/knowledge-base"
                }
              ]
            },
            {
              "title": "Remix and repackage at scale",
              "body": "Use Jasper Canvas to transform long-form content into derivative assets across every channel. A single blog post becomes a social thread, an email nurture, a set of ad variations, and a landing page, all maintaining your brand voice and messaging.",
              "links": [
                {
                  "label": "Jasper Canvas",
                  "href": "/canvas"
                }
              ]
            },
            {
              "title": "Bulk content refresh and SEO/AEO/GEO",
              "body": "Jasper Grid and the SEO/AEO/GEO Rewrite Agent enables mass updates without tedious page-by-page manual work. Refresh headlines, meta descriptions, and body copy at scale, while preserving editorial quality and search performance.",
              "links": [
                {
                  "label": "Jasper Grid",
                  "href": "/grid"
                },
                {
                  "label": "SEO/AEO/GEO Rewrite Agent",
                  "href": "/agents"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-3.png",
            "w": 636,
            "h": 905
          },
          "art": {
            "src": "/assets/Media-3.png",
            "alt": "Jasper Grid running an AEO-Optimized Blogs workflo",
            "w": 636,
            "h": 769
          }
        }
      ],
      "cards": {
        "eyebrow": "Features",
        "title": "How Jasper Powers Media & Entertainment Marketing",
        "body": "From national media networks to digital publishers and global publishing houses, Jasper's AI platform enables marketing teams to move beyond content churn to content engineering. The pipelines they build create powerful workflows and deliver great content at speed.",
        "cards": [
          {
            "title": "Brand IQ",
            "body": "Easily engage with and fine-tune brand settings so that every output looks and sounds like you.",
            "link": {
              "label": "Explore Brand IQ",
              "href": "#"
            },
            "img": {
              "src": "/assets/Brand-IQ.avif",
              "alt": "Illustration of an open book with green checkmarks",
              "w": 443,
              "h": 309
            },
            "tint": "bg-green-300/40"
          },
          {
            "title": "Content Pipelines",
            "body": "A structured workflow system that enables repeatability and scale.",
            "link": {
              "label": "Explore Content Pipelines",
              "href": "#"
            },
            "img": {
              "src": "/assets/Content-Pipelines.avif",
              "alt": "Flowchart with two rectangles connected via arrows",
              "w": 443,
              "h": 309
            },
            "tint": "bg-flame-300/60"
          },
          {
            "title": "Jasper Grid",
            "body": "Systematic high-quality content and brand-safe execution, all in an easy-to-use, collaborative spreadsheet.",
            "link": {
              "label": "Explore Jasper Grid",
              "href": "#"
            },
            "img": {
              "src": "/assets/Jasper-Grid.avif",
              "alt": "Illustration of a spreadsheet being collaborativel",
              "w": 443,
              "h": 309
            },
            "tint": "bg-blue-300/50"
          }
        ]
      },
      "faq": {
        "title": "Questions about Jasper for Media & Entertainment",
        "items": [
          {
            "q": "What is Jasper?",
            "a": "Jasper is an AI marketing platform designed for enterprise teams. For media and entertainment companies, it enables marketing and editorial teams to produce, repurpose, and distribute content at scale while maintaining brand voice consistency, editorial quality, and style guide standards across every property and channel."
          },
          {
            "q": "How do media and entertainment companies use Jasper differently from general AI tools?",
            "a": "General AI tools operate as standalone chat interfaces with no awareness of your brands, editorial standards, or content strategy. Jasper is a structured marketing platform for content engineering. It embeds your brand voices, style guides, source materials, and audience knowledge directly into content workflows, so every output reflects your editorial identity, not generic AI copy."
          },
          {
            "q": "Can Jasper maintain distinct voices across multiple brands or properties?",
            "a": "Yes. Jasper's Brand IQ allows teams to configure and enforce unique brand voices, style guide rules, and audience profiles for every property, imprint, show, or regional brand. When creating content, Jasper automatically applies the correct voice and standards, keeping your brands distinct even as you scale."
          },
          {
            "q": "How does Jasper help with content repurposing?",
            "a": "Jasper enables teams to upload source material (manuscripts, scripts, press releases, research reports, event recordings) into its Knowledge Base. From there, you can generate derivative content across formats: blog posts, social media copy, email campaigns, PR materials, ad variations, and web pages."
          },
          {
            "q": "Can Jasper integrate with our existing publishing and CRM tools?",
            "a": "Yes. Jasper's API enables direct integration with publishing systems, CRMs, and workflow tools. Teams can build automated workflows that trigger content generation on events like lead creation or content publication, keeping every touchpoint on-brand without manual drafting."
          },
          {
            "q": "What is content engineering for media companies?",
            "a": "Content engineering is the practice of designing structured, repeatable content systems that AI can execute at scale. Instead of manually producing every asset, media teams codify their brand standards, editorial guidelines, and source materials into Jasper. They then use agents, custom apps, and content pipelines to generate, adapt, and distribute content from that foundation."
          }
        ]
      },
      "closing": {
        "title": "Produce More. Promote Better. Scale Without Compromise.",
        "body": "See how media and entertainment teams use Jasper to turn content into campaigns, faster and more consistently.",
        "ctas": [
          {
            "label": "Get A Demo",
            "variant": "btn-primary"
          }
        ],
        "photo": {
          "src": "/assets/Photo-with-Overaly.png",
          "alt": "Two people typing on laptops at a wooden table wit"
        }
      },
      "story": {
        "tint": "blue",
        "logo": {
          "src": "/assets/jasp-iheartmedia.webp",
          "alt": "iHeartMedia logo",
          "w": 185,
          "h": 33
        },
        "link": {
          "label": "Read Customer Story",
          "href": "/customer-stories"
        },
        "stats": [
          {
            "figure": "1 day",
            "caption": "faster audience insights and persona generation"
          },
          {
            "figure": "⚡︎",
            "caption": "faster audience insights and persona generation"
          }
        ],
        "quote": [
          "Jasper brings together technology partners and creative producers in an entirely new way.",
          "It's the first AI tool I've seen that truly understands how marketers work."
        ],
        "name": "Gayle Troberman",
        "role": "Executive Marketing Advisor, iHeartMedia",
        "portrait": {
          "src": "/assets/iHeartMedia-Gayle-Troberman.png",
          "alt": "Smiling person with curly hair wearing large tinte",
          "w": 222,
          "h": 277
        }
      }
    },
    "professional-services": {
      "hero": {
        "eyebrow": "Solutions for Professional Services",
        "title": "Jasper is the agentic marketing platform for professional services teams scaling expertise into content",
        "body": "Professional services firms need to continuously demonstrate their expertise, build relationships, and maintain their visibility as thought leaders. Jasper's AI marketing platform empowers your team to scale these pillars by launching complete campaigns and maintaining governance across every brand and practice area. From global consultancies to IT services leaders, enterprise firms trust Jasper to execute marketing at scale, achieving consistency, control, and measurable results.",
        "ctas": [
          {
            "label": "Get a Demo",
            "variant": "btn-solid-light"
          }
        ],
        "photo": {
          "src": "/assets/Professional-Services-.avif",
          "alt": "Three business consultants in formal attire gather"
        }
      },
      "blade": {
        "title": "The world's leading professional services organizations trust Jasper",
        "logos": [
          {
            "src": "/assets/jasp-cushman.webp",
            "alt": "Cushman & Wakefield logo",
            "w": 205,
            "h": 84
          },
          {
            "src": "/assets/jasp-kelly.webp",
            "alt": "Kelly logo",
            "w": 205,
            "h": 84
          },
          {
            "src": "/assets/jasp-HH.webp",
            "alt": "HH logo",
            "w": 205,
            "h": 84
          },
          {
            "src": "/assets/Kyndryl.png",
            "alt": "Kyndryl logo",
            "w": 205,
            "h": 84
          }
        ]
      },
      "features": [
        {
          "eyebrow": "Thought Leadership Content at Scale",
          "title": "Turn Deep Expertise Into High-Quality, On-Brand Content Output",
          "lede": [
            "With Jasper IQ, Canvas, Grid, and Agents, build workflows to create high-quality thought leadership content. Produce whitepapers, POVs, blogs, executive bylines, and client newsletters across multiple practice areas and geographies. And unlike generic AI tools, Jasper helps you maintain brand standards and compliance, reducing approval workload and time-to-publication."
          ],
          "items": [
            {
              "title": "Govern every output from a single source of truth",
              "body": "Jasper IQ centralizes your brand voice, messaging guidelines, style rules, and approved positioning, so every agent generates content within your guardrails by default.",
              "links": [
                {
                  "label": "Jasper IQ",
                  "href": "/jasper-iq"
                }
              ]
            },
            {
              "title": "Localize and adapt without starting over",
              "body": "Jasper's Knowledge Base ingests approved source material such as research reports, interview transcripts, white papers, and executive talking points, so agents can generate derivative assets grounded in real expertise rather than generic copy.",
              "links": [
                {
                  "label": "Knowledge Base",
                  "href": "/knowledge-base"
                }
              ]
            },
            {
              "title": "Scale without losing quality or control",
              "body": "Jasper Studio lets admins build custom agents tailored to specific content types, practice areas, or approval workflows. Teams produce more, reviewers spend less time correcting, and governance stays intact as you grow.",
              "links": [
                {
                  "label": "Jasper Studio",
                  "href": "/studio"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-1.png",
            "w": 636,
            "h": 815
          },
          "art": {
            "src": "/assets/ProfServ-1.png",
            "alt": "Jasper Grid showing a Q4 Outreach campaign with Ta",
            "w": 636,
            "h": 693
          }
        },
        {
          "eyebrow": "Campaign Execution Across Practices & Regions",
          "title": "Launch Coordinated Campaigns Without the Coordination Tax",
          "lede": [
            "In a professional services firm, every practice group has its own message, every region has its own market context, and every campaign needs to feel premium and precise. Manually coordinating marketing across teams, channels, and markets creates bottlenecks that slow execution and dilute impact.",
            "Jasper's content pipelines connect AI agents into structured, end-to-end workflows so your teams can launch faster across every practice area and geography without losing brand consistency or strategic alignment."
          ],
          "items": [
            {
              "title": "Run parallel marketing campaigns without fragmentation",
              "body": "With Content Pipelines, your team can structure how marketing workflows from brief to activation across channels and regions. Multiple practice areas or regional teams can execute simultaneously from a shared framework, keeping messaging coherent across the firm.",
              "links": [
                {
                  "label": "Content Pipelines",
                  "href": "/content-pipelines"
                }
              ]
            },
            {
              "title": "Localize and adapt without starting over",
              "body": "The Jasper Localization Agent adapts campaign assets for regional audiences and languages, while preserving your firm's brand standards and messaging architecture."
            },
            {
              "title": "Stay consistent from strategy to execution",
              "body": "Brand IQ ensures every campaign asset reflects the same approved positioning, voice, and compliance rules. No matter who creates it or where, the output reflects your firm's standards.",
              "links": [
                {
                  "label": "Brand IQ",
                  "href": "/brand-iq"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-2.png",
            "w": 636,
            "h": 918
          },
          "art": {
            "src": "/assets/ProfServ-2.png",
            "alt": "Jasper Brand Voice selector open showing multiple ",
            "w": 636,
            "h": 781
          }
        },
        {
          "eyebrow": "Sales Enablement & Client-Facing Content",
          "title": "Equip Every Client Team to Show Up Ready",
          "lede": [
            "In professional services, winning and growing client relationships depends on showing up with the right message, personalized to the client's context. But building tailored pitch decks, case study summaries, RFP responses, and account-specific content is resource-intensive work that competes with billable time.",
            "From AI agents to workflows, Jasper helps BD and marketing teams build content engineering systems that generate personalized client materials at scale, so client teams spend less time writing and more time winning."
          ],
          "items": [
            {
              "title": "Personalize proposals and pitches at scale",
              "body": "Jasper's Personalization capabilities let teams tailor content to specific accounts, industries, or buyer personas without building every asset from scratch. Use Audiences profiles and Knowledge Base context to generate relevant, specific outputs that reflect genuine understanding of the client's world.",
              "links": [
                {
                  "label": "Personalization",
                  "href": "/agents"
                }
              ]
            },
            {
              "title": "Maintain compliance and governance across client content",
              "body": "Jasper Governance enforces approved language, disclaimers, and style rules across all client-facing materials. Admins can set guardrails that prevent unapproved claims or off-brand language from reaching clients, reducing review cycles and compliance risk.",
              "links": [
                {
                  "label": "Jasper Governance",
                  "href": "/governance"
                }
              ]
            },
            {
              "title": "Build a reusable library of proven content",
              "body": "Jasper Studio allows teams to create custom agents for recurring content types, like capability summaries, project summaries, and engagement overviews, so teams stop reinventing the wheel with every new opportunity and instead build on what's already been approved and proven."
            }
          ],
          "bg": {
            "src": "/assets/BG-3.png",
            "w": 636,
            "h": 929
          },
          "art": {
            "src": "/assets/ProfServ-3.png",
            "alt": "Jasper Studio showing the agent creation interface",
            "w": 636,
            "h": 790
          }
        }
      ],
      "cards": {
        "eyebrow": "Features",
        "title": "How Jasper Powers Professional Services Marketing",
        "body": "For professional services organizations, lasting success is rooted in credibility, client trust, and deep domain knowledge. Jasper helps you operationalize that strength at scale, fueling thought leadership, accelerating go-to-market efforts, and maintaining control across every team, brand, and region.",
        "cards": [
          {
            "title": "Brand IQ",
            "body": "Easily engage with and fine-tune brand settings so that every output looks and sounds like you.",
            "link": {
              "label": "Explore Brand IQ",
              "href": "#"
            },
            "img": {
              "src": "/assets/Brand-IQ.avif",
              "alt": "Illustration of an open book with green checkmarks",
              "w": 443,
              "h": 309
            },
            "tint": "bg-green-300/40"
          },
          {
            "title": "Content Pipelines",
            "body": "A structured workflow system that enables repeatability and scale.",
            "link": {
              "label": "Explore Content Pipelines",
              "href": "#"
            },
            "img": {
              "src": "/assets/Content-Pipelines.avif",
              "alt": "Flowchart with two rectangles connected via arrows",
              "w": 443,
              "h": 309
            },
            "tint": "bg-flame-300/60"
          },
          {
            "title": "Jasper Grid",
            "body": "Systematic high-quality content and brand-safe execution, all in an easy-to-use, collaborative spreadsheet.",
            "link": {
              "label": "Explore Jasper Grid",
              "href": "#"
            },
            "img": {
              "src": "/assets/Jasper-Grid.avif",
              "alt": "Illustration of a spreadsheet being collaborativel",
              "w": 443,
              "h": 309
            },
            "tint": "bg-blue-300/50"
          }
        ]
      },
      "faq": {
        "title": "Questions about Jasper for Professional Services",
        "items": [
          {
            "q": "What is Jasper?",
            "a": "Jasper is the marketing agents platform built for enterprise teams. For professional services firms, it enables marketing, BD, and communications teams to produce thought leadership, execute campaigns, and personalize client-facing content at scale, while maintaining the governance, brand consistency, and compliance controls that complex organizations require."
          },
          {
            "q": "How is Jasper different from general AI tools like ChatGPT?",
            "a": "General AI tools have no awareness of your firm's brand standards, approved messaging, practice area expertise, or compliance requirements. Jasper is a structured platform for content engineering. It embeds your brand voice, style guide, audience context, and approved knowledge directly into every agent and workflow, so outputs reflect your firm's standards, not generic AI copy."
          },
          {
            "q": "What is content engineering, and why does it matter for professional services?",
            "a": "Content engineering is the practice of designing structured, repeatable content systems that AI agents can execute at scale. Instead of manually producing every asset, professional services marketers codify their brand standards, messaging frameworks, and source expertise into Jasper. Agents then generate, adapt, and distribute content from that foundation."
          },
          {
            "q": "How does Jasper help with governance and brand compliance?",
            "a": "Jasper IQ is the governance layer of the platform. It centralizes brand rules, approved messaging, audience context, and compliance requirements, so that every agent and workflow operates within the right guardrails by default. Admins can configure workspace-level controls, group-level permissions, and content approval workflows."
          },
          {
            "q": "Can Jasper support multiple practice areas or regional teams with different brand standards?",
            "a": "Yes. Jasper supports group-level brand voices, knowledge bases, and style rules, so different practice areas, regions, or sub-brands can each operate within their own approved parameters. This allows a global firm to maintain a coherent brand while accommodating the nuances of each practice or market."
          },
          {
            "q": "Can Jasper integrate with our existing marketing and CRM tools?",
            "a": "Yes. Jasper's API enables integration with marketing automation platforms, CRMs, and workflow tools. Teams can build automated workflows that trigger content generation based on pipeline events, account activity, or content requests, keeping every touchpoint on-brand without manual drafting."
          }
        ]
      },
      "closing": {
        "title": "Don't just create content, build a system to execute it",
        "body": "Learn how Jasper gives your team the agents, governance, and pipelines to scale marketing with the same rigor you bring to your client work.",
        "ctas": [
          {
            "label": "Get A Demo",
            "variant": "btn-primary"
          }
        ],
        "photo": {
          "src": "/assets/Photo-with-Overaly.png",
          "alt": "Two people typing on laptops at a wooden table wit"
        }
      }
    },
    "retail-and-consumer-goods": {
      "hero": {
        "eyebrow": "Solutions for Retail & Consumer Goods",
        "title": "Jasper is the AI marketing platform for retail & consumer goods teams driving demand across every channel",
        "body": "From product descriptions to email campaigns, retail and consumer goods teams are expected to publish more content, across more channels, for more products, in more markets than ever before. Jasper gives your marketing team a governed AI platform built for that reality. It turns content production at every stage of the funnel into a repeatable system without sacrificing brand quality or consistency.",
        "ctas": [
          {
            "label": "Get a Demo",
            "variant": "btn-solid-light"
          }
        ],
        "photo": {
          "src": "/assets/Retail-Consumer-Goods-.avif",
          "alt": "Three retail and consumer goods professionals walk"
        }
      },
      "blade": {
        "title": "Leading retail and consumer goods brands rely on Jasper for content pipeline solutions",
        "logos": [
          {
            "src": "/assets/Ulta.png",
            "alt": "Ulta Beauty logo",
            "w": 205,
            "h": 84
          },
          {
            "src": "/assets/jasp-Bona.webp",
            "alt": "Bona logo",
            "w": 205,
            "h": 84
          },
          {
            "src": "/assets/Home-Depot.png",
            "alt": "The Home Depot logo",
            "w": 205,
            "h": 84
          }
        ]
      },
      "features": [
        {
          "eyebrow": "Product Content at Scale",
          "title": "Jasper turns product data into publish-ready copy and visuals across every SKU, every brand, every channel",
          "lede": [
            "For retail and consumer goods teams, content is a direct growth lever. Better product descriptions drive conversions. More complete product listings reduce returns. Faster publishing beats competitors to market. But most content teams are stretched thin, and manually producing quality copy and imagery for thousands of SKUs is not a sustainable model.",
            "Jasper lets your team engineer a repeatable, governed system for generating on-brand product descriptions, PDPs, listing copy, and supporting visuals using AI at scale. The result is not just faster production, but a reliable, brand-aligned content operation your team can actually run."
          ],
          "items": [
            {
              "title": "Use AI to engineer your content process, not just your content",
              "body": "Jasper's templatized and customizable agents let teams codify their product content pipeline once, defining inputs, brand rules, and output structure, and run it consistently across every SKU."
            },
            {
              "title": "Codify your campaign playbook, then run it everywhere",
              "body": "Brand IQ centralizes your brand voice, style guidelines, and product knowledge so that what Jasper generates is accurate and on-brand by default.",
              "links": [
                {
                  "label": "Brand IQ",
                  "href": "/brand-iq"
                }
              ]
            },
            {
              "title": "Pair copy with on-brand visuals",
              "body": "Jasper's AI Image Suite allows teams to produce product and lifestyle imagery alongside written content in the same workflow, keeping PDPs, ads, and promotional materials moving without bottlenecks.",
              "links": [
                {
                  "label": "AI Image Suite",
                  "href": "/image/api"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-1.png",
            "w": 636,
            "h": 975
          },
          "art": {
            "src": "/assets/Retail-1.png",
            "alt": "Jasper's AI Image Suite showing a before-and-after",
            "w": 636,
            "h": 829
          }
        },
        {
          "eyebrow": "Multi-Brand Campaign Execution",
          "title": "One AI platform for every brand in your portfolio",
          "lede": [
            "Consumer goods companies rarely operate a single brand. Whether you manage a portfolio of five properties or fifty, the challenge is the same: how do you run campaigns at scale without diluting what makes each brand distinct?",
            "Jasper's platform lets your team engineer reusable content pipelines that apply consistent processes, while producing visual and text content tailored to each brand's voice, audience, and channel mix."
          ],
          "items": [
            {
              "title": "One platform, many brand voices",
              "body": "Brand IQ allows teams to configure separate brand voices, positioning context, and style rules for every property in their portfolio. Each brand gets its own guardrails, so an AI campaign workflow built once can deliver distinctive, quality content across multiple properties."
            },
            {
              "title": "Codify your campaign playbook, then run it everywhere",
              "body": "AI agents built in Jasper Studio let teams turn their marketing campaigns into repeatable workflows. A single brief flows through a structured pipeline to produce channel-specific assets, including email, social, ad copy, and landing pages, each following the brand rules for that specific property.",
              "links": [
                {
                  "label": "Jasper Studio",
                  "href": "/studio"
                }
              ]
            },
            {
              "title": "Create integrated visual and written campaigns in one place",
              "body": "Jasper's AI image generation capabilities sit alongside its writing tools, so teams can produce coordinated copy and creative assets, including social imagery, promotional graphics, and ad visuals, without splitting campaign execution across separate platforms."
            }
          ],
          "bg": {
            "src": "/assets/BG-2.png",
            "w": 636,
            "h": 884
          },
          "art": {
            "src": "/assets/Retail-2.png",
            "alt": "Jasper Brand Voice selector showing regional Nectr",
            "w": 636,
            "h": 752
          }
        },
        {
          "eyebrow": "Email, Ad, and Promotional Content",
          "title": "Jasper's AI means more campaigns, better copy, and less time starting from scratch.",
          "lede": [
            "Retail marketing teams run a relentless volume of campaigns, things like promotional emails, lifecycle sequences, seasonal pushes, paid social, ad copy, and the list goes on. The challenge is not just speed. It is producing content that is personalized, on-brand, and optimized for performance across every channel, without burning out your team or bottlenecking on a handful of writers.",
            "Jasper's AI platform turns retail and consumer goods marketers into content engineers. They can build pipelines to consistently generate campaign content that is grounded in brand voice, audience context, and creative strategy."
          ],
          "items": [
            {
              "title": "Use AI to turn a single brief into a full campaign suite",
              "body": "Jasper Grid and Canvas allow teams to move from a single brief to a complete set of derivative assets. Create emails, social posts, ad variations, landing page copy, and supporting visuals at scale, without manually rebuilding for each channel or format.",
              "links": [
                {
                  "label": "Jasper Grid",
                  "href": "/grid"
                },
                {
                  "label": "Canvas",
                  "href": "/canvas"
                }
              ]
            },
            {
              "title": "Build personalization into the process",
              "body": "Jasper's Personalization Agent allows teams to tailor messaging to specific customer segments, purchase behaviors, and lifecycle stages without creating entirely separate workflows.",
              "links": [
                {
                  "label": "Personalization Agent",
                  "href": "/agents"
                }
              ]
            },
            {
              "title": "Test more creative with less effort",
              "body": "Teams can generate multiple ad copy variations, subject line strategies, and messaging angles in a single workflow run. Performance marketers get more variants to test without a proportional increase in the work required to produce them."
            }
          ],
          "bg": {
            "src": "/assets/BG-3.png",
            "w": 636,
            "h": 975
          },
          "art": {
            "src": "/assets/Retail-3.png",
            "alt": "Jasper Grid with Product Name and Audience columns",
            "w": 636,
            "h": 829
          }
        }
      ],
      "cards": {
        "eyebrow": "Features",
        "title": "How Jasper Powers Retail & Consumer Goods Marketing",
        "body": "Your team produces more content than nearly any other department in your business. The most successful teams create systems to manage this effectively, and Jasper is the platform designed to make content creation seamless and sustainable, no matter the scale.",
        "cards": [
          {
            "title": "Brand IQ",
            "body": "Easily engage with and fine-tune brand settings so that every output looks and sounds like you.",
            "link": {
              "label": "Explore Brand IQ",
              "href": "#"
            },
            "img": {
              "src": "/assets/Brand-IQ.avif",
              "alt": "Illustration of an open book with green checkmarks",
              "w": 443,
              "h": 309
            },
            "tint": "bg-green-300/40"
          },
          {
            "title": "Content Pipelines",
            "body": "A structured workflow system that enables repeatability and scale.",
            "link": {
              "label": "Explore Content Pipelines",
              "href": "#"
            },
            "img": {
              "src": "/assets/Content-Pipelines.avif",
              "alt": "Flowchart with two rectangles connected via arrows",
              "w": 443,
              "h": 309
            },
            "tint": "bg-flame-300/60"
          },
          {
            "title": "Jasper Grid",
            "body": "Systematic high-quality content and brand-safe execution, all in an easy-to-use, collaborative spreadsheet.",
            "link": {
              "label": "Explore Jasper Grid",
              "href": "#"
            },
            "img": {
              "src": "/assets/Jasper-Grid.avif",
              "alt": "Illustration of a spreadsheet being collaborativel",
              "w": 443,
              "h": 309
            },
            "tint": "bg-blue-300/50"
          }
        ]
      },
      "faq": {
        "title": "Questions about Jasper for Retail & Consumer Goods",
        "items": [
          {
            "q": "What is Jasper, and how is it built for retail and consumer goods teams?",
            "a": "Jasper is an AI marketing platform that helps retail and consumer goods teams create, scale, and govern content across every channel and brand. Unlike general-purpose AI tools, Jasper is purpose-built for marketing, with Brand IQ for governance and brand consistency, structured content pipelines that turn campaign processes into repeatable systems, and purpose-built agents that execute real marketing work."
          },
          {
            "q": "What does it mean to engineer your content process?",
            "a": "Content engineering means treating content production as a system rather than a series of one-off tasks. Instead of writers starting from scratch for every SKU or campaign, Jasper lets teams codify their process, define inputs, brand rules, output formats, and review steps, and run that system consistently at scale."
          },
          {
            "q": "Does Jasper support image generation for retail teams?",
            "a": "Yes. Jasper's image generation capabilities allow retail and consumer goods teams to produce product imagery, lifestyle visuals, and promotional graphics directly within the platform or by using the Jasper API. Teams can generate and iterate on visuals alongside written content, keeping PDPs, ads, and campaign materials moving without routing visual needs to a separate tool or vendor."
          },
          {
            "q": "How does Jasper handle large product catalogs?",
            "a": "Jasper's custom agent capabilities allow teams to build processes trained on their brand guidelines and product specifications. Writers enter product inputs and Jasper generates on-brand copy and supporting visuals through a governed, repeatable process. The workflow connects to your existing systems via API or native integrations to reduce manual steps between generation and publishing."
          },
          {
            "q": "Can Jasper support a portfolio of multiple brands?",
            "a": "Yes. Jasper is designed for multi-brand organizations. Brand IQ lets teams configure distinct brand voices, style guides, and knowledge bases for each property. Workflows can be reused across brands with each output tailored to the right audience."
          },
          {
            "q": "How does Jasper help maintain brand governance as content scales?",
            "a": "Brand IQ acts as the governance layer of the platform, centralizing approved brand voice, style rules, and knowledge so that every output reflects your standards by default. Admins control what rules apply across teams and workflows. This means quality control is built into execution, rather than manual review, to catch drift after the fact."
          }
        ]
      },
      "closing": {
        "title": "See how retail and CPG teams increase creative output with Jasper",
        "body": "Your team produces more content than nearly any other department in your business. The most successful teams create systems to manage this effectively, and Jasper is the platform designed to make content creation seamless and sustainable, no matter the scale.",
        "ctas": [
          {
            "label": "Get A Demo",
            "variant": "btn-primary"
          }
        ],
        "photo": {
          "src": "/assets/Photo-with-Overaly.png",
          "alt": "Two people typing on laptops at a wooden table wit"
        }
      }
    },
    "tech": {
      "hero": {
        "eyebrow": "Solutions for Technology Companies",
        "title": "Jasper is the AI marketing platform for technology teams shipping content at product speed",
        "body": "Jasper enables teams to deploy AI agents that do real marketing work with tools like Jasper Grid for scalable execution, Canvas for creation, and IQ for your branding and business knowledge base. Tech teams use agents to engineer fast, high-quality content pipelines as products, messaging, and markets evolve.",
        "ctas": [
          {
            "label": "Get a Demo",
            "variant": "btn-solid-light"
          }
        ],
        "photo": {
          "src": "/assets/Technology-.avif",
          "alt": "Two software engineers at a desk in a tech office,"
        }
      },
      "blade": {
        "title": "The best marketing teams in tech rely on Jasper",
        "logos": [
          {
            "src": "/assets/jasp-hitachi.webp",
            "alt": "Hitachi logo",
            "w": 193,
            "h": 79
          },
          {
            "src": "/assets/Netapp.png",
            "alt": "NetApp logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/Walkme.png",
            "alt": "WalkMe logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/ZoomInfo.png",
            "alt": "ZoomInfo logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/VMWare.png",
            "alt": "VMware logo",
            "w": 193,
            "h": 80
          },
          {
            "src": "/assets/Chegg.png",
            "alt": "Chegg logo",
            "w": 193,
            "h": 80
          }
        ]
      },
      "features": [
        {
          "eyebrow": "Product & Platform Launches",
          "title": "Turn fast-moving roadmaps into coordinated launches",
          "lede": [
            "Tech launches don't stand still. Jasper helps product marketing and growth teams execute launches dynamically, so messaging stays aligned even as features, positioning, and timelines shift."
          ],
          "items": [
            {
              "title": "Stay aligned as products evolve",
              "body": "Update your company's positioning, proof points, and messaging in one place with Brand IQ, creating a single source of truth that ensures brand consistency everywhere.",
              "links": [
                {
                  "label": "Brand IQ",
                  "href": "/brand-iq"
                }
              ]
            },
            {
              "title": "Scale production",
              "body": "Leverage purpose-built agents tailored in Jasper Studio to seamlessly manage multiple releases simultaneously, all without overburdening your teams.",
              "links": [
                {
                  "label": "Jasper Studio",
                  "href": "/studio"
                }
              ]
            },
            {
              "title": "Launch faster",
              "body": "Knowledge Base centralizes and governs your brand, product, and business information so AI agents create accurate, on-brand content by default.",
              "links": [
                {
                  "label": "Knowledge Base",
                  "href": "/knowledge-base"
                }
              ]
            }
          ],
          "bg": {
            "src": "/assets/BG-1.png",
            "w": 636,
            "h": 658
          },
          "art": {
            "src": "/assets/Tech-1.png",
            "alt": "Jasper Grid running a Refreshed Product Listings w",
            "w": 636,
            "h": 559
          }
        },
        {
          "eyebrow": "Technical Content & Search Discovery",
          "title": "Scale credible content without bottlenecking experts",
          "lede": [
            "From blogs and landing pages to SEO, AEO, and technical explainers, tech companies need content that's accurate, authoritative, and easy to keep current. Jasper operationalizes technical content execution without overloading subject-matter experts."
          ],
          "items": [
            {
              "title": "Preserve accuracy",
              "body": "With Brand IQ, ground content in approved product knowledge, documentation, and technical context."
            },
            {
              "title": "Scale production",
              "body": "Use Jasper Grid to generate and refresh extensive content libraries while maintaining quality."
            },
            {
              "title": "Win modern search",
              "body": "Optimize your content structure for both traditional SEO and discovery driven by AI (AEO & GEO) using the Optimization Agent."
            }
          ],
          "bg": {
            "src": "/assets/BG-2.png",
            "w": 636,
            "h": 681
          },
          "art": {
            "src": "/assets/Tech-2.png",
            "alt": "Jasper Brand Voice selector open showing multiple ",
            "w": 636,
            "h": 579
          }
        },
        {
          "eyebrow": "Global Demand & Growth Campaigns",
          "title": "Execute global growth without fragmentation",
          "lede": [
            "As tech companies expand into new markets, marketing execution often breaks down across regions and teams. Jasper helps demand gen and growth teams scale campaigns that stay consistent while adapting locally."
          ],
          "items": [
            {
              "title": "Faster global execution",
              "body": "With Jasper Grid and the translation agent, you can localize and launch campaigns across multiple regions in a matter of days, not months."
            },
            {
              "title": "Consistent messaging",
              "body": "Keep your brand's story consistent across all markets, channels, and audiences with Brand IQ."
            },
            {
              "title": "Reduce dependencies",
              "body": "Jasper Canvas empowers teams to start with a foundational piece of content and generate derivative assets, so you can create with confidence."
            }
          ],
          "bg": {
            "src": "/assets/BG-3.png",
            "w": 636,
            "h": 647
          },
          "art": {
            "src": "/assets/Tech-3.png",
            "alt": "Jasper Translation Agent interface with a Brand Vo",
            "w": 614,
            "h": 550
          }
        }
      ],
      "cards": {
        "eyebrow": "Features",
        "title": "How Jasper Powers Tech Marketing",
        "body": "Enterprise and high-growth technology companies use Jasper to execute product launches, scale technical content, and run global campaigns without losing speed or control.",
        "cards": [
          {
            "title": "Brand IQ",
            "body": "Easily engage with and fine-tune brand settings so that every output looks and sounds like you.",
            "link": {
              "label": "Explore Brand IQ",
              "href": "#"
            },
            "img": {
              "src": "/assets/Brand-IQ.avif",
              "alt": "Illustration of an open book with green checkmarks",
              "w": 443,
              "h": 309
            },
            "tint": "bg-green-300/40"
          },
          {
            "title": "Content Pipelines",
            "body": "A structured workflow system that enables repeatability and scale.",
            "link": {
              "label": "Explore Content Pipelines",
              "href": "#"
            },
            "img": {
              "src": "/assets/Content-Pipelines.avif",
              "alt": "Flowchart with two rectangles connected via arrows",
              "w": 443,
              "h": 309
            },
            "tint": "bg-flame-300/60"
          },
          {
            "title": "Jasper Grid",
            "body": "Systematic high-quality content and brand-safe execution, all in an easy-to-use, collaborative spreadsheet.",
            "link": {
              "label": "Explore Jasper Grid",
              "href": "#"
            },
            "img": {
              "src": "/assets/Jasper-Grid.avif",
              "alt": "Illustration of a spreadsheet being collaborativel",
              "w": 443,
              "h": 309
            },
            "tint": "bg-blue-300/50"
          }
        ]
      },
      "faq": {
        "title": "Questions about Jasper for Tech Teams",
        "items": [
          {
            "q": "What is Jasper?",
            "a": "Jasper is the platform for tech marketing teams, built to simplify and enhance their marketing strategies. Driven by advanced AI agents, Jasper enables teams to scale campaigns while maintaining consistent messaging, even as products, positioning, and markets evolve."
          },
          {
            "q": "How does content engineering help tech marketing teams?",
            "a": "Content engineering helps tech marketing teams turn complex inputs, like product roadmaps and technical docs, into structured, repeatable content systems that AI can execute at scale. With Jasper, teams codify their messaging and brand standards into a single source of truth, then use agents and pipelines to generate, adapt, and update launch assets, technical content, and global campaigns from that foundation."
          },
          {
            "q": "How does Jasper support fast-moving technology product launches?",
            "a": "Jasper supports technology product launches by enabling teams to execute launch content from a single approved source of truth. Messaging can be updated centrally as features, timelines, or positioning change, keeping launches coordinated across channels and regions."
          },
          {
            "q": "What types of launch content can be created with Jasper?",
            "a": "Technology teams use Jasper's 100+ agents to create product launch blogs, landing pages, email campaigns, social content, sales enablement assets, and regional variations, all generated from a shared launch brief and governed workflow."
          },
          {
            "q": "How does Jasper help keep product messaging aligned as products evolve?",
            "a": "Jasper keeps product messaging aligned by centralizing approved product knowledge, positioning, proof points, and brand guidelines in one system. Updates made to shared knowledge are reflected across all content generated from that source."
          },
          {
            "q": "Can Jasper support multiple product or feature launches simultaneously?",
            "a": "Yes. Jasper supports parallel product and feature launches, allowing teams to run multiple structured workflows simultaneously. This helps teams manage overlapping releases without creating inconsistencies or overloading internal resources."
          }
        ]
      },
      "closing": {
        "title": "Market at the speed of your product's evolution",
        "body": "Discover how tech companies use Jasper to scale content, launch faster, and execute marketing with precision.",
        "ctas": [
          {
            "label": "Get A Demo",
            "variant": "btn-primary"
          }
        ],
        "photo": {
          "src": "/assets/Photo-with-Overaly.png",
          "alt": "Two people typing on laptops at a wooden table wit"
        }
      },
      "story": {
        "tint": "blue",
        "logo": {
          "src": "/assets/bonterra-logo-horizontal.png",
          "alt": "Bonterra logo",
          "w": 185,
          "h": 33
        },
        "link": {
          "label": "Read Customer Story",
          "href": "/customer-stories"
        },
        "stats": [
          {
            "figure": "83%",
            "caption": "Standardized brand voice across customer-facing comms"
          }
        ],
        "quote": [
          "The potential for creating content at scale is really where the true value of Jasper lies.",
          "It's not just for one case study, but what could content production look like when you're doing 5 first drafts of a certain kind of project at once? That's where you really see the value - it's the scalable system you're building."
        ],
        "name": "Neil Grasso",
        "role": "Customer Marketing Manager, Bonterra",
        "portrait": {
          "src": "/assets/Neil-Grasso-Bonterra.png",
          "alt": "Young man with light brown hair wearing a blue zip",
          "w": 222,
          "h": 277
        }
      }
    }
  }

export const ROLE_PAGES = {
    "brand-marketers": {
      "hero": {
        "eyebrow": "Solutions for Brand Marketers",
        "title": "Protect your brand while you scale it",
        "body": "Jasper centralizes brand voice, guidelines, and approvals to make it easy to scale on-brand content across teams, channels, and regions without slowing creators down.",
        "ctas": [
          {
            "label": "Start Free Trial",
            "variant": "btn-secondary"
          },
          {
            "label": "Get Demo",
            "variant": "btn-primary"
          }
        ],
        "headshotLeft": {
          "src": "/assets/brand-headshot.webp"
        },
        "headshotRight": {
          "src": "/assets/headshot-10.webp"
        }
      },
      "useCases": {
        "eyebrow": "Use Cases",
        "title": "The only generative AI purpose-built for brand marketers",
        "cards": [
          {
            "title": "Scale on-brand campaigns",
            "body": "Fine-tune Jasper to ensure that all outputs are aligned to your brand identity—across both text and images—and that any imported content is verified for brand compliance."
          },
          {
            "title": "Transform images at scale",
            "body": "Reduce brand compliance bottlenecks by using Jasper to remove and replace backgrounds, rescale, crop, remove text or reimagine for campaigns."
          },
          {
            "title": "Easily adjust brand styles & voices",
            "body": "Use Jasper’s intuitive Style Guide and Brand Voice tools—within the Jasper interface, or embedded in your own apps as an extension—to tweak and perfect content before it ships."
          }
        ]
      },
      "integrations": {
        "title": "Integrations for Brand Marketers",
        "body": "Your team can’t be everywhere, but Jasper can. With Jasper’s integration library, you can level up your brand marketing and start creating on-brand, multimodal content at scale.",
        "ctas": [
          {
            "label": "Explore Integrations",
            "variant": "btn-secondary"
          }
        ]
      }
    },
    "content-marketers": {
      "hero": {
        "eyebrow": "Solutions for Content Marketers",
        "title": "Turn content operations into a growth engine",
        "body": "Jasper helps content teams plan, create, and scale high-quality, on-brand content across marketing channels without sacrificing consistency, governance, or speed.",
        "ctas": [
          {
            "label": "Start Free Trial",
            "variant": "btn-secondary"
          },
          {
            "label": "Get Demo",
            "variant": "btn-primary"
          }
        ],
        "headshotLeft": {
          "src": "/assets/content-headshot.webp"
        },
        "headshotRight": {
          "src": "/assets/headshot-7.webp"
        }
      },
      "useCases": {
        "eyebrow": "Use Cases",
        "title": "The only generative AI purpose-built for content marketing",
        "cards": [
          {
            "title": "Ideate, create, and optimize content",
            "body": "Use Jasper to generate new content ideas, and then transform those ideas into high-quality text and visual content in seconds."
          },
          {
            "title": "Scale content with automation",
            "body": "Effortlessly convert assets into multiple, derivative formats across languages, segments, and channels."
          },
          {
            "title": "Build an effective content strategy",
            "body": "Research your target audience, perform a content audit, establish a content calendar, and assign content pieces."
          }
        ]
      },
      "integrations": {
        "title": "Integrations for Content Marketers",
        "body": "Your team can’t be everywhere, but Jasper can. With Jasper’s integration library, you can level up your product marketing and start creating product & campaign launches, enablement, and competitive intelligence at scale.",
        "ctas": [
          {
            "label": "Explore Integrations",
            "variant": "btn-secondary"
          }
        ]
      }
    },
    "field-marketers": {
      "hero": {
        "eyebrow": "Solutions for Field Marketers",
        "title": "Launch local campaigns at global speed",
        "body": "Jasper helps field marketers quickly generate localized, campaign-ready content so regional teams can personalize experiences, stay on brand, and get to market faster.",
        "ctas": [
          {
            "label": "Start Free Trial",
            "variant": "btn-secondary"
          },
          {
            "label": "Get Demo",
            "variant": "btn-primary"
          }
        ],
        "headshotLeft": {
          "src": "/assets/headshot-10.webp"
        },
        "headshotRight": {
          "src": "/assets/headshot-2.webp"
        }
      },
      "useCases": {
        "eyebrow": "Use Cases",
        "title": "The only generative AI purpose-built for field marketers",
        "cards": [
          {
            "title": "Build an effective field strategy",
            "body": "Analyze company performance and pipeline data to develop a plan for delivering personalized and resonant in-person experiences."
          },
          {
            "title": "Extend your program's impact",
            "body": "Effortlessly convert field content into various derivative formats so they can stay in market longer, driving increased impact."
          },
          {
            "title": "Drive event signups & engagement",
            "body": "Promote your events with personalized, cross-channel content that increases attendance and engagement."
          }
        ]
      },
      "integrations": {
        "title": "Integrations for Field Marketers",
        "body": "Your team can’t be everywhere, but Jasper can. With Jasper's integrations, analyze performance data to deliver personalized, on-brand experiences. Effortlessly repurpose field content to extend its impact and boost event registrations with cross-channel, personalized content to drive attendance and engagement.",
        "ctas": [
          {
            "label": "Explore Integrations",
            "variant": "btn-secondary"
          }
        ]
      }
    },
    "performance-marketers": {
      "hero": {
        "eyebrow": "Solutions for Performance Marketers",
        "title": "Scale personalization without slowing revenue",
        "body": "Jasper enables performance marketing teams to scale personalized ads, landing pages, and ABM content by automating production while maintaining brand control and accelerating pipeline creation.",
        "ctas": [
          {
            "label": "Start Free Trial",
            "variant": "btn-secondary"
          },
          {
            "label": "Get Demo",
            "variant": "btn-primary"
          }
        ],
        "headshotLeft": {
          "src": "/assets/performance-headshot.webp"
        },
        "headshotRight": {
          "src": "/assets/headshot-2.webp"
        }
      },
      "useCases": {
        "eyebrow": "Use Cases",
        "title": "The only generative AI purpose-built for performance marketers",
        "cards": [
          {
            "title": "Personalize every interaction",
            "body": "Create hyper-personalized, full-funnel campaigns in seconds—from personalized drip campaigns to multi-channel ads—that drive engagement and revenue."
          },
          {
            "title": "Scale on-brand campaigns",
            "body": "Use your company data to refine ICPs and audience focus. Jasper automates account research to align marketing and sales—and drive more pipeline."
          },
          {
            "title": "Build advanced ABM pages",
            "body": "Create stunning, personalized online experiences for your target accounts at a previously impossible scale, powered by deep account and ICP level research."
          }
        ]
      },
      "integrations": {
        "title": "Integrations for Performance Marketers",
        "body": "Your team can’t be everywhere, but Jasper can. With Jasper’s integration library, you can level up your asset creation and marketing campaigns at scale.",
        "ctas": [
          {
            "label": "Explore Integrations",
            "variant": "btn-secondary"
          }
        ]
      }
    },
    "pr-and-communications": {
      "hero": {
        "eyebrow": "Solutions for PR & Communications",
        "title": "Move faster without losing message control",
        "body": "Jasper helps marketing and communications teams research, draft, and adapt press, executive, and internal communications to ensure every message is timely, accurate, and on brand.",
        "ctas": [
          {
            "label": "Start Free Trial",
            "variant": "btn-secondary"
          },
          {
            "label": "Get Demo",
            "variant": "btn-primary"
          }
        ],
        "headshotLeft": {
          "src": "/assets/performance-headshot.png"
        },
        "headshotRight": {
          "src": "/assets/headshot-8.webp"
        }
      },
      "useCases": {
        "eyebrow": "Use Cases",
        "title": "The only generative AI purpose-built for PR and Communications",
        "cards": [
          {
            "title": "Amplify your share of voice",
            "body": "Use your company data sources to refine your comms and channel strategy with Jasper-led research, and recommended topics, stories, and strategies."
          },
          {
            "title": "Scale internal & exec comms",
            "body": "Craft compelling communication cadences that align to your executives’ voices, tones, and styles, even across different languages."
          },
          {
            "title": "Supercharge your social strategy",
            "body": "Automatically generate copy and imagery tailored for each social channel, optimized according to each channel’s best practices."
          }
        ]
      },
      "integrations": {
        "title": "Integrations for PR & Communications",
        "body": "Your team can’t be everywhere, but Jasper can. With Jasper’s integration library, you can level up your PR & Comms marketing and start amplifying your share of voice, scale internal & exec comms, as well as supercharge your social strategy.",
        "ctas": [
          {
            "label": "Explore Integrations",
            "variant": "btn-secondary"
          }
        ]
      }
    },
    "product-marketers": {
      "hero": {
        "eyebrow": "Solutions for Product Marketers",
        "title": "Less time managing launches. More time shaping stories.",
        "body": "Jasper automates research, speeds brief creation, and scales on-brand content so product marketers can launch faster, sharpen messaging, and enable sales without adding headcount.",
        "ctas": [
          {
            "label": "Start Free Trial",
            "variant": "btn-secondary"
          },
          {
            "label": "Get Demo",
            "variant": "btn-primary"
          }
        ],
        "headshotLeft": {
          "src": "/assets/product-headshot.webp"
        },
        "headshotRight": {
          "src": "/assets/headshot-8.webp"
        }
      },
      "useCases": {
        "eyebrow": "Use Cases",
        "title": "The only generative AI purpose-built for PMM",
        "cards": [
          {
            "title": "Ship differentiated launches",
            "body": "Create launch briefs and entire bills of materials in seconds—all fine-tuned to your company’s knowledge, with marketing best practices built-in."
          },
          {
            "title": "Deliver impactful sales enablement",
            "body": "Build different types of text or visual enablement assets with one positioning document, and distribute materials directly via the systems you already use."
          },
          {
            "title": "Maintain a competitive edge",
            "body": "Automate the collection and synthesis of competitor information to develop differentiated positioning, battlecards, objection handling guidance, and effective scripts."
          }
        ]
      },
      "integrations": {
        "title": "Integrations for Product Marketers",
        "body": "Your team can’t be everywhere, but Jasper can. With Jasper’s integration library, you can level up your product marketing and start creating product & campaign launches, enablement, and competitive intelligence at scale.",
        "ctas": [
          {
            "label": "Explore Integrations",
            "variant": "btn-secondary"
          }
        ]
      }
    }
  }
