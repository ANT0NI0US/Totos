export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10px",
        screens: {
          sm: "800px",
          md: "1000px",
          lg: "1200px",
          xl: "1500px",
          "2xl": "2360px",
        },
      },
      fontFamily: {
        merienda: ["Merienda", "cursive"],
        Monoton: ["Monoton"],
      },
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: "#01112b",
        secondary: "#021637",
        light: "#e5f0ff",
        orange: "#b78a00",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1536px",
        "2xl": "2400px",
      },
    },
  },
  plugins: [],
};
