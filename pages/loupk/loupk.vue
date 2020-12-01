<template>
	<view class="loupk">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘对比</text>
		</view>
		<view class="pro_list">
			<view class="add_tan">
				添加楼盘
			</view>
			<movable-area v-show="true">
				<movable-view direction="horizontal">
					<view class="sel_pro">
						<checkbox-group class="left_checkbox">
							<label class="left_checkbox">
								<checkbox value="cb" checked="true" />
							</label>
						</checkbox-group>
						<view class="pro_one">
							<image src="http://api.jy1980.com/uploads/20200614/thumb_800_nwj7f7nr.jpg" mode=""></image>
							<view class="right_name">
								<view class="name">锦云澜天里</view>
								<view class="price">17000元/m²</view>
								<view class="type">住宅<text class="ge">|</text>杭州-江干<text class="ge">|</text>80-140m²</view>
								<view class="tese">
									<text class="zhuang">精装</text>
									<text class="other">住宅</text>
									<text class="other">地铁楼盘</text>
								</view>
							</view>
						</view>
						<view class="delete">
							删除
						</view>
					</view>
				</movable-view>
			</movable-area>
			<movable-area v-show="true">
				<movable-view direction="horizontal">
					<view class="sel_pro">
						<checkbox-group class="left_checkbox">
							<label class="left_checkbox">
								<checkbox value="cb" checked="true" />
							</label>
						</checkbox-group>
						<view class="pro_one">
							<image src="http://api.jy1980.com/uploads/20200614/thumb_800_nwj7f7nr.jpg" mode=""></image>
							<view class="right_name">
								<view class="name">锦云澜天里</view>
								<view class="price">17000元/m²</view>
								<view class="type">住宅<text class="ge">|</text>杭州-江干<text class="ge">|</text>80-140m²</view>
								<view class="tese">
									<text class="zhuang">精装</text>
									<text class="other">住宅</text>
									<text class="other">地铁楼盘</text>
								</view>
							</view>
						</view>
						<view class="delete">
							删除
						</view>
					</view>
				</movable-view>
			</movable-area>
			
			
			
			<view class="image_wu" v-show='true'>
				<image src="../../static/other/no_pk.png" mode=""></image>
				<view class="tit">
					您尚未添加楼盘
				</view>
				<view class="pp">
					请点击添加
				</view>
			</view>
			
			<view class="tootip">
				已加入对比
			</view>
		</view>

		<view class="bottom_btn">
			开始对比
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				x: 0
			};
		}
	}
</script>

<style lang="less">
	page {
		background: #fff;
	}

	.loupk {
		.toptitle {
			color: #D4D7D9;
			font-size: 29.88rpx;
			padding: 0 29.88rpx;
			padding-top: 39.84rpx;
			line-height: 87.64rpx;
			background-color: #fff;

			image {
				width: 31.87rpx;
				height: 31.87rpx;
				margin-right: 11.95rpx;
				margin-bottom: -3.98rpx;
			}

			text {
				width: 221rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #17191A;
			}
		}

		.pro_list {
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			box-sizing: border-box;
			position: relative;
			.add_tan {
				width: 100%;
				height: 94rpx;
				background: #F0F4F7;
				border: 1rpx solid #40A2F4;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #40A2F4;
				line-height: 96rpx;
				text-align: center;
				margin-top: 48rpx;
			}

			//列表部分
			.sel_pro:after {
				height: 0;
				overflow: hidden;
				visibility: hidden;
				clear: both;
				content: '';
				display: block;
			}

			movable-area {
				height: 160rpx;
				width: 100%;
				background-color: #FFF;
				overflow: hidden;
				margin-top: 59rpx;

				movable-view {
					width: 810rpx;
					height: auto;

					.sel_pro {
						width: 120%;
						height: auto;

						.left_checkbox {
							float: left;
							margin-top: 30rpx;
							margin-right: 13rpx;
						}

						.pro_one {
							float: left;

							image {
								width: 220rpx;
								height: 160rpx;
								border-radius: 12rpx;
								float: left;
								margin-right: 30rpx;
							}

							.right_name {
								width: 610rpx;
								height: 160rpx;

								.name {
									font-size: 30rpx;
									font-weight: 800;
									color: #303233;
									line-height: 30rpx;
								}

								.price {
									font-size: 32rpx;
									font-weight: bold;
									color: #FF6040;
									line-height: 54rpx;
								}

								.type {
									font-size: 24rpx;
									font-weight: 500;
									color: #646566;
									line-height: 24rpx;
									margin-bottom: 12rpx;

									.ge {
										padding-left: 14rpx;
										padding-right: 14rpx;
									}
								}

								.tese {
									.zhuang {
										width: 68rpx;
										height: 36rpx;
										background: #F0F5F9;
										border-radius: 4rpx;
										font-size: 24rpx;
										font-weight: 500;
										color: #40A2F4;
										line-height: 36rpx;
										text-align: center;
										display: inline-block;
										margin-right: 12rpx;
									}

									.other {
										font-size: 24rpx;
										font-weight: 500;
										color: #7D7E80;
										padding: 4rpx 12rpx;
										background: #F5F5F5;
										margin-right: 12rpx;
										border-radius: 4rpx;
									}
								}
							}
						}

						.delete {
							width: 120rpx;
							height: 160rpx;
							background: #FF4040;
							font-size: 28rpx;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 160rpx;
							text-align: center;
							float: left;
						}


					}




				}

			}
			
			.image_wu{
				width: 400rpx;
				position:absolute;
				left: 50%;
				transform: translate(-50%,0);
				top: 238rpx;
				image{
					width: 400rpx;
					height: 400rpx;
				}
				.tit{
					font-size: 32rpx;
					font-weight: bold;
					color: #323233;
					line-height: 32rpx;
					text-align: center;
				}
				.pp{
					font-size: 26rpx;
					font-weight: 500;
					color: #969799;
					line-height: 76rpx;
					text-align: center;
				}
			}
			
			.tootip{
				width: 260rpx;
				height: 100rpx;
				background: rgba(0, 0, 0, 0.8);
				border-radius: 8rpx;
				font-size: 32rpx;
				font-weight: 400;
				color: #E6E6E6;
				line-height: 100rpx;
				text-align: center;
				position: absolute;
				transform: translate(-50%,0);
				left: 50%;
			}
			
			
			
		}

		//按钮
		.bottom_btn {
			width: 690rpx;
			height: 80rpx;
			margin-left: 30rpx;
			background: #B2DCFF;
			border-radius: 12rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			position: fixed;
			bottom: 30rpx;
		}

	}
</style>
