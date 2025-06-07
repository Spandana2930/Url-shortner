/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // add tsx/ts if using TypeScript
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner:"url('./src/assets/url-shortner.png')"
      },
    },
  },
  plugins: [],
}
