<template>
	<view class="bottom_fixed">
		<view class="zixun">
			<image src="../../static/content/bottom.png" mode=""></image>
			<view class="text">
				在线咨询
			</view>
		</view>
		<view class="tel_box">
			<image src="../../static/content/tel_bot.png" mode=""></image>
			电话咨询
		</view>
		<view class="yuyue_box">
			<image src="../../static/content/yuyue.png" mode=""></image>
			预约看房
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">

.bottom_fixed{
	width: 100%;
	height: 109rpx;
	padding-left: 45rpx;
	padding-top: 19rpx;
	background-color: #fff;
	position: fixed;
	bottom: 0rpx;
	left: 0rpx;
	.zixun{
		font-size: 24rpx;
		font-weight: 500;
		color: #626466;
		float:left;
		margin-right: 40rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		image{
			width: 48rpx;
			height: 42rpx;
		}
	}
	.tel_box{
		width: 256rpx;
		height: 88rpx;
		background: linear-gradient(270deg, #FF7519, #FFAE3D);
		border-radius: 12rpx;
		float: left;
		image{
			width: 36rpx;
			height: 36rpx;
		}
		font-size: 32rpx;
		font-weight: bold;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20rpx;
	}
	.yuyue_box{
		width: 256rpx;
		height: 88rpx;
		background: linear-gradient(-45deg, #348AFF, #6ACCFF);
		border-radius: 12rpx;
		float:left;
		image{
			width: 36rpx;
			height: 36rpx;
		}
		font-size: 32rpx;
		font-weight: bold;
		line-height: 88rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
