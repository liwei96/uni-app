<template>
	<view class="dynamic">
		<view class="toptitle" @tap="back">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘动态</text>
		</view>
		<image src="../../static/dynamic/dynamic-top.png" mode="" class="topimg"></image>
		<view class="box">
			<view class="item" v-for="item in list" :key="item.id">
				<view class="top" @tap="go(item.id)">
					<image :src="item.img" mode=""></image>
					<view class="zhao"></view>
					<view class="topicon">
						最新
					</view>
					<view class="name">
						{{item.title}}
					</view>
					<view class="msg">
						<text>{{item.country.substr(0,2)}}</text>
						<text>面积 {{item.area}}m²</text>
						<text>均价：{{item.price}}元/m²</text>
					</view>
				</view>
				<view class="bom">
					<view class="name">{{item.title}}</view>
					<text class="txt">{{item.content}}</text>
					<view class="time">
						{{item.time}}
					</view>
					<button open-type="getPhoneNumber" @tap="bid = item.id" @getphonenumber="getPhoneNumber">
					<view class="btn">
						订阅此楼盘动态
					</view>
					</button>
				</view>
			</view>
		</view>
		<bom-nav :tel="'400-718-6686'" @show="nav"></bom-nav>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title" :pid="pid" :remark="remark" :position="position" :isok="isok"></sign>
		</wyb-popup>
	</view>
</template>

