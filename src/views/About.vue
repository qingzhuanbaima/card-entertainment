<template>
	<div class="about">
		<h1>This is an about page</h1>
		<button type="button" @click="getApi">getApi</button>
	</div>
</template>
<script>
	import {
		get
	} from '../api/api.js'
	export default {
		name: 'about',
		data() {
			return {

			}
		},
		methods: {
			getApi() {
				get('api').then((res)=>{
					console.log(res)
				})
			}
		}
	}
</script>
