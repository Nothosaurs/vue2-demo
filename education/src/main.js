// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'

//import $ from 'jquery'
// 引用bootstrap框架
import "./assets/bootstrap-3.3.7-dist/css/bootstrap.min.css"
import "./assets/bootstrap-3.3.7-dist/js/bootstrap.min"

// 引用字体图标
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"

// 引用动画效果
import "./assets/animate.css"

// 引用全局配置
import "./config"

//引用swiper轮播插件
//import Swiper from 'swiper';
//import 'swiper/dist/css/swiper.min.css';

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})