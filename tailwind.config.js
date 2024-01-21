/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      'header-line': '#E4E9F2',
      primary: '#FF7E1B',
      'primary-light': '#FFAB6A',
      black: '#1D2026',
      gray: '#69707D',
      'gray-50': '#B6BCC8',
    },
    extend: {
      spacing: {
        0.25: '0.0625rem', // Header :after height
        12.5: '3.125rem', // Header user avatar width
        20.5: '5.125rem', // Header :after padding top
      },
      width: {
        desktop: '69.4rem', // Container desktop width
        'product-container': '63.4375rem', // Product container width
        '2.2/5': '44%',
      },
    },
  },
  plugins: [],
};
