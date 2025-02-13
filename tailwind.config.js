/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		extend: {
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
			},
			screens: {
				light: { raw: '(prefers-color-scheme: light)' },
				dark: { raw: '(prefers-color-scheme: dark)' },
			},
			textColor: {
				primary: 'var(--color-text-primary, #C62A6F)',
				secondary: 'var(--color-text-secondary, #6E6E6E)',
				default: 'var(--color-text-default)',
				'default-soft': 'var(--color-text-default-soft)',
				inverse: 'var(--color-text-inverse)',
				'inverse-soft': 'var(--color-text-inverse-soft)',
			},
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				secondary: 'var(--color-bg-secondary)',
				default: 'var(--color-bg-default)',
				inverse: 'var(--color-bg-inverse)',
			},
		},
	},
	plugins: [
		function ({ addBase, config }) {
			addBase({
				body: {
					color: config('theme.colors.black', '#000'),
					backgroundColor: config('theme.colors.white', '#fff'),
				},
				'@screen dark': {
					body: {
						color: config('theme.colors.white', '#fff'),
						backgroundColor: config('theme.colors.black', '#000'),
					},
				},
			});
		},
	],
};
