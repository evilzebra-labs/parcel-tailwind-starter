/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        //https://uicolors.app/
        brandPrimary: {
          50: '#fef2f3',
          100: '#fce7e8',
          200: '#f9d2d7',
          300: '#f4adb5',
          400: '#ee7e8e',
          500: '#df3b57',
          600: '#ce3053',
          700: '#ad2345',
          800: '#91203f',
          900: '#7d1e3b',
          950: '#450c1c',
        },
        brandSecondary: {
          50: '#f5f7fa',
          100: '#e9eef5',
          200: '#cfdce8',
          300: '#a5bfd4',
          400: '#749dbc',
          500: '#5280a5',
          600: '#3a5e7e',
          700: '#345370',
          800: '#2e475e',
          900: '#2b3d4f',
          950: '#1c2835',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
