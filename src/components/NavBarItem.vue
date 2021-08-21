<template>
	<div class="nav-bar-item">
		<div class="page-name">{{pageName}}</div>
	</div>
</template>
 
<script>
	export default {
		name: '',
		data(){
			return {
				
			}
		},
		props:{
			pageName:{
				type:String,
				default:"首页"
			}
		},
		methods:{
			
		}
	}
</script>
 
<style lang="scss">
	.nav-bar-item{
		display: inline-block;
		width: 100px;
		height: 100%;
		vertical-align: middle;
		.page-name{
			font-size: 14px;
			margin-top: 15px;
			padding: 17px 20px;
			border-bottom: 5px solid #5FB878;
		}
	}
</style>
