/** @type {import('tailwindcss').Config} */
// All tokens below are extracted verbatim from jasper.ai's Webflow CSS custom
// properties (--swatch--*, --_theme---*, --_typography---*, --_spacing---*).
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // --swatch--blue-*  (brand navy family)
        blue: {
          200: '#e4f4ff', 300: '#ceebff', 400: '#81cbff', 500: '#0095ff',
          600: '#0043d3', 700: '#0011a7', 800: '#00063d',
        },
        // --swatch--flame-*  (brand coral family)
        flame: {
          100: '#fffdfc', 200: '#fff7f5', 300: '#ffe8e2',
          /* Measured on the live Solutions > By Role use-case cards
             (.scrape/solx.json): the third tile's ground reads back as
             rgb(255,204,198) — a step Webflow renders between flame-300
             (#ffe8e2) and flame-400 (#ffb3a3) and exposes nowhere else, so it
             is named here rather than hardcoded in the card component. */
          350: '#ffccc6',
          400: '#ffb3a3',
          500: '#fa7560', 600: '#fa4028', 700: '#801a10', 800: '#410d07',
        },
        green: {
          300: '#e6ffd9', 400: '#d2ffc1', 500: '#96ff6f',
          600: '#45ff00', 700: '#207a00', 800: '#103a00',
        },
        pink: {
          300: '#fff9fc', 400: '#ffe6f3', 500: '#ffb3de',
          600: '#ff80c8', 700: '#ff66cc', 800: '#5a003c',
        },
        violet: {
          300: '#faf9ff', 400: '#e7e3f7', 500: '#b5a9e3',
          600: '#7c5ac4', 700: '#391e7e', 800: '#1b0e3c',
        },
        yellow: {
          200: '#fffef4', 300: '#fffeef', 400: '#fffdd9',
          500: '#fffbb7', 600: '#fff67d', 700: '#fff133', 800: '#a69f00',
        },
        dark: {
          50: '#f9f9f9', 100: '#f2f2f3', 150: '#ededed', 200: '#e0e0e1',
          300: '#cfcfd0', 400: '#bbbabc', 500: '#9b9b9b', 600: '#7d7d7e',
          700: '#5e5d5f', 800: '#515052', 900: '#262627',
        },
        /* --swatch--*-200 : the palest step of each ramp. The live /pricing
           comparison chart bands its 8 groups with these, at 40% alpha for the
           band ground and full strength for the alternating row stripe. Values
           read off the live computed backgrounds (see .scrape/deep-pricing.json);
           several duplicate an existing swatch under Webflow's -200 name, so
           they are declared here under the chart's own naming rather than
           hardcoded in JSX. `vintage-electric` is Webflow's name for the
           yellow ramp used by the "Extensions, Integrations & API" band. */
        chart: {
          'green-200':  '#e6ffd9',
          'blue-200':   '#ceebff',
          'flame-200':  '#ffe8e2',
          'pink-200':   '#ffe6f3',
          'vintage-electric-200': '#fffbb7',
          'violet-200': '#e7e3f7',
        },
        // Measured on the live .footer_wrap background: rgb(28,28,28).
        // Webflow's --swatch--dark-950; the footer is the only surface that
        // uses it, so it lives beside the dark ramp rather than in it.
        'ink-950': '#1c1c1c',
        /* Measured on live /platform: the "01. Plan" Content-Pipeline card
           heading is rgb(111,106,0) on the yellow-500 (#fffbb7) tint. It is
           Webflow's --swatch--vintage-electric-700 — the only place the site
           uses that step, so it sits here beside the other one-offs rather
           than opening a whole ramp. The remaining four card headings all map
           to existing tokens (green-700 / ink / flame-800 / violet-800). */
        'olive-700': '#6f6a00',
        // --_theme---*  semantic aliases
        ink: '#00063d',          // theme text / border
        surface: '#ffffff',      // theme background
        'surface-2': '#f2f2f3',  // theme background-secondary
      },
      fontFamily: {
        // ABC ROM / Feature are licensed; see index.css for the fallback stacks.
        sans: ['"ABC ROM"', 'Inter', 'Arial', 'sans-serif'],
        serif: ['Feature', '"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"ABC ROM Mono"', '"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        // --_typography---font-size--*  (fluid clamps, verbatim)
        display: ['clamp(2.5rem, 1.5284rem + 3.8573vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        h1: ['clamp(2.375rem, 1.9864rem + 1.5429vw, 3.375rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['2.375rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h3: ['1.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h4: ['1.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h5: ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h6: ['1rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'text-large': ['1.125rem', { lineHeight: '1.4' }],
        'text-main': ['1rem', { lineHeight: '1.4' }],
        'text-small': ['0.875rem', { lineHeight: '1.4' }],
        'text-tiny': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        // Webflow ships ABC ROM at 450 (book) / 500 (medium)
        book: '450', medium: '500',
      },
      letterSpacing: {
        tightest: '-0.03em', tighter: '-0.02em', tight: '-0.01em', none: '0em',
      },
      lineHeight: {
        1: '1', 1.05: '1.05', 1.1: '1.1', 1.2: '1.2', 1.3: '1.3', 1.4: '1.4',
      },
      spacing: {
        // --_spacing---space--*
        s1: 'clamp(0.5rem, 0.5rem + 0vw, 0.5rem)',
        s2: '0.75rem', s3: '1rem', 's3-5': '1.25rem', s4: '1.5rem',
        s5: '2rem', s6: 'clamp(2rem, 1.8057rem + 0.7715vw, 2.5rem)',
        s7: '3rem', s8: '4rem', s9: '5rem',
        // --_spacing---section-space--*
        'section-xxs': 'clamp(1rem, 0.4171rem + 2.3144vw, 2.5rem)',
        'section-small': 'clamp(3rem, 2.1429rem + 4.2857vw, 6rem)',
        'section-xsmall': '5rem',
        'section-main': 'clamp(4rem, 3.1429rem + 4.2857vw, 7rem)',
        'section-large': 'clamp(7rem, 5.7857rem + 6.0714vw, 11.25rem)',
        'section-page-top': 'clamp(6.25rem, 5.5357rem + 3.5714vw, 8.75rem)',
      },
      maxWidth: {
        site: 'min(90rem, 100vw)',   // --site--max-width
        container: '85rem',          // 1360px measured container
      },
      // Measured 12-col system: 1360px container, 16px gutter,
      // 1 col = 98.667px. Cards are span-4 (442.67) / span-3 (328).
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      gap: {
        gutter: '16px',   // u-grid-* default
        tabs: '80px',     // tabs_layout u-gap-9
        footer: '64px',   // footer_layout column gap (row-gap; col-gap 48px)
      },
      // g_section_space heights measured on the live page
      height: {
        'section-xxs': '40px',
        'section-space': '112px',
      },
      borderRadius: { DEFAULT: '4px', sm: '2px' },
      transitionTimingFunction: {
        jasper: 'cubic-bezier(0.625, 0.05, 0, 1)',
      },
    },
  },
  plugins: [],
}
