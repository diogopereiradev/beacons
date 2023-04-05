/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      background: '#0f1014',
      primary: {
        100: '#373f59',
        200: '#2e3447',
        300: '#262a38',
        400: '#1e212b',
        500: '#171921',
      },
      secondary: {
        100: '#508ef2',
        200: '#4379d1',
        300: '#3e74c9',
        400: '#3264b3',
        500: '#245096',
      },
      scrollbar: {
        track: 'transparent',
        thumb: '#404040'
      },
      outlineColor: '#5a92ed'
    },
    extend: {},
  },
  plugins: [],
};