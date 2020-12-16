<template>
	<view class="searchname">
		<view class="toptitle" @tap="back">
			<image src="../../static/all-back.png" mode=""></image>
			<text>选择城市</text>
		</view>
		<view class="box">
			<view class="top-input">
				<image src="../../static/other/searchname-icon.png" mode=""></image>
				<input type="text" value="" placeholder="请输入楼盘名称" placeholder-class="istxt" v-model="name" />
			</view>
			<view class="hots">
				<view class="tit">
					<image src="../../static/other/searchname-hot.png" mode=""></image>
					<text>大家都在搜</text>
				</view>
				<view class="content">
					<text v-for="item in hots" :key="item.id" @tap="go(item.id)">{{item.name}}</text>
				</view>
			</view>
			<!-- <view class="hots">
				<view class="tit">
					<image src="../../static/other/searchname-eye.png" mode=""></image>
					<text>大家都在看</text>
				</view>
				<view class="content">
					<text class="item">住宅</text>
					<text class="item">50m²以下</text>
					<text class="item">100-150万</text>
					<text class="item">拱墅</text>
					<text class="item">50-70m²</text>
				</view>
			</view> -->
		</view>
		<view class="upbox" v-if="name">
			<view class="tit">为您找到如下“{{name}}”相关搜索</view>
			<view class="li" v-for="item in lists" :key="item.id" @tap="go(item.id,item.name)">
				<view class="name">
					<view class="left" v-html="item.name"></view>
					<view class="right">{{item.price}}元/m²</view>
				</view>
				<view class="address">
					{{item.country}} - <view v-html="item.address"></view>
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
		},
		data() {
			return {
				name: '',
				hots: [],
				lists:[]
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			getinfo() {
				let token = uni.getStorageSync('token')
				let city = uni.getStorageSync('city')
				uni.request({
					url: that.apiserve + '/jy/us/search',
					method: 'GET',
					data: {
						city: city,
						token: token
					},
					success: (res) => {
						console.log(res)
						that.hots = res.data.hot_search
					}
				})
			},
			go(id,name) {
				let sea = uni.getStorageSync('search')
				if(sea) {
					uni.removeStorageSync('search')
					uni.setStorageSync('searchname',name)
					uni.setStorageSync('searchid',id)
					uni.navigateTo({
						url:"/pages/forward/forward"
					})
					return
				}
				uni.navigateTo({
					url: '/pages/content/content?id=' + id
				})
			},
			sou() {
				let city = uni.getStorageSync('cityname')
				uni.request({
					url: that.putserve + '/api/project/e_search',
					method: "POST",
					data: {
						name: that.name,
						page: 1,
						limit: 10,
						city: city
					},
					success: (res) => {
						console.log(res)
						that.lists = res.data.data
					}
				})
			}
		},
		watch: {
			name(val) {
				this.sou()
			}
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 32rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}

	.box {
		padding: 0 30rpx;

		.top-input {
			height: 64rpx;
			border-radius: 32rpx;
			background-color: #F5F5F5;
			display: flex;
			align-items: center;
			margin-bottom: 50rpx;

			image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
				margin-left: 16rpx;
			}

			.istxt {
				color: #969799;
				font-size: 28rpx;
			}

			input {
				font-size: 28rpx;
			}
		}

		.hots {
			.tit {
				margin-bottom: 42rpx;

				image {
					width: 36rpx;
					height: 36rpx;
					margin-right: 20rpx;
					margin-bottom: -2rpx;
				}

				text {
					color: #19191A;
					font-size: 30rpx;
				}
			}

			.content {
				margin-bottom: 50rpx;

				text {
					color: #40A2F4;
					font-size: 24rpx;
					padding: 16rpx 35rpx;
					background-color: #F0F6FA;
					border-radius: 28rpx;
					margin-right: 24rpx;
					display: inline-block;
					margin-bottom: 24rpx;
				}

				.item {
					background-color: #F7F7F7;
					color: #525255;
				}

				.item:nth-of-type(4n) {
					margin-right: 0;
				}
			}
		}
	}

	.upbox {
		width: 96%;
		padding-left: 4%;
		position: fixed;
		top: 220rpx;
		min-height: 60vh;
		max-height: 83vh;
		background-color: #FFFFFF;
		overflow: auto;
		.tit {
			color: #333436;
			font-size: 28rpx;
			margin-bottom: 58rpx;
		}

		.li {
			border-bottom: 1rpx solid #F2F4F7;
			margin-bottom: 32rpx;

			.name {
				margin-bottom: 24rpx;
				overflow: hidden;

				.left {
					color: #303233;
					font-size: 32rpx;
					font-weight: bold;
					float: left;
				}

				.right {
					color: #FF6040;
					font-size: 26rpx;
					float: right;
					margin-right: 30rpx;
				}
			}

			.address {
				color: #7D7E80;
				font-size: 24rpx;
				display: flex;
				view {
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
