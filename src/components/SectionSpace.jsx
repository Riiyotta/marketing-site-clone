/**
 * Standalone vertical spacer.
 *
 * The live page carries NO padding on its sections — every gap between them is
 * a `g_section_space` div in `.page_main`. Measured on the homepage: three of
 * them at 112px, after Tabs, after Closing, and at the very end.
 */
export default function SectionSpace({ size = 'main' }) {
  const H = {
    xxs: 'h-section-xxs',
    small: 'h-[80px]',
    main: 'h-[112px]',
    large: 'h-[180px]',
  }
  return <div aria-hidden="true" className={H[size] || H.main} />
}
