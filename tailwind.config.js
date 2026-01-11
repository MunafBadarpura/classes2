export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Fredoka", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#4F46E5",
          purple: "#9333EA",
          light: "#F5F3FF",
          accent: "#F472B6",
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
