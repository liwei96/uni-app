<template>
	<view class="wendadetail">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>问答详情</text>
		</view>
		<view class="wen_top">
			<view class="tit">
				<text class="wen">问</text>
				 本项目厨房管道的排风原理和方式是什么？会不
				会出现油烟倒灌情况?
			</view>
			
			<view class="pro_one">
				<image src="http://api.jy1980.com/uploads/20191231/thumb_400_vgmq8pyf.png" mode=""></image>
				<view class="right_pro">
					<view class="pro_name">武林ONE<text class="status">在售</text></view>
					<view class="price">17000元/m²</view>
					<view class="type">住宅<text>|</text>杭州-江干<text>|</text>80-140m² </view>
					<view class="tese">
						<text class="zhuang">精装</text> 
						<text class="other">1号线</text>
						<text class="other">地铁楼盘</text>
					</view>
				</view>
			</view>
			<view class="huifu_btn">
				我来回答
			</view>
			<!-- 免费咨询 -->
			<view class="da" v-show="true">
				<view class="top">
					<view class="left_box">
						<image src="../../static/content/ping_img.png" mode=""></image>
						<view class="rig">
							<view class="name_box">
								李聪然
								<text>专业解答</text>
							</view>
							<view class="pp">
								最近咨询<text>147</text>人
							</view>
						</view>
					</view>
					<view class="right_btn">
						免费咨询
					</view>
				</view>
				<view class="top">
					<view class="left_box">
						<image src="../../static/content/ping_img.png" mode=""></image>
						<view class="rig">
							<view class="name_box">
							138****4854
							</view>
							<view class="pp">
								允家房友
							</view>
						</view>
					</view>
				</view>
				<view class="bottom">
					厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在管道内部，气...
				</view>
				
				<view class="time_box">
					<view class="time">
						2019-06-08
					</view>
					<view class="zan">
						<image src="../../static/content/zan.png" mode=""></image>
						有用(12)
					</view>
				</view>
			</view>
		</view>
		<view class="hui_bg"></view>
	<!-- 	相关楼盘问答 -->
	<view class="about_wen">
		<view class="title">
			相关楼盘问答
		</view>
		<view class="wen_tit">
			<text class="wen">问</text>
			 本项目厨房管道的排风原理和方式是什么？会不
			会出现油烟倒灌情况?
		</view>
		<view class="wen_tit">
			<text class="wen">问</text>
			融创运河印：我宁可去买周边二手房了，二手房岂不是投资更划算
		</view>
		<view class="wen_tit">
			<text class="wen">问</text>
			融创运河印:你们的底商什么时候开卖？
		</view>
		<view class="btn">
			查看杭州全部楼盘问答
		</view>
	</view>
	<view class="hui_bg"></view>
	<!-- 猜你喜欢 -->	
	<twosee :title="title"></twosee>
	<bottom></bottom>
	</view>
</template>

<script>
import bottom from "../../components/mine/bottom.vue";
import twosee from '../../components/mine/twosee.vue';
	export default {
		data() {
			return {
				title:'猜你喜欢'
			};
		},
		components:{
			bottom,
			twosee,
		}
	}
</script>

<style lang="less">
	page{
		background-color: #fff;
	}
