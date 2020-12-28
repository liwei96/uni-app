<template>
	<view>
		<view class="toptitle" @tap="back">
			<view class="status_bar">
				<!-- 这里是状态栏 -->
			</view>
			<image src="../../static/all-back.png" mode=""></image>
			<text>意见反馈</text>
		</view>
		<view class="box">
			<textarea value="" placeholder="输入您的宝贵建议" placeholder-class="test" v-model="txt" />
			<view class="txt">
				您有任何问题需要帮助可以写在这里，我们的人员将在最短时间内回复您，感谢您对允家新房的支持！
			</view>
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" v-if="!pass">
			<view class="btn">
				确定
			</view>
			</button>
			<view class="btn" @tap="put" v-if="pass">
				确定
			</view>
		</view>
		<toast ref="toast" :txt="toasttxt"></toast>
	</view>
</template>

<script>
	var that
	import toast from '@/components/mytoast/mytoast.vue'
	export default {
		data() {
			return {
				txt: '',
				toasttxt: '',
				pass: false
			}
		},
		components:{
			toast
		},
		onLoad() {
			this.pass = uni.getStorageSync('pass')
			if(uni.getStorageSync('txt')) {
				this.txt = uni.getStorageSync('txt')
			}
			that = this
			//#ifdef MP-BAIDU
			swan.setPageInfo({
				title: '允家新房-意见反馈',
				keywords: '允家新房-意见反馈',
				description: '允家新房-意见反馈',
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
			back(){
				uni.navigateBack({
					data:1
				})
			},
			getPhoneNumber(e) {
				console.log(e)
				let that = this
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					uni.setStorageSync('txt',this.txt)
					let url = '/pages/feedback/feedback'
					uni.setStorageSync('backurl',url)
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}else{
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
								that.put
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
												that.put()
											}
										})
									}
								})
							}
						});
					}
				}
			},
			put(){
				let tel = uni.getStorageSync('phone')
				let city = uni.getStorageSync('city')
				let kid = uni.getStorageSync('kid')
				let other = uni.getStorageSync('other')
				if(!this.txt) {
					uni.showToast({
						title:'请输入您的建议'
					})
				}
				let ip = ''
				uni.request({
					url: that.putserve+'/getIp.php',
					method: 'GET',
					success: (res) => {
						ip = res.data
						ip = ip.split('=')[1].split(':')[1]
						ip = ip.substring(1)
						ip = ip.slice(0, -3)
						uni.request({
							url:that.putserve+'/front/flow/sign',
							method:'GET',
							data:{
								tel: tel,
								city: city,
								page: 11,
								source: "线上推广2",
								kid: kid,
								other: other,
								position: 107,
								remark: that.txt,
								ip: ip,
								staff_id: 1,
							  },
							 success: (res) => {
							 	console.log(res)
								if(res.data.code == 200) {
									that.toasttxt = '已为您成功提交'
									that.$refs.toast.show()
								}
							 }
						})
					}
				})
			}
		}
	}
</script>

<style lang="less">
	button {
		padding: 0;
		margin: 0;
	}
	button:after {
		border: none;
	}
	.toptitle {
		color: #17181A;
		font-size: 32rpx;
		padding: 0 29.88rpx;
		line-height: 87.64rpx;
		.status_bar {
		      height: var(--status-bar-height);
		      width: 100%;
		  }
		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}
	.box {
		padding: 0 30rpx;
		textarea {
			width: 630rpx;
			height: 320rpx;
			border-radius: 24rpx;
			background-color: #F5F6F7;
			padding: 30rpx;
			margin-bottom: 24rpx;
			margin-top: 30rpx;
		}
		.test {
			color: #7E7F80;
			font-size: 30rpx;
		}
		.txt {
			color: #7E7F80;
			font-size: 24rpx;
			line-height: 36rpx;
			margin-bottom: 72rpx;
		}
		.btn {
			width: 100%;
			height: 80rpx;
			border-radius: 12rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #3EACF0;
			color: #FFFFFF;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
</style>
