// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://PeterWCox.github.io',
	base: '/Blog',
	markdown: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});
