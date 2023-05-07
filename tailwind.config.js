const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./{components,contexts,hooks,pages,utils}/**/*.{js,cjs,mjs,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        juno: { DEFAULT: '#08B4B2' },
        dark: { DEFAULT: '#06090B' },
        gray: { DEFAULT: '#F3F6F8' },
        'dark-gray': { DEFAULT: '#191D20' },
        purple: { DEFAULT: '#7E5DFF' },

        neutral: colors.neutral,
        plumbus: {
          DEFAULT: '#08B4B2',
          light: '#1dcfcc',
          matte: '#94e3e2',
          dark: '#038a88',
          10: '#cdf7f7',
          20: '#abebea',
          30: '#94e3e2',
          40: '#84dbda',
          50: '#08B4B2',
          60: '#069c9a',
          70: '#038a88',
          80: '#027371',
          90: '#015958',
          100: '#003d3d',
          110: '#002424',
          120: '#000a0a',
        },
        twitter: { DEFAULT: '#1DA1F2' },
      },
      fontFamily: {
        heading: ["'Basement Grotesque'", ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },

  plugins: [
    // tailwindcss official plugins
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/line-clamp'),

    // custom gradient background
    plugin(({ addUtilities }) => {
      addUtilities({
        '.juno-gradient-bg': {
          background: `linear-gradient(63deg, rgba(0,61,61,0.4) 45%, rgba(8,180,178,0.4) 100%)`,
        },
        '.juno-gradient-brand': {
          background: `linear-gradient(90deg, rgba(0,61,61,1) 0%, rgba(8,180,178,1) 35%, rgba(205,247,247,1) 100%)`,
        },
      })
    }),
  ],
}
