<template>
	<view class="loginbox">
		<view class="tit">
			登录/注册
		</view>
		<view class="input">
			<input placeholder="输入手机号" v-model="telphone"
				placeholder-style="color:#969799;font-size:30rpx;line-height:128rpx" maxlength="11" />
		</view>
		<view class="input">
			<input placeholder="请输入验证码" v-model="code"
				placeholder-style="color:#969799;font-size:30rpx;line-height:128rpx" maxlength="6" />
			<text @tap="getCode">{{timetxt}}</text>
		</view>
		<view class="tishi">
			<checkbox-group @change="set">
				<checkbox value="cb" checked="true" color="#3EACF0" style="transform:scale(0.7)" />
			</checkbox-group>
			<view class="txt">
				登录即表示您同意<text @tap="goserve">《允家服务协议》</text>
			</view>
		</view>
		<view :class="ok&&code&&telphone?'login active':'login'" @tap="getLogin">
			立即登录
		</view>
		<toast ref="toast" :txt="msg"></toast>
	</view>
</template>

<script>
	import toast from "@/components/mytoast/mytoast.vue"
	export default {
		components: {
			toast
		},
		props: ['pid'],
		data() {
			return {
				telphone: "",
				code: "",
				second: 60,
				timetxt: "获取验证码",
				msg: "",
				istime: false,
				timer: null,
				ok: true
			};
		},
		methods: {
			goserve() {
				uni.navigateTo({
					url: "/pages/serve/serve"
				})
			},
			set(e) {
				console.log(e)
				if (e.detail.value.length == 0) {
					this.ok = false
				} else {
					this.ok = true
				}
			},
			getCode() {
				let that = this;
				let phone = this.telphone;
				var pattern_phone = /^1[3-9][0-9]{9}$/;
				if (phone == "") {
					this.msg = "手机号不能为空"
					this.$refs.toast.show();
					return;
				} else if (!pattern_phone.test(phone)) {
					this.msg = "手机号码不合法"
					this.$refs.toast.show();
					return;
				}
				let kid = uni.getStorageSync("kid") || null;
				let other = uni.getStorageSync("other") || null;
				let ip = ''
				let city = uni.getStorageSync('city') || 1
				uni.request({
					url: that.putserve + '/getIp.php',
					method: 'GET',
					success: (res) => {
						ip = res.data
						ip = ip.split('=')[1].split(':')[1]
						ip = ip.substring(1)
						ip = ip.slice(0, -3)
						uni.request({
							url: that.putserve + '/front/flow/sign',
							data: {
								city: city,
								page: 11,
								project: this.pid,
								remark: "登录",
								source: '线上推广1',
								name: "",
								ip: ip,
								position: "106",
								tel: phone,
								kid: kid,
								other: other,
								other: uni.getStorageSync('other'),
								uuid: uni.getStorageSync('uuid')
							},
							method: "GET",
							success: (res) => {
								if (res.data.code == 500) {
									this.msg = res.data.message;
									that.$refs.toast.show()
								} else {
									that.teltxt = phone.substr(0, 3) + "****" + phone.substr(7,
										11);
									let time = 60
									clearInterval(that.timer);
									var fn = function() {
										time--;
										if (time > 0) {
											that.istime = true
											that.timetxt = `已发送(${time}s)`
										} else {
											that.istime = false
											clearInterval(that.timer);
											that.timetxt = `获取验证码`
										}
									};
									fn();
									that.timer = setInterval(fn, 1000);
									if (that.isok == 1) {
										if (!uni.getStorageSync('token')) {
											let openid = uni.getStorageSync('openid')
											let city = uni.getStorageSync('city')
											uni.request({
												url: this.javaapi +
													"/applets_yun_jia_new/login",
												method: 'POST',
												data: {
													phone: phone,
													openid: openid,
													city: city,
													bid: this
														.pid,
													other: uni
														.getStorageSync(
															'other'
														),
													uuid: uni
														.getStorageSync(
															'uuid'
														)
												},
												success: (res) => {
													console.log(res)
													uni.setStorageSync('token', res
														.data.data.token)
													uni.setStorageSync('userid', res
														.data.data.userId)
													uni.setStorageSync('phone', phone)
												}
											})
										}
										that.msg = "订阅成功";
										that.$refs.toast.show()
									} else {
										that.iscode = true
									}

								}

							}
						})
						uni.request({
							url: that.apiserve + '/send',
							method: "POST",
							data: {
								ip: ip,
								phone: phone,
								source: 3,
								other: uni.getStorageSync('other'),
								uuid: uni.getStorageSync('uuid')
							},
							header: {
								'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
							},
							success: (res) => {
								console.log(res);
								if (res.data.code == 200) {
									this.msg = '短信已发您手机';
									this.$refs.toast.show();
								} else {
									this.msg = '发送失败，请重试';
									this.$refs.toast.show();
								}
							}
						})
					}
				})


			},
			getLogin() {
				let that = this
				if (!this.ok) {
					return;
				}
				let phone = this.telphone;
				var pattern_phone = /^1[3-9][0-9]{9}$/;
				if (phone == "") {
					return;
				}
				if (!this.code) {
					this.msg = "请输入验证码";
					this.$refs.toast.show()
					return;
				}
				if (!pattern_phone.test(phone)) {
					this.msg = "手机号码不合法"
					this.$refs.toast.show();
					return;
				}
				uni.request({
					url: that.apiserve + '/sure',
					method: "POST",
					data: {
						phone: phone,
						source: 3,
						code: that.code,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
					},
					success: (res) => {
						console.log(res)
						if (res.data.code === 200) {
							uni.setStorageSync('phone', phone)
							that.msg = "订阅成功";
							that.$refs.toast.show()
							uni.setStorageSync('token',res.data.token)
							uni.setStorageSync('userid', res.data.userId)
							uni.setStorageSync('pass', true)
							that.$emit('login', true)
						} else {
							that.msg = '验证码不正确';
							that.$refs.toast.show()
						}
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.loginbox {
		padding: 0 60rpx;

		.tit {
			color: #1A1A1A;
			font-size: 34rpx;
			font-weight: bold;
			text-align: center;
			padding-top: 34rpx;
			margin-bottom: 4rpx;
		}

		.input {
			padding-top: 48rpx;
			height: 67rpx;
			display: flex;
			border-bottom: 1rpx solid #EBECED;

			text {
				margin-left: auto;
				color: #3EACF0;
				font-size: 28rpx;
				margin-top: 6rpx;
			}
		}

		.tishi {
			display: flex;
			align-items: center;
			margin-top: 28rpx;

			.txt {
				color: #9DA3A6;
				font-size: 26rpx;

				text {
					color: #3EACF0;
				}
			}
		}

		.login {
			width: 630rpx;
			height: 96rpx;
			background: #E3E5E6;
			border-radius: 48rpx;
			font-size: 32rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 96rpx;
			margin-top: 50rpx;
		}

		.active {
			background: #3EACF0;
		}
	}
</style>
