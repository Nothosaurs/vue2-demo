<template>
	<div class="">
		<h1>Vue引入JQuery方法</h1>
		<p>1.在vue项目用 npm/cnpm install jquery --save 命令将jQuery的依赖加载到项目</p>
		<p>
			2.在build文件夹下的webpack.base.config.js文件中顶部定义<code>var webpack = require('webpack')</code> 在下文的resolve对象下加入 plugins: [ new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery", }) ]
		</p>
		<p>然后重新运行项目即可</p>
		<p>注：网上说需要在main.js 引入import $ from 'jquery'，该引入我注释了，jQuery也能使用。</p>
		<p> 安装了eslint的项目，需要做的下一步就是要修改根目录下.eslintrc.js文件了， 在改文件的module.exports中，为env添加一个键值对 jquery: true 就可以了，也就是： env: { // 原有 browser: true, // 添加 jquery: true }
		</p>
	</div>
</template>