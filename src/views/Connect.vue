<template>
	<div id="connect">
		预约联系
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="合作预约" name="first">
				<el-form class="form" ref="pointment" :model="pointment" label-width="80px">
					<el-form-item label="姓名">
						<!-- <el-input v-model="pointment.name"></el-input> -->
						<wired-input v-model="pointment.name" placeholder=""></wired-input>
					</el-form-item>
					<el-form-item label="公司">
						<!-- <el-input v-model="pointment.com"></el-input> -->
						<wired-input v-model="pointment.com" placeholder=""></wired-input>
					</el-form-item>
					<el-form-item label="电话">
						<!-- <el-input v-model="pointment.tel"></el-input> -->
						<wired-input v-model="pointment.tel" placeholder=""></wired-input>
					</el-form-item>
					<el-form-item label="QQ">
						<!-- <el-input v-model="pointment.qq"></el-input> -->
						<wired-input v-model="pointment.qq" placeholder=""></wired-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<!-- <el-input v-model="pointment.mail"></el-input> -->
						<wired-input v-model="pointment.mail" placeholder=""></wired-input>
					</el-form-item>
					<el-form-item label="合作意向">
						<!-- <el-input type="textarea" v-model="pointment.desc"></el-input> -->
						<wired-textarea v-model="pointment.desc" placeholder="Enter text" rows="6"></wired-textarea>
					</el-form-item>
					<el-form-item label="门店/公司">
						<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
							:on-preview="handlePictureCardPreview" :on-remove="handleRemove">
							<i class="el-icon-plus"></i>
						</el-upload>
						<el-dialog :visible.sync="dialogVisible">
							<img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog>
					</el-form-item>
					<el-form-item>
						<wired-button elevation="2" v-on:click="onSubmit">立即创建</wired-button>
						<wired-button elevation="2" v-on:click="">取消</wired-button>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="代理商申请" name="second">
				<el-form class="form" ref="application" :model="application" label-width="80px">
					<el-form-item label="姓名">
						<el-input v-model="application.name"></el-input>
					</el-form-item>
					<el-form-item label="公司">
						<el-input v-model="application.com"></el-input>
					</el-form-item>
					<el-form-item label="电话">
						<el-input v-model="application.tel"></el-input>
					</el-form-item>
					<el-form-item label="QQ">
						<el-input v-model="application.qq"></el-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input v-model="application.mail"></el-input>
					</el-form-item>
					<el-form-item label="合作意向">
						<el-input type="textarea" v-model="application.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-tab-pane>
		</el-tabs>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				activeName: 'first',
				pointment: {
					name: '',
					tel: '',
					com: '',
					qq: '',
					mail: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				application: {
					com: '',
					name: '',
					comAddress: '',
					tel: '',
					qq: '',
					mail: '',
				}
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			onSubmit() {
				console.log(this.pointment);
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			}
		}
	}
</script>

<style lang="scss">
	#connect {
		padding: 20px;
		font-size: 25px;
		font-weight: 600;
		color: #000000;
		font-family: "Gloria Hallelujah", cursive;

		.el-tabs__nav {
			// margin-left: 35%;
			transform: translateX(200px) !important;
		}

		.form {
			width: 600px;
			margin: 0 auto;
			.el-form-item__label{
				width: 120px !important;
				font-size: 18px;
				text-align: justify;
				&::after{
					display: inline-block;
					width: 100%;
					// content: "";
					height: 0;
				}
			}
			.el-input__inner{
				// border: none;
				border: 1px solid #3f3f3f;
				&:focus{
					border: 1px solid #5393e5;
				}
			}
			.el-textarea__inner{
				border: 1px solid #3f3f3f;
				height: 120px;
				&:focus{
					border: 1px solid #5393e5;
				}
			}
		}
		.wired-rendered{
			width: 400px;
			input{
				padding: 10px;
			}
		}
	}
</style>
