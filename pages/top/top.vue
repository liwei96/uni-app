<template>
	<view class="top-view">
		<view class="toptitle">
			<text>特色好房</text>
		</view>
		<view class="top-nav">
			<view class="city">
				杭州
				<text class="down"></text>
			</view>
		</view>
		<view class="box">
			<view class="navs">
				<view class="nav active">
					热搜榜
					<text></text>
				</view>
				<view class="nav">
					人气榜
					<text></text>
				</view>
				<view class="nav">
					成交榜
					<text></text>
				</view>
			</view>
			<view class="tops">
				<view class="top">
					<view class="build">
						<image src="../../static/img-2.png" mode="" class="img"></image>
						<view class="build-msg">
							<view class="build-name">
								<text class="name">荣盛檀越府</text>
								<text class="status">在售</text>
							</view>
							<text class="price">17000</text><text class="psam">元/m²</text>
							<view class="infos">
								住宅 | 杭州-江干 | 80-140m²
							</view>
							<view class="icons">
								<text class="zhuang">精装</text>
								<text>4号线</text>
								<text>地铁楼盘</text>
							</view>
						</view>
					</view>
					<view class="top-num">
						<image src="../../static/feature/feature-card.png" mode=""></image>
						<text class="nummsg">人气榜第1名</text>
						<text class="btn">查底价</text>
					</view>
				</view>
				<view class="top">
					<view class="build">
						<image src="../../static/img-2.png" mode="" class="img"></image>
						<view class="build-msg">
							<view class="build-name">
								<text class="name">荣盛檀越府</text>
								<text class="status">在售</text>
							</view>
							<text class="price">17000</text><text class="psam">元/m²</text>
							<view class="infos">
								住宅 | 杭州-江干 | 80-140m²
							</view>
							<view class="icons">
								<text class="zhuang">精装</text>
								<text>4号线</text>
								<text>地铁楼盘</text>
							</view>
						</view>
					</view>
					<view class="top-num">
						<image src="../../static/feature/feature-card.png" mode=""></image>
						<text class="nummsg">人气榜第1名</text>
						<text class="btn">查底价</text>
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
		color: #FFFFFF;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #50B3FD;
	}

	.top-nav {
		height: 199.2rpx;
		background: url(../../static/feature/feature-top.png);
		background-size: 100%;
		position: relative;

		.city {
			position: absolute;
			background: rgba(0, 0, 0, 0.2);
			width: 103.58rpx;
			height: 37.84rpx;
			border-radius: 17.92rpx;
			color: #FFFFFF;
			font-size: 23.9rpx;
			top: 23.9rpx;
			left: 29.88rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.down {
			border: 7.96rpx solid transparent;
			border-top-color: #FFFFFF;
			margin-top: 9.96rpx;
			margin-left: 3.98rpx;
		}
	}

	.box {
		padding: 0 29.88rpx;

		.navs {
			display: flex;
			justify-content: space-around;
			height: 87.64rpx;
			align-items: center;
			margin-bottom: 29.88rpx;

			.nav {
				color: #626466;
				font-size: 29.88rpx;
			}

			.active {
				color: #3EACF0;
				font-weight: bold;
				position: relative;
				height: 100%;
				line-height: 87.64rpx;

				text {
					display: block;
					position: absolute;
					width: 49.8rpx;
					height: 4.98rpx;
					border-radius: 2.98rpx;
					background-color: #3EACF0;
					bottom: 0;
					left: 50%;
					margin-left: -24.9rpx;
				}
			}
		}

		.tops {
			.top {
				padding: 23.9rpx 25.89rpx 35.85rpx 23.9rpx;
				box-shadow: 0px 0px 18.92rpx 0.99rpx rgba(0, 0, 0, 0.03);
				border-radius: 23.9rpx;
				margin-bottom: 29.88rpx;



				.top-num {
					display: flex;
					align-items: center;

					image {
						width: 31.87rpx;
						height: 31.87rpx;
					}

					.nummsg {
						color: #D58930;
						font-size: 23.9rpx;
					}

					.btn {
						background-color: #FF6040;
						display: block;
						width: 139.44rpx;
						height: 47.8rpx;
						border-radius: 23.9rpx;
						text-align: center;
						line-height: 47.8rpx;
						color: #FFFFFF;
						font-size: 23.9rpx;
						margin-left: auto;
					}
				}
			}
		}

		.build {
			display: flex;
			margin-bottom: 31.87rpx;

			.img {
				width: 219.12rpx;
				height: 159.36rpx;
				border-radius: 11.95rpx;
				margin-right: 23.9rpx;
			}

			.build-msg {
				flex: 1;
				position: relative;
				top: -3.98rpx;

				.build-name {
					position: relative;

					.name {
						color: #303233;
						font-size: 31.87rpx;
						font-weight: bold;
					}

					.status {
						color: #20C657;
						background-color: #E6FAF0;
						padding: 5.97rpx 11.95rpx;
						font-size: 21.91rpx;
						border-radius: 5.97rpx;
						float: right;
					}
				}

				.price {
					color: #FF6040;
					font-size: 31.87rpx;
					font-weight: bold;
				}

				.psam {
					color: #FF6040;
					font-size: 25.89rpx;
					font-weight: bold;
				}

				.infos {
					margin-top: 7.96rpx;
					color: #646566;
					font-size: 25.89rpx;
					margin-bottom: 5.97rpx;
				}

				.icons {
					text {
						color: #7D7D80;
						font-size: 23.9rpx;
						padding: 5.97rpx 9.96rpx;
						background-color: #F5F5F5;
						border-radius: 5.97rpx;
						margin-right: 11.95rpx;
					}

					.zhuang {
						color: #3EACF0;
						background-color: #EBF8FF;
					}
				}
			}
		}
	}
</style>
