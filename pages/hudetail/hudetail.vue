<template>
	<view class="hu_detail">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>楼盘相册</text>
		</view>
		<view class="top_img">
			<image src="http://api.jy1980.com/uploads/20191025/thumb_800_k8w4cc6l.jpeg" mode=""></image>
		</view>
		<view class="name_box">
			<view class="name">3室2厅2卫 <text>在售</text></view>
			<view class="price">约 <text>450</text>万/套</view>
			<view class="jian_box">
				<view class="line"> <text>建面：</text>80m²</view>
				<view class="line"> <text>朝向：</text>南</view>
				<view class="line"> <text>类型：</text>平层</view>
				<view class="line"> <text>层高：</text>3m</view>
				<view class="line"> <text>特色：</text>小户型舒适、宜居</view>
			</view>
			<view class="address">
				<view class="left">
					<image src="../../static/address.png" mode="" class="icon_ad"></image>
					艮山西路凯旋交叉口
				</view>
			
				<image src="../../static/content/right.png" mode="" class="right"></image>
			</view>
			<view class="bot">
				 <view class="zixun">
				 	咨询详细户型
				 </view>
				 <view class="dijia">
				 	咨询楼盘底价
				 </view>
			</view>
		</view>
		<view class="bg_hui"></view>
		
		<view class="zixunshi">
			<view class="tit">允家咨询师</view>
			<view class="tese">
				 <view class="te_01">
				 	<image src="../../static/content/zhuan.png" mode=""></image>
					专业服务
				 </view>
				 <view class="te_02">
				 	<image src="../../static/content/dingwei.png" mode=""></image>
			       区域解读
				 </view>
				 <view class="te_03">
				 	<image src="../../static/content/huxing.png" mode=""></image>
				 	户型分析
				 </view>
			</view>
			<view class="ye_one">
				<image src="../../static/content/ping_img.png" mode="" class="head_img"></image>
				<view class="peo">
					<view class="top">
						李聪然
						<text>满意度5分</text>
					</view>
					<view class="bottom">
						了解房源特色，专业挑好房
					</view>
				</view>
				<view class="bo_tel">
					<image src="../../static/content/zixun.png" mode="" class="bo_zi"></image>
					<image src="../../static/content/tel.png" mode=""></image>
				</view>
			</view>
			
			<view class="hu_fen">
				<view class="tit">户型分析</view>
				<view class="content_01">
					1.双卧朝北，三口之家均可居住在南向卧室。有两个卫生间，可供三口之家同时洗漱。
				</view>
				<view class="content_02">
					2.有两个卫生间，可供三口之家同时洗漱。
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 优惠信息 -->
		<view class="hui">
			<view class="tit">
				<text>优惠信息</text>
				<image src="../../static/content/wen.png" mode=""></image>
			</view>
			<view class="youhui_01">
				<text class="text">
					售楼处专供允家平台客户
					<text class="jie">
						（8月15日截止）
					</text>
				</text>
				<view class="right">
					<view class="ling_btn">
						领取优惠
					</view>
					<text>67人已领取</text>
				</view>
			</view>
			<view class="youhui_02">
				<text class="text">
					免费专车1对1服务限时券
					<text class="jie">
					（剩余124张）
					</text>
				</text>
				<view class="right">
					<view class="ling_btn">
						免费领取
					</view>
					<text>39人已领取</text>
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 本楼盘其它户型 -->
		<view class="hu_list_box">
			<view class="tit">
				本楼盘其它户型
			</view>
			<view class="hu_list">
				<view class="hu_one">
					<view class="left_pro">
						<image src="http://api.jy1980.com/uploads/20191025/thumb_800_k8w4cc6l.jpeg" mode=""></image>
					</view>
					<view class="right_pro">
						 <view class="name_box_box">
						 	  <text class="name">3室2厅2卫</text>
							  <text class="status">在售</text>
						 </view>
						 <view class="mian">
						 	<text class="left">建面:</text>
						 	<text class="right">135m²</text>
						 </view>
						 <view class="type">
						 	<text class="left">类型：</text>
						 	<text class="right">平层</text>
						 </view>
						 <view class="price">
						 	<text class="left">总价：</text>
						 	<text class="right">约 <text class="em">388</text>万/套</text>
						 </view>
					</view>
				</view>
				
				<view class="hu_one">
					<view class="left_pro">
						<image src="http://api.jy1980.com/uploads/20191025/thumb_800_k8w4cc6l.jpeg" mode=""></image>
					</view>
					<view class="right_pro">
						 <view class="name_box_box">
						 	  <text class="name">3室2厅2卫</text>
							  <text class="status">在售</text>
						 </view>
						 <view class="mian">
						 	<text class="left">建面：</text>
						 	<text class="right">135m²</text>
						 </view>
						 <view class="type">
						 	<text class="left">类型：</text>
						 	<text class="right">平层</text>
						 </view>
						 <view class="price">
						 	<text class="left">总价：</text>
						 	<text class="right">约 <text class="em">388</text>万/套</text>
						 </view>
					</view>
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
	  <!-- 看了该楼盘的人还看了 -->
	     <view class="see_box">
	     	<seebottom :title="title"></seebottom>
	     </view>
		<bottom></bottom>
		
	</view>
