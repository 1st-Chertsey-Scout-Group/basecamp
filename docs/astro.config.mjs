import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'basecamp',
		social: {
			github: 'https://github.com/1st-Chertsey-Scout-Group/basecamp',
		},
		sidebar: [
			{
				label: 'Guides',
				autogenerate: { directory: 'guides' },
			},
			{
				label: 'Blocks',
				autogenerate: { directory: 'blocks' },
			},
			{
				label: 'Components',
				autogenerate: { directory: 'components' },
			},
		],
		customCss: ['./src/tailwind.css'],
	}), tailwind({}), react()],
});