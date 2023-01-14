/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#1B1F24",
        "secondary-black": "#22272F",
        "primary-gray": "#2D343F",
        "secondary-gray": "#5D6C83",
        "secondary-white": "#C3CAD5",
      },
    },
  },
  plugins: [],
};
