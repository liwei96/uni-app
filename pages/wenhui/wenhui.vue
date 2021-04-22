<template>
	<view class="wenhui">
		<!-- <view class="toptitle">
			<view class="status_bar">
			</view>
			<navigator open-type="navigateBack" delta="1" class="nav_top">
				<image src="../../static/all-back.png" mode=""></image>
				<text>我要回答</text>
			</navigator>
		</view> -->
		<view class="tit">
			<text class="wen">问</text>
			{{data.question}}
		</view>
		<view class="da_box">
			<textarea placeholder="在这里输入您的解答" class="text_box" v-model="text" maxlength="50" placeholder-style="color:#7D7E80;fontSize:30rpx;">
			</textarea>
			<view class="num_range">
				{{text.length}}/50
			</view>
		</view>
		<view class="tijiao_btn" @tap="submitHuiDa">
			提交回答
		</view>
		<mytoast :txt="msg" ref="msg"></mytoast>
	</view>
</template>

<script>
	import mytoast from "@/components/mytoast/mytoast.vue"
	export default {
		components: {
			mytoast
		},
		data() {
			return {
				text: '',
				data: {},
				msg: ""
			};
		},
		onLoad(option) {
			this.getdata(option.id);
		},
		methods: {
			submitHuiDa() {
				console.log('123');
				if (this.text !== '') {
					uni.request({
						url: this.apiserve + "/jy/question/answer",
						method: "POST",
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						data: {
							id: this.data.id,
							answer: this.text,
							other: uni.getStorageSync('other'),
							uuid: uni.getStorageSync('uuid')
						},
						success: (res) => {
							if (res.data.code == 200) {
								this.$refs.msg.show();
								this.msg = res.data.message;
								let his_url = uni.getStorageSync('backurl')
								console.log(his_url)
								uni.navigateTo({
									url: his_url
								})
							} else if (res.data.code == 500) {
								this.$refs.msg.show();
								this.msg = res.data.message;
							}
						}

					})
				} else {
					this.$refs.msg.show();
					this.msg = "解答内容不能为空"
				}
			},
			getdata(id) {
				let other = uni.getStorageSync('other');
				let token = uni.getStorageSync('token');
				uni.request({
					url: this.apiserve + "/applets/question/detail",
					data: {
						id: id,
						token: token,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					method: "GET",
					success: (res) => {
						if (res.data.code == 200) {

							this.data = res.data.data;
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
		}
	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.wenhui {

		background: #fff;

		.toptitle {
			color: #fff;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			line-height: 87.64rpx;
			background-color: #FFF;

			.status_bar {
				height: var(--status-bar-height);
				width: 100%;
			}

			.nav_top {
				image {
					width: 31.87rpx;
					height: 31.87rpx;
					margin-right: 11.95rpx;
					margin-bottom: -3.98rpx;
				}

				text {
					width: 221rpx;
					font-size: 32rpx;
					font-weight: 500;
					color: #17181A;
				}
			}
		}

		.tit {
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;

			.wen {
				width: 30rpx;
				height: 30rpx;
				background: #FF5454;
				border-radius: 4rpx;
				font-size: 20rpx;
				font-weight: 500;
				color: #FFFFFF;
				display: inline-block;
				text-align: center;
				line-height: 30rpx;
				margin-right: 25rpx;
			}

			font-size: 30rpx;
			font-weight: bold;
			color: #323233;
			line-height: 45rpx;
			margin-bottom: 40rpx;
			margin-top: 32rpx;
		}

		.da_box {
			width: 100%;
			height: 320rpx;
			position: relative;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;

			.text_box {
				width: 630rpx;
				height: 290rpx;
				background: #F7F7F7;
				padding-top: 30rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
			}

			.num_range {
				font-size: 24rpx;
				font-weight: 400;
				color: #969799;
				position: absolute;
				right: 40rpx;
				bottom: 17rpx;
			}
		}

		.tijiao_btn {
			width: 690rpx;
			height: 80rpx;
			background: #F0F6FA;
			line-height: 80rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
			color: #40A2F4;
			text-align: center;
			margin-top: 70rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			box-sizing: border-box;
		}

	}
</style>
