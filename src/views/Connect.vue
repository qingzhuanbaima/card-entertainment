<template>
	<div id="connect">
		于月联系
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="合作预约" name="first">
				<el-form class="form" ref="form" :model="pointment" label-width="80px">
					<el-form-item label="姓名">
						<el-input v-model="pointment.name"></el-input>
					</el-form-item>
					<el-form-item label="公司">
						<el-input v-model="pointment.com"></el-input>
					</el-form-item>
					<el-form-item label="电话">
						<el-input v-model="pointment.tel"></el-input>
					</el-form-item>
					<el-form-item label="QQ">
						<el-input v-model="pointment.qq"></el-input>
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input v-model="pointment.mail"></el-input>
					</el-form-item>
					<el-form-item label="合作意向">
						<el-input type="textarea" v-model="pointment.desc"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">立即创建</el-button>
						<el-button>取消</el-button>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="代理商申请" name="second">代理商申请</el-tab-pane>
		</el-tabs>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				activeName: 'first',
				pointment: {
					name: '',
					tel:'',
					com:'',
					qq:'',
					mail:'',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				application:{
					
				}
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style lang="scss">
	#connect {
		padding: 20px;
		.el-tabs__nav {
			// margin-left: 35%;
			transform: translateX(120px) !important;
		}
		.form{
			width: 600px;
		}
	}
</style>
