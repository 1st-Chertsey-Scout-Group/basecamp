import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'../packages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: colors.indigo,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
			},
		},
	},
	plugins: [starlightPlugin()],
};
