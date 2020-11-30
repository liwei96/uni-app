<template>
	<view class="weike">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>买房百科</text>
		</view>
		<view class="tit">
			<image src="../../static/other/weike-search.png" mode=""></image>
			<input type="text" value="" placeholder="搜搜你想要了解的房产知识吧" placeholder-class="txt"/>
		</view>
		<view class="uls">
			<view :class="num === 0 ? 'active':''" @click="num = 0">
				<view class="top">
					买房前
				</view>
				<view class="bom">
					相关政策、买房流程
				</view>
			</view>
			<view :class="num === 1 ? 'active1':''" @click="num = 1">
				<view class="top">
					买房中
				</view>
				<view class="bom">
					新房签约、贷款政策
				</view>
			</view>
			<view :class="num === 2 ? 'active2':''" @click="num = 2">
				<view class="top">
					买房后
				</view>
				<view class="bom">
					新房验房、还款落户
				</view>
			</view>
		</view>
		<view class="box">
			<view class="left">
				<view :class="listnum === key ? 'active':''" v-for="(item,key) in list" :key="key" @click="listnum = key">
					{{item}}
					<view class="sp">
					</view>
				</view>
			</view>
			<view class="right">
				<view class="allbox">
					<view class="li">
						<view class="img">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								杭州外地人买房需要什么条件
							</view>
							<view class="time">
								2020-08-17
							</view>
							<view class="icons">
								<text>楼盘签约</text>
								<text>楼盘签约</text>
							</view>
						</view>
					</view>
					<view class="li">
						<view class="img">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								杭州外地人买房需要什么条件
							</view>
							<view class="time">
								2020-08-17
							</view>
							<view class="icons">
								<text>楼盘签约</text>
								<text>楼盘签约</text>
							</view>
						</view>
					</view>
					<view class="li">
						<view class="img">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								杭州外地人买房需要什么条件
							</view>
							<view class="time">
								2020-08-17
							</view>
							<view class="icons">
								<text>楼盘签约</text>
								<text>楼盘签约</text>
							</view>
						</view>
					</view>
					<view class="li">
						<view class="img">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								杭州外地人买房需要什么条件
							</view>
							<view class="time">
								2020-08-17
							</view>
							<view class="icons">
								<text>楼盘签约</text>
								<text>楼盘签约</text>
							</view>
						</view>
					</view>
					<view class="li">
						<view class="img">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								杭州外地人买房需要什么条件
							</view>
							<view class="time">
								2020-08-17
							</view>
							<view class="icons">
								<text>楼盘签约</text>
								<text>楼盘签约</text>
							</view>
						</view>
					</view>
					<view class="li">
						<view class="img">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="msg">
							<view class="info-tit">
								杭州外地人买房需要什么条件
							</view>
							<view class="time">
								2020-08-17
							</view>
							<view class="icons">
								<text>楼盘签约</text>
								<text>楼盘签约</text>
							</view>
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
				num: 0,
				list: ['买房资格','买房能力','买房政策','买房流程'],
				listnum: 0
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.weike {
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
	.uls {
		display: flex;
		padding: 0 30rpx;
		padding-bottom: 24rpx;
		padding-top: 40rpx;
		border: 1rpx solid #F2F2F2;
		height: 132rpx;
		view {
			width: 214rpx;
			margin-right: 24rpx;
			.top {
				height: 92rpx;
				border-radius: 12rpx 12rpx 0 0;
				border: 2rpx solid #F2F2F2;
				text-align: center;
				line-height: 92rpx;
				color: #969899;
			}
			.bom {
				height: 36rpx;
				background-color: #40A2F4;
				text-align: center;
				line-height: 36rpx;
				color: #FFFFFF;
				font-size: 20rpx;
				border-radius: 0 0 12rpx 12rpx;
				width: 100%;
				border: 2rpx solid #40A2F4;
			}
		}
		view:nth-of-type(2) {
			.top {
				border-color: #F2F2F2;
			}
			.bom {
				background-color: #2AC66D;
				border: 2rpx solid #2AC66D;
			}
		}
		view:nth-of-type(3) {
			.top {
				border-color: #F2F2F2;
			}
			.bom {
				background-color: #FF7D26;
				border: 2rpx solid #FF7D26;
			}
		}
		.active {
			.top {
				color: #323333;
				font-weight: 800;
				border-color: #40A2F4!important;
			}
		}
		.active1 {
			.top {
				color: #323333;
				font-weight: 800;
				border-color: #2AC66D!important;
			}
		}
		.active2 {
			.top {
				color: #323333;
				font-weight: 800;
				border-color: #FF7D26!important;
			}
		}
	}
	.box {
		flex: 1;
		display: flex;
		overflow: auto;
		.left {
			width: 150rpx;
			height: 100%;
			background-color: #F2F2F2;
			view {
				height: 110rpx;
				text-align: center;
				line-height: 110rpx;
				color: #646566;
				font-size: 26rpx;
			}
			.active {
				position: relative;
				color: #40A2F4;
				font-weight: 800;
				font-size: 26rpx;
				background-color: #FFFFFF;
				.sp {
					position: absolute;
					width: 6rpx;
					height: 30rpx;
					background-color: #40A2F4;
					left: 0;
					top: 50%;
					margin-top: -15rpx;
				}
			}
		}
		.right {
			flex: 1;
			overflow: auto;
			height: 100%;
			.li {
				display: flex;
				padding-top: 30rpx;
				.img {
					margin-right: 24rpx;
					padding-left: 24rpx;
					image {
						width: 132rpx;
						height: 100rpx;
						border-radius: 6rpx;
					}
				}
				.msg {
					flex: 1;
					padding-bottom: 28rpx;
					border-bottom: 1rpx solid #F2F2F2;
					position: relative;
					top: -4rpx;
					.info-tit {
						color: #323233;
						font-size: 28rpx;
						font-weight: bold;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						margin-bottom: 16rpx;
						width: 384rpx;
					}
					.time {
						color: #969699;
						font-size: 22rpx;
						margin-bottom: 4rpx;
					}
					.icons {
						text {
							color: #7D7F80;
							font-size: 20rpx;
							background-color: #F7F7F7;
							padding: 8rpx 12rpx;
							border-radius: 4rpx;
							margin-right: 12rpx;
						}
					}
				}
			}
		}
	}
</style>
