import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0D14',
        surface: '#111520',
        elevated: '#171d2e',
        'brand-green': '#00E5A0',
        'brand-green-dark': '#00b87f',
        'brand-purple': '#7B5EF6',
        'brand-amber': '#F59E0B',
        'brand-blue': '#3B82F6',
        'brand-coral': '#F97316',
        'brand-pink': '#EC4899',
        heading: '#F0F4FF',
        muted: '#8B9AB4',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'pulse-node': 'pulse-node 2s ease-in-out infinite',
        'float-up': 'float-up 6s ease-in-out infinite',
        marquee: 'marquee 24s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
      },
      keyframes: {
        'pulse-node': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.4)', opacity: '0.7' },
        },
        'float-up': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        'max-xs': { max: '480px' },
        'max-sm': { max: '640px' },
        'max-md': { max: '768px' },
        'max-lg': { max: '1024px' },
      },
    },
  },
  plugins: [],
}
export default config
