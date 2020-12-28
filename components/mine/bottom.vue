<template>
	<view class="bottom_fixed">
		<view class="zixun" @tap="gotalk">
			<image src="../../static/content/bottom.png" mode=""></image>
			<view class="text">
				在线咨询
			</view>
			<view class="num" v-if="num!=0">
				{{num}}
			</view>
		</view>
		<view class="tel_box" @tap="boTel(telphone)">
			<image src="../../static/content/tel_bot.png" mode=""></image>
			电话咨询
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" v-if="!pass">
			<view class="yuyue_box">
				<image src="../../static/content/yuyue.png" mode=""></image>
				预约看房
			</view>
		</button>
		<view class="yuyue_box" v-if="pass" @tap="baoMing(remark, point, title, pid,1)">
			<image src="../../static/content/yuyue.png" mode=""></image>
			预约看房
		</view>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n"
			 :isok="isok"></sign>
		</wyb-popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	export default {
		props: {
			remark: {
				type: String
			},
			point: {
				type: Number
			},
			title: {
				type: String
			},
			pid: {
				type: String
			},
			telphone: {
				type: String
			},
			projectid: {
				type: Number
			}
		},
		components: {
			sign,
			wybPopup
		},
		data() {
			return {
				codenum: 1,
				title_e: '',
				pid_d: 0,
				remark_k: '',
				position_n: 0,
				isok: 0,
				sid: 0,
				num: 0,
				pass: false
			};
		},
		mounted() {
			let that = this
			this.pass = uni.getStorageSync('pass')
			this.num = uni.getStorageSync('total')
			uni.onSocketMessage(function(res) {
				let data = JSON.parse(res.data)
				console.log(data)
				if (data.action == 302) {
					that.sid = data.sid
				} else if (data.action == 301) {
					if (String(data.fromUserName).length < 10) {
						if (uni.setStorageSync(String(data.fromUserName))) {
							uni.setStorageSync(String(data.fromUserName), parseInt(uni.setStorageSync(String(data.fromUserName))) + 1)
						} else {
							uni.setStorageSync(String(data.fromUserName), 1)
						}
						if (uni.getStorageSync('total') && uni.getStorageSync('total') != 'NaN') {
							uni.setStorageSync('total', parseInt(uni.getStorageSync('total')))
							that.num = that.num + 1;
						} else {
							uni.setStorageSync('total', 1)
							that.num = 1;
						}
					}
				}
			})
		},
		methods: {
			gotalk() {
				let id = this.sid
				if (uni.getStorageSync(id)) {
					let num = uni.getStorageSync(sid)
					let total = uni.getStorageSync('total')
					total = total - num
					uni.setStorageSync('total', total)
					uni.removeStorageSync(sid)
				}
				let pid = this.pid
				uni.navigateTo({
					url: '/pages/talk/talk?id=' + id+'&bid='+pid
				})
			},
			register() {
				let uuid = uni.getStorageSync('uuid')
				let city = uni.getStorageSync('city')
				let ip = uni.getStorageSync('ip')
				let arr = getCurrentPages()
				let url = arr[arr.length - 1].route
				let host = this.host
				let pro = this.pid
				let pp = {
					controller: "Info",
					action: "register",
					params: {
						city: city,
						project: pro,
						ip: ip,
						url: url,
						uuid: uuid,
						host: host
					},
				};
				uni.sendSocketMessage({
					data: JSON.stringify(pp)
				});
			},
			setiscode() {
				this.codenum = 0
			},
			boTel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel,
					success: function() {
						console.log('拨打电话', tel);
					} //仅为示例
				});
			},
			baoMing(remark, point, title, pid,n) {
				this.isok = n
				console.log(remark, point, title, pid,n);
				this.pid_d = pid;
				this.position_n = point;
				this.title_e = title;
				this.remark_k = remark;
				this.$refs.popup.show();
			},
			async getPhoneNumber(e) {
				console.log(e)
				let that = this
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					that.baoMing(that.remark, that.point, that.title, that.pid,0)
				} else {
					this.pass = true
					uni.setStorageSync('pass',true)
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
								that.tel = tel
								that.baoMing(that.remark, that.point, that.title, that.pid,1)
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
												that.tel = tel
												that.baoMing(that.remark, that.point, that.title, that.pid,1)
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
		watch: {
			pid(news, val) {
				console.log(news, val)
				if (news != val && val == '') {
					this.register()
				}
			}
		}
	}
</script>

<style lang="less">
	.bottom_fixed {
		width: 94%;
		height: 109rpx;
		padding-left: 6%;
		padding-top: 19rpx;
		background-color: #fff;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		border-top: none;
		z-index: 1000;

		//border-top:1rpx solid #fff;
		.zixun {
			font-size: 24rpx;
			font-weight: 500;
			color: #626466;
			float: left;
			margin-right: 40rpx;
			display: flex;
			align-items: center;
			flex-direction: column;
			position: relative;
			padding-top: 6rpx;

			image {
				width: 48rpx;
				height: 42rpx;
				margin-bottom: 12rpx;
			}

			.num {
				width: 26rpx;
				height: 26rpx;
				border-radius: 50%;
				text-align: center;
				line-height: 26rpx;
				background-color: #F34F4F;
				color: #FFFFFF;
				font-size: 20rpx;
				position: absolute;
				top: 0;
				right: 8rpx;
			}
		}

		.tel_box {
			width: 256rpx;
			height: 88rpx;
			background: linear-gradient(270deg, #FF7519, #FFAE3D);
			border-radius: 12rpx;
			float: left;

			image {
				width: 36rpx;
				height: 36rpx;
			}

			font-size: 32rpx;
			font-weight: bold;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 20rpx;
		}

		button::after {
			border: none;
		}

		.yuyue_box {
			width: 256rpx;
			height: 88rpx;
			background: linear-gradient(-45deg, #348AFF, #6ACCFF);
			border-radius: 12rpx;
			float: left;

			image {
				width: 36rpx;
				height: 36rpx;
			}

			font-size: 32rpx;
			font-weight: bold;
			line-height: 88rpx;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
