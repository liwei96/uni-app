<template>
	<view class="bomnav">
		<view class="talk">
			<image src="../static/components/component-talk.png" mode=""></image>
			<view class="talkmsg">
				在线咨询
			</view>
			<view class="talknum">
				1
			</view>
		</view>
		<view class="btn">
			<image src="../static/components/component-tel.png" mode=""></image>
			<text>电话咨询</text>
		</view>
		<view class="btn btn2">
			<image src="../static/components/component-yue.png" mode=""></image>
			<text>预约看房</text>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.bomnav {
		position: fixed;
		bottom: 0;
		z-index: 1000;
		display: flex;
		padding: 0 29.88rpx;
		background-color: #FFFFFF;
		height: 127.49rpx;
		align-items: center;
		min-width: 100%;
		.talk {
			position: relative;
			text-align: center;
			margin-left: 11.95rpx;
			margin-right: 43.82rpx;
			.talkmsg {
				color: #626466;
				font-size: 23.9rpx;
			}
			.talknum {
				width: 25.89rpx;
				height: 25.89rpx;
				text-align: center;
				line-height: 25.89rpx;
				background-color: #F34F4F;
				color: #FFFFFF;
				font-size: 19.92rpx;
				position: absolute;
				right: 19.92rpx;
				top: -7.96rpx;
				border-radius: 50%;
			}
			image {
				width: 47.8rpx;
				height: 47.8rpx;
			}
		}
		.btn {
			width: 254.98rpx;
			height: 87.64rpx;
			border-radius: 11.95rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
			font-size: 31.87rpx;
			background: linear-gradient(270deg, #FF7519, #FFAE3D);
			image {
				width: 35.85rpx;
				height: 35.85rpx;
			}
		}
		.btn2 {
			background: linear-gradient(-45deg, #348AFF, #6ACCFF);
			margin-left: 19.92rpx;
		}
	}
</style>
