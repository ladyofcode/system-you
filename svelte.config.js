import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			strict: false
		}),
		alias: {
			$lib: 'src/lib'
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404 errors for favicon.ico
				if (path === '/favicon.ico') {
					return;
				}
				// For other errors, throw them
				throw new Error(message);
			},
			handleUnseenRoutes: ({ path }) => {
				// Ignore dynamic routes that can't be prerendered
				if (path && path.includes('[') && path.includes(']')) {
					return 'ignore';
				}
				// For other routes, fail the build
				return 'fail';
			}
		}
	}
};

export default config;