</template>

<script>
import seebottom from '../../components/mine/twosee.vue';
import bottom from '../../components/mine/bottom.vue'
	export default {
		components:{
			seebottom,
			bottom
		},
		data() {
			return {
				title:"看了该楼盘的人还看了"
			};
		}
	}
</script>

<style lang="less">
.hu_detail{
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
	.top_img{
		width: 100%;
		height: 400rpx;
		background: #F5F5F5;
		position: relative;
		image{
			width: 249rpx;
			height: 400rpx;
			position: absolute;
			left: 50%;
			margin-left: -125rpx;
		}
	}
	.name_box{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		height: 528rpx;
		width: 100%;
		background-color: #fff;
		padding-top: 50rpx;
		.name{
			font-size: 40rpx;
			font-weight: 800;
			color: #17181A;
			// margin-top: 50rpx;
			text{
				width: 68rpx;
				height: 36rpx;
				background: #2AC66D;
				border-radius: 6rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 36rpx;
				display: inline-block;
				text-align: center;
				margin-left: 24rpx;
			}
		}
		.price{
			font-size: 24rpx;
			font-weight: 500;
			color: #FE582F;
			line-height: 74rpx;
			text{
				font-size: 32rpx;
				font-weight: bold;
				color: #FE582F;
				font-weight: bold;
			}
		}
		.jian_box:after{
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
			display: block;
			content: '';
		}
		.jian_box{
			.line{
				font-size: 26rpx;
				font-weight: 500;
				color: #323233;
				width: 50%;
				float: left;
				line-height: 51rpx;
				text{
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
				}
			}
		}
		.address{
			display: flex;
			align-items: center;
			line-height: 92rpx;
			margin-bottom: 20rpx;
			justify-content: space-between;
			.left{
				.icon_ad{
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
				}
				font-size: 32rpx;
				font-weight: 500;
				color: #323233;
				
				
			}
		
			.right{
				 width: 24rpx;
				 height: 24rpx;
				 float: right;
			}
		}
		.bot{
			.zixun{
				width: 334rpx;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #3EACF0;
				float: left;
				line-height: 80rpx;
				text-align: center;
				margin-right: 22rpx;
			}
			.dijia{
				width: 334rpx;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #3EACF0;
				float: left;
				line-height: 80rpx;
				text-align: center;
			}
		}
	}
	.bg_hui{
		width: 100%;
		height:20rpx;
		background:#F7F7F7 ;
	}
	.zixunshi{
		background:#fff;
		padding-left: 30rpx;
		padding-right: 30rpx;
		width: 100%;
		box-sizing: border-box;
		.tit{
			font-size: 34rpx;
			font-weight: 800;
			color: #17181A;
			line-height: 114rpx;
		}
		.tese:after{
			display: block;
			content: '';
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
		}
		.tese{
			width: 100%;
			margin-bottom:50rpx ;
			view{
				font-size: 26rpx;
				font-weight: 500;
				color: #969699;
				float: left;
				display: flex;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
			.te_01{
				margin-right: 34rpx;
			}
			.te_02{
				margin-right: 34rpx;
			}
			.te_03{
				margin-right: 34rpx;
			}
		}
		.ye_one:after{
			display: block;
			content: '';
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
		}
		.ye_one{
			height: 80rpx;
			width: 100%;
			margin-bottom: 50rpx;
			.head_img{
				width: 80rpx;
				height: 80rpx;
				border-radius: 40rpx;
				float: left;
				margin-right: 25rpx;
			}
			.peo{
				float: left;
				.top{
					font-size: 32rpx;
					font-weight: bold;
					color: #323233;
					text{
						width: 108rpx;
						height: 30rpx;
						background: #FA941B;
						border-radius: 6rpx;
						
						font-size: 20rpx;
						font-weight: 500;
						color: #FFFFFF;
						display: inline-block;
						text-align: center;
						margin-left: 12rpx;
					}
				}
				.bottom{
					font-size: 24rpx;
					font-weight: 500;
					color: #7D7D80;
					margin-top: 10rpx;
				}
			}
			.bo_tel{
				float: left;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
		
				}
				.bo_zi{
					margin-right: 50rpx;
					margin-left: 78rpx;
				}
			}
		}
		.hu_fen{
			padding-bottom:30rpx ;
			.tit{
				font-size: 34rpx;
				font-weight: bold;
				color: #121212;
				line-height: 100rpx;
			}
			.content_01{
				font-size: 28rpx;
				font-weight: 500;
				color: #646566;
				line-height: 42rpx;
			}
			.content_02{
				font-size: 28rpx;
				font-weight: 500;
				color: #646566;
				line-height: 42rpx;
				margin-top: 30rpx;
			}
		}
		
	}
//优惠信息
	.hui{
		 width: 100%;
		 height: 475rpx;
		 background: #F7F7F7;
		 padding-left:30rpx ;
		 padding-right: 30rpx;
		 box-sizing: border-box;
		 background-color: #fff;
		 .tit{
			 text{
				 font-size: 34rpx;
				 font-weight: 800;
				 color: #19191A;
				 line-height: 114rpx;
			 }
			 image{
				width: 32rpx;
				height: 32rpx;
				margin-left: 15rpx;
			 }
		 }
		 .youhui_01{
			width: 100%;
			height: 140rpx;
			background:url(../../static/content/youhui_01.png) no-repeat ;
		    background-size: 100% 140rpx;
			margin-bottom: 40rpx;
			margin-top: 2rpx;
			position: relative;
			.text{
				 font-size: 24rpx;
				 font-weight: 400;
				 color: #E6813D;
				 position: absolute;
				 bottom: 22rpx;
				 left: 30rpx;
				.jie{
					font-size: 20rpx;
					font-weight: 500;
					color: #211C18;
				}
			}
			.right{
				.ling_btn{
					width: 150rpx;
					height: 52rpx;
					background: linear-gradient(270deg, #FF7519, #FFAE3D);
					border-radius: 26rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #FFFFFF;
					text-align: center;
					line-height: 52rpx;
					position: absolute;
					top: 28rpx;
					right: 30rpx;
				}
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #FF7519;
					position:absolute;
					right: 48rpx;
					bottom: 19rpx;
				}
			}
		 }
		 .youhui_02{
			 width: 100%;
			 height: 140rpx;
			 background:url(../../static/content/youhui_02.png) no-repeat ;
			 background-size: 100% 140rpx;
			 position: relative;
			 .text{
			 	 font-size: 24rpx;
			 	 font-weight: 400;
			 	 color:#3A80BA;
				 position: absolute;
				 bottom: 22rpx;
				 left: 30rpx;
			 	.jie{
			 		font-size: 20rpx;
			 		font-weight: 500;
			 		color: #211C18;
			 	}
			 }
			 .right{
			 	.ling_btn{
			 		width: 150rpx;
			 		height: 52rpx;
			 		background: linear-gradient(270deg, #348AFF, #6ACCFF);
			 		border-radius: 26rpx;
			 		font-size: 24rpx;
			 		font-weight: 500;
			 		color: #FFFFFF;
			 		text-align: center;
			 		line-height: 52rpx;
					position: absolute;
					top: 28rpx;
					right: 30rpx;
			 	}
			 	text{
			 		font-size: 24rpx;
			 		font-weight: 500;
			 		color: #40A2F4;
					position:absolute;
					right: 48rpx;
					bottom: 19rpx;
			 	}
			 }
		 }
	}
//本楼盘其它户型
.hu_list_box{
	padding-left: 30rpx;
	padding-right: 30rpx;
	box-sizing: border-box;
	width: 100%;
	background: #ffff;
  .tit{
	font-size: 34rpx;
	font-weight: bold;
	color: #17181A;
	line-height: 114rpx;
  }
  .hu_list{
	   .hu_one{
		   padding-bottom: 28rpx;
		   border-bottom: 1rpx solid #F2F2F2;
		   padding-top: 30rpx;
		   .left_pro{
			   width: 220rpx;
			   height: 160rpx;
			   background: #F5F5F5;
			   border-radius: 12rpx;
			   position: relative;
			   float: left;
			   margin-right: 29rpx;
			   image{
				   width: 113rpx;
				   height: 160rpx;
				   position: absolute;
				   left: 50%;
				   margin-left: -56.5rpx;
			   }
		   }
		   .right_pro{
			   .name_box_box{
				   .name{
					   font-size: 32rpx;
					   font-weight: bold;
					   color: #323233;
					   line-height: 40rpx;
				   }
				   .status{
					   width: 68rpx;
					   height: 36rpx;
					   background: #2CD264;
					   border-radius: 6rpx;
					   font-size: 22rpx;
					   font-weight: 500;
					   color: #FFFFFF;
					   line-height: 36rpx;
					   display: inline-block;
					   text-align: center;
					   float: right;
				   }
			   }
			   .mian{
				   .left{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #7D7E80;
					   line-height: 39rpx;
				   }
				   .right{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #323233;
					   line-height: 39rpx;
				   }
			   }
			   .type{
				   .left{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #7D7E80;
					   line-height: 39rpx;
				   }
				   .right{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #323233;
					   line-height: 39rpx;
				   }
			   }
			   .price{
				   line-height: 24rpx;
				   margin-top: 8rpx;
				   .left{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #7D7E80;
					   line-height: 24rpx;
				   }
				   .right{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #FE582F;
					   line-height: 24rpx;
					   .em{
						  font-size: 32rpx;
						  color:FE582F;
						  font-weight: bold;
					   }
				   }
			   }
			   
			   
		   }
	   }
	   
  }
}
.see_box{
	padding-bottom: 50rpx;
}
	
}
</style>
