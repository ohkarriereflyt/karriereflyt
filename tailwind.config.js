/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient":
          "linear-gradient(90deg, rgba(236,234,232,1) 0%, rgba(222,219,217,1) 100%)",
      },
      colors: {
        "button-color": "#4A4A4A",
        "button-border-color": "#6E6E6E",
        "card-text-color": "#69625D",
        "secondary-blue-bg": "#899DA2",
        "box-border-color": "#f1f1f1a8",
        "partner-box": "#FFFBF8",
      },
      fontSize: {
        largeH1: "40px",
      },

      borderRadius: {
        connie: "16px",
        notSquared: "32px",
      },
    },
  },
  plugins: [],
};
