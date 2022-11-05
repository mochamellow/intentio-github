import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),
	},
	trailingSlash: 'always',
	paths: {
		base: dev ? '' : '/intentio-gh'
	}
};

export default config;
