<template>
	<div id="index">
		<div class="navigation-container">
			<div class="navigation-item">
				<img src="./assets/game_img/hearthStone.png">
				<span>联系我们</span>
			</div>
			<div class="navigation-item">
				<img src="./assets/game_img/hearthStone.png">
				<span>联系我们</span>
			</div>
			<div class="navigation-item">
				<img src="./assets/game_img/hearthStone.png">
				<span>联系我们</span>
			</div>
			<div class="navigation-item">
				<img src="./assets/game_img/hearthStone.png">
				<span>联系我们</span>
			</div>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
		<div class="footer">
			<img src="./assets/bgimg/frame_b.png" style="transform: rotateZ(180deg);width: 100%;">
			<img src="./assets/bgimg/bg.jpg" class="footer-img">
			<div class="footer-text">
				<h1>底部标题</h1>
				<p>我是描述</p>
				<p>我是描述</p>
				<p>我是描述</p>
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
	.active {
		color: #ffffff;
	}

	#index {
		position: relative;

		// height: 5000px;
		.navigation-container {
			display: flex;
			position: fixed;
			// position: sticky;
			top: 25px;
			left: 180px;
			z-index: 100;
			color: #ffffff;
		}

		.navigation-item {
			flex: 1;
			cursor: pointer;

			&:hover {
				transform: scale(1.1);
				transform-origin: top;
				transition: 0.2s;
				// background-color: #504d4f;
			}

			img {
				width: 50px;
				height: 50px;
				display: block;
			}

			span {
				font-family: "楷体", "楷体_GB2312";
				text-align: center;
				display: block;
				width: 30px;
				writing-mode: vertical-lr;
				padding: 15px;
				font-size: 24px;
				line-height: 18px;
			}
		}

		.main {
			// background-color: rgba(255,255,255,.5);
			// width: 1200px;
		}

		.footer {
			// position: absolute;
			// bottom: 0;
			width: 100%;
			height: 1100px;
			// background: url(assets/bgimg/bg.jpg);
			background: url(assets/bgimg/初号机.png);
			text-align: center;
		}

		.footer-img {
			display: block;
			width: 500px;
			margin: 0 auto;
			margin-top: 100px;
			// height: 400px;
		}
		.footer-text{
			margin-top: 100px;
		}
	}
</style>
