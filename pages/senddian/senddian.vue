<template>
	<view class="senddian">
		 <view class="toptitle">
		 	<image src="../../static/all-back.png" mode=""></image>
		 	<text>楼盘点评</text>
		 </view>
		 <view class="pro">
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
			
		 </view>
		 
		 <view class="see">
		 	 <text class="tit">您看过该楼盘吗？</text>
			 <view class="wen">
			 	  <text class="active">未看房</text>
				  <text>已看房</text>
			 </view>
			 <view class="tit mine">楼盘评价</text>
			 <view class="star">
			 	<uni-rate v-model="value" :margin="7"
			 	color="#E8EBED" active-color="#FF7519" 
			 	 :size="24" @change="rateValue"></uni-rate>
			 </view>
			 <view class="textarea_box">
			 	<textarea
				placeholder-style="color:#7D7E80;font-weight:normal"
			 	placeholder="这个楼盘怎么样？我来说两句"
			 	maxlength='50'
			 	focus="true"
				v-model="text_value"
				class="textarea"/>
				<view class="num_length">
					{{text_value.length}}/50
				</view>
			 </view>
			 <view class="fabu">
			 	发布点评
			 </view>
			 
		 </view>
		 
	</view>
</view>	
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	export default {
		components:{
			uniRate
		},
		data() {
			return {
				text_value:''
			};
		},
		methods:{
			rateValue(num){
				console.log(num,'评分');
			}
		}
	}
</script>

<style lang="less">
	page{
		background: #fff;
	}
.senddian{
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
	.pro{
		padding-left: 30rpx;
		padding-right: 30rpx;
		background: #fff;
		box-sizing: border-box;
		padding-top: 24rpx;
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
	//from表单区
	.see{
		padding-left: 30rpx;
		padding-right: 30rpx;
		background: #fff;
		box-sizing: border-box;
		padding-top: 44rpx;
		.tit{
			font-size: 30rpx;
			font-weight: 500;
			color: #323233;
			line-height: 90rpx;
		}
		.wen{
			text{
				width: 140rpx;
				height: 52rpx;
				background: #F7F7F7;
				border-radius: 26rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #969699;
				display: inline-block;
				text-align: center;
				line-height: 52rpx;
			}
			text:first-child{
				margin-right: 30rpx;
			}
			.active{
				color: #3EACF0;
				background:#EBF8FF ;
			}
		}
		.mine{
			margin-top:20rpx;
		}
		.star{
			height: 100rpx;
			background: #4CD964;
		}
		.textarea_box{
			width:100%;
			height: 320rpx;
			position: relative;
			.textarea{
				width: 630rpx;
				height: 290rpx;
				background-color:#F7F7F7 ;
				border-radius: 24rpx;
				padding-top: 30rpx;
				padding-left:30rpx ;
				padding-right: 30rpx;
			}
			.num_length{
				position: absolute;
				right: 17rpx;
				bottom: 18rpx;
				color: #969799;
				font-size: 24rpx;
				line-height: 24rpx;
			}
		}
		
		.fabu{
			width: 100%;
			height: 80rpx;
			background:#F0F6FA;
			font-size: 30rpx;
			font-weight: bold;
			color: #40A2F4;
			text-align: center;
			line-height: 80rpx;
			margin-top: 70rpx;
		}
		
	}
	
	
	
	
}
</style>
