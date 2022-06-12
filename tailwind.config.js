/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
