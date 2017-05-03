<template>
	<div>
		<h2>名片</h2>
		<p>姓名:{{users.name}}</p>
		<p>年龄: {{users.age}}</p>
		<p>爱好 : xxxxxxxxxxxxxxxx</p>
		<p>电话: xxxxxxxxxxxx</p>
		<p>id:{{$route.params.id}}</p>
		<router-link to="1">id1</router-link>
		<router-link to="2">id2</router-link>
		<router-link :to="{path:'3'}">id3</router-link>
		<!--{{fn()}}-->
	 	
	</div>
</template>

<script>
	let obj = [
		{	
			id:1,
			name:'leo',
			age: '30'
		},
		{	
			id:2,
			name:'momo',
			age:'30'
		},
		{
			id:3,
			name:'duoduo',
			age:'30'
		}
	]
	
	export default{
		data(){
			return {
				users:{
					name :'123',
					age:'123'
				}
			}
		},
		methods:{
			fn(){
				console.log(this.$route)
			},
			routeChange(id){
				let userInfo = obj.filter(function(item){
					return item.id == id
				})
				if(userInfo.length){
					this.users = userInfo[0]
				}
			}
		},
		beforeRouteEnter(to,from,next){
			console.log(to)
			let id = to.params.id
			
			next(vm=>{
				vm.routeChange(id)
			})
		},
		beforeRouteUpdate(to,from,next){//在路由更新时调用,可以访问this   和watch下的$route相似
			let id = to.params.id
			this.routeChange(id)
			next()//没有回调函数
		}/*,
		watch:{
			'$route'(to,from){
				console.log(this.$route==to)
				let id = to.params.id
				this.routeChange(id)	
			}
		}*/
	}
</script>

<style>
</style>