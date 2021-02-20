<template>
	<view  class="wenhui">
		<!-- <view class="toptitle">
			 <view class="status_bar">
			      </view>
			<navigator open-type="navigateBack" delta="1" class="nav_top">
				<image src="../../static/all-back.png" mode=""></image>
				<text>我要回复</text>
			</navigator>
		</view> -->
		<view class="dian_box">
			<view class="tit">
				 {{huifu}}
			</view>
			<view class="da_box">
				<textarea placeholder="在这里输入您的回复" class="text_box"
				v-model="text"
				maxlength="50"
				placeholder-style="color:#7D7E80;fontSize:30rpx;">
				</textarea>
				<view class="num_range">
					{{text.length}}/50
				</view>
			</view>
			<view class="tijiao_btn" @tap="SendHuiFu">
				提交回复
			</view>
		</view>
		 <mytoast :txt="msg" ref="msg"></mytoast>
	</view>
</template>

<script>
	import mytoast from "@/components/mytoast/mytoast.vue"
	export default {
		data() {
			return {
				text:'',
				project_id:"",
				msg:"",
				huifu:"",
				huifu_id:''
			};
		},
		components:{
			mytoast
		},
		onLoad(option) {
			this.getdata(option.id);
			this.project_id = option.pid;
			this.huifu_id = option.id
		},
		methods:{
			getdata(id){
				let token = uni.getStorageSync("token");
				let other = uni.getStorageSync("other");
				uni.request({
					url:this.apiserve+"/applets/comment/detail",
				    data:{
						id:id,
						other:other,
						token:token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							this.comment= res.data.comment;
							this.huifu = res.data.comment.content;
						}
					}
				})
			},
			SendHuiFu(){
				let token = uni.getStorageSync('token');
				let city_id = uni.getStorageSync("city");
					if(this.text.length>0){
					uni.request({
						url:this.apiserve+"/comment/save",
						data:{
							 token:token,
							  pid:this.huifu_id,
							  bid:this.project_id,
							  content:this.text,
						},
						method:"POST",
						header:{
							'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
						},
						success:(res)=>{
							if(res.data.code == 200){
								this.msg = res.data.msg;
								this.$refs.msg.show();
								uni.navigateTo({
									url:"../diandetail/diandetail?id="+this.huifu_id
								})
							}else{
								this.msg = res.data.msg;
								this.$refs.msg.show();
							}
						}
					})
					}else{
						 this.msg = "提问内容不能为空";
						 this.$refs.msg.show();
					}
			
			}
		}
	}
</script>

<style lang="less">
	page{
		background:#fff;
	}
.wenhui{
	
	background: #fff;
	
	.toptitle{
		color: #fff;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 87.64rpx;
		background-color: #FFF;
		.status_bar {
		      height: var(--status-bar-height);
		      width: 100%;
		  }
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
	.dian_box{
		width: 100%;
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
	.tit{
		font-size: 32rpx;
		font-weight: bold;
		color: #323233;
		line-height: 48rpx;
		margin-bottom: 30rpx;
		margin-top:25rpx ;
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
}
</style>
