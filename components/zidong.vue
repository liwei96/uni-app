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
			<!-- <button contact open-type="login" bindlogin="login" class="yes">确定</button> -->
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="yes">确定</button>
			<button class="cls" @click="sls">取消</button>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		data() {
			return {};
		},
		methods: {
			getPhoneNumber(e) {
				that = this
				swan.getLoginCode({
					success: res => {
						console.log('getLoginCode success', res);
						uni.request({
							url: 'https://api.edefang.net/applets/baidu/get_session_key',
							method: 'get',
							data: {
								code: res.code,
								other: uni.getStorageSync('other'),
								uuid: uni.getStorageSync('uuid')
							},
							success: (res) => {
								uni.setStorageSync('openid', res.data.openid)
								uni.setStorageSync('session', res.data.session_key)
								uni.request({
									url: "https://api.edefang.net/applets/baidu/decrypt",
									data: {
										data: e.detail.encryptedData,
										iv: e.detail.iv,
										session_key: res.data.session_key,
										other: uni.getStorageSync('other'),
										uuid: uni.getStorageSync('uuid')
									},
									success: (res) => {
										let tel = res.data.mobile
										uni.setStorageSync('phone', tel)
										let openid = uni.getStorageSync('openid')
										that.tel = tel
										let city = uni.getStorageSync('city')
										let bid = uni.getStorageSync('bid')
										uni.request({
											url: "https://api.edefang.net/applets/login",
											method: 'GET',
											data: {
												phone: tel,
												openid: openid,
												bid: bid,
												city: city,
												source: 1,
												other: uni.getStorageSync('other'),
												uuid: uni.getStorageSync('uuid')
											},
											success: (res) => {
												if (res.data.code === 200) {
													uni.setStorageSync('token', res.data.token)
													that.$emit('closeshou', true)
													uni.setStorageSync("pass", true);
												} else {
													that.$emit('closeshou', false)
												}
											}
										})
									}
								})
							}
						})
					},
					fail: err => {
						console.log('getLoginCode fail', err);
					}
				});
			},
			sls() {
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
		padding-top: 57rpx;

		.tit {
			font-size: 34rpx;
			color: #1A1A1A;
			font-weight: 800;
			margin-bottom: 29rpx;
		}

		.txt {
			display: flex;
			align-items: center;
			padding-bottom: 34rpx;
			border-bottom: 1rpx solid #EDEDED;
			margin-bottom: 38rpx;

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
			margin-bottom: 42rpx;

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
