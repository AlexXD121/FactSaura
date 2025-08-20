/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#0c0c0c",
        "custom-gray": "#232323",
        "custom-light-gray": "#f3f4f6",
        "custom-cyan": "#06b6d4",
      },
    },
  },
  plugins: [],
};
