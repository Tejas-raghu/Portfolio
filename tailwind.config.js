/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          gradientStart: "#16a34a", // Green start
          gradientEnd: "#86efac", // Lighter green end
        },
      },
    },
    plugins: [],
  };
  