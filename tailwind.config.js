/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgba(255, 255, 255, 0.65)',
        surface: '#ffffff',
        primary: '#16a34a',
        primaryLight: '#4ade80',
        textMain: '#14532d',
        textMuted: '#166534',
        border: 'rgba(22, 163, 74, 0.15)',
        live: '#10b981',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        float2: 'float2 9s ease-in-out infinite 1.5s',
        float3: 'float3 5s ease-in-out infinite 0.8s',
        ring: 'ring 1.8s ease-out infinite',
        marquee: 'marquee 22s linear infinite',
        scan: 'scan 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(4deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-22px) rotate(-3deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ring: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { top: '-5%' },
          '100%': { top: '105%' },
        },
      }
    },
  },
  plugins: [],
}
