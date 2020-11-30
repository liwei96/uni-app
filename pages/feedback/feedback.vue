<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>意见反馈</text>
		</view>
		<view class="box">
			<textarea value="" placeholder="输入您的宝贵建议" placeholder-class="test"/>
			<view class="txt">
				您有任何问题需要帮助可以写在这里，我们的人员将在最短时间内回复您，感谢您对允家新房的支持！
			</view>
			<view class="btn">
				确定
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
	.box {
		padding: 0 30rpx;
		textarea {
			width: 630rpx;
			height: 320rpx;
			border-radius: 24rpx;
			background-color: #F5F6F7;
			padding: 30rpx;
			margin-bottom: 24rpx;
			margin-top: 30rpx;
		}
		.test {
			color: #7E7F80;
			font-size: 30rpx;
		}
		.txt {
			color: #7E7F80;
			font-size: 24rpx;
			line-height: 36rpx;
			margin-bottom: 72rpx;
		}
		.btn {
			width: 100%;
			height: 80rpx;
			border-radius: 12rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #3EACF0;
			color: #FFFFFF;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
</style>
