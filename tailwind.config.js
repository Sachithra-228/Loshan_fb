/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fb-blue': '#1877F2',
        'fb-gray': '#F0F2F5',
        'fb-dark-gray': '#65676B',
      },
    },
  },
  plugins: [],
}
