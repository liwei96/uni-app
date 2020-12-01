<template>
	<view class="addlou">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘对比</text>
		</view>
		<view class="pro_list">
			<checkbox-group @change="getChecked">
			<view class="sel_pro">
					<label class="left_checkbox">
						<checkbox value="锦云澜天里" :checked="checked" />
					</label>
				
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
			</view>
			
			<view class="sel_pro">
					<label class="left_checkbox">
						<checkbox value="cb" :checked="checked" />
					</label>
				
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
			</view>
			</checkbox-group>
		</view>
		<view class="bg_hui"></view>
		<!-- 浏览足迹 -->
		<view class="liu_zu">
			<view class="tit">浏览足迹</view>
			<view class="sel_pro">
				<checkbox-group class="left_checkbox">
					<label class="left_checkbox">
						<checkbox value="cb" :checked="checked" />
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
			</view>
		</view>
		
	    <!-- 添加楼盘按钮 -->
	     <view class="add_btn_box">
	     	<view :class="{active:active}">
	     		添加楼盘
	     	</view>
	     </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checked:false,
				active:false,
			};
		},
		methods:{
			getChecked(val){
				if(val.detail.value.length!==0){
					 this.active=true;
				}
			}
		}
	}
</script>

<style lang="less">
	page{
		background:#fff;
	}
.addlou{
	padding-left: 30rpx;
	padding-right:30rpx;
	box-sizing: border-box;
	width: 100%;
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
			position: relative;
			//列表部分
		.sel_pro:after {
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
			content: '';
			display: block;
		}
		.sel_pro {
			width: 120%;
			height: auto;
			margin-bottom: 60rpx;
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

		}
			.sel_pro:first-child{
				margin-top: 40rpx;
			}
	
		}	
		.bg_hui{
			width:100%;
			height: 20rpx;
			background: #F7F7F7;
		}
	 //浏览足迹
	.liu_zu{
		.tit{
			font-size: 32rpx;
			font-weight: 800;
			color: #303233;
			line-height: 112rpx;
		}
		.sel_pro:after {
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
			content: '';
			display: block;
		}
		.sel_pro {
			width: 120%;
			height: auto;
			margin-bottom: 60rpx;
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
		
		}
	}
	//添加楼盘按钮
	.add_btn_box{
		width:100%;
		background: #fff;
		height: 120rpx;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		view{
			width:100%;
			height: 80rpx;
			background: #B2DCFF;
			opacity: 0.5;
			border-radius: 12rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
		}
		.active{
			background:#40A2F4;
			opacity: 1;
		}

	}
	
}
</style>
