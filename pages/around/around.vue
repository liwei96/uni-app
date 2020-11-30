<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>周边配套</text>
		</view>
		<view class="map-box">
			<!-- <map :latitude="" :longitude=""></map> -->
			
		</view>
		<view class="bom">
			<view class="swiper">
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
				 @scroll="scroll">
					<view class="item">
						公交(6)
					</view>
					<view class="item">
						地铁(5)
					</view>
					<view class="item">
						教育(3)
					</view>
					<view class="item">
						医院(2)
					</view>
					<view class="item">
						购物(6)
					</view>
					
					<view class="item">
						公交(6)
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

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
	.bom {
		
		.ll {
			padding: 28rpx 30rpx;
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
</style>
