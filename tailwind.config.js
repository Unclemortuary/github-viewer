/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'fruit-salad': {
          '50': '#f1f8f3',
          '100': '#dcefe1',
          '200': '#bcdec6',
          '300': '#8fc6a3',
          '400': '#60a77c',
          '500': '#449768',
          '600': '#2d6e4b',
          '700': '#24583d',
          '800': '#1e4731',
          '900': '#1a3a2a',
          '950': '#0e2018',
        }
      },
      maxHeight: {
        '3/4': '85%'
      },
      height: {
        '3/4': '85%'
      }
    },
  },
  plugins: [],
}

