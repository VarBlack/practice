<template>
	<div>
		<header-nav></header-nav>
		<div class="breadcrumb">
	      <a href="javascript:;" @click='handle'>首页</a>
	      /
	      <span>{{flag}}</span>
	    </div>
		
    	<router-view class="pos"></router-view>
	</div>
	
</template>

<script>
	
	import Header from '@/components/header' //引入header文件
	
	let obj = {
		'project' : '我的项目',
		'doc' : '文档',
		'code' : '工作台'
	}
	// 需要拿到路由
  	// 路由的信息对象 $route
	
	export default {
		components:{
			'header-nav':Header
		},
		data(){
			return {
				flag : '我的项目'
			}
		},
		watch:{
			 //观测路由对象的变化
	      '$route'(){
//	       	改变路径为this.$route.path	
		      let path = this.$route.path.slice(1);
		      this.flag = obj[path];
		   }
		},
		beforeRouteEnter(to, from, next){
	      // 路由匹配到加载这个视图，先回执行这个函数
//	      console.log(to)  // 到哪里去
//	      console.log(from) // 从哪里来
	
	      
	      let path = to.path.slice(1)
	      // 如果要渲染视图，加上next()
	      next( (vm) =>{
	        // 通过 `vm` 访问组件实例
	        vm.flag = obj[path];
	      } );
	      
	   },
	   methods:{
	   	handle(){
	   		console.log(this.$route)
        	console.log(this.$router)
        	this.$router.push({path:'/'}) //跳转到首页
	   	}
	   }
		
	}
</script>

<style>
	.pos {
	  position: relative;
	  top: 70px;
	}
</style>