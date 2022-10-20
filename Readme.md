# esbuild-plugin-jade

Import plugin for jade files for [esbuild](https://esbuild.github.io/)

## Install

```bash
npm i -D esbuild-plugin-jade
```

## Use

```js
const jadePlugin = require('esbuild-plugin-jade');

require('esbuild')
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    platform: "node",
    outfile: 'built/jade.js',
    plugins: [
      jadePlugin()
    ],
  })
  .catch(() => process.exit(1));
```