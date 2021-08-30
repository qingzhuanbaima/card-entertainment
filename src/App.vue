<template>
	<div>
		<!-- <router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> -->
		<background-star></background-star>
		<div id="index">
			<div id="index-header">
				<div class="logo">
					<img src="./assets/game_img/duelMonster.png">
					<i>白狼卡牌</i>
				</div>
				<div class="nav">
					<div class="nav-title">
						<router-link to="/home">
							<navi-bar-item pageName="首页"></navi-bar-item>
						</router-link>
						<router-link to="/information">
							<navi-bar-item pageName="白狼资讯"></navi-bar-item>
						</router-link>
						<router-link to="/connect">
							<navi-bar-item pageName="预约联系"></navi-bar-item>
						</router-link>
						<router-link to="/agent">
							<navi-bar-item pageName="全国代理"></navi-bar-item>
						</router-link>
						<router-link to="/introduction">
							<navi-bar-item pageName="公司简介"></navi-bar-item>
						</router-link>
					</div>
					<div class="nav-search">
						<input type="text" name="" id="" value="" placeholder="请输入卡牌名称进行查询" />
						<button type="button"><img src="./assets/game_img/search.png"></button>
					</div>
				</div>
			</div>

			<div id="index-container">
				<div class="sider">
					<sider-bar v-for="(item,index) in 6" :key="index"></sider-bar>
				</div>
				<div class="main">
					<router-view></router-view>
					<div class="footer">
						footer
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <router-view /> -->
</template>
<script type="text/javascript">
	import BackgroundStar from './components/BackgroundStar.vue'
	import SiderBar from './components/siderBar.vue'
	import NaviBarItem from './components/NavBarItem.vue'
	export default {
		name: "app",
		components: {
			BackgroundStar,
			SiderBar,
			NaviBarItem
		},
		data() {
			return {
				theme: "assets"
			}
		}
	}
</script>
<style lang="scss">
	.active{
		color: #ffffff;
	}
	#index {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		color: #d1d1d1;
		display: flex;
		flex-direction: column;
		// background-color: rgba(255, 255, 255, 0.2);

		#index-header {
			display: flex;
			height: 80px;
			width: 100%;
			// background-color: #343a40;
			background-color: #c5b7bd;
			position: sticky;
			top: 0;
			z-index: 20;

			// background: url(./assets/logo.png) no-repeat;
			.logo {
				display: flex;
				width: 20%;
				img {
					width: 64px;
					height: 64px;
					margin: 8px;
					margin-left: 30px;
				}

				i {
					font-size: 20px;
					line-height: 80px;
					color: #d1d1d1;
				}
			}

			.nav {
				display: flex;
				width: 60%;
				justify-content: space-between;

				div {
					// flex: 1;
					text-align: center;
				}

				.nav-title {
					display: flex;
				}

				.nav-search {
					display: flex;
					float: right;
				}

				input {
					-webkit-appearance: none;
					outline: none;
					border: 1px solid #fff;
					height: 34px;
					width: 200px;
					border-top-left-radius: 8px;
					border-bottom-left-radius: 8px;
					margin: 21px 0 21px 21px;
					text-indent: 8px;
					font-size: 14px;

					&:focus {
						outline: none;
						// border: 1px solid #5FB878;
					}
				}

				button {
					height: 36px;
					width: 50px;
					border: none;
					border-top-right-radius: 8px;
					border-bottom-right-radius: 8px;
					margin: 21px 0;

					img {
						width: 30px;
					}

					&:hover {
						background-color: #cacaca;
					}
				}
			}
		}

		.sider {
			width: 12.5%;
			overflow: hidden;
			// margin-left: 40px;
			position: fixed;
			top: 100px;
		}

		#index-container {
			display: flex;
			flex-grow: 1;
			z-index: 0;

			.main {
				width: 60%;
				position: relative;
				// height: 2000px;
				margin: 0 auto;
				min-height: calc(100%-100px);
				background-color: rgba(255, 255, 255, 1);

				.footer {
					height: 100px;
					position: absolute;
					bottom: 0;
				}
			}
		}

	}
</style>
