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
◆  The project has been created successfully!
│
◆  cd my-proj to start your coding journey
│
└  🎉🎉🎉
```

## Templates

| 模板 | React | Vue |
|------|-------|-----|
| 框架 | [React@19](https://react.dev/) | [Vue@3](https://vuejs.org/) |
| 语言 | [TypeScript](https://www.typescriptlang.org/) | [TypeScript](https://www.typescriptlang.org/) |
| 构建工具 | [Vite](https://vite.dev/) | [Vite](https://vite.dev/) |
| 路由系统 | [React Router](https://reactrouter.com/) | [Vue Router](https://router.vuejs.org/) |
| 文件路由 | [@generouted/react-router](https://github.com/oedotme/generouted) | [Unplugin Vue Router](https://uvr.esm.is/) |
| 原子化样式 | [UnoCSS](https://unocss.dev/) | [UnoCSS](https://unocss.dev/) |
| 预处理器 | [Sass](https://sass-lang.com/) | [Sass](https://sass-lang.com/) |
| SVG 图标 | [Vite SVG Sprite](https://www.npmjs.com/package/vite-svg-sprite) | [Vite SVG Sprite](https://www.npmjs.com/package/vite-svg-sprite) |
| 状态管理 | [Valtio](https://valtio.dev/) | [Pinia](https://pinia.vuejs.org/) |
| 格式化 <sup>1</sup> | [Biome](https://biomejs.dev/) | [Biome](https://biomejs.dev/) |
| 格式化 <sup>1</sup> | [ESLint](https://eslint.org/) | [ESLint](https://eslint.org/) |
| 格式化 <sup>1</sup> | [Prettier](https://prettier.io/) | [Prettier](https://prettier.io/) |
| 格式化 | [StyleLint](https://stylelint.io/) | [StyleLint](https://stylelint.io/) |
| Git 钩子 | [Lefthook](https://lefthook.dev/) | [Lefthook](https://lefthook.dev/) |
| Git 消息 | [Commitlint](https://commitlint.js.org/) | [Commitlint](https://commitlint.js.org/) |

注意 1: 格式化工具 ESLint + Prettier 或 Biome 在创建工程时会提示你二者选其一。
