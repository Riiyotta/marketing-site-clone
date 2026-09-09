import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import PlatformPage from './pages/Platform'
import SolutionsPage from './pages/Solutions'
import ResourcesPage from './pages/Resources'
import Company from './pages/Company'
import JasperIQ from './pages/JasperIQ'
import BrandIQ from './pages/BrandIQ'
import BrandVoice from './pages/BrandVoice'
import VisualGuidelines from './pages/VisualGuidelines'
import StyleGuide from './pages/StyleGuide'
import MarketingIQ from './pages/MarketingIQ'
import Stub from './pages/Stub'
import Api from './pages/Api'
import Mcp from './pages/Mcp'
import Studio from './pages/Studio'
import Grid from './pages/Grid'
import Agents from './pages/Agents'
import AgentOptimization from './pages/AgentOptimization'
import AgentResearch from './pages/AgentResearch'
import AgentTranslation from './pages/AgentTranslation'
import ContentPipelines from './pages/ContentPipelines'
import KnowledgeBase from './pages/KnowledgeBase'
import Governance from './pages/Governance'
import ProductIQ from './pages/ProductIQ'
import ImageApi from './pages/ImageApi'
import ImagePipelines from './pages/ImagePipelines'
import Geo from './pages/Geo'
import Canvas from './pages/Canvas'

// Solutions > By Industry / By Role — 12 routes off two shared templates,
// plus the /solutions/seo-aeo-geo one-off. Content lives in
// data/solutionsPages.js, captured verbatim from live jasper.ai.
import FinancialServices from './pages/solutions/FinancialServices'
import Healthcare from './pages/solutions/Healthcare'
import MediaAndEntertainment from './pages/solutions/MediaAndEntertainment'
import ProfessionalServices from './pages/solutions/ProfessionalServices'
import RetailAndConsumerGoods from './pages/solutions/RetailAndConsumerGoods'
import Tech from './pages/solutions/Tech'
import BrandMarketers from './pages/solutions/BrandMarketers'
import ContentMarketers from './pages/solutions/ContentMarketers'
import FieldMarketers from './pages/solutions/FieldMarketers'
import PerformanceMarketers from './pages/solutions/PerformanceMarketers'
import PrAndCommunications from './pages/solutions/PrAndCommunications'
import ProductMarketers from './pages/solutions/ProductMarketers'
import SeoAeoGeo from './pages/solutions/SeoAeoGeo'
import Press from './pages/Press'
import Security from './pages/Security'
import TrustPage from './pages/TrustPage'
import Careers from './pages/Careers'
import LlmOptimized from './pages/LlmOptimized'
import Legal from './pages/Legal'
import Blog from './pages/Blog'
import Webinars from './pages/Webinars'
import CustomerStories from './pages/CustomerStories'
import CustomerSuccess from './pages/CustomerSuccess'
import ContactSupport from './pages/ContactSupport'
import Workflows from './pages/Workflows'
import DiagnosticsGeo from './pages/DiagnosticsGeo'
import { STUB_ROUTES } from './data/stubRoutes'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/company" element={<Company />} />

        {/* Platform > Jasper IQ / Brand IQ family — real cloned pages. These
            must sit ABOVE the stub table, and their paths are removed from
            STUB_ROUTES so the placeholder no longer claims them. */}
        <Route path="/jasper-iq" element={<JasperIQ />} />
        <Route path="/brand-iq" element={<BrandIQ />} />
        <Route path="/brand-voice" element={<BrandVoice />} />
        <Route path="/visual-guidelines" element={<VisualGuidelines />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/marketing-iq" element={<MarketingIQ />} />

        {/* Platform "Surfaces / Developer" family — real cloned pages. These
            must sit ABOVE the STUB_ROUTES map so they win the match. */}
        <Route path="/api" element={<Api />} />
        <Route path="/mcp" element={<Mcp />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/grid" element={<Grid />} />

        {/* Platform "Agents / Pipelines / Knowledge" family — real cloned
            pages. The three /agents/* detail routes must precede /agents so
            React Router's ranked matching does not swallow them. */}
        <Route path="/agents/optimization" element={<AgentOptimization />} />
        <Route path="/agents/research" element={<AgentResearch />} />
        <Route path="/agents/translation" element={<AgentTranslation />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/content-pipelines" element={<ContentPipelines />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/product-iq" element={<ProductIQ />} />
        <Route path="/image/api" element={<ImageApi />} />
        <Route path="/image/pipelines" element={<ImagePipelines />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/canvas" element={<Canvas />} />

        {/* Company mega-menu family — real cloned pages. These must sit ABOVE
            the STUB_ROUTES map, and their paths are removed from STUB_ROUTES so
            the placeholder no longer claims them. /trust renders TrustPage, NOT
            the shared <Trust/> SECTION component that / and /pricing use. */}
        <Route path="/press" element={<Press />} />
        <Route path="/security" element={<Security />} />
        <Route path="/trust" element={<TrustPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/llm-optimized" element={<LlmOptimized />} />
        <Route path="/legal" element={<Legal />} />

        {/* Resources mega-menu family — real cloned pages. These must sit
            ABOVE the STUB_ROUTES map so they win the match, and their paths
            are removed from STUB_ROUTES so the placeholder no longer claims
            them. /diagnostics/geo is a nested path and is matched verbatim. */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/customer-stories" element={<CustomerStories />} />
        <Route path="/customer-success" element={<CustomerSuccess />} />
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/workflows" element={<Workflows />} />
        <Route path="/diagnostics/geo" element={<DiagnosticsGeo />} />
        {/* Solutions mega-menu — the 13 sub-pages. These sit ABOVE the stub
            table and their paths are removed from STUB_ROUTES, so the
            placeholder no longer claims them. The two by-industry / by-role
            families are one template each; seo-aeo-geo is a one-off. */}
        <Route path="/solutions/by-industry/financial-services" element={<FinancialServices />} />
        <Route path="/solutions/by-industry/healthcare" element={<Healthcare />} />
        <Route path="/solutions/by-industry/media-and-entertainment" element={<MediaAndEntertainment />} />
        <Route path="/solutions/by-industry/professional-services" element={<ProfessionalServices />} />
        <Route path="/solutions/by-industry/retail-and-consumer-goods" element={<RetailAndConsumerGoods />} />
        <Route path="/solutions/by-industry/tech" element={<Tech />} />
        <Route path="/solutions/by-role/brand-marketers" element={<BrandMarketers />} />
        <Route path="/solutions/by-role/content-marketers" element={<ContentMarketers />} />
        <Route path="/solutions/by-role/field-marketers" element={<FieldMarketers />} />
        <Route path="/solutions/by-role/performance-marketers" element={<PerformanceMarketers />} />
        <Route path="/solutions/by-role/pr-and-communications" element={<PrAndCommunications />} />
        <Route path="/solutions/by-role/product-marketers" element={<ProductMarketers />} />
        <Route path="/solutions/seo-aeo-geo" element={<SeoAeoGeo />} />

        {/* Real jasper.ai routes reachable from the mega-menu that this clone
            has not built yet. Without these they hit the `*` route and silently
            rendered the homepage, which looks like a finished page. */}
        {STUB_ROUTES.map((r) => (
          <Route key={r.path} path={r.path} element={<Stub />} />
        ))}
        <Route path="*" element={<Stub />} />
      </Routes>
    </Layout>
  )
}
