/**
 * vite.d.ts
 * @ref https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 */

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


