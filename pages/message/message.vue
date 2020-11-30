<template>
	<view class="meaasage">
		<view class="toptitle">
			<text>我的消息</text>
		</view>
		<view class="content">
			<image src="../../static/message/message-null.png" mode=""></image>
		</view>
		<view class="text">
			您还没有联系人
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		image {
			width: 346.61rpx;
			height: 211.15rpx;
			margin-top: 298.8rpx;
		}
	}
	.text {
		text-align: center;
		color: #7D7E80;
		font-size: 25.89rpx;
		margin-top: 79.68rpx;
	}
</style>
