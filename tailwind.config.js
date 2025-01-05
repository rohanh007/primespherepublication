/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom: '530px', 
      },
      backgroundColor: {
        primary: '',
      },
      textColor: {
        primary: '',
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // For general text 
        serif: ['Playfair Display', 'Georgia', 'serif'], // For headers
        mono: ['Source Code Pro', 'Courier New', 'monospace'], // sub header
      },
    },
  },
  plugins: [],
};
