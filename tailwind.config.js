const colors = require("tailwindcss/colors");
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"*.vue",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				fadeDown: "fadeDown 1s ease-in-out",
			},
			keyframes: {
				fadeDown: {
					"0%": { transform: "translateY(-100px)", opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			colors: {
				primary: colors.green,
			},
			fontFamily: {
				sans: ["Poppins"],
			},
			padding: {
				desktop: "200px",
				mobile: "30px",
			},
		},
	},
	plugins: [],
};
