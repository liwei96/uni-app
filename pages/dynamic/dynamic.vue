<template>
	<view class="dynamic">
		<view class="toptitle">
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
					<view class="btn" @tap="show(item.bid,'动态页+订阅楼盘动态')">
						订阅此楼盘动态
					</view>
				</view>
			</view>
		</view>
		<bom-nav :tel="'400-718-6686'" @show="nav"></bom-nav>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title" :pid="pid" :remark="remark" :position="position"></sign>
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
				position: 0
			}
		},
		onReachBottom() {
			this.getmore()
		},
		methods:{
			getdata() {
				uni.showLoading({
					title:"加载中"
				})
				let city = uni.getStorageInfoSync('city')
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
				let city = uni.getStorageInfoSync('city')
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
			show(id,txt) {
				this.pid = id
				this.remark = txt
				this.position = 98
				this.title = '订阅实时动态'
				console.log(this.pid)
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
				this.pid = this.build.id
				this.position = 103
				this.remark = '动态页+预约看房'
				this.title = e.title
				this.$refs.popup.show()
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
				}
			}
		}
	}
</style>
