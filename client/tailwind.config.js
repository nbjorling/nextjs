/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

const backgroundColor = {
  primary: 'hsl(var(--elevation-surface-primary))',
  'primary-hovered': 'hsl(var(--elevation-surface-primary-hovered))',
  'primary-pressed': 'hsl(var(--elevation-surface-primary-pressed))',
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor,
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hyperlegible: ['Hyperlegible', 'sans-serif'],
        tiltwarp: ['tiltwarp', 'sans-serif'],
      },
    },
  },
  plugins: [
    createThemes({
      defaultTheme: 'dark',
      light: {
        primary: 'steelblue',
        secondary: 'darkblue',
        brand: '#F3F3F3',
      },
      dark: {
        primary: 'turquoise',
        secondary: 'tomato',
        brand: '#E9C46A',
      },
      forest: {
        primary: '#2A9D8F',
        secondary: '#E9C46A',
        brand: '#264653',
      },
    }),
  ],
};
