<template>
	<view class="dynamicdetail">
		<view class="toptitle">
			<text>动态详情</text>
		</view>
		<view class="box">
			<view class="dynamic-tit">锦云澜天里最新在售房源</view>
			<text class="txt">锦云澜天里预售证以出，一房一价表以出，首开80-89方户型三开间朝南，亚运分会场，自带大型综合体投资自住、不二之选，地铁0距离，重点学区，目前登记已经结束，24号启动摇号，26号正式开盘。详情请咨询售楼部！</text>
			<view class="time">2019-04-08</view>
			<view class="btn">
				订阅最新动态
			</view>
			<view class="build">
				<view class="left">
					<image src="../../static/img-2.png" mode=""></image>
				</view>
				<view class="right">
					<view class="right-tit">
						<text class="name">锦云澜天里</text>
						<view class="status">在售</view>
					</view>
					<view>
						<text class="big">17000</text>
						<text class="small">元/m²</text>
					</view>
					<view class="build-msg">
						住宅 | 杭州-江干 | 80-140m²
					</view>
					<view class="icons">
						<text class="zhuang">精装</text>
						<text>住宅</text>
						<text>地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="staff">
				<image src="../../static/people.png" mode=""></image>
				<view class="staffmsg">
					<text class="name">李聪然</text>
					<text class="rate">满意度5分</text>
					<view class="stafftxt">
						为客户提供专业的购房建议
					</view>
				</view>
				<view class="staffbtn">
					免费咨询
				</view>
			</view>
		</view>
		<view class="line"></view>
		<view class="box">
			<view class="other">
				<view class="tit">本楼盘户型</view>
				<view class="other-item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-tit">
							<text class="name">3室2厅2卫</text>
							<view class="status">
								在售
							</view>
						</view>
						<view class="list">
							<text class="type">建面：</text>
							<text class="key">89m²</text>
						</view>
						<view class="list">
							<text class="type">类型：</text>
							<text class="key">loft</text>
						</view>
						<view class="list">
							<text class="type">总价：</text>
							<text class="key">约</text>
							<text class="big">290</text>
							<text class="key">万/套</text>
						</view>
					</view>
				</view>
				<view class="other-item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-tit">
							<text class="name">3室2厅2卫</text>
							<view class="status">
								在售
							</view>
						</view>
						<view class="list">
							<text class="type">建面：</text>
							<text class="key">89m²</text>
						</view>
						<view class="list">
							<text class="type">类型：</text>
							<text class="key">loft</text>
						</view>
						<view class="list">
							<text class="type">总价：</text>
							<text class="key">约</text>
							<text class="big">290</text>
							<text class="key">万/套</text>
						</view>
					</view>
				</view>
				<view class="other-item">
					<view class="left">
						<image src="../../static/img-2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="right-tit">
							<text class="name">3室2厅2卫</text>
							<view class="status">
								在售
							</view>
						</view>
						<view class="list">
							<text class="type">建面：</text>
							<text class="key">89m²</text>
						</view>
						<view class="list">
							<text class="type">类型：</text>
							<text class="key">loft</text>
						</view>
						<view class="list">
							<text class="type">总价：</text>
							<text class="key">约</text>
							<text class="big">290</text>
							<text class="key">万/套</text>
						</view>
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
	.box {
		padding: 0 29.88rpx;
		.dynamic-tit {
			color: #17181A;
			font-size: 31.87rpx;
			font-weight: bold;
			margin-bottom: 31.87rpx;
			margin-top: 27.88rpx
		}
		.txt {
			color: #4B4C4D;
			font-size: 27.88rpx;
			line-height: 41.83rpx;
		}
		.time {
			margin-top: 23.9rpx;
			color: #969799;
			font-size: 23.9rpx;
			margin-bottom: 39.84rpx;
		}
		.btn {
			width: 100%;
			height: 79.68rpx;
			border-radius: 11.95rpx;
			text-align: center;
			line-height: 79.68rpx;
			background-color: #F0F6FA;
			color: #40A2F4;
			font-size: 29.88rpx;
			font-weight: bold;
		}
		.build {
			padding: 23.9rpx 29.88rpx;
			margin-top: 49.8rpx;
			display: flex;
			background: #FFFFFF;
			box-shadow: 0px 0px 18.92rpx 0.99rpx rgba(0, 0, 0, 0.03);
			border-radius: 23.9rpx;
			margin-bottom: 35.85rpx;
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
				position: relative;
				top: -3.98rpx;
				.right-tit {
					margin-bottom: 3.98rpx;
					.name {
						color: #303233;
						font-size: 29.88rpx;
						font-weight: 800;
					}
					.status {
						width: 67.72rpx;
						height: 35.85rpx;
						border-radius: 5.97rpx;
						text-align: center;
						line-height: 35.85rpx;
						background-color: #E6FAF0;
						color: #20C657;
						font-size: 21.91rpx;
						float: right;
					}
				}
				.big {
					color: #FF6040;
					font-size: 31.87rpx;
					font-weight: bold;
				}
				.small {
					color: #FF6040;
					font-size: 25.89rpx;
				}
				.build-msg {
					color: #7D7E80;
					font-size: 25.89rpx;
					margin: 3.98rpx 0;
				}
				.icons {
					text {
						padding: 5.97rpx 11.95rpx;
						color: #7D7E80;
						font-size: 23.9rpx;
						background-color: #F5F5F5;
						border-radius: 3.98rpx;
						margin-right: 11.95rpx;
					}
					.zhuang {
						color: #49ABF1;
						background-color: #F0F5F9;
					}
				}
			}
		}
		.staff {
			display: flex;
			align-items: center;
			margin-bottom: 39.84rpx;
			image {
				width: 63.74rpx;
				height: 63.74rpx;
				border-radius: 50%;
				margin-right: 15.93rpx;
			}
			.staffmsg {
				.name {
					color: #303233;
					font-size: 31.87rpx;
					font-weight: bold;
				}
				.rate {
					color: #FFFFFF;
					font-size: 19.92rpx;
					padding: 3.98rpx 7.96rpx;
					background-color: #FA941B;
					border-radius: 5.97rpx;
					margin-left: 4.98rpx;
				}
				.stafftxt {
					color: #969799;
					font-size: 23.9rpx;
					margin-top: 7.96rpx;
				}
			}
			.staffbtn {
				background: linear-gradient(-45deg, #38A7EA, #63D5FF);
				border-radius: 27.88rpx;
				width: 147.41rpx;
				height: 55.77rpx;
				text-align: center;
				line-height: 55.77rpx;
				margin-left: auto;
				color: #FFFFFF;
				font-size: 23.9rpx;
			}
		}
		.other {
			padding-bottom: 99.6rpx;
			.tit {
				color: #17181A;
				font-size: 33.86rpx;
				font-weight: bold;
				margin-top: 35.85rpx;
				margin-bottom: 43.82rpx;
			}
			.other-item {
				display: flex;
				height: 159.36rpx;
				padding-bottom: 27.88rpx;
				border-bottom: 0.99rpx solid #F2F2F2;
				margin-bottom: 29.88rpx;
				.left {
					width: 219.12rpx;
					height: 159.36rpx;
					background-color: #F5F5F5;
					text-align: center;
					border-radius: 11.95rpx;
					margin-right: 25.89rpx;
					image {
						height: 159.36rpx;
						width: 119.52rpx;
					}
				}
				.right {
					flex: 1;
					position: relative;
					top: -7.96rpx;
					.right-tit {
						margin-bottom: 7.96rpx;
						.name {
							color: #323233;
							font-size: 31.87rpx;
							font-weight: bold;
						}
						.status {
							width: 67.72rpx;
							height: 35.85rpx;
							border-radius: 5.97rpx;
							text-align: center;
							line-height: 35.85rpx;
							background-color: #2FCB72;
							color: #FFFFFF;
							font-size: 21.91rpx;
							float: right;
						}
					}
					.list {
						.type {
							color: #7D7E80;
							font-size: 23.9rpx;
						}
						.key {
							color: #323233;
							font-size: 25.89rpx;
						}
					}
					.list:nth-of-type(4){
						.key {
							color: #FF6040;
							font-size: 19.92rpx;
						}
						.big {
							color: #FF6040;
							font-size: 31.87rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
	.line {
		width: 100%;
		height: 19.92rpx;
		background-color: #F7F7F7;
	}
</style>
