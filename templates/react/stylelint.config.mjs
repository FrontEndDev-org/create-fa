// 适配 tailwindcss、unocss
// @ref https://tailwindcss.com/docs/functions-and-directives
// @ref https://unocss.dev/integrations/postcss
const ignoreAtRules = [
  // Tailwindcss v4
  'theme',
  'source',
  'utility',
  'variant',
  'custom-variant',
  'apply',
  'reference',
  'config',
  'plugin',

  // Unocss v65
  'unocss',
  'screen',
];

/**
 * stylelint.config.mjs
 * @ref https://stylelint.io/
 * @type {import('stylelint').Config}
 */
export default {
  ignoreFiles: [
    // Node
    '**/node_modules/**',
    // Vite
    'dist/**',
    'public/**',
    // Vitest
    'coverage/**',
  ],

  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules',
    'stylelint-config-html',
  ],

  rules: {
    // @ref https://stylelint.io/user-guide/rules/no-empty-source/
    'no-empty-source': null,
    // @ref https://stylelint.io/user-guide/rules/selector-class-pattern/
    'selector-class-pattern': null,
    // @ref https://stylelint.io/user-guide/rules/no-descending-specificity/
    'no-descending-specificity': null,

    // tailwind
    // @ref https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'at-rule-no-unknown': [true, { ignoreAtRules }],
    // @ref https://stylelint.io/user-guide/rules/at-rule-no-deprecated/
    'at-rule-no-deprecated': [true, { ignoreAtRules }],
  },
};


