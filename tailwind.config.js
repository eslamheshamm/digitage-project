module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD349",
        },
        gray: {
          DEFAULT: "#474747",
          dark: "#2D2D2D",
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
