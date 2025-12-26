import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        accent: {
          DEFAULT: '#6C54C1',
          light: '#8B74D4',
          dark: '#5A45A3',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#6C54C1',
          600: '#5A45A3',
          700: '#4c3d8f',
          800: '#3f3375',
          900: '#322a5e',
        },
        // Gradient colors for CTAs
        gradient: {
          start: '#af63e1',
          end: '#6d40f3',
        },
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(to right, #af63e1 0%, #6d40f3 100%)',
        'gradient-cta-hover': 'linear-gradient(to right, #c07ae8 0%, #8058f5 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config

