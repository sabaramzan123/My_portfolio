/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06090e',
          900: '#0b111a',
          850: '#0f1726',
          800: '#141e30',
          750: '#1a263d',
          700: '#243352',
          600: '#334155',
        },
        devops: {
          cyan: '#06b6d4',
          sky: '#0ea5e9',
          blue: '#3b82f6',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
          purple: '#8b5cf6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(14, 165, 233, 0.25)',
        'glow-card': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        flowLine: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        }
      },
      animation: {
        'pulse-slow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow-line': 'flowLine 1.5s linear infinite',
      }
    },
  },
  plugins: [],
}
