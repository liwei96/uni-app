<template>
	<view class="help">
		<view class="toptitle">
			<image src="../../static/all-back1.png" mode=""></image>
			<text>帮我找房</text>
		</view>
		<image src="../../static/other/help-top.png" mode="" class="topimg"></image>
		<view class="box">
			<view class="tit">
				您能接受的总价范围是多少？
			</view>
			<view class="num">
				<text class="big">{{num}}</text>
				<text class="small">万</text>
			</view>
			<view>
				<slider value="100" @changing="sliderChange" min="20" max="500" activeColor="#3EACF0" backgroundColor="#EDEDED"
				 block-size="20" />
			</view>
			<view class="slider-msg">
				<text class="left">20万</text>
				<text class="right">500万+</text>
			</view>
			<view class="slider-txt">
				<text class="txt">您可以购买的房子总价约为</text>
				<text class="price">{{num}}</text>
				<text class="dam">万</text>
			</view>
			<view class="tit">
				您意向购买哪种户型？
			</view>
			<view class="hus">
				<view class="hu">
					一室
				</view>
				<view>
					二室
				</view>
				<view>
					三室
				</view>
				<view>
					四室
				</view>
				<view>
					五室及以上
				</view>
			</view>
			<view class="tit">
				您意向购买的区域是？
			</view>
			<view class="city" @click="show">
				<text>不限</text>
				<image src="../../static/other/help-go.png" mode=""></image>
			</view>
			<view class="tit">
				您意向购买多大面积？
			</view>
			<view class="area">
				<view>
					50m²以下
				</view>
				<view>
					50-70m²
				</view>
				<view>
					70-100m²
				</view>
				<view>
					100m²以上
				</view>
			</view>
			<view class="tit">
				您还有其它要求吗？
			</view>
			<textarea value="" placeholder="说说您的想法，让我们更好的服务您" class="remark" :adjust-position="true" placeholder-class="istxt" />

			</view>
		<view class="bom">
			<button type="primary" class="btn">提交</button>
		</view>
		<popup ref="popup" type="bottom" height="458" width="500">
		    <view class="popup-content">
		        <view class="top">
		        	<text @click="close">取消</text>
		        	<text class="yes">确定</text>
		        </view>
				<view class="content">
					<view class="con">
						<view class="active">
							不限
						</view>
						<view>
							不限
						</view>
						<view>
							不限
						</view>
						<view>
							不限
						</view>
						<view>
							不限
						</view>
					</view>
				</view>
		    </view>
		</popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	export default {
		components: {
		        "popup":wybPopup
		    },
		data() {
			return {
				num: 100
			}
		},
		methods: {
			sliderChange(e) {
				this.num = e.detail.value
			},
			show() {
				this.$refs.popup.show()
			},
			close() {
				this.$refs.popup.hide()
			}
		},
		mounted(){
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #FFFFFF;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #35ACE7;

		image {
			width: 31.87rpx;
			height: 31.87rpx;
			margin-right: 11.95rpx;
			margin-bottom: -3.98rpx;
		}
	}

	.topimg {
		width: 100%;
		height: 278.88rpx;
	}

	.box {
		padding: 0 29.88rpx;

		.tit {
			color: #303233;
			font-size: 31.87rpx;
			font-weight: bold;
			margin-top: 39.84rpx;
			margin-bottom: 39.84rpx;
		}

		.num {
			text-align: center;
			color: #3EACF0;
			font-weight: 800;

			.big {
				font-size: 47.8rpx;
			}

			.small {
				font-size: 39.84rpx;
			}
		}
		.slider-msg {
			color: #969799;
			font-size: 23.9rpx;
			overflow: hidden;
			.left {
				float: left;
			}
			.right {
				float: right;
			}
		}
		.slider-txt {
			margin-top: 19.92rpx;
			margin-bottom: 75.69rpx;
			.txt {
				color: #303233;
				font-size: 25.89rpx;
			}
			.price {
				color: #3EACF0;
				font-size: 29.88rpx;
			}
			.dam {
				color: #3EACF0;
				font-size: 27.88rpx;
			}
		}
		.hus {
			overflow: hidden;
			margin-bottom: 75.69rpx;
			view {
				width: 155.37rpx;
				height: 59.76rpx;
				border-radius: 11.95rpx;
				text-align: center;
				line-height: 59.76rpx;
				background-color: #F2F2F2;
				color: #4B4C4D;
				font-size: 23.9rpx;
				margin-right: 21.91rpx;
				float: left;
				margin-bottom: 23.9rpx;
			}
			view:nth-of-type(4n) {
				margin-right: 0;
			}
			.hu {
				border: 0.99rpx solid #3EACF0;
				height: 55.77rpx;
				line-height: 55.77rpx;
				background: #F0F7FA;
				color: #3EACF0;
			}
		}
		.city {
			height: 75.69rpx;
			display: flex;
			border-radius: 11.95rpx;
			border-radius: 1.99rpx solid #CCCCCC;
			background: #FAFAFA;
			align-items: center;
			padding-right: 19.92rpx;
			margin-bottom: 75.69rpx;
			text {
				color: #646566;
				font-size: 29.88rpx;
				margin-left: 35.85rpx;
			}
			image {
				width: 31.87rpx;
				height: 31.87rpx;
				margin-left: auto;
			}
		}
		.area {
			overflow: hidden;
			display: flex;
			view {
				width: 155.37rpx;
				height: 59.76rpx;
				text-align: center;
				line-height: 59.76rpx;
				margin-right: 21.91rpx;
				background-color: #F2F2F2;
				color: #4B4C4D;
				font-size: 23.9rpx;
			}
		}
		.remark {
			border: 0.99rpx solid #CCCCCC;
			height: 179.28rpx;
			padding-top: 19.92rpx;
			border-radius: 11.95rpx;
			background: #FAFAFA;
			padding-left: 19.92rpx;
			font-size: 27.88rpx;
			width: 667.33rpx;
			margin-bottom: 49.8rpx;
		}
		.istxt {
			color: #969899;
			font-size: 27.88rpx;
		}
	}
	.bom {
		position: fixed;
		padding: 0 4%;
		bottom: 0;
		left: 0;
		z-index: 10;
		width: 92%;
		height: 119.52rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		.btn {
			width: 100%;
			height: 79.68rpx;
			border-radius: 11.95rpx;
			background-color: #40A2F4;
			font-weight: bold;
			line-height: 79.68rpx;
			font-size: 29.88rpx;
		}
	}
	.popup-content {
		.top {
			width: 100%;
			height: 99.6rpx;
			background-color: #F5F5F5;
			display: flex;
			align-items: center;
			text {
				color: #7F7F7F;
				font-size: 31.87rpx;
				margin-left: 40rpx;
			}
			.yes {
				color: #3EACF0;
				margin-left: auto;
				margin-right: 46rpx;
			}
		}
		.content {
			height:360rpx;
			padding: 0 30rpx;
			overflow-y: auto;
			.con {
				padding: 50rpx 0;
				view {
					width: 156rpx;
					height: 60rpx;
					border-radius: 12rpx;
					text-align: center;
					line-height: 60rpx;
					background-color: #F2F2F2;
					color: #646566;
					font-size: 24rpx;
					float: left;
					margin-right: 20rpx;
					margin-bottom: 40rpx;
				}
				view:nth-of-type(4n){
					margin-right: 0;
				}
				.active {
					border: 1rpx solid #3EB3F0;
					background: #F0F7FA;
					height: 56rpx;
					line-height: 56rpx;
					color: #3EACF0;
				}
			}
		}
	}
</style>
