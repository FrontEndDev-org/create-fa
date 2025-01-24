/**
 * @file env.d.ts
 * @ref https://nodejs.org/api/process.html#processenv
 */

/// <reference types="vite/client" />
/// <reference types="vitest/globals" />
/// <reference types="unplugin-vue-router/client" />

namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

