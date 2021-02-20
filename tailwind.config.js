module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FFD349",
        },
      },
    },
    fontFamily: {
      header: ["Kameron", "serif"],
      body: ["Poppins", "sans-serif"],
      title: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
