module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
			},
		],
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/mouse-events-have-key-events': 'off',
		'react/prop-types': 0,
		indent: ['warn', 'tab'],
		'no-tabs': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'no-console': ['warn'],
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
