<template>
	<view class="about">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>预约看房</text>
		</view>
		<image src="../../static/other/about-top.png" mode="" class="topimg"></image>
		<view class="con">
			<view class="tit">
				关于我们
			</view>
			<view class="titabc">
				ABOUT US
			</view>
			<view class="toptxt">
				<view class="left">
					<image src="../../static/other/about-logo.png" mode=""></image>
				</view>
				<view class="right">
					允家是杭州易得房科技有限公司打造的一手房信息平台，集房源展示、实时咨询、房产动态跟踪、价格对比等功能于一体。
				</view>
			</view>
			<view class="item-txt">
				www.jy8006.com是我们专属的网站域名，其中“jy”是家园的缩写，“8006”则是为了纪念1980年6月我国开始正式实施住房商品化政策，这两个简写也是允家的初衷，为让更多购房者买到属于自己的家园而努力。
			</view>
			<view class="item-txt">
				允家正在打造一个全面的房产信息库，让购房这件事更透明、更简单。目前平台内汇集了碧桂园，恒大，融创，融信、绿城等众多知名房企开发的优质项目。这些楼盘的近期动态和房价变化也都能够做到第一时间更新，为购房者分享着新鲜、全面的房产资讯。而且这些项目信息全部存放在项目数据库中，通过平台的智能搜索便能快速直达。
			</view>
			<view class="item-txt">
				我们欢迎有想法有资源的人士以任意方式加入我们平台，你可以选择以分站合作运营、媒体合作，开发商直接推广合作等方式加入我们，古人云“海内存知己，天涯若比邻”，希望我们能有这个机会一起努力，共创房产新时代
			</view>
		</view>
		<view class="icons">
			<view class="item">
				<image src="../../static/other/about-1.png" mode=""></image>
				<view class="icon-tit">
					愿景
				</view>
				<view class="icon-txt">
					让购房更透明、更简单
				</view>
			</view>
			<view class="item">
				<image src="../../static/other/about-2.png" mode=""></image>
				<view class="icon-tit">
					特色
				</view>
				<view class="icon-txt">

					房源展示、实时咨询、房产
					动态等多功能于一体

				</view>
			</view>
			<view class="item">
				<image src="../../static/other/about-3.png" mode=""></image>
				<view class="icon-tit">
					使命
				</view>
				<view class="icon-txt">
					打造全面的房产信息库
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
	.about {
		background-color: #FAFAFA;
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

	.topimg {
		width: 100%;
		height: 220rpx;
	}

	.con {
		width: 630rpx;
		padding: 0 30rpx;
		height: 1145rpx;
		border-radius: 12rpx;
		box-shadow: 0px 0px 38rpx 2rpx rgba(0, 0, 0, 0.03);
		background-color: #FFFFFF;
		margin-left: 30rpx;
		position: relative;
		top: -36rpx;
		margin-bottom: 10rpx;

		.tit {
			text-align: center;
			padding-top: 20rpx;
			margin-bottom: 2rpx;
			color: #101214;
			font-size: 24rpx;
		}

		.titabc {
			color: #101214;
			font-size: 32rpx;
			text-align: center;
			font-weight: 800;
			margin-bottom: 26rpx;
		}

		.toptxt {
			display: flex;
			margin-bottom: 4rpx;

			.left {
				image {
					width: 160rpx;
					height: 160rpx;
					margin-right: 30rpx;
				}
			}

			.right {
				color: #626466;
				font-size: 26rpx;
				line-height: 46rpx;
				position: relative;
				top: -12rpx;
			}
		}

		.item-txt {
			color: #4D4D4D;
			font-size: 26rpx;
			line-height: 46rpx;
			text-indent: 52rpx;
			margin-bottom: 16rpx;
		}
	}
	.icons {
		display: flex;
		justify-content: space-around;
		padding-bottom: 40rpx;
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 240rpx;
			image {
				width: 88rpx;
				height: 88rpx;
				margin-bottom: 20rpx;
			}
			.icon-tit {
				color: #101214;
				font-size: 28rpx;
				margin-bottom: 8rpx;
			}
			.icon-txt {
				color: #626466;
				font-size: 20rpx;
				text-align: center;
				line-height: 28rpx;
			}
		}
	}
</style>
