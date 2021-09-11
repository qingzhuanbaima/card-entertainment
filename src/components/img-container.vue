<template>
	<div class="img-container">

		<slot name="left-text" class="left-text"></slot>

		<div class="pohto-frame">
			<slot name="photo"></slot>
			<img src="../assets/bgimg/frame_b.png" class="frame-top">
			<img src="../assets/bgimg/frame_b.png" class="frame-right">
			<img src="../assets/bgimg/frame_b.png" class="frame-bottom">
			<img src="../assets/bgimg/frame_b.png" class="frame-left">
		</div>

		<slot name="right-text"></slot>

	</div>
</template>

<script>
	export default {
		name: "phpto-frame",
		data() {
			return {

			}
		}
	}
</script>

<style>
	.img-container {
		display: flex;
	}

	.pohto-frame {
		width: 380px;
		height: 428px;
		position: relative;
	}

	.frame-top {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 20px;
		transform: rotateZ(180deg);
	}

	.frame-right {
		position: absolute;
		right: 0;
		top: 0;
		width: 428px;
		height: 20px;
		transform: rotateZ(-90deg) translateX(-50%) translateY(204px);
	}

	.frame-bottom {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 20px;
	}

	.frame-left {
		position: absolute;
		left: 0;
		top: 0;
		width: 428px;
		height: 20px;
		transform: rotateZ(90deg) translateX(50%) translateY(204px);
	}

	.right-text {
		width: 350px;
	}

	.left-text {
		width: 350px;
	}
</style>