.wendadetail{
	.toptitle{
		color: #fff;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #FFF;
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
	.wen_top{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
	   .tit{
		   .wen{
		   	width: 30rpx;
		   	height: 30rpx;
		   	background: #FF5454;
		   	border-radius: 4rpx;
		   	font-size: 20rpx;
		   	font-weight: 500;
		   	color: #FFFFFF;
		   	display: inline-block;
		   	text-align: center;
		   	line-height: 30rpx;
		   	margin-right: 25rpx;
		   }
		   font-size: 30rpx;
		   font-weight: bold;
		   color: #323233;
		   line-height: 45rpx;
		   margin-bottom: 32rpx;
		   margin-top: 32rpx;
	   }
	   .pro_one{
		   width: 630rpx;
		   height: 160rpx;
		   background: #FFFFFF;
		   box-shadow: 0rpx 0rpx 38rpx 2rpx rgba(0, 0, 0, 0.03);
		   border-radius: 24rpx;
		   padding-top:24rpx ;
		   padding-left: 30rpx;
		   padding-right: 30rpx;
		   padding-bottom: 24rpx;
		   margin-top: 40rpx;
		   margin-bottom: 40rpx;
		   image{
		   	width: 220rpx;
		   	height: 160rpx;
		   	border-radius: 12rpx;
		   	float: left;
		   	margin-right: 30rpx;
		   }
		   .right_pro{
		   	.pro_name{
		   		 font-size: 32rpx;
		   		 font-weight: 800;
		   		 color: #303233;
		   		 line-height: 32rpx;
		   		 .status{
		   		 width: 68rpx;
		   		 height: 36rpx;
		   		 background: #E6FAF0;
		   		 border-radius: 6rpx;
		   		font-size: 22rpx;
		   		font-weight: 500;
		   		color: #20C657;
		   		line-height: 36rpx;
		   		float: right;
		   		text-align: center;
		   		 }
		   	}
		   	.price{
		   		font-size: 32rpx;
		   		font-weight: 800;
		   		color: #FF6040;
		   		line-height: 56rpx;
		   	}
		   	.type{
		   		font-size: 24rpx;
		   		font-weight: 500;
		   		color: #646466;
		   		text{
		   			padding-left: 16rpx;
		   			padding-right: 16rpx;
		   		}
		   	}
		   	.tese{
		   		.zhuang{
		   			width: 68rpx;
		   			height: 36rpx;
		   			background: #EBF8FF;
		   			border-radius: 6rpx;
		   			font-size: 22rpx;
		   			font-weight: 500;
		   			color: #3EACF0;
		   			line-height: 36rpx;
		   			margin-right: 12rpx;
		   			display: inline-block;
		   			text-align: center;
		   		}
		   		.other{
		   			font-size: 22rpx;
		   			font-weight: 500;
		   			color: #7D7D80;
		   			padding:5rpx 14rpx;
		   			background-color:#F5F5F5 ;
		   			margin-right: 12rpx;
		   		}
		   	}
		   }
	   }
	   .huifu_btn{
		   width: 100%;
		   height: 80rpx;
		   background: #F0F6FA;
		   border-radius: 12rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #40A2F4;
			line-height: 80rpx;
			text-align: center;
			margin-bottom: 40rpx;
	   }
	}
	.da{
		.top{
			width: 660rpx;
			height: 105rpx;
			border-top: 1rpx solid #F2F2F2;
			padding-top: 40rpx;
			.left_box{
				image{
					width: 64rpx;
					height: 64rpx;
					border-radius: 32rpx;
					float: left;
					margin-right: 20rpx;
				}
				.rig{
					float: left;
					.name_box{
						font-size: 30rpx;
						font-weight: bold;
						color: #121212;
						text{
							width: 92rpx;
							height: 28rpx;
							background: #FFC654;
							border-radius: 4rpx;
							font-size: 20rpx;
							font-weight: 400;
							color: #FFFFFF;
							text-align: center;
							line-height: 28rpx;
							margin-left: 8rpx;
							display: inline-block;
						}
					}
					.pp{
						font-size: 24rpx;
						font-weight: 500;
						color: #7D7E80;
						line-height: 30rpx;
						text{
							color:#FF6A48;
						}
					}
					
				}
			}
			.right_btn{
				width: 140rpx;
				height: 52rpx;
				background: linear-gradient(-45deg, #38A7EA, #63D5FF);
				border-radius: 26rpx;
				line-height: 52rpx;
				text-align: center;
				float: right;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 5rpx;
			}
			

		}
		.bottom{
			font-size: 28rpx;
			font-weight: 500;
			color: #4B4C4D;
			line-height: 42rpx;
			background-color:#F7F7F7 ;
			padding-left: 30rpx;
			padding-bottom: 30rpx;
			padding-top: 30rpx;
			border-radius:24rpx;
			padding-right: 30rpx;
		}
		.time_box{
			width: 100%;
			height: 100rpx;
			.time{
				font-size: 24rpx;
				font-weight: 400;
				color: #969799;
				line-height: 100rpx;
				float: left;
			}
			.zan{
				float: right;
				display: flex;
				align-items: center;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
				font-size: 22rpx;
				font-weight: 500;
				color: #40A2F4;
				line-height: 100rpx;
			}
		}
	}
	.hui_bg{
		width: 100%;
		height:20rpx ;
		background:#F7F7F7 ;
	}
//相关楼盘问答	
	.about_wen{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing:border-box;
		width: 100%;
		padding-bottom: 40rpx;
		.title{
			font-size: 34rpx;
			font-weight: bold;
			color: #323233;
			line-height: 114rpx;
		}
		.wen_tit{
			.wen{
				width: 30rpx;
				height: 30rpx;
				background: #FF5454;
				border-radius: 4rpx;
				font-size: 20rpx;
				font-weight: 500;
				color: #FFFFFF;
				display: inline-block;
				text-align: center;
				line-height: 30rpx;
				margin-right: 25rpx;
			}
			font-size: 30rpx;
			color: #323233;
			line-height: 45rpx;
			margin-bottom: 40rpx;
			margin-top: 7rpx;
		}
		.btn{
			width: 100%;
			height: 80rpx;
			background:#F0F6FA ;
			font-size: 30rpx;
			font-weight: 400;
			color: #40A2F4;
			line-height: 80rpx;
			text-align: center;
			border-radius: 12rpx;
		}
	}
	.about_lou{
		padding-bottom: 100rpx;
	}
	
}
</style>
