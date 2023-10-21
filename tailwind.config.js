module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				light: { raw: '(prefers-color-scheme: light)' },
				dark: { raw: '(prefers-color-scheme: dark)' },
			},
			colors: {
				primary: 'var(--color-primary, #B2387B)',
				'text-black': 'var(--color-text-black, rgb(0 0 0))',
				case: {
					background: 'var(--background)',
					title: 'var(--case-title)',
					text: 'var(--case-text)',
				},
				'bg-light': 'var(--bg-light)',
				'bg-dark': 'var(--bg-dark)',
				black: 'var(--color-black, #000)',
				white: 'var(--color-white, #fff)',
				gray: {
					100: 'var(--color-gray-100, #f7fafc)',
					200: 'var(--color-gray-200, #edf2f7)',
					300: 'var(--color-gray-300, #e2e8f0)',
					400: 'var(--color-gray-400, #cbd5e0)',
					500: 'var(--color-gray-500, #a0aec0)',
					600: 'var(--color-gray-600, #718096)',
					700: 'var(--color-gray-700, #4a5568)',
					800: 'var(--color-gray-800, #2d3748)',
					900: 'var(--color-gray-900, #1a202c)',
				},
				red: {
					100: 'var(--color-red-100, #fff5f5)',
					200: 'var(--color-red-200, #fed7d7)',
					300: 'var(--color-red-300, #feb2b2)',
					400: 'var(--color-red-400, #fc8181)',
					500: 'var(--color-red-500, #f56565)',
					600: 'var(--color-red-600, #e53e3e)',
					700: 'var(--color-red-700, #c53030)',
					800: 'var(--color-red-800, #9b2c2c)',
					900: 'var(--color-red-900, #742a2a)',
				},
			},
			zIndex: {
				auto: 'auto',
				n2: -2,
				n1: -1,
				0: 0,
				1: 1,
				2: 2,
			},
			textColor: {
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)',
				default: 'var(--color-text-default)',
				'default-soft': 'var(--color-text-default-soft)',
				inverse: 'var(--color-text-inverse)',
				'inverse-soft': 'var(--color-text-inverse-soft)',
				title: 'var(--color-text, var(--color-black, #000))',
				text: 'var(--color-text, var(--color-gray-800, #2d3748))',
			},
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				secondary: 'var(--color-bg-secondary)',
				default: 'var(--color-bg-default)',
				inverse: 'var(--color-bg-inverse)',
			},
			fontFamily: {
				display: 'var(--font-display)',
				body: 'var(--font-body)',
			},
			fontWeights: {
				normal: 'var(--font-weight-normal)',
				display: 'var(--font-weight-display)',
				btn: 'var(--font-weight-btn)',
			},
			borderRadius: {
				none: '0',
				btn: 'var(--rounded-btn)',
			},
			themes: {
				lf: {
					// Background colors
					'bg-primary': '#FF0000',
					'bg-secondary': '#00FF00',

					// Fonts
					'font-primary': ['Roboto', 'sans'],
					'font-secondary': ['Arial', 'sans'],

					// Text colors
					'text-primary': 'red',
					'text-secondary': '#000000',
					'text-black': 'red',
					'text-white': 'blue',

					// ... other theme styles ...
				},
			},
		},
		// fontFamily: {
		//     'sans': ['Roboto', 'sans-serif'],
		//     'serif': ['sans-serif', 'ui-serif', 'Georgia'],
		//     'mono': ['ui-monospace', 'SFMono-Regular'],
		//     'display': ['Roboto', 'sans-serif'],
		//     'body': ['Roboto', 'sans-serif'],
		// }
	},
	variants: {
		extend: {},
	},
	safelist: [
		{
			pattern: /p-*/,
		},
		{
			pattern: /px-*/,
		},
		{
			pattern: /py-*/,
		},
		{
			pattern: /pt-*/,
		},
		{
			pattern: /pr-*/,
		},
		{
			pattern: /pb-*/,
		},
		{
			pattern: /pl-*/,
		},
		{
			pattern: /m-*/,
		},
		{
			pattern: /mx-*/,
		},
		{
			pattern: /my-*/,
		},
		{
			pattern: /mt-*/,
		},
		{
			pattern: /mr-*/,
		},
		{
			pattern: /mb-*/,
		},
		{
			pattern: /ml-*/,
		},
		{
			pattern: /rounded-*/,
		},
		{
			pattern: /border-*/,
		},
		{
			pattern: /shadow-*/,
		},
		{
			pattern: /w-*/,
		},
		{
			pattern: /gap-*/,
		},
		{
			pattern: /h-*/,
		},
		{
			pattern: /text-*/,
		},
		{
			pattern: /justify-*/,
		},
		{
			pattern: /align-*/,
		},
		{
			pattern: /row-*/,
		},
		{
			pattern: /col-*/,
		},
		{
			pattern: /grid-*/,
		},
		{
			pattern: /bg-.*/,
		},
		{
			pattern: /order-*/,
		},
		{
			pattern: /max-*/,
		},
		{
			pattern: /min-*/,
		},
		{
			pattern: /rounded-*/,
		},
		{
			pattern: /drop-*/,
		},
		{
			pattern: /opacity-*/,
		},
		{
			pattern: /overflow-*/,
		},
		{
			pattern: /from-*/,
		},
		{
			pattern: /flex-*/,
		},
		{
			pattern: /via-*/,
		},
		{
			pattern: /to-*/,
		},
		{
			pattern: /underline-*/,
		},
		{
			pattern: /overflow-*/,
		},
		{
			pattern: /rotate-*/,
		},
		{
			pattern: /font-*/,
		},
		{
			pattern: /resize-*/,
		},
		'auto',
		'uppercase',
		'lowercase',
		'capitalize',
		'normal-case',
		'truncate',
		'visible',
		'invisible',
		'collapse',
	],
	plugins: [
		function ({ addBase, config }) {
			addBase({
				body: {
					color: config('theme.colors.black'),
					backgroundColor: config('theme.colors.white'),
				},
				'@screen dark': {
					body: {
						color: config('theme.colors.white'),
						backgroundColor: config('theme.colors.black'),
					},
				},
			});
		},
	],
};
