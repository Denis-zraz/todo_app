module.exports = {
    root: true,
    env: { browser: true, es2020: true, node: 'current' },
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/jsx-runtime',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'set.ts', 'jest.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', tsconfigRootDir: __dirname, },
    settings: {
        react: { version: '18.2' },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    plugins: ['@typescript-eslint', 'react-refresh', 'react', 'import', 'jsx-a11y', 'jest'],
    rules: {
        'import/no-unresolved': [2, { caseSensitive: false }],
        'react/jsx-no-target-blank': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'alway',
            },
        ],
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'jsx-a11y/no-autofocus': 'off',
        'no-alert': 'off',
        'react/require-default-props': 0,
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'jest/valid-title': 'off',
    },
};
