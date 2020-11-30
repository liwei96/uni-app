<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>我的卡券</text>
		</view>
		<view class="isnull">
			<view class="imgbox">
				<image src="../../static/other/cards-con.png" mode=""></image>
			</view>
			<view class="txt">
				您还没有领取的卡券
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
	.isnull {
		.imgbox {
			display: flex;
			justify-content: center;
			image {
				margin-top: 190rpx;
				width: 400rpx;
				height: 400rpx;
			}
		}
		.txt {
			text-align: center;
			color: #7D7E80;
			font-size: 26rpx;
		}
	}
</style>
