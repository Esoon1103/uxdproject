module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_4c": "#0000004c",
          "900_0c": "#0000000c",
          "900_1e": "#0000001e",
          "900_99": "#00000099",
          "900_82": "#00000082",
          "900_19": "#00000019",
        },
        blue_gray: { 100: "#d8d8d8", "100_7f": "#d8d8d87f" },
        blue: { 500: "#1da1f2", A400: "#1877f2" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { roboto: "Roboto" },
      boxShadow: { bs: "0px 0px  6px 0px #0000001e" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
