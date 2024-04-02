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
Q3:组件间数据传递怎么做
- 直接问的大模型给了比较系统的答案
- 1. 使用 props 传递数据
- 2. 使用 Svelte 的响应式声明
- 3. 使用上下文 (Context)
Q4:有时候想看具体的api，发现基本上没啥比较好的参考
- 如果只是svelte，目前各种百度、谷歌、帖子或者大模型等方式还是官方文档最省心，前提是需要自己先全局细致的过下demo
```
探索
```
2024/04/02 开始学习和结合layui解决UI方面的问题
```
svelte学习笔记
```
/////////////////////////////////////////
入门教程-简介
- 简介
- 什么是 Svelte？
- 如何使用本教程
- 了解组件
- 添加数据
- 同态属性
- css样式
- 嵌套组件
- HTML标签
<script>
	let string = `this string contains some <strong>HTML!!!</strong>`;
</script>
<p>{string}</p>
<p>{@html string}</p>
- 创建一个应用程序

/////////////////////////////////////////
入门教程-反应性能力
- 反应性能力
- 声明
<script>
	let count = 0;
	$: doubled = count * 2;

	function handleClick() {
		count += 1;
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>
- 语句
	$: 语句
	$: {代码快}
    $: 逻辑代码块，如 $: if (count >= 10) {...}
- 更新数组和对象(简单说：被更新的变量的名称必须出现在赋值语句的左侧)

/////////////////////////////////////////
入门教程-属性
- declaring props (declaring 声明 properties 属性)
- default values
- 属性传递

/////////////////////////////////////////
入门教程-逻辑
- if blocks
- else blocks
- else-if 块
- each 块
- 为each块添加key的值
- await块

/////////////////////////////////////////
入门教程-事件
- dom events
- inline handlers
- 事件修饰符
<button on:click|preventDefault={handleSubmit}|stopPropagation={handleButtonClick}|once={handleClick}/>
once/preventDefault/stopPropagation/passive/capture/self
capture 阶段 和 bubbling阶段？
- 组件事件
- 事件转发(准确说应该是组件事件转发)

/////////////////////////////////////////
入门教程-绑定
- text inputs
- numeric inputs
- 复选框
- 输入框绑定
- 文本域绑定
- 选择框绑定
- contenteditable绑定
- each块绑定
- 媒体标签的绑定
- 尺寸的绑定
- this
- 组件绑定
这里会有用到js的list很多操作方法如

/////////////////////////////////////////
入门教程-生命周期
- onMount
- onDestroy
- beforeUpdate afterUpdate
- tick

/////////////////////////////////////////
入门教程-stores
- writable store
- auto-subscriptions
- 只读stores
- stores派生
- 自定义stores
- 绑定store

/////////////////////////////////////////
入门教程-运动/过度/Animations/Actions/Classes/组件子集/context api/特殊标签/module context/调试
- tweened
- spring
有点枯燥的内容直接跳过了
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
layui
https://layui.dev/
```

