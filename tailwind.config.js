/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all JS, TS, JSX, TSX files in the 'src' directory and its subdirectories
  ],
  theme: {
    extend: {}, // Extend the default Tailwind theme if needed
  },
  plugins: [], // Add any plugins if needed in the future
};
