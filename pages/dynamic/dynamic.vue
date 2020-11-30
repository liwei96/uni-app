<template>
	<view class="dynamic">
		<view class="toptitle">
			<text>楼盘动态</text>
		</view>
		<image src="../../static/dynamic/dynamic-top.png" mode="" class="topimg"></image>
		<view class="box">
			<view class="item">
				<view class="top">
					<image src="../../static/img-2.png" mode=""></image>
					<view class="zhao"></view>
					<view class="topicon">
						最新
					</view>
					<view class="name">
						锦云澜天里
					</view>
					<view class="msg">
						<text>临安</text>
						<text>面积 90-180m²</text>
						<text>均价：17500元/m²</text>
					</view>
				</view>
				<view class="bom">
					<view class="name">锦云澜天里最新在售房源</view>
					<text class="txt">住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-115㎡三居（以上信息仅供参考，具体一房一价...</text>
					<view class="time">
						2019-04-08
					</view>
					<view class="btn">
						订阅此楼盘动态
					</view>
				</view>
			</view>
			<view class="item">
				<view class="top">
					<image src="../../static/img-2.png" mode=""></image>
					<view class="zhao"></view>
					<view class="topicon">
						最新
					</view>
					<view class="name">
						锦云澜天里
					</view>
					<view class="msg">
						<text>临安</text>
						<text>面积 90-180m²</text>
						<text>均价：17500元/m²</text>
					</view>
				</view>
				<view class="bom">
					<view class="name">锦云澜天里最新在售房源</view>
					<text class="txt">住宅产品静待推出，均价18590元/㎡，主要户型为建筑面积80-115㎡三居（以上信息仅供参考，具体一房一价...</text>
					<view class="time">
						2019-04-08
					</view>
					<view class="btn">
						订阅此楼盘动态
					</view>
				</view>
			</view>
		</view>
		<bom-nav></bom-nav>
	</view>
</template>

<script>
	import bomnav from "@/components/bomnav.vue"
	export default {
		components:{
			"bom-nav":bomnav
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
	}
	.topimg {
		width: 100%;
		height: 199.2rpx;
	}
	.box {
		padding: 0 49.8rpx;
		padding-bottom: 119.52rpx;
		.item {
			background: #FFFFFF;
			box-shadow: 0px 0px 18.92rpx 0.99rpx rgba(0, 0, 0, 0.04);
			border-radius: 15.93rpx;
			overflow: hidden;
			padding-bottom: 39.84rpx;
			margin-bottom: 49.8rpx;
			.top {
				position: relative;
				margin-bottom: 23.9rpx;
				image {
					width: 647.41rpx;
					height: 239.04rpx;
					border-radius: 15.93rpx 15.93rpx 0 0;
				}
				.zhao {
					width: 100%;
					height: 239.04rpx;
					position: absolute;
					top: 0;
					left: 0;
					background: linear-gradient(0deg, #000000);
					opacity: 0.4;
				}
				.topicon {
					position: absolute;
					width: 79.68rpx;
					height: 35.85rpx;
					background: linear-gradient(270deg, #FF7C48, #FF4234);
					border-radius: 15.93rpx 0px 15.93rpx 0px;
					text-align: center;
					line-height: 35.85rpx;
					color: #FFF2F2;
					font-size: 23.9rpx;
					left: 0;
					top: 0;
				}
				.name {
					color: #FFFFFF;
					font-size: 33.86rpx;
					font-weight: bold;
					position: absolute;
					left: 27.88rpx;
					bottom: 79.68rpx;
				}
				.msg {
					position: absolute;
					bottom: 27.88rpx;
					left: 27.88rpx;
					font-size: 25.89rpx;
					color: #FFFFFF;
					text {
						margin-right:35.85rpx;
					}
				}
			}
			.bom {
				padding: 0 29.88rpx;
				.name {
					color: #17181A;
					font-size: 31.87rpx;
					font-weight: bold;
					margin-bottom: 9.96rpx;
				}
				.txt {
					color: #4B4C4D;
					font-size: 25.89rpx;
					line-height: 37.84rpx;
					
				}
				.time {
					margin-top: 15.93rpx;
					color: #969799;
					font-size: 23.9rpx;
					margin-bottom: 29.88rpx;
				}
				.btn {
					position: relative;
					color: #40A2F4;
					font-size: 29.88rpx;
					text-align: center;
					line-height: 71.71rpx;
					width: 498rpx;
					border-radius: 11.95rpx;
					border: 0.99rpx solid #40A2F4;
					left: 50%;
					margin-left: -249rpx;
				}
			}
		}
	}
</style>
