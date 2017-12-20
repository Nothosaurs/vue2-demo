import Vue from 'vue'
import Router from 'vue-router'
import NotFound from "@/error/NotFound"
import Home from '@/view/Home'
import DisPlayPage from '@/view/DisPlayPage'

Vue.use(Router)

let routes = [
	//首页
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	//展示页
	{
		path: '/display_page',
		name: 'DisPlayPage',
		component: DisPlayPage
	},
];

const router = new Router({
	mode: 'history', //去掉URL地址上的hash
	routes: routes
});

router.beforeEach((to, from, next) => {
	if(to.matched.length === 0) { //如果未匹配到路由
		from.name ? next({
			name: from.name
		}) : next('/'); //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
	} else {
		next(); //如果匹配到正确跳转
	}
});

export default router