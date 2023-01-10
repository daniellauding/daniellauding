module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'prettier'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				trailingComma: 'all',
				useTabs: true,
				tabWidth: 4,
			},
		],
		indent: 'off',
		semi: 'off',
		'no-tabs': 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'no-console': ['warn'],
		'react/prop-types': 'warn',
		// 'react/prop-types': ['warn'],
		// 'no-unused-vars': ['warn'],
	},
	settings: { react: { version: 'detect' } },
};
