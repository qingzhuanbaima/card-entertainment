<template>
	<div class="home">
		<div class="home-head">
			<img src="../assets/bgimg/frame_b.png" class="bottom-img">
		</div>
		<div class="home-body">
			<div class="body-content">
				<div class="content-left">
					<img-container>
						<template v-slot:photo>
							<img src="../assets/game_img/heartstone.gif">
						</template>
						<template v-slot:left-text>
							<div class="text-container">
								<span>炉石传说</span>
								<img class="game-icon" src="../assets/game_img/hearthStone.png">
								<p>
									《炉石传说》（英语：Hearthstone，香港和台湾译作“炉石战记”，香港和台湾旧译“炉石战记：魔兽英雄传”，中国大陆旧译“炉石传说：魔兽英雄传”）是暴雪娱乐发行的一款集换式卡牌游戏[2][3]。由暴雪员工RobPardo在2013年3月的PAX2013公布。[4]游戏在2013年夏进入Beta测试。2014年1月24日进入公测阶段[5]。2014年3月13日，欧、亚、美三个服务器正式运营，中国服务器也于3月15日正式运营。该游戏是一款免费游戏，故事背景基于魔兽系列的世界观，玩家可以另行购买卡牌包
								</p>
							</div>
						</template>
					</img-container>
					<img-container>
						<template v-slot:photo>
							<img src="../assets/game_img/heartstone.gif">
						</template>
						<template v-slot:left-text>
							<div class="text-container">
								<span>炉石传说</span>
								<img class="game-icon" src="../assets/game_img/hearthStone.png">
								<p>
									《炉石传说》（英语：Hearthstone，香港和台湾译作“炉石战记”，香港和台湾旧译“炉石战记：魔兽英雄传”，中国大陆旧译“炉石传说：魔兽英雄传”）是暴雪娱乐发行的一款集换式卡牌游戏[2][3]。由暴雪员工RobPardo在2013年3月的PAX2013公布。[4]游戏在2013年夏进入Beta测试。2014年1月24日进入公测阶段[5]。2014年3月13日，欧、亚、美三个服务器正式运营，中国服务器也于3月15日正式运营。该游戏是一款免费游戏，故事背景基于魔兽系列的世界观，玩家可以另行购买卡牌包
								</p>
							</div>
						</template>
					</img-container>
				</div>
				<div class="content-right">
					<img-container>
						<template v-slot:photo>
							<img src="../assets/game_img/heartstone.gif">
						</template>
						<template v-slot:right-text>
							<div class="text-container">
								<span>炉石传说</span>
								<img class="game-icon" src="../assets/game_img/hearthStone.png">
								<p>
									《炉石传说》（英语：Hearthstone，香港和台湾译作“炉石战记”，香港和台湾旧译“炉石战记：魔兽英雄传”，中国大陆旧译“炉石传说：魔兽英雄传”）是暴雪娱乐发行的一款集换式卡牌游戏[2][3]。由暴雪员工RobPardo在2013年3月的PAX2013公布。[4]游戏在2013年夏进入Beta测试。2014年1月24日进入公测阶段[5]。2014年3月13日，欧、亚、美三个服务器正式运营，中国服务器也于3月15日正式运营。该游戏是一款免费游戏，故事背景基于魔兽系列的世界观，玩家可以另行购买卡牌包
								</p>
							</div>
						</template>
					</img-container>
					<img-container>
						<template v-slot:photo>
							<img src="../assets/game_img/heartstone.gif">
						</template>
						<template v-slot:right-text>
							<div class="text-container">
								<span>炉石传说</span>
								<img class="game-icon" src="../assets/game_img/hearthStone.png">
								<p>
									《炉石传说》（英语：Hearthstone，香港和台湾译作“炉石战记”，香港和台湾旧译“炉石战记：魔兽英雄传”，中国大陆旧译“炉石传说：魔兽英雄传”）是暴雪娱乐发行的一款集换式卡牌游戏[2][3]。由暴雪员工RobPardo在2013年3月的PAX2013公布。[4]游戏在2013年夏进入Beta测试。2014年1月24日进入公测阶段[5]。2014年3月13日，欧、亚、美三个服务器正式运营，中国服务器也于3月15日正式运营。该游戏是一款免费游戏，故事背景基于魔兽系列的世界观，玩家可以另行购买卡牌包
								</p>
							</div>
						</template>
					</img-container>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import imgContainer from '../components/img-container.vue'

	export default {
		name: 'Home',
		components: {
			imgContainer
		}
	}
</script>
<style lang="scss">
	@keyframes shake {

		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}

	.home {
		// position: relative;
		font-family: "楷体", "楷体_GB2312";
	}

	.home-head {
		width: 100%;
		height: 1000px;
		position: relative;
		// background: url(../assets/bgimg/初号机.png);
		background: url(../assets/bgimg/bg.jpg);
	}

	.bottom-img {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.home-body {
		width: 100%;
		// height: 200px;
		margin-bottom: 100px;
	}

	.body-content {
		padding-top: 100px;
		display: flex;
		width: 60%;
		margin: 0 auto;

		h2 {
			display: inline-block;
			// margin: 30px 0;
			height: 40px;
			width: 100px;
		}

		span {
			display: block;
			height: 40px;
			// width: 150px;
			padding: 20px 0;
			line-height: 40px;
			float: left;
			font-size: 30px;
		}

		.game-icon {
			display: inline-block;
			width: 40px;
			height: 40px;
			padding: 20px 0;
			margin-left: 10px;
		}
	}

	.img-container:hover .game-icon {
		animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		perspective: 1000px;
	}
</style>
