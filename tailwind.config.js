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
				primary: '#B2387B',
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
