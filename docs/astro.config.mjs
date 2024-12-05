import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@basecamp',
			social: {
				github: 'https://github.com/1st-Chertsey-Scout-Group/basecamp',
			},
			sidebar: [

			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({}),
	],
});
