import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Platform from '../components/Platform'
import Tabs from '../components/Tabs'
import Stories from '../components/Stories'
import Solutions from '../components/Solutions'
import Trust from '../components/Trust'
import Resources from '../components/Resources'
import Closing from '../components/Closing'
import Faq from '../components/Faq'
import SectionSpace from '../components/SectionSpace'

/**
 * Section order and spacer placement measured from the live `.page_main`:
 * three `g_section_space` divs at 112px — after Tabs, after Closing, and at
 * the end. Sections themselves carry no vertical padding on the original.
 */
export default function Home() {
  return (
    <>
      <Hero />
      {/* live `.marquee_wrap` on the homepage is 296px: 80px g_section_space */}
      <Marquee space="py-[80px]" />
      <Platform />
      <Tabs />
      <SectionSpace />
      <Stories />
      <Solutions />
      <Trust />
      <Resources />
      <Closing />
      <SectionSpace />
      <Faq />
      <SectionSpace />
    </>
  )
}
