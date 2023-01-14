/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        500: "600px",
        250: "250px",
      },
    },
  },
  plugins: [],
};
