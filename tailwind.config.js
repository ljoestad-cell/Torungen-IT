export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#fb923c",
          amber: "#f59e0b",
          cyan: "#22d3ee",
          blue: "#2563eb",
          slate: "#0f172a",
        },
      },
      boxShadow: {
        glow: "0 24px 80px -32px rgba(56, 189, 248, 0.65)",
      },
    },
  },
  plugins: [],
}