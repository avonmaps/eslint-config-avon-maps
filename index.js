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
        'no-param-reassign': 'off',
        'global-require': 'off',

        '@typescript-eslint/ban-ts-ignore': 'warn',
        'max-classes-per-file': ['error', 2],

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

        'prettier/prettier': [
            'error',
            require('@avon-maps/prettier-config'),
        ],
    },
};
