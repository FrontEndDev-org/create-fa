// 适配 tailwindcss、unocss
// @ref https://tailwindcss.com/docs/functions-and-directives
// @ref https://unocss.dev/integrations/postcss
const ignoreAtRules = [
  // Tailwindcss v4
  "theme",
  "source",
  "utility",
  "variant",
  "custom-variant",
  "apply",
  "reference",
  "config",
  "plugin",

  // Unocss v65
  "unocss",
  "screen",
];

/**
 * stylelint.config.mjs
 * @ref https://stylelint.io/
 * @type {import('stylelint').Config}
 */
export default {
  ignoreFiles: [
    // Node
    "node_modules",
    // Vite
    "dist/**",
    "public/**",
    // Vitest
    "coverage/**",
  ],

  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules',
    'stylelint-config-html',
    'stylelint-config-html/vue',
  ],

  rules: {
    // 源可以为空
    'no-empty-source': null,

    // 样式类名：无规则限制
    'selector-class-pattern': null,

    // 不接受无效属性值
    'declaration-property-value-no-unknown': true,

    // 不需要要求声明倒序
    'no-descending-specificity': null,

    // @ref https://stylelint.io/user-guide/rules/at-rule-no-unknown/
    'at-rule-no-unknown': [true, { ignoreAtRules }],
    // @ref https://stylelint.io/user-guide/rules/at-rule-no-deprecated/
    'at-rule-no-deprecated': [true, { ignoreAtRules }],
  },
};




