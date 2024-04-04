## 初始化
```bash
# create a new project in the current directory
npm create svelte@latest
```

## 替换适配器和相关配置
npm 依赖 如：
```bash
npm install --save-dev @sveltejs/adapter-static  
```
package.json
```json
{
  "name": "svelte-web-demo01",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.1",
    "@sveltejs/kit": "^2.0.0",
    "svelte": "^4.2.7",
    "svelte-preprocess": "^5.0.4",
    "typescript": "^5.4.3",
    "vite": "^5.0.3"
  },
  "type": "module"
}
```
svelte.config.js
```js
// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: preprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			// this will match a file
			//'my-file': 'path/to/my-file.js',

			// this will match a directory and its contents
			// (`my-directory/x` resolves to `path/to/my-directory/x`)
			//'my-directory': 'path/to/my-directory',

			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			//'my-directory/*': 'path/to/my-directory/*'
		}
	}
};
export default config;
```
tsconfig.json
```ts
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { resolve } from 'path'

const config: UserConfig = {
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            $cmp: resolve('./src/components/'),
            $sec: resolve('./src/'),
            $stores: resolve('./src/stores/'),
            $utils: resolve('./src/utils/')
        }
    },
    optimizeDeps: {
        exclude: []
    },
    plugins: [
        sveltekit(),
    ],
};

export default config;
```

## 创建src/common
如api.js

## 创建src/components
如Counter.svelte

## 创建src/routes
如+page.svelte

## 创建src/stores
如stores.js

## 创建static
如favicon.png
或者sw.js 这个还不是很懂原理
