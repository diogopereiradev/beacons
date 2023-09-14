/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1468px',
        '2xl': '1180px',
        xl: '900px',
        lg: '768px',
        md: '468px',
        sm: '320px'
      },
      colors: {
        background: '#0b1529',
        primary: {
          100: '#22ecce',
          200: '#23d6bb',
          300: '#1ab09a',
          0: '#22ecce13'
        },
        secondary: {
          100: '#1c2c4d',
          200: '#15213b',
          300: '#121e36',
          0: '#1c2c4d33'
        },
        scrollbar: {
          track: 'transparent',
          thumb: '#1c2c4d'
        },
        outline: '#23d6bb33'
      },
      textColor: {
        primary: {
          100: '#688294',
          200: '#40557d',
          300: '#252e38'
        },
        secondary: {
          100: '#22ecce',
          200: '#23d6bb',
          300: '#149985'
        }
      },
      fontFamily: {
        default: ['Roboto', 'Inter', 'open-sans', 'sans-serif']
      }
    }
  },
  plugins: []
};