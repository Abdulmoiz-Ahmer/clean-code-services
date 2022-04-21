module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		mocha: true,
	},

	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
	},
	plugins: ['prettier'],
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
};