<script>
	import bomnav from "@/components/bomnav.vue"
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	var that
	export default {
		components:{
			"bom-nav":bomnav,
			sign,
			wybPopup
		},
		onLoad() {
			that = this
			this.getdata()
		},
		data() {
			return {
				page: 1,
				list: [],
				pid: 0,
				remark: '',
				codenum: 1,
				title: '',
				position: 0,
				isok: 0,
				bid: 0
			}
		},
		onReachBottom() {
			this.getmore()
		},
		methods:{
			setpop() {
				this.$refs.popup.hide()
			},
			back(){
				uni.navigateBack({
					data:1
				})
			},
			getdata() {
				uni.showLoading({
					title:"加载中"
				})
				let city = uni.getStorageSync('city')
				uni.request({
					url:that.apiserve+'/applets/dynamic/info',
					method:'GET',
					data:{
						city: city,
						page: that.page,
						limit: 10
					},
					success: (res) => {
						console.log(res)
						that.list = res.data.data
						uni.hideLoading()
					}
				})
			},
			getmore() {
				uni.showLoading({
					title:"加载中"
				})
				that.page = that.page+1
				let city = uni.getStorageSync('city')
				uni.request({
					url:that.apiserve+'/applets/dynamic/info',
					method:'GET',
					data:{
						city: city,
						page: that.page,
						limit: 10
					},
					success: (res) => {
						that.list = that.list.concat(res.data.data)
						uni.hideLoading()
					}
				})
			},
			show(id,txt, isok) {
				this.pid = id
				this.remark = txt
				this.position = 98
				this.title = '订阅实时动态'
				console.log(this.pid)
				this.isok = isok
				this.$refs.popup.show()
			},
			setiscode() {
				this.codenum = 0
			},
			go(id) {
				uni.redirectTo({
					url:"/pages/dynamicdetail/dynamicdetail?id="+id
				})
			},
			nav(e) {
				console.log(e)
				this.pid = 0
				this.position = 103
				this.remark = '动态页+预约看房'
				this.title = e.title
				this.isok = e.isok
				this.$refs.popup.show()
			},
			async getPhoneNumber(e) {
				console.log(e)
				let that = this
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					that.show(that.bid,'动态页+订阅楼盘动态')
					
				} else {
					let session = uni.getStorageSync('session')
					if(session){
						uni.request({
							url: 'https://api.edefang.net/applets/baidu/decrypt',
							method:'get',
							data:{
								iv: e.detail.iv,
								data: e.detail.encryptedData,
								session_key: session
							},
							success: (res) => {
								console.log(res)
								let tel = res.data.mobile
								uni.setStorageSync('phone',tel)
								let openid = uni.getStorageSync('openid')
								that.tel = tel
								that.show(that.bid,'动态页+订阅楼盘动态')
							}
						})
					}else {
						uni.login({
						  provider: 'baidu',
						  success: function (res) {
						    console.log(res.code);
							uni.request({
								url: 'https://api.edefang.net/applets/baidu/get_session_key',
								method:'get',
								data:{
									code: res.code
								},
								success: (res) => {
									console.log(res)
									uni.setStorageSync('openid',res.data.openid)
									uni.setStorageSync('session',res.data.session_key)
									uni.request({
										url:"https://api.edefang.net/applets/baidu/decrypt",
										data:{
											data: e.detail.encryptedData,
											iv:e.detail.iv,
											session_key:res.data.session_key
										},
										success: (res) => {
											console.log(res)
											let tel = res.data.mobile
											uni.setStorageSync('phone',tel)
											let openid = uni.getStorageSync('openid')
											that.tel = tel
											that.show(that.bid,'动态页+订阅楼盘动态')
										}
									})
									
								}
							})
						  }
						});
						}
					this.isok = 1
				}
				
			}
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		image {
			width: 31.87rpx;
			height: 31.87rpx;
			margin-right: 11.95rpx;
			margin-bottom: -3.98rpx;
		}
	}
	.topimg {
		width: 100%;
		height: 199.2rpx;
	}
	.box {
		padding: 0 49.8rpx;
		padding-bottom: 119.52rpx;
		padding-top: 42rpx;
		.item {
			background: #FFFFFF;
			box-shadow: 0px 0px 18.92rpx 0.99rpx rgba(0, 0, 0, 0.04);
			border-radius: 15.93rpx;
			overflow: hidden;
			padding-bottom: 39.84rpx;
			margin-bottom: 49.8rpx;
			.top {
				position: relative;
				margin-bottom: 23.9rpx;
				image {
					width: 647.41rpx;
					height: 239.04rpx;
					border-radius: 15.93rpx 15.93rpx 0 0;
				}
				.zhao {
					width: 100%;
					height: 239.04rpx;
					position: absolute;
					top: 0;
					left: 0;
					background: linear-gradient(0deg, #000000);
					opacity: 0.4;
				}
				.topicon {
					position: absolute;
					width: 79.68rpx;
					height: 35.85rpx;
					background: linear-gradient(270deg, #FF7C48, #FF4234);
					border-radius: 15.93rpx 0px 15.93rpx 0px;
					text-align: center;
					line-height: 35.85rpx;
					color: #FFF2F2;
					font-size: 23.9rpx;
					left: 0;
					top: 0;
				}
				.name {
					color: #FFFFFF;
					font-size: 33.86rpx;
					font-weight: bold;
					position: absolute;
					left: 27.88rpx;
					bottom: 79.68rpx;
				}
				.msg {
					position: absolute;
					bottom: 27.88rpx;
					left: 27.88rpx;
					font-size: 25.89rpx;
					color: #FFFFFF;
					text {
						margin-right:35.85rpx;
					}
				}
			}
			.bom {
				padding: 0 29.88rpx;
				button {
					padding: 0;
				}
				button::after{ border: none;}
				.name {
					color: #17181A;
					font-size: 31.87rpx;
					font-weight: bold;
					margin-bottom: 9.96rpx;
				}
				.txt {
					color: #4B4C4D;
					font-size: 25.89rpx;
					line-height: 37.84rpx;
					
				}
				.time {
					margin-top: 15.93rpx;
					color: #969799;
					font-size: 23.9rpx;
					margin-bottom: 29.88rpx;
				}
				.btn {
					position: relative;
					color: #40A2F4;
					font-size: 29.88rpx;
					text-align: center;
					line-height: 71.71rpx;
					width: 498rpx;
					border-radius: 11.95rpx;
					border: 0.99rpx solid #40A2F4;
					left: 50%;
					margin-left: -249rpx;
					background-color: #F0F6FA;
				}
			}
		}
	}
</style>
