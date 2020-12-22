<template>
	<view class="bomnav">
		<view class="talk" @tap="gotalk">
			<image src="../static/components/component-talk.png" mode=""></image>
			<view class="talkmsg">
				在线咨询
			</view>
			<view class="talknum" v-if="num!=0">
				{{num}}
			</view>
		</view>
		<view class="btn btn1" @tap="call">
			<image src="../static/components/component-tel.png" mode=""></image>
			<text>电话咨询</text>
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
			<view class="btn btn2">
				<image src="../static/components/component-yue.png" mode=""></image>
				<text>预约看房</text>
			</view>
		</button>
		
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
				num: 0
			}
		},
		mounted(){
			// if(this.projectid !== 0 || this.projectid == '') {
			// 	this.register()
			// }
			let that = this
			this.num = uni.getStorageSync('total')
			uni.onSocketMessage(function(res) {
				let data = JSON.parse(res.data)
				console.log(data)
				if(data.action == 302) {
					that.sid = data.sid
				}else if(data.action == 301) {
					if (String(data.fromUserName).length < 10) {
						if(uni.setStorageSync(String(data.fromUserName))) {
							uni.setStorageSync(String(data.fromUserName),parseInt(sessionStorage.getItem(String(data.fromUserName))) + 1)
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
				let id = this.sid
				if(uni.getStorageSync(sid)){
					let num = uni.getStorageSync(sid)
					let total = uni.getStorageSync('total')
					total = total - num
					uni.setStorageSync('total',total)
					uni.removeStorageSync(sid)
				}
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
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.$emit('show', {
						position: 103,
						title: '预约看房',
						isok: 0
					})
				}else{
					this.$emit('show', {
						position: 103,
						title: '预约看房',
						isok: 1
					})
				}
			}
		},
		watch: {
			projectid(news,val) {
				console.log(news,val)
				if(news != val && val == 0) {
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
