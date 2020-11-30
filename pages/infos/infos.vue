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
		<view class="swiper">
			<swiper :autoplay="true" :interval="3000" :duration="1000" :circular="true" previous-margin="60rpx" next-margin="60rpx"
			 @change="setnum">
				<swiper-item v-for="(item,key) in tops" :key="key">
					<view class="swiper-item">
						<image :src="item.img" mode=""></image>
						<view class="img-msg">
							{{item.txt}}
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="swiper-num">
			<view v-for="(item,key) in tops" :key="key" :class="key === currentnum ? 'active' : ''"></view>
		</view>
		<view class="swiper-nav">
			<swiper :interval="3000" :duration="1000" display-multiple-items="4" next-margin="76rpx" previous-margin="30rpx">
				<swiper-item v-for="(item,key) in navs" :key="key">
					<view :class="navnum === key ? 'swiper-item active' : ''">{{item.name}}<view class="bom">
					</view></view>
				</swiper-item>
			</swiper>
		</view>
		<view class="lists">
			<view class="other">
				<view class="other-li">
					<view class="left">
						<view class="li-tit">
							<view>新</view>学区房可不是那么好买的！这篇防坑指南请收好学区房可不是那么好买的！这篇防坑指南请收好
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
				currentnum: 0,
				tops: [{
						img: '../../static/img-2.png',
						txt: '房地产行业集中度进一步提高百强房企市场份额升...'
					},
					{
						img: '../../static/img-2.png',
						txt: '房地产行业集中度进一步提高百强房企市场份额升...'
					},
					{
						img: '../../static/img-2.png',
						txt: '房地产行业集中度进一步提高百强房企市场份额升...'
					}
				],
				navs: [{
						id: "46",
						name: "楼盘导购",
					},
					{
						id: "48",
						name: "本地楼市",
					},
					{
						id: "49",
						name: "房企资讯",
					},
					{
						id: "50",
						name: "热点新闻",
					},
					{
						id: "54",
						name: "日报",
					},
					{
						id: "75",
						name: "周报",
					},
					{
						id: "55",
						name: "月报",
					},
					{
						id: "52",
						name: "土拍成交",
					},
					{
						id: "52",
						name: "楼盘动态",
					},
				],
				navnum:0
			}
		},
		methods: {
			setnum(e) {
				this.currentnum = e.detail.current
			}
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
		margin-bottom: 40rpx;

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

	.swiper {
		.swiper-item {
			position: relative;
			border-radius: 12rpx;
			overflow: hidden;
			height: 280rpx;
			margin: 0 15rpx;

			image {
				width: 630rpx;
				height: 280rpx;
				border-radius: 12rpx;
			}

			.img-msg {
				position: absolute;
				width: 92%;
				padding: 0 4%;
				height: 52rpx;
				background: rgba(0, 0, 0, 0.4);
				line-height: 52rpx;
				text-align: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 26rpx;
				color: #FFFFFF;
				bottom: 0;
			}
		}
	}

	.swiper-num {
		display: flex;
		justify-content: center;
		margin-bottom: 40rpx;

		view {
			width: 12rpx;
			height: 4rpx;
			border-radius: 2rpx;
			background: #F0F0F2;
			margin-right: 8rpx;
		}

		.active {
			width: 24rpx;
			height: 4rpx;
			background-color: #40A2F4;
		}
	}

	.swiper-nav {
		white-space: nowrap;
		height: 60rpx;
		margin-bottom: 50rpx;
		swiper {
			height: 60rpx;
		}
		.swiper-item {
			color: #646566;
			font-size: 30rpx;
			margin-right: 36rpx;
			height: 60rpx;
		}
		.active {
			color: #40A2F4;
			font-size: 32rpx;
			font-weight: 800;
			position: relative;
			.bom {
				position: absolute;
				width: 50rpx;
				height: 5rpx;
				border-radius: 3rpx;
				background-color: #40A2F4;
				left: 50%;
				margin-left: -25rpx;
				bottom: 0;
			}
		}
	}
	.other {
		padding: 0 30rpx;
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
					view {
						font-size: 24rpx;
						color: #FFFFFF;
						background-color: #FF4040;
						border-radius: 4rpx;
						width: 30rpx;
						height: 30rpx;
						display: inline-block;
						text-align: center;
						line-height: 30rpx;
					}
				}
				.li-icons {
					text {
						color: #626466;
						font-size: 22rpx;
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
</style>
