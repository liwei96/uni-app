<template>
	<view class="home">
		<view class="toptitle">
			<text>个人中心</text>
		</view>
		<view class="top-nav">
			<view class="login">
				<image src="../../static/home/home-peo.png" mode=""></image>
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" v-if="!tel"><text>登录/注册</text>
				</button>
				<text v-if="tel">{{tel}}</text>
			</view>
			<view class="navs">
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" @tap="type=1">
					<view class="nav">
						<text class="num">{{footnum}}</text>
						<view>
							<text class="msg">浏览足迹</text>
						</view>
					</view>
				</button>
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" @tap="type=2">
					<view class="nav">
						<text class="num">{{collectnum}}</text>
						<view>
							<text class="msg">我的收藏</text>
						</view>
					</view>
				</button>
				<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" @tap="type=3">
					<view class="nav">
						<text class="num">{{cardnum}}</text>
						<view>
							<text class="msg">我的卡券</text>
						</view>
					</view>
				</button>
				<view class="nav" @tap="gotalk">
					<text class="num">{{talknum}}</text>
					<text class="abo">1</text>
					<view>
						<text class="msg">我的联系</text>
					</view>
				</view>
			</view>
			<view class="bom">
				<view class="nav" @tap="gohelp">
					<image src="../../static/home/home-help.png" mode=""></image>
					<view>
						<text>帮我找房</text>
					</view>
				</view>
				<view class="nav" @tap="goyue">
					<image src="../../static/home/home-yue.png" mode=""></image>
					<view>
						<text>预约看房</text>
					</view>
				</view>
				<view class="nav" @tap="gomap">
					<image src="../../static/home/home-map.png" mode=""></image>
					<view>
						<text>地图找房</text>
					</view>
				</view>
				<view class="nav" @tap="gojia">
					<image src="../../static/home/home-join.png" mode=""></image>
					<view>
						<text>城市加盟</text>
					</view>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="connav">
				<view class="nav" @tap="goabout">
					<image src="../../static/home/home-about.png" mode=""></image>
					<text>关于允家</text>

				</view>
				<view class="nav" @tap="show">
					<image src="../../static/home/home-tel.png" mode=""></image>
					<text>联系我们</text>

				</view>
				<view class="nav" @tap="gocommit">
					<image src="../../static/home/home-msg.png" mode=""></image>
					<text>意见反馈</text>
				</view>
			</view>
			<view class="bomnv">
				<view class="nav" @tap="goban">
					<image src="../../static/home/home-ban.png" mode=""></image>
					<text>版权声明</text>
				</view>
				<view class="nav" @tap="gomian">
					<image src="../../static/home/home-mian.png" mode=""></image>
					<text>免责协议</text>
				</view>
				<view class="nav" @tap="goyin">
					<image src="../../static/home/home-yin.png" mode=""></image>
					<text>隐私政策</text>
				</view>
				<view class="nav" @tap="gofu">
					<image src="../../static/home/home-xie.png" mode=""></image>
					<text>服务协议</text>
				</view>
			</view>
		</view>
		<popup ref="popup" type="center" height="300" width="540" radius="12">
			<view class="popup-content">
				<view class="txt">
					拨打电话
				</view>
				<view class="tel">
					400-718-6686
				</view>
				<view class="btnbox">
					<view class="left" @tap="hide">
						取消
					</view>
					<view class="right" @tap="call">
						确定
					</view>
				</view>
			</view>
		</popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	var that
	export default {
		components: {
			"popup": wybPopup
		},
		data() {
			return {
				footnum: 0,
				collectnum: 0,
				cardnum: 0,
				talknum: 0,
				tel: ''
			}
		},
		onShow() {
			that = this
			this.getinfo()
			if (uni.getStorageSync('phone')) {
				let tel = uni.getStorageSync('phone')
				this.tel = tel.substr(0, 3) + '****' + tel.substr(7)
			}
			//#ifdef MP-BAIDU
			swan.setPageInfo({
				title: '允家新房-我的主页',
				keywords: '允家新房-我的主页',
				description: '允家新房-我的主页',
				success: res => {
					console.log('setPageInfo success', res);
				},
				fail: err => {
					console.log('setPageInfo fail', err);
				}
			})
			//#endif
		},
		methods: {
			call() {
				uni.makePhoneCall({
					phoneNumber: '400-718-6686' //仅为示例
				})
			},
			getinfo() {
				let token = uni.getStorageSync('token')
				if (token) {
					uni.showLoading({
						title: '加载中'
					})
					uni.request({
						url: that.apiserve + '/jy/mine/foots',
						method: "GET",
						data: {
							token: token,
							page: 1,
							limit: 10
						},
						success: (res) => {
							that.footnum = res.data.total
							uni.hideLoading()
						}
					})
					uni.request({
						url: that.apiserve + '/jy/mine/collect',
						method: 'GET',
						data: {
							token: token,
							page: 1,
							limit: 10
						},
						success: (res) => {
							that.collectnum = res.data.total
							uni.hideLoading()
						}
					})
				}
			},
			show() {
				this.$refs.popup.show()
			},
			hide() {
				this.$refs.popup.hide()
			},
			gofoot() {
				uni.navigateTo({
					url: '/pages/footprint/footprint'
				})
			},
			gofork() {
				uni.navigateTo({
					url: '/pages/collect/collect'
				})
			},
			gocards() {
				uni.navigateTo({
					url: '/pages/cards/cards'
				})
			},
			gotalk() {
				uni.switchTab({
					url: '/pages/message/message'
				})
			},
			gohelp() {
				uni.navigateTo({
					url: '/pages/help/help'
				})
			},
			goyue() {
				uni.navigateTo({
					url: '/pages/forward/forward'
				})
			},
			gomap() {
				uni.navigateTo({
					url: '/pages/map/map'
				})
			},
			gojia() {
				uni.navigateTo({
					url: '/pages/alliance/alliance'
				})
			},
			goabout() {
				uni.navigateTo({
					url: '/pages/about/about'
				})
			},
			gocommit() {
				uni.navigateTo({
					url: '/pages/feedback/feedback'
				})
			},
			goban() {
				uni.navigateTo({
					url: '/pages/statement/statement'
				})
			},
			gomian() {
				uni.navigateTo({
					url: '/pages/protocol/protocol'
				})
			},
			goyin() {
				uni.navigateTo({
					url: '/pages/privacy/privacy'
				})
			},
			gofu() {
				uni.navigateTo({
					url: '/pages/serve/serve'
				})
			},
			getPhoneNumber(e) {
				console.log(e)
				let that = this
				console.log(uni.getStorageSync('token'))
				if(uni.getStorageSync('token')){
					switch (that.type) {
						case 1:
							uni.navigateTo({
								url:'/pages/footprint/footprint'
							})
							break;
						case 2:
							uni.navigateTo({
								url:'/pages/collect/collect'
							})
							break;
						case 3:
							uni.navigateTo({
								url:'/pages/cards/cards'
							})
							break;
					}
					return
				}
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					let url = ''
					switch (that.type) {
						case 1:
							url = '/pages/footprint/footprint'
							uni.setStorageSync('backurl', url)
							break;
						case 2:
							url = '/pages/collect/collect'
							uni.setStorageSync('backurl', url)
							break;
						case 3:
							url = '/pages/cards/cards'
							uni.setStorageSync('backurl', url)
							break;
					}
					uni.navigateTo({
						url: '/pages/login/login'
					})
				} else {
					let session = uni.getStorageSync('session')
					if (session) {
						uni.request({
							url: 'https://api.edefang.net/applets/baidu/decrypt',
							method: 'get',
							data: {
								iv: e.detail.iv,
								data: e.detail.encryptedData,
								session_key: session
							},
							success: (res) => {
								console.log(res)
								let tel = res.data.mobile
								uni.setStorageSync('phone', tel)
								let openid = uni.getStorageSync('openid')
								that.tel = tel.substr(0, 3) + '****' + tel.substr(7)
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
										switch (that.type) {
											case 1:
												uni.navigateTo({
													url:'/pages/footprint/footprint'
												})
												break;
											case 2:
												uni.navigateTo({
													url:'/pages/collect/collect'
												})
												break;
											case 3:
												uni.navigateTo({
													url:'/pages/cards/cards'
												})
												break;
										}
									}
								})
							}
						})
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
												that.tel = tel.substr(0, 3) + '****' + tel.substr(7)
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
														switch (that.type) {
															case 1:
																uni.navigateTo({
																	url:'/pages/footprint/footprint'
																})
																break;
															case 2:
																uni.navigateTo({
																	url:'/pages/collect/collect'
																})
																break;
															case 3:
																uni.navigateTo({
																	url:'/pages/cards/cards'
																})
																break;
														}
													}
												})
											}
										})

									}
								})
							}
						});

					}
				}
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less">
	.home {
		background-color: #F5F5F5;
		min-height: 100vh;
	}

	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #35ACE7;
	}

	button {
		padding: 0;
		margin: 0;
		background: rgba(0, 0, 0, 0);
		line-height: 1.3;
	}

	button::after {
		border: none;
	}

	.top-nav {
		padding: 0 29.88rpx;
		background: url(../../static/home/home-top.png);
		background-size: 100%;
		height: 334.66rpx;
		position: relative;

		.login {
			display: flex;
			align-items: center;

			image {
				width: 99.6rpx;
				height: 99.6rpx;
				margin-right: 29.88rpx;
			}

			button {
				margin-left: 0;
				padding: 0;
				background: rgba(0, 0, 0, 0);
			}

			button:after {
				border: 0;
			}

			text {
				color: #0B4765;
				font-weight: bold;
				font-size: 39.84rpx;
			}
		}

		.navs {
			display: flex;
			justify-content: space-around;
			margin-top: 31.87rpx;

			.nav {
				position: relative;
				text-align: center;

				.num {
					color: #0B4765;
					font-size: 35.85rpx;
					font-weight: bold;
				}

				.msg {
					color: #2B688D;
					font-size: 23.9rpx;
					margin-top: 11.95rpx;
				}

				.abo {
					position: absolute;
					display: block;
					width: 25.89rpx;
					height: 25.89rpx;
					border-radius: 50%;
					text-align: center;
					line-height: 25.89rpx;
					top: -11.95rpx;
					right: 0;
					background-color: #BEE6FF;
					color: #1A5071;
					font-size: 19.92rpx;
				}
			}
		}

		.bom {
			width: 100%;
			height: 175.29rpx;
			border-radius: 23.9rpx;
			box-shadow: 0px 0px 33.86rpx 5.97rpx rgba(6, 0, 1, 0.03);
			display: flex;
			align-items: center;
			justify-content: space-around;
			background-color: #fff;
			margin-top: 27.88rpx;

			.nav {
				text-align: center;

				image {
					width: 63.74rpx;
					height: 63.74rpx;
				}

				text {
					color: #101214;
					font-size: 25.89rpx;
				}
			}
		}
	}

	.box {
		padding: 0 29.88rpx;
		margin-top: 111.55rpx;

		.connav {
			height: 298.8rpx;
			border-radius: 23.9rpx;
			background-color: #fff;
			margin-bottom: 29.88rpx;

			.nav {
				padding: 0 29.88rpx;
				line-height: 99.6rpx;

				image {
					width: 35.85rpx;
					height: 35.85rpx;
					margin-right: 19.92rpx;
					position: relative;
					bottom: -5.97rpx;
				}

				text {
					color: #101214;
					font-size: 27.88rpx;
				}
			}
		}

		.bomnv {
			height: 398.4rpx;
			border-radius: 23.9rpx;
			background-color: #fff;
			margin-bottom: 29.88rpx;

			.nav {
				padding: 0 29.88rpx;
				line-height: 99.6rpx;

				image {
					width: 35.85rpx;
					height: 35.85rpx;
					margin-right: 19.92rpx;
					position: relative;
					bottom: -5.97rpx;
				}

				text {
					color: #101214;
					font-size: 27.88rpx;
				}
			}
		}
	}

	.popup-content {
		.txt {
			color: #666666;
			font-size: 32rpx;
			text-align: center;
			padding-top: 32rpx;
			margin-bottom: 30rpx;
		}

		.tel {
			color: #333333;
			font-size: 36rpx;
			font-weight: bold;
			margin-bottom: 46rpx;
			text-align: center;
		}

		.btnbox {
			display: flex;
			height: 100rpx;
			border-top: 1rpx solid #F7F7F7;

			view {
				width: 48%;
				line-height: 100rpx;
				text-align: center;
			}

			.left {
				color: #999999;
				font-size: 32rpx;
			}

			.right {
				color: #3EACF0;
				font-size: 32rpx;
			}
		}
	}
</style>
