/**
 * @file postcss.config.mjs
 * @ref https://postcss.org/
 * @ref https://unocss.dev/integrations/postcss
 */

import uno from '@unocss/postcss';

export default {
  plugins: [
    uno(),
  ],
};
