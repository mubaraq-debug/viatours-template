/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Specify which files Tailwind should scan
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EB662B',
      }
    },
  },
  plugins: [],
};
