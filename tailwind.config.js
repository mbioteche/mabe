const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: defaultTheme.transitionTimingFunction.out,
			},
			colors: {
				turquoise: {
					light: "#A5FFD6",
					dark: "#84DCC6",
				},
				pink: {
					light: "#FFA69E",
					dark: "#FF686B",
				},
				gray: {
					DEFAULT: "#222222",
				},
			},
			boxShadow: {
				partner: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				event: "9px 1px 38px 0px rgba(0, 0, 0, 0.25)",
				gallery: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				mainPageCards: "7px 8px 45px -2px rgba(0, 0, 0, 0.25)",
				memberCard: "6px 1px 10px rgba(0, 0, 0, 0.15)",
			},
			spacing: {
				22: "5.5rem",
			},
			borderRadius: {
				mainPage: "45px",
				gallery: "10px",
			},
			minHeight: {
				newsImage: "492px",
			},
			fontFamily: {
				ss3: ["Source Sans 3", ...defaultTheme.fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme("colors.pink.dark"),
						},
					},
				},
			}),
			aspectRatio: {
				"4/3": "4/3",
			},
			screens: {
				xs: "0px", // Extra small screens
				sm: "576px", // Small screens
				md: "768px", // Medium screens
				lg: "992px", // Large screens
				xl: "1200px", // Extra large screens
			},
		},
	},
	corePlugins: {
		animation: false,
	},
	plugins: [typography],
};
