module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/essential',
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
            },
        },
    },
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'no-console': 'off',
        'vue/multi-word-component-names': 'off',
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never',
        }],
    },
};
