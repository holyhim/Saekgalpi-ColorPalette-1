module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2020: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
    },
    plugins: ['react'],
    rules: {
        'no-console': 'off',
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
    },
};
