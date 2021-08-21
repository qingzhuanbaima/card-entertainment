<template>
	<div class="sider-bar">
		<img :src="imgSrc">
		<div class="sider-bar-name">{{game.gameName}}</div>
	</div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {

			}
		},
		props: {
			game: {
				type: Object,
				default:function() {
					return{
						gameName:"炉石传说",
						gameSrc:"hearthStone"
					}
				}
			},
		},
		computed: {
		  imgSrc() {
		    // return require(`@/assets/image/home/${this.$props.subMenu.imgName}.png`);
		    console.log(this.$props.game);
		    return require(`../assets/game_img/${this.$props.game.gameSrc}.png`);
		  },
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.sider-bar{
		width: 100%;
		height: 60px;
		margin-top: 12px;
		display: flex;
		img{
			width: 48px;
			height: 48px;
		}
		.sider-bar-name{
			font-size: 16px;
			line-height: 48px;
			margin: 0 15px ;
			font-weight: 600;
		}
	}
</style>
