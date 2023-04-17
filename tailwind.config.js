/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0 0px 100px rgba(99, 179, 237, 0.25)",
        "4xl": [
          "0 35px 35px rgba(99, 179, 237, 0.25)",
          "0 45px 65px rgba(99, 179, 237, 0.25))",
        ],
      },
    },
  },
  plugins: [],
};
