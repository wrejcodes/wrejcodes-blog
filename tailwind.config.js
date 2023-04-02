/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './content/**/*.md',
    './components/**/*.vue',
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      sans: ['Work Sans'],
    },
    fontWeight: {
      hariline: 200,
      light: 200,
      thin: 200,
      normal: 400,
      semibold: 600,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.825rem',
      '3xl': '2.250rem',
      '4xl': '2.750rem',
      '5xl': '3.25rem',
    },
    colors: {
      raffia: {
        50: '#fefdfc',
        100: '#fdfbf8',
        200: '#faf6ee',
        300: '#f7f1e3',
        400: '#f2e6cf',
        500: '#ECDBBA',
        600: '#d4c5a7',
        700: '#b1a48c',
        800: '#8e8370',
        900: '#746b5b',
      },
      mojo: {
        50: '#fcf6f5',
        100: '#faedea',
        200: '#f1d2cc',
        300: '#e9b7ad',
        400: '#d9816f',
        500: '#C84B31',
        600: '#b4442c',
        700: '#963825',
        800: '#782d1d',
        900: '#622518',
      },
      rhino: {
        50: '#f5f6f7',
        100: '#eaecef',
        200: '#cbd0d8',
        300: '#abb3c1',
        400: '#6c7b92',
        500: '#2D4263',
        600: '#293b59',
        700: '#22324a',
        800: '#1b283b',
        900: '#162031',
      },
      woodsmoke: {
        50: '#f4f4f4',
        100: '#e8e8e8',
        200: '#c6c6c6',
        300: '#a3a3a3',
        400: '#5e5e5e',
        500: '#191919',
        600: '#171717',
        700: '#131313',
        800: '#0f0f0f',
        900: '#0c0c0c',
      },
    },
  },
  plugins: [
    /* eslint-disable-next-line global-require */
    require('@tailwindcss/typography'),
  ],
};
