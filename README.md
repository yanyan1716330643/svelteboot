项目背景
```
普通后端会点js，不喜欢心智负担很重的前端框架，从Svelte和Solid简单纠结之后半随机选了Svelte。准备vite+svelte以及了解到Svelte Kit做底子做个自己平
时用的前端壳子，以后能更多的将注意力集中到事情的内容上，而不是疲惫于各种不可控且乱而重的东西上。
```
目标
```
开发一个服务于个人全栈开发者的前端的壳子，用来承载一些简单而小巧的前端应用。
```
svelte项目搭建尝试
```

1.vite方式构建
npm create vite@latest demo01

2.官方构建方式
> npm create svelte@latest demo02

┌  Welcome to SvelteKit!
│
◆  Which Svelte app template?
│  ○ SvelteKit demo app (A demo app showcasing some of the features of SvelteKit - play a word guessing game
that works without JavaScript!)
│  ● SvelteKit demo app (A demo app showcasing some of the features of SvelteKit - play a word guessing game
 Skeleton project (Barebones scaffolding for your new SvelteKit app)
│  ○ Library project (Barebones scaffolding for your new Svelte library)
└
◆  Add type checking with TypeScript?
│  ● Yes, using JavaScript with JSDoc comments
│  ○ Yes, using TypeScript syntax
│  ○ No
└
◆  Select additional options (use arrow keys/space bar)
│  ◻ Add ESLint for code linting
│  ◻ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
│  ◻ Try the Svelte 5 preview (unstable!)
└

┌  Welcome to SvelteKit!
│
◇  Which Svelte app template?
│  SvelteKit demo app
│
◇  Add type checking with TypeScript?
│  Yes, using JavaScript with JSDoc comments
│
◇  Select additional options (use arrow keys/space bar)
│  none
│
└  Your project is ready!

✔ Type-checked JavaScript
  https://www.typescriptlang.org/tsconfig#checkJs

Install community-maintained integrations:
  https://github.com/svelte-add/svelte-add

Next steps:
  1: cd my-app
  2: npm install
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open
```
疑问
```
Q1:vite+svelte 还是 svelte+sveltekit去构建
- 第一种方式构建对熟悉vite打包构建的基本上是没有任何负担，但是官网给的教程，比如 +page.svelte/+layout.svelte或[[id]]路径这种就不知道怎么对应了
- 第二种方式可以快速使用官网给的教程，如路径即路由等等优势，但是打包就只是在.svelte的output路径下，与熟悉的前端项目打包静态资源到dist完全不同了
Q2:组件库
- 生态圈太小，没有像antd、element之类的组件库
- 要么用原生的写或者找antd这样的抄袭，但是效率也太低了
- 也可以找模型生成也不是很可控
```

相关网址
```
svelte 官网
https://svelte.dev/
https://www.svelte.cn/
svelte kit官网
https://kit.svelte.dev/
solid 官网
https://www.solidjs.com/
```

