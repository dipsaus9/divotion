import config from './config/latest'

if (config.env === 'development') {
	process.env.DEBUG = 'nuxt:*'
}

export default {
	mode: 'universal',
	env: {
		environment: config.env || 'production',
	},

	/*
   ** Headers of the page
   */
	head: {
		title: 'Divotion',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'An apple a day' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	/*
   ** Customize the progress bar color
   */
	loading: {
		color: '#101010',
	},

	/*
   ** Plugins to load before mounting the App
   */
	plugins: ['~/plugins/client-init.client.js'],

	/*
   ** Nuxt.js modules
   */
	modules: ['@nuxtjs/style-resources'],

	generate: {
		fallback: true
	},

	/**
   * Add styleResource to add global SCSS variables
   */
	styleResources: {
		scss: [
			'~/assets/scss/color/_index.scss',
			'~/assets/scss/variables/_index.scss',
			'@node_modules/matise-gryd/gryd-index.scss'
		]
	},

	/**
   * Add global css file
   */
	css: ['~/assets/scss/app.scss'],

	/*
   ** Build configuration
   */
	build: {
		/**
		 * Split all chunks to webpack can eager load
		 */
		splitChunks: {
			layouts: true,
			pages: true,
			commons: true
		},
		/**
		 * Minify html
		 */
		'html.minify': {
			collapseBooleanAttributes: true,
			decodeEntities: true,
			minifyCSS: true,
			minifyJS: true,
			processConditionalComments: true,
			removeEmptyAttributes: true,
			removeRedundantAttributes: true,
			trimCustomFragments: true,
			useShortDoctype: true
		},
		/*
     ** You can extend webpack config here
     */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},
}
