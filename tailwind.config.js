/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			boxShadow: {
				'custom': '0 0 12px 0 rgba(0,0,0,0.13)'
			}
		},
  },
  plugins: [],
}
