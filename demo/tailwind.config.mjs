/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'../packages/basecamp/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		colors: {
			transparent: "var(--transparent)",
			inherit: "inherit",
			white: "var(--white)",
			
			background: "var(--background)",
			foreground: "var(--foreground)",

			alternative: {
				DEFAULT: "var(--alternative)",
				foreground: "var(--alternative-foreground)",
			},

			primary: {
				DEFAULT: "var(--primary)",
				foreground: "var(--primary-foreground)",
			},

			input: {
				DEFAULT: "var(--input)",
				border: "var(--input-border)",
				foreground: "var(--input-foreground)",
			},
		},
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
			},

		},
	},
	plugins: [],
}