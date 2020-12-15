<template>
	<view  class="wenhui">
		<view class="toptitle">
			<navigator open-type="navigateBack" delta="1" class="nav_top">
				<image src="../../static/all-back.png" mode=""></image>
				<text>我要提问</text>
			</navigator>
		</view>
		<view class="tit">
			 允家在线咨询师帮您解答
		</view>
		<view class="da_box">
			<textarea placeholder="在这里输入您的问题" class="text_box"
			v-model="text"
			maxlength="50"
			placeholder-style="color:#7D7E80;fontSize:30rpx;">
			</textarea>
			<view class="num_range">
				{{text.length}}/50
			</view>
		</view>
		<view class="tijiao_btn" @tap="SendTiwen">
			发布提问
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'',
				project_id:""
			};
		},
		onLoad(option) {
			this.project_id = option.id;
		},
		methods:{
			SendTiwen(){
				let token = uni.getStorageInfoSync('token');
				let city_id = uni.getStorageInfoSync("city");
				
					uni.request({
						url:this.apiserve+"/jy/ask",
						data:{
							 token:token,
							 project:this.project_id,
							 city:city_id,
							 question:this.text,
						},
						method:"POST",
						success:(res)=>{
							if(res.data.code == 200){
								console.log(res);
							}
						}
					})
			
			}
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
		.nav_top{
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
	}
	.tit{
		font-size: 32rpx;
		font-weight: bold;
		color: #323233;
		line-height: 88rpx;
		margin-bottom: 20rpx;
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
