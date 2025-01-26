English | [中文](./README.md)

# create-proj

[![npm version](https://img.shields.io/npm/v/create-proj)](https://npmjs.com/package/create-proj)

create project - npm create proj

## Usage
```bash
npm create proj my-proj

┌   create-proj@1.0.0
│
●  create project - npm create proj
│
◆  Node.js version 20 is compatible with 18
│
◇  Currently using the latest version
│
◇  Select a template
│  React
│
▲  The project directory is: /path/to/my-proj
│
◇  Select node version
│  v22.x
│
◇  Select npm registry
│  npmmirror
│
◇  Select code linter
│  biome
│
◇  Generated project 37 files
│
◇  Git repository initialized successfully
│
◆  The project has been created successfully!
│
◆  cd my-proj to start your coding journey
│
└  🎉🎉🎉
```

## Templates

| Template | React | Vue |
|----------|-------|-----|
| Framework | [React@19](https://react.dev/) | [Vue@3](https://vuejs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) | [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vite.dev/) | [Vite](https://vite.dev/) |
| Routing | [React Router](https://reactrouter.com/) | [Vue Router](https://router.vuejs.org/) |
| File-based Routing | [@generouted/react-router](https://github.com/oedotme/generouted) | [Unplugin Vue Router](https://uvr.esm.is/) |
| Atomic CSS | [UnoCSS](https://unocss.dev/) | [UnoCSS](https://unocss.dev/) |
| Preprocessor | [Sass](https://sass-lang.com/) | [Sass](https://sass-lang.com/) |
| SVG Icons | [Vite SVG Sprite](https://www.npmjs.com/package/vite-svg-sprite) | [Vite SVG Sprite](https://www.npmjs.com/package/vite-svg-sprite) |
| State Management | [Valtio](https://valtio.dev/) | [Pinia](https://pinia.vuejs.org/) |
| API Requests | [Axios](https://axios-http.com/) | [Axios](https://axios-http.com/) |
| API Sync | [openapi-axios](https://github.com/FrontEndDev-org/openapi-axios) | [openapi-axios](https://github.com/FrontEndDev-org/openapi-axios/) |
| API Hooks | [Ahooks - useRequest](https://ahooks.js.org/) | [Vue-request - useRequest](https://www.attojs.org/) |
| Formatting <sup>1</sup> | [Biome](https://biomejs.dev/) | [Biome](https://biomejs.dev/) |
| Formatting <sup>1</sup> | [ESLint](https://eslint.org/) | [ESLint](https://eslint.org/) |
| Formatting <sup>1</sup> | [Prettier](https://prettier.io/) | [Prettier](https://prettier.io/) |
| Formatting | [StyleLint](https://stylelint.io/) | [StyleLint](https://stylelint.io/) |
| Git Hooks | [Lefthook](https://lefthook.dev/) | [Lefthook](https://lefthook.dev/) |
| Git Messages | [Commitlint](https://commitlint.js.org/) | [Commitlint](https://commitlint.js.org/) |

Note 1: You will be prompted to choose between ESLint + Prettier or Biome as your formatting tool when creating the project.
