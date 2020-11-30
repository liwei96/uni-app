<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>我的足迹</text>
		</view>
		<view class="recommend">
			<view class="recommend-box">
				<view class="item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-name">
							<text class="name">武林ONE</text>
							<text class="status">在售</text>
						</view>
						<text class="price">17000</text>
						<text class="psam">元/m²</text>
						<view>
							<text class="right-msg">住宅 | 杭州-江干 | 80-140m²</text>
						</view>
						<view class="right-icons">
							<text class="jing">精装</text>
							<text>1号线</text>
							<text>地铁楼盘</text>
						</view>
					</view>
				</view>
				<view class="item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-name">
							<text class="name">武林ONE</text>
							<text class="status">在售</text>
						</view>
						<text class="price">17000</text>
						<text class="psam">元/m²</text>
						<view>
							<text class="right-msg">住宅 | 杭州-江干 | 80-140m²</text>
						</view>
						<view class="right-icons">
							<text class="jing">精装</text>
							<text>1号线</text>
							<text>地铁楼盘</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="isnull">
			<image src="../../static/other/footprint-con.png" mode=""></image>
			<text>您还没有浏览记录，快去看看楼盘吧~</text>
			<view class="btn">
				去看楼盘
			</view>
		</view>
		<view class="guess">
			<view class="recommend">
				<view class="tit">
					猜你喜欢
				</view>
				<view class="recommend-box">
					<view class="item">
						<view class="left">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="right">
							<view class="right-name">
								<text class="name">武林ONE</text>
								<text class="status">在售</text>
							</view>
							<text class="price">17000</text>
							<text class="psam">元/m²</text>
							<view>
								<text class="right-msg">住宅 | 杭州-江干 | 80-140m²</text>
							</view>
							<view class="right-icons">
								<text class="jing">精装</text>
								<text>1号线</text>
								<text>地铁楼盘</text>
							</view>
						</view>
					</view>
					<view class="item">
						<view class="left">
							<image src="../../static/img-2.png" mode=""></image>
						</view>
						<view class="right">
							<view class="right-name">
								<text class="name">武林ONE</text>
								<text class="status">在售</text>
							</view>
							<text class="price">17000</text>
							<text class="psam">元/m²</text>
							<view>
								<text class="right-msg">住宅 | 杭州-江干 | 80-140m²</text>
							</view>
							<view class="right-icons">
								<text class="jing">精装</text>
								<text>1号线</text>
								<text>地铁楼盘</text>
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
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 36rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;
		font-weight: bold;
		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}
	.recommend {
		padding: 0 30rpx;
	
		.tit {
			color: #17181A;
			font-size: 33.86rpx;
			margin-bottom: 31.87rpx;
			font-weight: bold;
		}
	
		.recommend-box {
			margin-top: 31.87rpx;
		}
	
		.item {
			display: flex;
			margin-bottom: 59.76rpx;
	
			.left {
				margin-right: 27.88rpx;
	
				image {
					width: 219.12rpx;
					height: 159.36rpx;
					border-radius: 11.95rpx;
				}
			}
	
			.right {
				flex: 1;
	
				.right-name {
					position: relative;
					top: -5.97rpx
				}
	
				.name {
					color: #323233;
					font-size: 31.87rpx;
					margin-bottom: 11.95rpx;
					font-weight: 800;
				}
	
				.status {
					color: #20C657;
					font-size: 21.91rpx;
					background-color: #E6FAF0;
					width: 67.72rpx;
					height: 35.85rpx;
					border-radius: 5.97rpx;
					text-align: center;
					line-height: 35.85rpx;
					float: right;
					display: block;
				}
	
				.price {
					color: #FF6040;
					font-size: 31.87rpx;
					font-weight: 800;
				}
	
				.psam {
					color: #FF6040;
					font-size: 25.89rpx;
					font-weight: 800;
				}
	
				.right-msg {
					color: #4B4C4D;
					font-size: 23.9rpx;
					margin-bottom: 7.96rpx;
				}
	
				.right-icons {
					display: flex;
	
					text {
						padding: 5.97rpx 11.95rpx;
						color: #7D7D80;
						font-size: 21.91rpx;
						background-color: #F5F5F5;
						border-radius: 5.97rpx;
						margin-right: 11.95rpx;
					}
	
					.jing {
						background-color: #EBF8FF;
						color: #3EACF0;
					}
				}
			}
		}
	}
	.isnull {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 68rpx;
		image {
			width: 200rpx;
			height: 200rpx;
			margin-top: 100rpx;
		}
		text {
			color: #7D7E80;
			font-size: 26rpx;
			margin-bottom: 48rpx;
			margin-top: 36rpx;
		}
		.btn {
			width: 320rpx;
			height: 72rpx;
			border-radius: 36rpx;
			background-color: #3EACF0;
			text-align: center;
			line-height: 72rpx;
			color: #FFFFFF;
			font-size: 28rpx;
		}
	}
</style>
