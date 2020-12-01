<template>
	<view  class="wenhui">
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>我要回答</text>
		</view>
		<view class="tit">
			<text class="wen">问</text>
			     我宁可去买周边二手房了，二手房投资更划算
		</view>
		<view class="da_box">
			<textarea placeholder="在这里输入您的解答" class="text_box"
			v-model="text"
			maxlength="50"
			placeholder-style="color:#7D7E80;fontSize:30rpx;">
			</textarea>
			<view class="num_range">
				{{text.length}}/50
			</view>
		</view>
		<view class="tijiao_btn">
			提交回答
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:''
			};
		}
	}
</script>

<style lang="less">
	page{
		background:#fff;
	}
.wenhui{
	padding-left: 30rpx;
	padding-right: 30rpx;
	background: #fff;
	box-sizing: border-box;
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
		margin-bottom: 40rpx;
		margin-top: 32rpx;
	}
	.da_box{
		width: 100%;
		height: 320rpx;
		position: relative;
		.text_box{
			width: 630rpx;
			height: 290rpx;
			background:#F7F7F7 ;
			padding-top:30rpx ;
			padding-left: 30rpx;
			padding-right: 30rpx;
		}
		.num_range{
			font-size: 24rpx;
			font-weight: 400;
			color: #969799;
			position: absolute;
			right: 20rpx;
			bottom: 17rpx;
		}
	}
	.tijiao_btn{
		width: 100%;
		height:80rpx ;
		background:#F0F6FA ;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
		color: #40A2F4;
		text-align: center;
		margin-top: 70rpx;
	}
	
}
</style>
