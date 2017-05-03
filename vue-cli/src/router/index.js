import Vue from 'vue'
import VueRouter from 'vue-router'//引入路由
Vue.use(VueRouter)//安装路由这个插件

import Home from '@/components/home'
import Project from '@/views/backend/project'
import User from '@/views/user'
import Pic from '@/views/pic'
import Child from '@/views/pics/picChild'
import Old from '@/views/pics/picOld'
import Man from '@/views/pics/picMan'
const router = new VueRouter({
	routes:[
		{
			path:'/',
			component:Home
		},
		{
			path:'/project',
			component:Project
		},
		{
			path:'/user/:id?',
			component:User
		},
		{
			path:'/pic',
			component:Pic,
			children:[
				{
					path:'child',
					name:'Child',
					component:Child
				},
				{
					path:'old',
					name:'Old',
					component:Old
				},
				{
					path:'man',
					name:'Man',
					component:Man
				},
				{
					path:'',
					component:Child
				},
				{
				path:"*",
				redirect: 'child'
				}
			]
			
		}
		
	]
})


export default router
