<template>
	<view class="about_lou">
		<view class="tit">
			{{title}}
		</view>
		<view class="pro_list">
			<view class="peo_one">
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
			<view class="peo_one">
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
	</view>
</template>

<script>
export default {
	data(){
		return{
			
		}
	},
	props:['title']
}

</script>

<style lang="less">
.about_lou{
	background-color: #fff;
	padding-left:30rpx;
	padding-right: 30rpx;
	width: 100%;
	box-sizing: border-box;
	padding-bottom: 60rpx;
	.tit{
		font-size: 34rpx;
		font-weight: 800;
		color: #17181A;
		line-height: 114rpx;
	}
	.pro_list{
		.peo_one{
			margin-bottom: 60rpx;
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
					margin-bottom: 10rpx;
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
}
</style>
