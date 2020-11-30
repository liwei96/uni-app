<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>买房百科</text>
		</view>
		<view class="tit">
			<image src="../../static/other/weike-search.png" mode=""></image>
			<input type="text" value="" placeholder="搜搜你想要了解的房产知识吧" placeholder-class="txt" />
		</view>
		<view class="box">
			<view class="hot-tit">
				热门关键词
			</view>
			<view class="hot-content">
				<view>新房</view>
				<view>买房能力</view>
				<view>摇号</view>
				<view>买房首付</view>
				<view>新房签约</view>
				<view>新房开盘</view>
				<view>贷款买房</view>
				<view>首付</view>
				<view>提前还款</view>
				<view>签约</view>
			</view>
			<view class="guess-tit">
				猜你喜欢
			</view>
			<view class="guess-content">
				<view class="li">
					<view class="left">
						<view class="article-tit">
							学区房可不是那么好买的！这篇防坑指南请收好
							学区房可不是那么好买的！这篇防坑指南请收好
						</view>
						<view class="left-icons">
							<text>楼盘签约</text>
							<text>新房签约</text>
						</view>
					</view>
					<view class="right">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
				</view>
				<view class="li">
					<view class="left">
						<view class="article-tit">
							学区房可不是那么好买的！这篇防坑指南请收好
							学区房可不是那么好买的！这篇防坑指南请收好
						</view>
						<view class="left-icons">
							<text>楼盘签约</text>
							<text>新房签约</text>
						</view>
					</view>
					<view class="right">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="up-box">
			<view class="up-tit">
				共为您搜索到<text>20</text>条关于“<text>家</text>”的知识
			</view>
			<view class="up-content">
				<view class="li">
					<view class="left">
						<view class="article-tit">
							学区房可不是那么好买的！这篇防坑指南请收好
							学区房可不是那么好买的！这篇防坑指南请收好
						</view>
						<view class="left-icons">
							<text>楼盘签约</text>
							<text>新房签约</text>
						</view>
					</view>
					<view class="right">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
				</view>
				<view class="li">
					<view class="left">
						<view class="article-tit">
							学区房可不是那么好买的！这篇防坑指南请收好
							学区房可不是那么好买的！这篇防坑指南请收好
						</view>
						<view class="left-icons">
							<text>楼盘签约</text>
							<text>新房签约</text>
						</view>
					</view>
					<view class="right">
						<image src="../../static/img-2.png" mode=""></image>
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

	.tit {
		width: 92%;
		margin-left: 4%;
		height: 64rpx;
		border-radius: 32rpx;
		background: #F5F5F5;
		display: flex;
		align-items: center;
		margin-top: 12rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-left: 140rpx;
			margin-right: 10rpx;
		}

		.txt {
			color: #969799;
			font-size: 28rpx;
		}

		input {
			font-size: 28rpx;
		}
	}

	.box {
		padding: 0 30rpx;
	}

	.hot-tit {
		margin-top: 48rpx;
		color: #101214;
		font-size: 32rpx;
		font-weight: bold;
		margin-bottom: 48rpx;
	}

	.hot-content {
		overflow: hidden;
		margin-bottom: 48rpx;

		view {
			color: #646566;
			font-size: 26rpx;
			padding: 16rpx 32rpx;
			border-radius: 28rpx;
			background-color: #F7F7F7;
			margin-right: 24rpx;
			float: left;
			margin-bottom: 22rpx;
		}
	}

	.guess-tit {
		color: #17191A;
		font-size: 32rpx;
		font-weight: 800;
		margin-bottom: 56rpx;
	}

	.guess-content {
		.li {
			display: flex;
			margin-bottom: 20rpx;
			.left {
				flex: 1;
				position: relative;
				top: -2rpx;
				.article-tit {
					color: #303233;
					font-size: 28rpx;
					line-height: 40rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				.left-icons {
					position: absolute;
					bottom: 2rpx;
					text {
						color: #626466;
						font-size: 20rpx;
						padding: 6rpx 12rpx;
						background-color: #F5F5F5;
						border-radius: 4rpx;
						margin-right: 16rpx;
					}
				}
			}

			.right {
				margin-left: 42rpx;

				image {
					width: 200rpx;
					height: 140rpx;
					border-radius: 12rpx;
				}
			}
		}
	}
	.up-box {
		position: fixed;
		height: 50vh;
		padding: 0 4%;
		width: 92%;
		top: 14vh;
		height: 86vh;
		background-color: #FFFFFF;
		.up-tit {
			color: #333333;
			font-size: 28rpx;
			margin-top: 48rpx;
			margin-bottom: 46rpx;
			text {
				color: #FF5543;
			}
		}
		.up-content {
			.li {
				display: flex;
				margin-bottom: 20rpx;
				.left {
					flex: 1;
					position: relative;
					top: -4rpx;
					.article-tit {
						color: #303233;
						font-size: 28rpx;
						line-height: 40rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
					}
					.left-icons {
						position: absolute;
						bottom: 2rpx;
						text {
							color: #626466;
							font-size: 20rpx;
							padding: 6rpx 12rpx;
							background-color: #F5F5F5;
							border-radius: 4rpx;
							margin-right: 16rpx;
						}
					}
				}
			
				.right {
					margin-left: 42rpx;
			
					image {
						width: 200rpx;
						height: 140rpx;
						border-radius: 12rpx;
					}
				}
			}
		}
	}
</style>
