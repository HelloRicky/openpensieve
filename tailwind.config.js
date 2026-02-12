/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        pensieve: {
          bg: {
            deep: '#0a0a0f',
            surface: '#13131a',
            elevated: '#1a1a24',
          },
          border: '#252530',
          primary: {
            DEFAULT: '#7a9cc6',
            bright: '#a8c5e8',
            shimmer: '#b8d4f1',
          },
          text: {
            primary: '#e8e8f0',
            secondary: '#a0a0b8',
            tertiary: '#707088',
          },
          tag: {
            work: '#6b7fa8',
            ideas: '#c9a86a',
            family: '#a87d8b',
            building: '#7a9d7e',
            reflection: '#8b7da8',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'shimmer-slow': 'shimmer 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
