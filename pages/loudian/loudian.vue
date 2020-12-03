<template>
	<view class="loudian">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘点评</text>
		</view>
		<view class="dian_list">
			<view class="dian_one">
				<view class="top">
					<image src="../../static/content/ping_img.png" mode=""></image>
					<view class="right_tel">
						<text class="tel">154****3787</text>
						<view class="rate" >
							<uni-rate v-model="value" :margin="7" 
							color="#E8EBED" active-color="#FF7519" 
							readonly="true" :size="18"></uni-rate>
						</view>
						
					</view>
				</view>
				<text class="con">马上要推出小户型了吧，感觉买个89平的楼盘就可以了，不知道公摊要多少</text>
				<view class="gong">
					<view class="left">
						<text class="time">2020-06-09</text>
						<text class="shan">删除</text>
					</view>
					<view class="zan">
						<view class="zan_box">
							<image src="../../static/content/no_zan.png" mode=""></image>
							2
						</view>
						<view class="dianping">
							<image src="../../static/liu.png" mode=""></image>
							0
						</view>
					</view>
				</view>
			</view>
			
			<view class="dian_one">
				<view class="top">
					<image src="../../static/content/ping_img.png" mode=""></image>
					<view class="right_tel">
						<text class="tel">154****3787</text>
						<view class="rate" >
						  <uni-rate v-model="value" :margin="7"
						  color="#E8EBED" active-color="#FF7519" 
						  readonly="true" :size="18"></uni-rate>
						</view>
						
					</view>
				</view>
				<text class="con">马上要推出小户型了吧，感觉买个89平的楼盘就可以了，不知道公摊要多少</text>
				<view class="gong">
					<view class="left">
						<text class="time">2020-06-09</text>
						<text class="shan">删除</text>
					</view>
					<view class="zan">
						<view class="zan_box">
							<image src="../../static/content/no_zan.png" mode=""></image>
							2
						</view>
						<view class="dianping">
							<image src="../../static/liu.png" mode=""></image>
							0
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="white_ping">
			<image src="../../static/other/white.png" mode=""></image>
		</view>
		
		<bottom></bottom>
		
	</view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue';
import bottom from '../../components/mine/bottom.vue';
	export default {
		data() {
			return {
				 ceshi1: 3,
				 value:3
			};
		},
		components:{
		    uniRate,
			bottom
		},
	}
</script>

<style lang="less">
	page{
		background-color: #fff;
	}
.loudian{
	.toptitle{
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #fff;
		image{
		 width: 31.87rpx;
		 height: 31.87rpx;
		 margin-right: 11.95rpx;
		 margin-bottom: -3.98rpx;
		}
		text{
		  width: 221rpx;
		  font-size: 32rpx;
		  font-weight: 500;
		  color: #17181A;
		}
	}
	.dian_list{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background: #fff;
		.dian_one{
			margin-top: 30rpx;
			.top:after{
				content: '';
				height: 0;
				display: block;
				visibility: hidden;
				overflow: hidden;
				clear: both;
			}
			.top{
				margin-bottom: 20rpx;
				image{
					width: 73rpx;
					height:73rpx;
					float: left;
					margin-right:23rpx ;
				}
				.right_tel{
					.tel{
						font-size: 28rpx;
						font-weight: 800;
						color: #17181A;
					}
				}
			}
			.con{
				font-size: 28rpx;
				font-weight: 500;
				color: #333333;
				line-height: 42rpx;
				
			}
			.gong:after{
				content: '';
				height: 0;
				display: block;
				visibility: hidden;
				overflow: hidden;
				clear: both;
			}
			.gong{
				margin-top: 20rpx;
				.left{
					float: left;
					.time{
						font-size: 26rpx;
						font-weight: 400;
						color: #919499;
					}
					.shan{
						font-size: 26rpx;
						font-weight: 400;
						color: #919499;
						margin-left: 20rpx;
					}
				}
				.zan{
					float: right;
					align-items: center;
					display: flex;
					.zan_box{
						display: flex;
						align-items: center;
						margin-right: 20rpx;
						image{
							width: 32rpx;
							height: 32rpx;
							margin-right:11rpx;
						}
						font-size: 24rpx;
						font-weight: 400;
						color: #95989D;
						line-height: 24rpx;
					}
					.dianping{
						display: flex;
						align-items: center;
						image{
							width: 32rpx;
							height: 32rpx;
							margin-right:11rpx;
						}
						font-size: 24rpx;
						font-weight: 400;
						color: #95989D;
						line-height: 24rpx;
					}
				}
			}
		}
	}
	.white_ping{
		width: 100rpx;
		height: 100rpx;
		position: fixed;
		bottom: 204rpx;
		right: 30rpx;
		image{
			width: 100rpx;
			height: 100rpx;
		}
	}
}
</style>
