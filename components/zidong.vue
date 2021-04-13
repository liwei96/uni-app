<template>
	<view class="zidong">
		<view class="tit">
			百度授权
		</view>
		<view class="txt">
			<image src="../static/content/shouquan.png" mode=""></image>
			<text>允家新房 申请获取以下权限：</text>
		</view>
		<view class="msg">
			<view class="round">
			</view>
			<text>获得你的公开新消息（昵称、头像）</text>
		</view>
		<view class="bom">
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="yes">确定</button>
			<button class="cls" @click="sls">取消</button>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		data() {
			return {
			};
		},
		methods: {
			getPhoneNumber(e) {
				that = this
				uni.setStorageSync("pass", true);
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
												console.log(res)
												uni.setStorageSync('token', res.data.token)
												that.$emit('closeshou', true)
											}
										})
									}
								})
							}
						})
					}
				});
			},
			sls(){
				this.$emit('closeshou', false)
			}
		}
	}
</script>

<style lang="less" scoped>
	.zidong {
		width: 550rpx;
		height: 440rpx;
		border-radius: 20rpx;
		background: #FFFFFF;
		padding: 0 55rpx;
		padding-top: 60rpx;

		.tit {
			font-size: 34rpx;
			color: #1A1A1A;
			font-weight: 800;
			margin-bottom: 30rpx;
		}

		.txt {
			display: flex;
			align-items: center;
			padding-bottom: 35rpx;
			border-bottom: 1rpx solid #EDEDED;
			margin-bottom: 40rpx;

			image {
				width: 88rpx;
				height: 88rpx;
				margin-right: 20px;
				border: 1px solid #F2F2F2;
				border-radius: 50%;
			}

			text {
				color: #343434;
				font-size: 30rpx;
			}
		}

		.msg {
			display: flex;
			align-items: center;
			margin-bottom: 40rpx;

			.round {
				width: 24rpx;
				height: 24rpx;
				background: #CCCCCC;
				border-radius: 50%;
				margin-right: 14rpx;
			}

			text {
				color: #999999;
				font-size: 28rpx;

			}
		}

		.bom {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;

			.cls {
				color: #B3B3B3;
				font-size: 26rpx;
				margin-right: 90rpx;
			}

			.yes {
				color: #3EACF0;
				font-size: 36rpx;
				font-weight: bold;
			}
		}
	}
</style>
