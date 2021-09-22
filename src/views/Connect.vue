<template>
	<div id="connect">
		预约联系
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="合作预约" name="first">
				<el-form class="form" ref="pointment" :model="pointment" label-width="80px">
					<el-form-item label="姓名"><wired-input placeholder="请输入姓名" ref="pointmentName"></wired-input></el-form-item>
					<el-form-item label="公司"><wired-input placeholder="" ref="pointmentCom"></wired-input></el-form-item>
					<el-form-item label="电话"><wired-input placeholder="" ref="pointmentTel"></wired-input></el-form-item>
					<el-form-item label="QQ"><wired-input placeholder="" ref="pointmentQQ"></wired-input></el-form-item>
					<el-form-item label="邮箱"><wired-input placeholder="" ref="pointmentMail"></wired-input></el-form-item>
					<el-form-item label="合作意向"><wired-textarea placeholder="Enter text" rows="4" ref="pointmentIntention"></wired-textarea></el-form-item>
					<el-form-item label="门店/公司">
						
					</el-form-item>
					
					<el-form-item>
						<div style="display: flex; margin-left: 30%">
							<wired-button elevation="5" v-on:click="onSubmit" style="color: #92b5ff; display: inline-block">立即提交</wired-button>
							<wired-button elevation="5" v-on:click="onSubmit" style="display: inline-block; color: #948f91">取消</wired-button>
						</div>
					</el-form-item>
				</el-form>
			</el-tab-pane>

			<!-- 代理商申请 -->
			<!-- <el-tab-pane label="代理商申请" name="second">
				<el-form class="form" ref="application" :model="application" label-width="80px">
					<el-form-item label="公司名称"><el-input v-model="application.name"></el-input></el-form-item>
					<el-form-item label="法人姓名"><el-input v-model="application.com"></el-input></el-form-item>
					<el-form-item label="公司地址"><el-input v-model="application.tel"></el-input></el-form-item>
					<el-form-item label="电话"><el-input v-model="application.qq"></el-input></el-form-item>
					<el-form-item label="邮箱"><el-input v-model="application.mail"></el-input></el-form-item>
					<el-form-item label="合作意向"><el-input type="textarea" v-model="application.desc"></el-input></el-form-item>
					<el-form-item>
						<el-button type="primary" @click="apply">立即申请</el-button>
						<el-button>取消</el-button>
					</el-form-item>
					<el-form-item label="门店/公司">
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog v-model="dialogVisible"><img width="100%" :src="dialogImageUrl" alt="" /></el-dialog>
					</el-form-item>
				</el-form>
			</el-tab-pane> -->
		</el-tabs>
		<img-picker v-on:imglist="imgpick"></img-picker>
	</div>
</template>

<script>
import { get } from '../api/api.js';
import 'wired-elements';
import imgPicker from '../components/imgPicker.vue';

export default {
	name:"connect",
	data() {
		return {
			dialogImageUrl: '',
			dialogVisible: false,
			activeName: 'first',
			imgpathlist: [],
			imgList:[]
		};
	},
	components: {
		imgPicker
	},
	methods: {
		handleClick(tab, event) {
			console.log(this.$refs.name);
		},
		onSubmit: function(event) {
			let data = {
				name: this.$refs.pointmentName.value,
				com: this.$refs.pointmentCom.value,
				tel: this.$refs.pointmentTel.value,
				QQ: this.$refs.pointmentQQ.value,
				mail: this.$refs.pointmentMail.value,
				intention: this.$refs.pointmentIntention.value
				// file
				// com: this.$refs.com.value
			};
			console.log(`Hello ${this.$refs.name.value}!`);
			console.log();
			alert(`Hello ${this.$refs.name.value}!`);
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		apply() {
			const _this = this;
			get('/pageStyle/getStyle', _this.application).then(res => {
				console.log(res);
			});
		},
		/**
		 * @description 选择图片
		 * @param {Object} imglist 图片列表
		 */
		imgpick(imglist) {
			this.imgList = imglist;
			console.log(this.imgList);
			this.imgpathlist.push(this.imgList[this.imgList.length - 1].imgid)
			console.log(this.imgpathlist.toString())
		}
	}
};
</script>

<style lang="scss">
#connect {
	padding: 20px;
	font-size: 25px;
	font-weight: 600;
	color: #000000;
	font-family: 'Gloria Hallelujah', cursive;
	width: 1200px;
	margin: 0 auto;

	.el-tabs__nav {
		// margin-left: 35%;
		transform: translateX(200px) !important;
	}

	.form {
		width: 600px;
		margin: 0 auto;

		.el-form-item__label {
			width: 120px !important;
			font-size: 18px;
			text-align: justify;

			&::after {
				display: inline-block;
				width: 100%;
				// content: "";
				height: 0;
			}
		}

		.el-input__inner {
			// border: none;
			border: 1px solid #3f3f3f;

			&:focus {
				border: 1px solid #5393e5;
			}
		}

		.el-textarea__inner {
			border: 1px solid #3f3f3f;
			height: 120px;

			&:focus {
				border: 1px solid #5393e5;
			}
		}
	}

	wired-input {
		width: 400px;
		padding: 10px;
		background-color: transparent;
		font-weight: 500;
	}

	.wired-rendered::part(input) {
		background: transparent !important;
	}

	wired-button {
		width: 100px;
	}
}

input:shadow {
	background: transparent !important;
}
</style>
