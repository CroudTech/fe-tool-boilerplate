# fe-tool-boilerplate

Vue 3 + Vite + TypeScript + Vitest + ESLint

[![Vite](https://img.shields.io/badge/Vite-%2335495e.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vue 3](https://img.shields.io/badge/Vue%203-%2335495e.svg?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Degit Ready](https://img.shields.io/badge/Degit-Ready-brightgreen)](https://github.com/Rich-Harris/degit)
[![Yarn](https://img.shields.io/badge/Yarn-berry-blue?logo=yarn&logoColor=white)](https://yarnpkg.com/)

This template will help you quickly start developing tools with Vue 3, Vite, TypeScript, Element Plus and Tailwind.

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/8f472fa9-861f-42cb-b334-0ecca0d81f41" />

## Project Setup

```bash
yarn
```

### Compile and Hot-Reload for Development

```bash
yarn dev
```

### Type-Check, Compile and Minify for Production

```bash
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```bash
yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)

```bash
yarn lint
```

---

## Using This Template with Degit

You can scaffold a new tool project based on this boilerplate using [`degit`](https://github.com/Rich-Harris/degit):

```bash
npx degit CroudTech/fe-tool-boilerplate croud-tool
cd croud-tool
yarn install
yarn dev
```

### Recommended next steps:

1. Rename `croud-tool` to desired tool project name.
2. Update `package.json` with new tool project name.
3. (Optional) Re-init git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

## Exposing Views for Module Federation

To enable **Module Federation** and allow this app to expose specific views (or any modules) to a host application, follow these steps:

### 1. Configure `vite.config.ts`

Open your `vite.config.ts` file and set up the federation plugin with the views you want to expose:

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'fe_tool',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardView': './src/views/DashboardView.vue',
        './NewRunView': './src/views/NewRunView.vue',
        './ResultView': './src/views/ResultView.vue',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
```

### 2. Build the Remote App

Run the build command to generate the `remoteEntry.js` file that a host app can consume:

```bash
yarn build
```

This sets up the app as a **remote module**, exposing `DashboardView`, `NewRunView`, and `ResultView` to be used in a host app via Module Federation.
