/**
 * @file react-router.config.ts
 * @ref https://reactrouter.com/
 */

import type { Config } from '@react-router/dev/config';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  appDirectory: 'src',
  buildDirectory: 'dist',
} satisfies Config;
