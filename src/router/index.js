import {
	createRouter,
	createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Agent from '../views/Agent.vue'
import Connect from '../views/Connect.vue'
import Information from '../views/Information.vue'
import Introduction from '../views/Introduction.vue'

const routes = [

	{
		path: '/',
		redirect: 'connect'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/connect',
		name: 'Connect',
		meta: {
			title: '预约联系',
		},
		component: Connect
	},
	{
		path: '/agent',
		name: 'Agent',
		meta: {
			title: '全国代理',
		},
		component: Agent
	},
	{
		path: '/information',
		name: 'Information',
		meta: {
			title: '资讯',
		},
		component: Information
	},
	{
		path: '/introduction',
		name: 'Introduction',
		meta: {
			title: '公司简介',
		},
		component: Introduction
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkActiveClass: 'active'
})

export default router

// router.beforeEach((to, from, next) => {
//  document.title = to.matched[0].meta.title;
//  next()
// })
