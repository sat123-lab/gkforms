/**
 * Tailwind configuration: extend theme with brand colors
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette
        primary: '#1F4D3A', // Primary Forest Green
        sage: '#A4B48A', // Soft Sage Green
        gold: '#C7A34A', // Premium Gold
        charcoal: '#2C2F33', // Dark Charcoal
        ivory: '#F7F5EF', // Ivory White
        leaf: '#1F4D3A',
      },
    },
  },
  plugins: [],
};
