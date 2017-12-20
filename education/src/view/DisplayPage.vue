<template>
	<div class="">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<h1>Vue引入JQuery方法</h1>	
					<p>1.在vue项目用 <code>npm/cnpm install jquery --save</code>命令将jQuery的依赖加载到项目</p>
					<p>2.在build文件夹下的webpack.base.config.js文件中顶部定义<code>var webpack = require('webpack')</code>
						在下文的resolve对象下加入 
						<code>
							plugins:[ new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery", }) ]
						</code> 
					</p>
					<p>3.然后重新运行项目即可</p>
					<p>注：网上说需要在main.js 引入import $ from 'jquery'，该引入我注释了，jQuery也能使用。</p>
					<p>4.安装了eslint的项目，需要做的下一步就是要修改根目录下.eslintrc.js文件了， 在改文件的module.exports中，为env添加一个键值对 jquery: true 就可以了，也就是： env: { // 原有 browser: true, // 添加 jquery: true }</p>
				</div>
				<div class="swiper-slide">
					<h1>Vue引入bootstrap方法</h1>
					<p>1.在assets文件夹下拷贝bootstrap的资源文件</p>
					<p>
						2.在main.js的路口文件引入
						<code>import "./assets/bootstrap-3.3.7-dist/css/bootstrap.min.css"</code>
						<code>import "./assets/bootstrap-3.3.7-dist/js/bootstrap.min"</code>
					</p>
				</div>
				<div class="swiper-slide">
					<h1>Vue引入Swiper轮播插件方法</h1>
					<p>1.在vue项目用 npm/cnpm install swiper --save/--save-dev 命令将Swiper的依赖加载到项目</p>
					<p>
						2.在需要的组件中引入
						<code>import Swiper from 'swiper'</code>
						<code>import 'swiper/dist/css/swiper.min.css'</code>
					</p>
					<p>
						3.html的结构 ,参照本子组件
					</p>
					<p>
						4.在mounted钩子下初始化函数
						<code>
							var mySwiper = new Swiper('.swiper-container', {
								autoplay: true,//可选选项，自动滑动
							})
						</code>
					</p>
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<!--<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>-->
		</div>
	</div>
</template>

<script>
	//引用swiper轮播插件
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	import MethodOne from '@/components/import/methodOne'
	export default {
		name: 'methodOne',
		components: {
			MethodOne
		},
		data() {
			return {

			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: true, //可选选项，自动滑动
				pagination: {
					el: '.swiper-pagination',
					clickable :true,
				},
//				navigation: {
//					nextEl: '.swiper-button-next',
//					prevEl: '.swiper-button-prev',
//				},
			})
		}
	}
</script>

<style scoped="scoped">

</style>