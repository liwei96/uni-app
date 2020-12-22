<template>
	<view class="map">
		<web-view :src="url" v-if="url.length"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ''
			}
		},
		onLoad() {
			let name = uni.getStorageSync('cityname')
			let city = uni.getStorageSync('city')
			let url = `http://m.jy1980.com/hangzhou/map/${name}/${city}?uuid=kWNznYTEzB3s1608096182000`
			this.url = url
		},
		methods: {
			
		},
		mounted() {
		}
	}
</script>

<style lang="less">
	.map {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.bm-view {
		width: 100%;
		height: 300px;
	}

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

	.icons {
		display: flex;
		height: 96rpx;
		align-items: center;
		justify-content: space-around;

		.li {
			color: #323233;
			font-size: 28rpx;

			image {
				width: 16rpx;
				height: 16rpx;
				margin-left: 8rpx;
			}
		}

		.list {
			width: 48rpx;
			height: 48rpx;
		}
	}

	.mapbox {
		flex: 1;
	}
</style>
