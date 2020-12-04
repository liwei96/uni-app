<template>
	<view class="loudong">
	    <view class="toptitle">
			<navigator url="../content/content" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>最新动态</text>
			</navigator>
	    </view>
		<view class="dong_nav" >
				<view :class="{active:dong_show}"  @click="dongClick">
					实时动态
				</view>
				<view :class="{active:push_time_show}" @click="pushTimeClick">
					加推时间
				</view>
				<view :class="{active:jiao_time_show}" @click="jiaoTimeClick">
					交房时间
				</view>
				<view :class="{active:wu_zheng_show}" @click="zhengClick">
					五证信息
				</view>
		</view>
	   <!-- 动态列表 -->
	   <view class="dong_list" v-show='dong_show'>
		   <view class="dong_list_one" v-for="item in data" :key="item.id">
				<view class="time">{{item.time}}</view>
					<view class="tit">
						<text class="box">
						</text>
						{{item.title}}
					</view>
					
					<view class="border_box">
						<view class="con">
							{{item.content}}
						</view>
						<view class="img">
							<image :src="item.img" mode=""></image>
						</view>
					</view>
		 </view>
		
	   </view>
	  <!-- 加推时间 -->
	  <view class="push_time" v-show='push_time_show'>
	  	  <view class="time_one">
	  	  	  <text class="yuan"></text>
			  加推时间：2020-06-18
	  	  </view>
	  </view>
	  <!-- 交房时间 -->
	  <view class="jiao_time" v-show="jiao_time_show">
	  	  <view class="time_one">
	  	  	  <text class="yuan"></text>
	  			  交房时间：2020-06-18
	  	  </view>
	  </view>
	  <!-- 五证信息 -->
	  <view class="wu_zheng" v-show="wu_zheng_show">
	  	  <view class="time_one">
	  	  	  <text class="yuan"></text>
	  			  临售许（2020）第00957-00960号
	  	  </view>
	  </view>
	   
	   
	   
		
		
		<bottom></bottom>
		
		
	</view>
</template>

<script>
	import bottom from '../../components/mine/bottom.vue'
	export default {
		data() {
			return {
				dong_show:true,
				push_time_show:false,
				jiao_time_show:false,
				wu_zheng_show:false,
				data:[],
				total:''
			};
		},
		components:{
			bottom
		},
		onLoad(option){
			console.log(option.id);
			this.getdata(option.id);
		},
		// onPullDownRefresh (){
		// 	console.log("触发下拉刷新了");
		// },
		onReachBottom(){
			console.log("触底了");
		},
		methods:{
			startPull(){
				uni.startPullDownRefresh({
					
				})
			},
			getdata(id){
				uni.request({
					url:this.apiserve+"/applets/dynamic/info",
					data:{
						// id 项目id
						// city 城市id
						// page 第几页
						// limit 每页几条
						id:id,
						city:"1",
						page:1, 
						limit:10, 
					},
					method:'GET',
					success: (res) => {
						if(res.data.code==200){
							console.log(res);
							this.data = res.data.data;
							this.total = res.data.total;
						}
					}
				})
			},
			dongClick(){
				this.dong_show =true;
				this.push_time_show=false;
				this.jiao_time_show=false;
				this.wu_zheng_show=false;
			},
			pushTimeClick(){
				this.dong_show =false;
				this.push_time_show=true;
				this.jiao_time_show=false;
				this.wu_zheng_show=false;
			},
			jiaoTimeClick(){
				this.dong_show =false;
				this.push_time_show=false;
				this.jiao_time_show=true;
				this.wu_zheng_show=false;
			},
			zhengClick(){
				this.dong_show =false;
				this.push_time_show=false;
				this.jiao_time_show=false;
				this.wu_zheng_show=true;
			}
		}
	}
</script>

<style lang="less">
	page{
		background: #fff;
	}
.loudong{
	.toptitle{
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #fff;
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
	.dong_nav{
		background: #fff;
		display: flex;
		justify-content: space-between;
		padding-left: 30rpx;
		padding-right: 30rpx;
		border-bottom: 1rpx solid #F5F5F5;
		height: 60rpx;
		padding-bottom: 13rpx;
		padding-top: 13rpx;
		view{
			font-size: 28rpx;
			color:#323233;
			float: left;
			padding-bottom:13rpx;
			//border-bottom:#3EACF0 4rpx solid ;
			line-height:54rpx ;
		}
		.active{
			font-size: 28rpx;
			color:#323233;
			float: left;
			padding-bottom:13rpx;
			border-bottom:#3EACF0 4rpx solid ;
			line-height:54rpx ;
			color:#3EACF0;
		}
		
	}
	//动态列表
	.dong_list{
		padding-left: 30rpx;
		padding-right: 30rpx;
		background: #fff;
		box-sizing: border-box;
		padding-bottom:110rpx ;
		.dong_list_one{
			margin-bottom: 36rpx;
				.time{
					font-size: 24rpx;
					font-weight: bold;
					color: #BBBDBF;
					line-height: 72rpx;
				}
				.tit{
					margin-bottom: 22rpx;
					.box{
						width: 20rpx;
						height: 20rpx;
						background: #FFFFFF;
						border: 4rpx solid #3EACF0;
						border-radius: 50%;
						display: inline-block;
						margin-right: 17rpx;
					}
				}
				.border_box{
					border-left: 1rpx solid #EDEDED;
					padding-left: 26rpx;
					margin-left: 9rpx;
					padding-top: 17rpx;
					.con{
						font-size: 26rpx;
						font-weight: 500;
						color: #646566;
						line-height: 38rpx;
						margin-bottom: 20rpx;
					}
					.img{
						width: 700rpx;
						image{
							width: 202rpx;
							height: 140rpx;
							border-radius: 12rpx;
							margin-right: 24rpx;
						}
					}
				}
		}
		
	}
	//加推时间
	.push_time{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background: #fff;
		.time_one{
			display: flex;
			align-items: center;
			.yuan{
				width: 20rpx;
				height: 20rpx;
				background: #FFFFFF;
				border: 4rpx solid #40A2F4;
				border-radius: 50%;
				display:inline-block;
				margin-right: 17rpx;
			}
			font-size: 30rpx;
			font-weight: 500;
			color: #323233;
			line-height: 60rpx;
		}
	}
	.jiao_time{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background: #fff;
		.time_one{
			display: flex;
			align-items: center;
			.yuan{
				width: 20rpx;
				height: 20rpx;
				background: #FFFFFF;
				border: 4rpx solid #40A2F4;
				border-radius: 50%;
				display:inline-block;
				margin-right: 17rpx;
			}
			font-size: 30rpx;
			font-weight: 500;
			color: #323233;
			line-height: 60rpx;
		}
	}
	.wu_zheng{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background: #fff;
		.time_one{
			display: flex;
			align-items: center;
			.yuan{
				width: 20rpx;
				height: 20rpx;
				background: #FFFFFF;
				border: 4rpx solid #40A2F4;
				border-radius: 50%;
				display:inline-block;
				margin-right: 17rpx;
			}
			font-size: 30rpx;
			font-weight: 500;
			color: #323233;
			line-height: 60rpx;
		}
	}
	
}
</style>
