/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(0)'},
          '50%': { transform: 'translateX(100%)' },
          '51%': { transform: 'translateX(100%) rotateY(180deg)' },
          '90%': { transform: 'translateX(-100%) rotateY(180deg)' },
        }
      },
      animation: {
        'moving': 'move 10s linear infinite',
      }
    },
    accentColor: ({ theme }) => ({
      ...theme('colors'),
      auto: 'auto',
    }),
    colors: ({ colors }) => ({
      primary: '#9D75CB',
      secondary: '#D80032',
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#222323',
      white: '#F0F6F0',
      primaryGray: '#585B56',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    }),
  },
  plugins: [],
}

