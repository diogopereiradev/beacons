/** @type {import('tailwindcss').Config} */
export default {
  mode: 'JIT',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      '3xl': { max: '1366px' },
      '2xl': { max: '1180px' },
      xl: { max: '900px' },
      lg: { max: '768px' },
      md: { max: '568px' },
      msm: { max: '420px' },
      sm: { max: '320px' }
    },
    colors: {
      background: '#111117',
      primary: {
        100: '#87c0f5',
        300: '#609dd6',
        500: '#4582ba',
        700: '#316a9e'
      },
      secondary: {
        100: '#464663',
        300: '#303045',
        500: '#151521',
        700: '#111117'
      },
      third: {
        100: '#46466333',
        300: '#30304533',
        500: '#28283b99',
        700: '#21213333'
      },
      info: {
        normal: '#4e97e6',
        light: '#69a3e0',
        dark: '#2b6aad'
      },
      warning: {
        normal: '#fad669',
        light: '#edd48a',
        dark: '#b39439'
      },
      critical: {
        normal: '#db5351',
        light: '#d66f6d',
        dark: '#963230'
      },
      scrollbar: {
        track: 'transparent',
        thumb: '#4e4e66'
      },
      outline: '#4e97e6',
      separator: '#28283b'
    },
    textColor: {
      primary: {
        100: '#f0f0f0',
        300: '#b8b8b8',
        500: '#808080',
        700: '#1e1e1e'
      },
      secondary: {
        100: '#87c0f5',
        300: '#609dd6',
        500: '#4582ba',
        700: '#316a9e'
      }
    },
    fontFamily: {
      default: 'Roboto'
    },
    extend: {},
  },
  plugins: [],
};