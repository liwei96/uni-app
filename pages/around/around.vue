<template>
	<view class="around">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>周边配套</text>
		</view>
		<view class="map-box">
			<map id="map" style="width: 100%; height: 100%;" :latitude="latitude" :longitude="longitude" @updated="kk">
			</map>
		</view>
		<view class="bom">
			<view class="swiper">
				<scroll-view :scroll-top="scrollTop" scroll-x="true" class="swiper-box">
					<view :class="name == item ? 'item active' :'item'" @tap="search(item)" v-for="(item,key) in list" :key="key">
						{{item}}(6)
						<view class="line"></view>
					</view>
				</scroll-view>
			</view>
			<view class="ll">
				<view class="li">
					<view class="tit">
						武林广场
					</view>
					<view class="msg">
						<view class="msg-ll">
							414路、434路、675路
						</view>
						<view class="right">
							<image src="../../static/all-back.png" mode=""></image>
							800m
						</view>
					</view>
				</view>
				<view class="li">
					<view class="tit">
						武林广场
					</view>
					<view class="msg">
						<view class="msg-ll">
							414路、434路、675路
						</view>
						<view class="right">
							<image src="../../static/all-back.png" mode=""></image>
							800m
						</view>
					</view>
				</view>
				<view class="li">
					<view class="tit">
						武林广场
					</view>
					<view class="msg">
						<view class="msg-ll">
							414路、434路、675路
						</view>
						<view class="right">
							<image src="../../static/all-back.png" mode=""></image>
							800m
						</view>
					</view>
				</view>
				<view class="li">
					<view class="tit">
						武林广场
					</view>
					<view class="msg">
						<view class="msg-ll">
							414路、434路、675路
						</view>
						<view class="right">
							<image src="../../static/all-back.png" mode=""></image>
							800m
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				list:[
					'公交',
					'地铁',
					'教育',
					'医院',
					'购物',
					'美食',
					'娱乐'
				],
				name: '公交'
			}
		},
		methods: {
			kk() {
				// mapSearch.poiSearchNearBy({
				// 	point: {
				// 		latitude: 39.909,
				// 		longitude: 116.39742
				// 	},
				// 	key: '停车场',
				// 	radius: 1000
				// }, ret => {
				// 	console.log(ret);
				// 	uni.showModal({
				// 		content: JSON.stringify(ret)
				// 	})
				// })
			},
			search(name) {
				console.log(name)
			}
		}
	}
</script>

<style lang="less">
	.around {
		display: flex;
		flex-direction: column;
		height: 100vh;
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

	.map-box {
		flex: 1;
	}

	.bom {
		.swiper {
			width: 100%;
			white-space: nowrap;
			height: 100rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #F5F5F5;
			.swiper-box {
				height: 60rpx;
			}
			.item {
				display: inline-block;
				color: #323233;
				font-size: 30rpx;
				padding: 0 35rpx;
			}
			.active {
				color: #3EACF0;
				font-size: 30rpx;
				font-weight: bold;
				position: relative;
				.line {
					width: 50rpx;
					height: 4rpx;
					border-radius: 2rpx;
					background-color: #3EACF0;
					position: absolute;
					left: 50%;
					margin-left: -25rpx;
					bottom: -10rpx;
				}
			}
		}

		.ll {
			height: 348rpx;
			overflow: auto;

			.li {
				padding: 16rpx 30rpx;

				.tit {
					color: #303233;
					font-size: 30rpx;
					margin-bottom: 12rpx;
				}

				.msg {
					display: flex;

					.msg-ll {
						color: #7D7E80;
						font-size: 24rpx;
					}

					.right {
						margin-left: auto;
						color: #999999;
						font-size: 24rpx;

						image {
							width: 16rpx;
							height: 16rpx;
						}
					}
				}
			}
		}
	}
</style>
