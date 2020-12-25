<template>
	<view class="wenhui">
		<view class="toptitle">
			 <view class="status_bar">
			          <!-- 这里是状态栏 -->
			  </view>
			<navigator open-type="navigateBack" delta="1" class="nav_top">
				<image src="../../static/all-back.png" mode=""></image>
				<text>我要提问</text>
			</navigator>
		</view>
		<view class="tit">
			允家在线咨询师帮您解答
		</view>
		<view class="da_box">
			<textarea placeholder="在这里输入您的问题" class="text_box" v-model="text" maxlength="50" placeholder-style="color:#7D7E80;fontSize:30rpx;">
			</textarea>
			<view class="num_range">
				{{text.length}}/50
			</view>
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
			<view class="tijiao_btn">
				发布提问
			</view>
		</button>
		<mytoast :txt="msg" ref="msg"></mytoast>
	</view>
</template>

<script>
	import mytoast from "@/components/mytoast/mytoast.vue"
	export default {
		data() {
			return {
				text: '',
				project_id: "",
				msg: ""
			};
		},
		components: {
			mytoast
		},
		onLoad(option) {
			this.project_id = option.id;
		},
		methods: {
			getPhoneNumber(e) {
				let that = this
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					let url = '/pages/tiwen/tiwen?id=' + this.project_id
					uni.setStorageSync('backurl', url)
					console.log(url)
				} else {
					let session = uni.getStorageSync('token')
					if (session) {
						that.SendTiwen()
					} else {
						uni.login({
							provider: 'baidu',
							success: function(res) {
								console.log(res.code);
								uni.request({
									url: 'https://api.edefang.net/applets/baidu/get_session_key',
									method: 'get',
									data: {
										code: res.code
									},
									success: (res) => {
										console.log(res)
										uni.setStorageSync('openid', res.data.openid)
										uni.setStorageSync('session', res.data.session_key)
										uni.request({
											url: "https://api.edefang.net/applets/baidu/decrypt",
											data: {
												data: e.detail.encryptedData,
												iv: e.detail.iv,
												session_key: res.data.session_key
											},
											success: (res) => {
												console.log(res)
												let tel = res.data.mobile
												uni.setStorageSync('phone', tel)
												let openid = uni.getStorageSync('openid')
												that.tel = tel
												uni.request({
													url: "https://api.edefang.net/applets/login",
													method: 'GET',
													data: {
														phone: tel,
														openid: openid
													},
													success: (res) => {
														uni.setStorageSync('token', res.data.token)
														that.SendTiwen()
													}
												})

											}
										})

									}
								})
							}
						});
					}
					this.isok = 1
				}

			},
			SendTiwen() {
				let token = uni.getStorageSync('token');
				let city_id = uni.getStorageSync("city");
				if (this.text.length > 0) {
					uni.request({
						url: this.apiserve + "/jy/ask",
						data: {
							token: token,
							project: this.project_id,
							city: city_id,
							question: this.text,
						},
						method: "GET",
						success: (res) => {
							if (res.data.code == 200) {
								this.msg = res.data.message;
								this.$refs.msg.show();
							}
						}
					})
				} else {
					this.msg = "提问内容不能为空";
					this.$refs.msg.show();
				}

			}
		}
	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	button::after {
		border: none;
	}

	.wenhui {
		padding-left: 30rpx;
		padding-right: 30rpx;
		background: #fff;
		box-sizing: border-box;

		.toptitle {
			color: #fff;
			font-size: 29.88rpx;
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
			font-size: 32rpx;
			font-weight: bold;
			color: #323233;
			line-height: 88rpx;
			margin-bottom: 20rpx;
		}

		.da_box {
			width: 100%;
			height: 320rpx;
			position: relative;

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
				right: 20rpx;
				bottom: 17rpx;
			}
		}
		button{
			padding-left: 0rpx;
			padding-right: 0rpx;
		.tijiao_btn {
			width: 100%;
			height: 80rpx;
			background: #F0F6FA;
			line-height: 80rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
			color: #40A2F4;
			text-align: center;
			margin-top: 70rpx;
			
		}
		}

	}
</style>
