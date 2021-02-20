<template>
	<view class="bomnav">
		<view class="talk" @tap="gotalk">
			<image src="../static/components/component-talk.png" mode=""></image>
			<view class="talkmsg">
				在线咨询
			</view>
			<view class="talknum" v-if="num!=0">
			</view>
		</view>
		<view class="btn btn1" @tap="call">
			<image src="../static/components/component-tel.png" mode=""></image>
			<text>电话咨询</text>
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" v-if="!pass&&!weixin">
			<view class="btn btn2">
				<image src="../static/components/component-yue.png" mode=""></image>
				<text>预约看房</text>
			</view>
		</button>
		<view class="btn btn2" v-if="pass||weixin" @tap="okput">
			<image src="../static/components/component-yue.png" mode=""></image>
			<text>预约看房</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tel: {
				type: String
			},
			projectid: {
				type: Number
			}
		},
		data() {
			return {
				sid: 0,
				num: 0,
				pass: false,
				weixin: false
			}
		},
		mounted(){
			if(this.projectid !== 0 || this.projectid == '') {
				this.register()
			}
			let that = this
			this.pass = uni.getStorageSync('pass')
			// this.num = uni.getStorageSync('total')
			uni.onSocketMessage(function(res) {
				if(res.data.indexOf('{') ===-1){
					return
				}
				let data = JSON.parse(res.data)
				console.log(data)
				if(data.action == 302) {
					that.sid = data.sid
				}else if(data.action == 301) {
					if (String(data.fromUserName).length < 10) {
						that.sid = data.fromUserName
						if(uni.getStorageSync(String(data.fromUserName))) {
							console.log(uni.setStorageSync(String(data.fromUserName)),(parseInt(uni.getStorageSync(String(data.fromUserName))) + 1))
							uni.setStorageSync(String(data.fromUserName),parseInt(uni.getStorageSync(String(data.fromUserName))) + 1)
						}else {
							uni.setStorageSync(String(data.fromUserName),1)
						}
						if(uni.getStorageSync('total') && uni.getStorageSync('total') != 'NaN') {
							uni.setStorageSync('total',parseInt(uni.getStorageSync('total')))
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
			register(){
				let uuid = uni.getStorageSync('uuid')
				let city = uni.getStorageSync('city')
				let ip = uni.getStorageSync('ip')
				let arr = getCurrentPages()
				let url = arr[arr.length-1].route
				let host = this.host
				let pro = this.projectid
				console.log(pro)
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
			gotalk(){
				let id = String(this.sid)
				if(uni.getStorageSync(id)){
					let num = uni.getStorageSync(id)
					let total = uni.getStorageSync('total')
					total = total - num
					uni.setStorageSync('total',total)
					uni.removeStorageSync(id)
				}
				this.num = 0
				uni.navigateTo({
					url:'/pages/talk/talk?id='+id
				})
			},
			call() {
				let that = this
				uni.makePhoneCall({
					phoneNumber: that.tel
				});
			},
			getPhoneNumber(e) {
				console.log(e)
				let that = this
				// #ifdef  MP-BAIDU
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.$emit('show', {
						position: 103,
						title: '预约看房',
						isok: 0
					})
				}else{
					uni.setStorageSync('pass',true)
					this.pass = true
					this.$emit('show', {
						position: 103,
						title: '预约看房',
						isok: 1
					})
				}
				// #endif
				// #ifdef  MP-WEIXIN
				if(e.detail.errMsg != 'getPhoneNumber:ok') {
					this.$emit('show', {
						position: 103,
						title: '预约看房',
						isok: 0
					})
				}else{
					uni.login({
						provider: 'weixin',
						success: function(res) {
							uni.request({
								url: 'https://ll.edefang.net/api/weichat/jscode2session',
								method: 'get',
								data: {
									code: res.code
								},
								success: (res) => {
									console.log(res)
									uni.setStorageSync('openid', res.data.data.openid)
									uni.setStorageSync('session', res.data.data.session_key)
									uni.request({
										url: "https://ll.edefang.net/api/weichat/decryptData",
										data: {
											data: e.detail.encryptedData,
											iv: e.detail.iv,
											sessionKey: res.data.data.session_key
										},
										success: (res) => {
											console.log(res)
											let data = JSON.parse(res.data.message)
											let tel = data.purePhoneNumber
											uni.setStorageSync('phone', tel)
											let openid = uni.getStorageSync('openid')
											uni.request({
												url: "https://api.edefang.net/applets/login",
												method: 'GET',
												data: {
													phone: tel,
													openid: openid
												},
												success: (res) => {
													uni.setStorageSync('token', res.data.token)
													uni.setStorageSync('phone', tel)
													that.$emit('show', {
														position: 103,
														title: '预约看房',
														isok: 1
													})
												}
											})
										}
									})
								}
							})
						}
					});
					uni.setStorageSync('pass',true)
				}
				// #endif
			},
			okput() {
				this.$emit('show', {
					position: 103,
					title: '预约看房',
					isok: 1
				})
			}
		},
		watch: {
			projectid(news,val) {
				if (news != val && val == '') {
					this.register()
				}
			}
		}
	}
</script>

<style lang="less">
	.bomnav {
		position: fixed;
		bottom: 0;
		z-index: 1000;
		display: flex;
		padding: 0 29.88rpx;
		background-color: #FFFFFF;
		height: 127.49rpx;
		align-items: center;
		min-width: 100%;

		.talk {
			position: relative;
			text-align: center;
			margin-left: 11.95rpx;
			margin-right: 43.82rpx;

			.talkmsg {
				color: #626466;
				font-size: 23.9rpx;
			}

			.talknum {
				width: 25.89rpx;
				height: 25.89rpx;
				text-align: center;
				line-height: 25.89rpx;
				background-color: #F34F4F;
				color: #FFFFFF;
				font-size: 19.92rpx;
				position: absolute;
				right: 19.92rpx;
				top: -7.96rpx;
				border-radius: 50%;
			}

			image {
				width: 47.8rpx;
				height: 47.8rpx;
			}
		}

		.btn {
			width: 254.98rpx;
			height: 87.64rpx;
			border-radius: 11.95rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			font-size: 31.87rpx;
			background: linear-gradient(270deg, #FF7519, #FFAE3D);

			image {
				width: 35.85rpx;
				height: 35.85rpx;
			}
		}
		.btn1 {
			margin-right: 22rpx;
		}
		.btn2 {
			background: linear-gradient(-45deg, #348AFF, #6ACCFF);
		}
		button {
			padding: 0;
			margin-left: 0;
			border: 0;
		}
		button:after {
			border: 0;
		}
	}
</style>
