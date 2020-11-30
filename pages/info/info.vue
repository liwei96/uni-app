<template>
	<view class="article">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>本地楼市</text>
		</view>
		<view class="box">
			<view class="tit">
				无法使用住房公积金贷款买房？一定要注意 这几种情况！
			</view>
			<view class="infos">
				<text>发布：2019-05-24 来源：允家</text>
				<text class="right">浏览：167</text>
			</view>
			<view class="txtbox">
				<text>
					摘要：
				</text>
				我们都知道公积金贷款利率远低于商业贷款，提前还贷也没有违约金等，是贷款买房的首选。但是，公积金贷款买房并非易事，一旦遇到以下这几种情况

			</view>
			<view class="" v-html="jkl">
			</view>
			<view class="label">
				<text class="label-tit">标签：</text>
				<text class="label-li">买房</text>
				<text class="label-li">买房</text>
				<text class="label-li">买房</text>
			</view>
			<view class="build">
				<view class="top">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-tit">
							荣盛檀越府
							<view class="status">
								在售
							</view>
						</view>
						<view class="price">
							<text class="big">17000</text>
							<text>元/m²</text>
						</view>
						<view class="right-infos">
							住宅 | 杭州-江干 | 80-140m²
						</view>
						<view class="right-icons">
							<text class="zhuang">精装</text>
							<text>刚需楼盘</text>
							<text>刚需楼盘</text>
						</view>
					</view>
				</view>
				<view class="bom">
					<view class="btn">
						在线问
					</view>
					<view class="tel">
						电话咨询
					</view>
				</view>
			</view>
			<view class="label-icon">
				<image src="../../static/other/article-label.png" mode=""></image>
				<text>楼盘导购</text>
			</view>
			<view class="agree">
				<view class="agree-box">
					<image src="../../static/other/article-agree.png" mode=""></image>
					<view class="agree-num">
						45
					</view>
				</view>
			</view>
			<view class="statement">
				<text>
					免责声明：
				</text>
				凡本站注明
				“来自：XXX(非允家新房)”的资讯稿件和图片作品，系本站转载自其它媒体，转载目的在于信息传递，并不代表本站赞同其观点和对其真实性负责。如有资讯稿件和图片作品的内容、版权以及其它问题的，请联系本站，电话：400-966-9995

			</view>
			<view class="other-tit">
				大家都在看
			</view>
			<view class="other">
				<view class="other-li">
					<view class="left">
						<view class="li-tit">
							学区房可不是那么好买的！这篇防坑指南请收好学区房可不是那么好买的！这篇防坑指南请收好
						</view>
						<view class="li-icons">
							<text>允家新房</text>
							<text>2019-05-24</text>
						</view>
					</view>
					<view class="right">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
				</view>
				<view class="other-li">
					<view class="left">
						<view class="li-tit">
							学区房可不是那么好买的！这篇防坑指南请收好学区房可不是那么好买的！这篇防坑指南请收好
						</view>
						<view class="li-icons">
							<text>楼盘签约</text>
							<text>楼盘签约</text>
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
				jkl: '<p>5555555</p>'
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

		.tit {
			color: #323333;
			font-size: 36rpx;
			line-height: 54rpx;
			font-weight: bold;
			margin-top: 28rpx;
			margin-bottom: 38rpx;
		}

		.infos {
			color: #969899;
			font-size: 24rpx;

			.right {
				float: right;
			}
		}

		.txtbox {
			margin-top: 38rpx;
			background-color: #F7F7F7;
			padding: 30rpx;
			color: #646566;
			font-size: 28rpx;
			line-height: 48rpx;

			text {
				color: #40A2F4;
			}
		}

		.label {
			.label-tit {
				color: #303233;
				font-size: 30rpx;
			}

			.label-li {
				color: #969899;
				font-size: 30rpx;
				margin-right: 24rpx;
			}
		}
		.build {
			padding: 24rpx 24rpx 36rpx 24rpx;
			box-shadow: 0px 0px 38rpx 2rpx rgba(0, 0, 0, 0.03);
			border-radius: 24rpx;
			margin-top: 48rpx;
			.top {
				display: flex;
				margin-bottom: 32rpx;
				.left {
					image {
						width: 220rpx;
						height: 160rpx;
						border-radius: 12rpx;
						margin-right: 24rpx;
					}
				}
				.right {
					flex: 1;
					position: relative;
					top: -4rpx;
					.right-tit {
						color: #303233;
						font-size: 32rpx;
						font-size: 800;
						margin-bottom: 6rpx;
						.status {
							width: 72rpx;
							height: 34rpx;
							border-radius: 4rpx;
							text-align: center;
							line-height: 34rpx;
							float: right;
							background-color: #E9F7EA;
							color: #20C657;
							font-size: 22rpx;
							margin-top: 4rpx;
						}
					}
					.price {
						color: #FF6040;
						font-size: 26rpx;
						.big {
							font-size: 32rpx;
							font-weight: 800rpx;
						}
					}
					.right-infos {
						color: #646566;
						font-size: 24rpx;
						margin-top: 4rpx;
						margin-bottom: 4rpx;
					}
					.right-icons {
						text {
							color: #7D7F80;
							font-size: 24rpx;
							padding: 5rpx 10rpx;
							border-radius: 4rpx;
							background-color: #F5F5F5;
							margin-right: 12rpx;
						}
						.zhuang {
							color: #50B2EC;
							background-color: #F0F5F9;
						}
					}
				}
			}
			.bom {
				display: flex;
				flex-direction: row-reverse;
				view {
					width: 140rpx;
					height: 48rpx;
					border-radius: 8rpx;
					text-align: center;
					line-height: 48rpx;
					font-size: 24rpx;
					color: #FFFFFF;
				}
				.btn {
					background: linear-gradient(-45deg, #348AFF, #6ACCFF);
					margin-right: 7rpx;
					margin-left: 24rpx;
				}
				.tel {
					background: linear-gradient(270deg, #FF7519, #FFAE3D);
				}
			}
		}

		.label-icon {
			margin-top: 34rpx;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-bottom: -2rpx;
				margin-right: 8rpx;
			}

			text {
				color: #303233;
				font-size: 30rpx;
			}
		}

		.agree {
			display: flex;
			margin: 40rpx 0rpx;
			justify-content: center;

			.agree-box {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1rpx solid #E8E9ED;
				flex-direction: column;

				image {
					width: 32rpx;
					height: 32rpx;
					margin-bottom: 16rpx;
				}

				.agree-num {
					color: #969899;
					font-size: 24rpx;
				}
			}
		}

		.statement {
			border-radius: 12rpx;
			border: 2rpx dashed #EDEDED;
			padding: 28rpx;
			color: #969899;
			font-size: 24rpx;
			line-height: 40rpx;
			margin-bottom: 56rpx;
			text {
				color: #323333;
			}
		}
		.other-tit {
			color: #17191A;
			font-size: 32rpx;
			font-weight: bold;
			margin-bottom: 48rpx;
		}
		.other {
			.other-li {
				display: flex;
				margin-bottom: 18rpx;
				.left {
					flex: 1;
					.li-tit {
						color: #303233;
						font-size: 28rpx;
						line-height: 42rpx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						overflow: hidden;
						margin-bottom: 20rpx;
					}
					.li-icons {
						text {
							color: #626466;
							font-size: 20rpx;
							margin-right: 16rpx;
						}
					}
				}
				.right {
					width: 200rpx;
					margin-left: 42rpx;
					image {
						width: 100%;
						height: 140rpx;
						border-radius: 12rpx;
					}
				}
			}
		}
	}
</style>
