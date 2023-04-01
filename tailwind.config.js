/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#272E71',
        secondary: '#F9FAFB',
        heading: '#374151',
        body: '#6B7280',
        neutral: '#E5E7EB',
      },
      fontFamily: {
        sans: ['Open sans'],
      },
    },
  },
  plugins: [],
};
