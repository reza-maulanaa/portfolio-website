/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["'Kanit'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
