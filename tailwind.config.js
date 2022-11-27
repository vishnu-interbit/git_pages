/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/img/banner-bg.webp)",
        contactButton: "url(/img/tire-btn-pattern.webp)",
        cta: "url(/img/call-to-action-bg.webp)",
        footer: "url(/img/footer-bg.webp)",
      },
      colors: {
        primary: "#25316D",
        secondary: "#FEF5AC",
      },
      gridTemplateColumns: {
        review: "200px 1fr",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
