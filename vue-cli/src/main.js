// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//import VueRouter from 'vue-router'//引入路由


Vue.config.productionTip = false

//Vue.use(VueRouter)//安装路由这个插件
//引入css文件
//require("./assets/css/app.css")

//import Home from '@/components/home'
//
//
//const router = new VueRouter({
//	routes:[
//		{
//			path:'/',
//			component:Home
//		}
//	]
//})

new Vue({
	el: '#app',
	router : router,
	template: '<App/>',
	components: { App }
})