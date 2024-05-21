/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      screens: {
        mobile: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
      },
    },
  },
  plugins: [],
};
