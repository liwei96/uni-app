<template>
	<view class="meaasage">
		<view class="toptitle">
			<text>我的消息</text>
		</view>
		<view v-if="false">
			<view class="content">
				<image src="../../static/message/message-null.png" mode=""></image>
			</view>
			<view class="text">
				您还没有联系人
			</view>
		</view>
		<view class="list">
			<view class="li">
				<view class="left">
					<image src="../../static/content/ping_img.png" mode="widthFix"></image>
					<view class="num">
						1
					</view>
				</view>
				<view class="right">
					<view class="top">
						<view class="name">
							李华
						</view>
						<view class="build">
							越秀缦云府
						</view>
						<view class="time">
							11:24
						</view>
					</view>
					<view class="bom">
						请问有什么可以帮到您
					</view>
				</view>
			</view>
			<view class="li">
				<view class="left">
					<image src="../../static/content/ping_img.png" mode="widthFix"></image>
					<view class="num">
						1
					</view>
				</view>
				<view class="right">
					<view class="top">
						<view class="name">
							李华
						</view>
						<view class="build">
							越秀缦云府
						</view>
						<view class="time">
							11:24
						</view>
					</view>
					<view class="bom">
						请问有什么可以帮到您
					</view>
				</view>
			</view>
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
		border-bottom: 1rpx solid #F7F7F7;
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
	.list {
		padding: 0 30rpx;
		.li {
			display: flex;
			padding-top: 30rpx;
			.left {
				position: relative;
				margin-right: 30rpx;
				image {
					width: 96rpx;
				}
				.num {
					position: absolute;
					width: 32rpx;
					height: 32rpx;
					text-align: center;
					line-height: 32rpx;
					border-radius: 50%;
					background-color: #F24949;
					color: #FFFFFF;
					font-size: 22rpx;
					right: 0;
					top: 0;
				}
			}
			.right {
				flex: 1;
				padding-bottom: 36rpx;
				border-bottom: 1rpx solid #F2F2F2;
				.top {
					display: flex;
					margin-bottom: 18rpx;
					.name{
						color: #19191A;
						font-size: 32rpx;
						margin-right: 14rpx;
					}
					.build {
						padding: 5rpx 10rpx;
						color: #3EACF0;
						font-size: 22rpx;
						background-color: #F2F9FC;
						border-radius: 3rpx;
						max-width: 210rpx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.time {
						color: #AFAFB3;
						font-size: 24rpx;
						margin-left: auto;
					}
				}
				.bom {
					color: #7D7D80;
					font-size: 26rpx;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
</style>
