import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: {
		blog: "/src/routes/blog/BlogLayout.svelte",
		page: "/src/routes/blog/PageLayout.svelte",
	}
});

export default config;
