module.exports = {
    extends: [
        'airbnb-base',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 2020,
        'ecmaFeatures': {
            'modules': true,
        },
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-useless-constructor': 'off',
        'no-param-reassign': 'off',
        'global-require': 'off',

        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.spec.ts'] }],
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, typedefs: false }],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/ban-ts-ignore': 'warn',
        'max-classes-per-file': ['warn', 2],
        'yoda': 'off',

        // Workaround for globals unknown by eslint (e.g. $, kendo)
        'no-undef': 'off',

        // Workaround for angularjs dependency parameters shadowing imported types
        // e.g.:
        //     import SolrService from '...';
        //     ...
        //         constructor(private SolrService: SolrService) {
        // (the constructor parameter shadows the imported type)
        //
        // This might get resolved, if this gets fixed:
        //     https://github.com/typescript-eslint/typescript-eslint/issues/550
        // or by using typescript type-only imports:
        //     https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#import-types
        'no-shadow': 'off',

        // Workaround for missing extensions in imports
        'import/extensions': ['error', 'ignorePackages', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],

        'prettier/prettier': [
            'error',
            require('@avon-maps/prettier-config'),
        ],
    },
};
