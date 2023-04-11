/** @type {import('tailwindcss').Config} */
export default {
  mode: 'JIT',
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
        transparent: '#373f5933'
      },
      secondary: {
        100: '#508ef2',
        200: '#4379d1',
        300: '#3e74c9',
        400: '#3264b3',
        500: '#245096',
        transparent: '#508ef233'
      },
      scrollbar: {
        track: 'transparent',
        thumb: '#404040'
      },
      outlineColor: '#5a92ed'
    },
    textColor: {
      primary: {
        100: '#f0f0f0',
        300: '#b8b8b8',
        500: '#606060',
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
    animation: {
      firePulseOne: 'firePulseOne 0.4s cubic-bezier(.5,.21,.17,.95) infinite',
      firePulseTwo: 'firePulseTwo 0.6s cubic-bezier(.5,.21,.17,.95) infinite',
      firePulseThree: 'firePulseTwo 0.4s cubic-bezier(.5,.21,.17,.95) infinite',
    },
    keyframes: {
      firePulseOne: {
        from: {
          transform: 'scale(1) rotate(45deg)'
        },
        to: {
          transform: 'scale(0.8) rotate(45deg)'
        }
      },
      firePulseTwo: {
        from: {
          transform: 'scale(1) rotate(45deg) translateY(0px)'
        },
        to: {
          transform: 'scale(0.7) rotate(45deg) translateY(-160px)',
          width: '0px',
          height: '0px'
        }
      },
      firePulseThree: {
        from: {
          transform: 'scale(1) rotate(45deg) translateY(0px)'
        },
        to: {
          transform: 'scale(0.7) rotate(45deg) translateY(-160px)',
          width: '0px',
          height: '0px'
        }
      },
    },
    extend: {},
  },
  plugins: [],
};