export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:
    {
      secondary: ["Great Vibes"]
    }
  },
  plugins: [require('daisyui')],
}

