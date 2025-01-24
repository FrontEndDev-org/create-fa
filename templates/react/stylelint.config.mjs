// 适配 tailwindcss、unocss
// @ref https://tailwindcss.com/docs/functions-and-directives
// @ref https://unocss.dev/integrations/postcss
const ignoreAtRules = [
  "apply",
  "config",
  "layer",
  "responsive",
  "screen",
  "tailwind",
  "unocss",
  "variants",
];

/**
 * stylelint.config.mjs
 * @ref https://stylelint.io/
 * @type {import('stylelint').Config}
 */
export default {
  ignoreFiles: [
    "node_modules",
    "/dist/**",
    "/public/**",
    "/coverage/**",
  ],

  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-css-modules',
    'stylelint-config-html',
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




