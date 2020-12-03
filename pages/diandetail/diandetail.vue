<template>
	<view class="diandetail">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>点评详情</text>
		</view>
		<view class="top_box">
			<view class="dian_one">
				<view class="top">
					<image src="../../static/content/ping_img.png" mode=""></image>
					<view class="right_tel">
						<text class="tel">154****3787</text>
						<view class="rate" >
							<uni-rate v-model="value" :margin="7"
							color="#E8EBED" active-color="#FF7519" 
							readonly="true" :size="16"></uni-rate>
						</view>
						
					</view>
				</view>
				<text class="con">马上要推出小户型了吧，感觉买个89平的楼盘就可以了，不知道公摊要多少</text>
				<view class="gong">
					<view class="left">
						<text class="time">2020-06-09</text>
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
			<!-- 	回复框 -->
				<view class="huifu">
					<text class="phone">137****3844:</text>
					<text class="con">需要连续足额缴存24个月，纳税或社保连年，需要连续足额缴存24个月不知道公摊要多少</text>
					<view class="time_box">
						<text class="time"> 2019-04-17</text>
						<text class='shan'>删除</text>
					</view>
				</view>
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
			<!-- 免费咨询 -->
		    <view class="zixun_top">
		    	<image src="../../static/content/ping_img.png" mode=""></image>
				<view class="name_box">
					<view class="name">
						<view class="top">
							李聪然
							<text>满意度5分</text>
						</view>
						<view class="bottom">
							为客户提供专业的购房建议
						</view>
					</view>
					<view class="btn">
						免费咨询
					</view>
				</view>
		    </view>
		</view>
		<view class="bg_hui"></view>
		<view class="prolist">
				<twosee :title="title"></twosee>
		</view>
		<bottom></bottom>
	</view>
</template>
<script>
	import bottom from '../../components/mine/bottom.vue'
	import twosee from '../../components/mine/twosee.vue'
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		data() {
			return {
				title:"猜你喜欢"
			};
		},
		components:{
			twosee,
			bottom,
			uniRate
		}
	}
</script>

<style lang="less">
page{
	background: #fff;
}
.diandetail{
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
	.top_box{
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
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
			.huifu{
				padding-top: 25rpx;
				padding-bottom: 25rpx;
				padding-left: 30rpx;
				padding-right: 30rpx;
				background-color:#F7F7F7 ;
				margin-top: 28rpx;
				border-radius:24rpx ;
				.phone{
					color: #2E3033;
					font-size: 28rpx;
					font-weight: 500;
					color:#2E3033;
					line-height: 42rpx;
				}
				.con{
					color: #7D7E80;
					font-size: 28rpx;
					font-weight: 500;
					line-height: 42rpx;
				}
				
			   .time_box{
				   .time{
					   font-size: 26rpx;
					   font-weight: 400;
					   color: #7D7E80;
					   line-height: 36rpx;
					   margin-right: 20rpx;
				   }
				   .shan{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #5F7891;
					   line-height: 40rpx;
				   }
			   }
			}
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
			margin-top: 50rpx;
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
		
		
	}
	.zixun_top{
		height: 105rpx;
		padding-top: 41rpx;
		image{
			width: 64rpx;
			height: 64rpx;
			border-radius: 32rpx;
			float:left;
			margin-right: 19rpx;
		}
		.name_box{
			.name{
				float: left;
				.top{
					font-size: 30rpx;
					font-weight: 400;
					color: #121212;
					text{
						width: 100rpx;
						height: 28rpx;
						background: #FF7519;
						border-radius: 4rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #FFFFFF;
						display: inline-block;
						text-align: center;
						margin-left: 7rpx;
					}
				}
				.bottom{
					font-size: 24rpx;
					font-weight: 500;
					color: #969799;
				}
			}
			.btn{
				width: 140rpx;
				height: 52rpx;
				background: linear-gradient(-45deg, #38A7EA, #63D5FF);
				border-radius: 26rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				float: right;
				line-height: 52rpx;
				text-align: center;
				margin-top: 4rpx;
			}
		}
	}
	.bg_hui{
		width: 100%;
		height: 20rpx;
		background:#F7F7F7 ;
	}
	.prolist{
		padding-bottom: 50rpx;
	}
	
}


</style>
