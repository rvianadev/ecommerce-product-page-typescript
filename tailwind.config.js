/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'header-line': '#E4E9F2',
    },
    extend: {
      spacing: {
        0.25: '0.0625rem', // Header :after height
        12.5: '3.125rem', // Header user avatar width
        20.5: '5.125rem', // Header :after padding top
      },
      width: {
        desktop: '69.4rem', // Container desktop width
      },
    },
  },
  plugins: [],
};
