/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        "-1": "-1",
      },
      fontFamily: {
        rubik: "Rubik",
        ubuntu: "Ubuntu",
      },
      spacing: {
        200: "200%",
        300: "300%",
        400: "400%",
        500: "500%",
      },
      height: {
        card: "300px",
      },
    },
  },
  plugins: [],
};
