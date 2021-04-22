<template>
	<view>
		<!-- <view class="toptitle" @tap="back">
			 <view class="status_bar">
			      </view>
			<image src="../../static/all-back.png" mode=""></image>
			<text>我的足迹</text>
		</view> -->
		<view class="recommend" v-if="!isnull">
			<view class="recommend-box">
				<view class="item" v-for="item in list" :key="item.id" @tap="go(item.id)">
					<view class="left">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="right">
						<view class="right-name">
							<text class="name">{{item.name}}</text>
							<text class="status">{{item.state}}</text>
						</view>
						<view class="pp">
							<text class="price">{{item.price}}</text>
							<text class="psam">元/m²</text>
						</view>
						<view class="kk">
							<text class="right-msg">{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</text>
						</view>
						<view class="right-icons">
							<text class="jing">{{item.decorate}}</text>
							<text v-for="(val1,key1) in item.railways" :key="key1">{{val1.name}}</text>
							<text v-for="(val,key) in item.features" :key="key">{{val}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="isnull" v-if="isnull">
			<image src="../../static/other/footprint-con.png" mode=""></image>
			<text>您还没有浏览记录，快去看看楼盘吧~</text>
			<view class="btn" @tap="gosearch">
				去看楼盘
			</view>
		</view>
		<view class="guess" v-if="isnull">
			<view class="recommend">
				<view class="tit">
					猜你喜欢
				</view>
				<view class="recommend-box">
					<view class="item" v-for="item in list" :key="item.id" @tap="go(item.id)">
						<view class="left">
							<image :src="item.img" mode=""></image>
						</view>
						<view class="right">
							<view class="right-name">
								<text class="name">{{item.name}}</text>
								<text class="status">{{item.state}}</text>
							</view>
							<text class="price">{{item.price}}</text>
							<text class="psam">元/m²</text>
							<view>
								<text class="right-msg">{{item.type}} | {{item.city}}-{{item.country.substr(0,2)}} | {{item.area}}m²</text>
							</view>
							<view class="right-icons">
								<text class="jing">{{item.decorate}}</text>
								<text v-for="(val1,key1) in item.railways" :key="key1">{{val1.name}}</text>
								<text v-for="(val,key) in item.features" :key="key">{{val}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var that
	export default {
		onLoad() {
			that = this
			this.getinfo()
			//#ifdef MP-BAIDU
			swan.setPageInfo({
				title: '允家新房-浏览足迹',
				keywords: '允家新房-浏览足迹',
				description: '允家新房-浏览足迹',
				success: res => {
					console.log('setPageInfo success', res);
				},
				fail: err => {
					console.log('setPageInfo fail', err);
				}
			})
			//#endif
		},
		data() {
			return {
				list: [],
				isnull: false
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					data:1
				})
			},
			gosearch(){
				uni.navigateTo({
					url:"/pages/building/building"
				})
			},
			getinfo(){
				uni.showLoading({
					title:'加载中'
				})
				let token = uni.getStorageSync('token')
				uni.request({
					url:that.apiserve+'/jy/mine/foots',
					method:"GET",
					data:{
						token: token,
						page: 1,
						limit: 10,
						other: uni.getStorageSync('other'),
						uuid: uni.getStorageSync('uuid')
					},
					success: (res) => {
						console.log(res)
						that.list = res.data.data
						if(res.data.total == 0) {
							that.isnull = true
						}
						uni.hideLoading()
					}
				})
			},
			go(id) {
				uni.navigateTo({
					url:"/pages/content/content?id="+id
				})
			}
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 88rpx;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 9999;
		font-weight: bold;
		background-color: #FFFFFF;
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
	.recommend {
		padding: 0 30rpx;
		// padding-top: 88rpx;
	
		.tit {
			color: #17181A;
			font-size: 33.86rpx;
			margin-bottom: 31.87rpx;
			font-weight: bold;
		}
	
		.recommend-box {
			margin-top: 31.87rpx;
		}
	
		.item {
			display: flex;
			margin-bottom: 59.76rpx;
	
			.left {
				margin-right: 27.88rpx;
	
				image {
					width: 219.12rpx;
					height: 159.36rpx;
					border-radius: 11.95rpx;
				}
			}
	
			.right {
				flex: 1;
	
				.right-name {
					position: relative;
					top: -14rpx
				}
	
				.name {
					color: #323233;
					font-size: 31.87rpx;
					margin-bottom: 11.95rpx;
					font-weight: 800;
				}
				.pp {
					position: relative;
					top: -14rpx;
				}
				.kk {
					position: relative;
					top: -22rpx;
				}
				.status {
					color: #20C657;
					font-size: 21.91rpx;
					background-color: #E6FAF0;
					width: 67.72rpx;
					height: 35.85rpx;
					border-radius: 5.97rpx;
					text-align: center;
					line-height: 35.85rpx;
					float: right;
					display: block;
				}
	
				.price {
					color: #FF6040;
					font-size: 31.87rpx;
					font-weight: 800;
				}
	
				.psam {
					color: #FF6040;
					font-size: 25.89rpx;
					font-weight: 800;
				}
	
				.right-msg {
					color: #4B4C4D;
					font-size: 23.9rpx;
					margin-bottom: 7.96rpx;
				}
	
				.right-icons {
					display: flex;
					position: relative;
					top: -18rpx;
	
					text {
						padding: 5.97rpx 11.95rpx;
						color: #7D7D80;
						font-size: 21.91rpx;
						background-color: #F5F5F5;
						border-radius: 5.97rpx;
						margin-right: 11.95rpx;
					}
	
					.jing {
						background-color: #EBF8FF;
						color: #3EACF0;
					}
				}
			}
		}
	}
	.isnull {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 128rpx;
		margin-bottom: 68rpx;
		image {
			width: 200rpx;
			height: 200rpx;
			margin-top: 100rpx;
		}
		text {
			color: #7D7E80;
			font-size: 26rpx;
			margin-bottom: 48rpx;
			margin-top: 36rpx;
		}
		.btn {
			width: 320rpx;
			height: 72rpx;
			border-radius: 36rpx;
			background-color: #3EACF0;
			text-align: center;
			line-height: 72rpx;
			color: #FFFFFF;
			font-size: 28rpx;
		}
	}
</style>
