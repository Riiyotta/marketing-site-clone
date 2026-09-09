export const ArrowRight = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ChevronDown = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Plus = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)

/* Wordmark — redrawn as text in the brand's display serif rather than
   tracing Jasper's proprietary logo artwork. */
export const Logo = ({ className = '' }) => (
  <span className={`font-serif text-flame-600 leading-none select-none ${className}`}
        style={{ fontSize: '2rem', letterSpacing: '-0.03em' }}>
    jasper
  </span>
)
