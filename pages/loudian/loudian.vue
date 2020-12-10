<template>
	<view class="loudian">
		<view class="toptitle">
		  <navigator :url="`../content/content?id=${project_id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>楼盘点评</text>
		   </navigator>
		</view>
		<view class="dian_list">
			<view class="dian_one" v-for="item in data" :key="item.id">
				<navigator :url="`../diandetail/diandetail/?id=${item.id}`">
					<view class="top">
						<image src="../../static/content/ping_img.png" mode=""></image>
						<view class="right_tel">
							<text class="tel">{{item.name}}</text>
							<view class="rate" >
								<uni-rate v-model="item.score" :margin="7" 
								color="#E8EBED" active-color="#FF7519" 
								:readonly="true" :size="18"></uni-rate>
							</view>
							
						</view>
					</view>
					<text class="con">{{item.content}}</text>
				</navigator>
				<view class="gong">
					<view class="left">
						<text class="time">{{item.time}}</text>
						<text class="shan" v-if="item.mine==1">删除</text>
					</view>
					<view class="zan">
						<view class="zan_box_no" v-if="item.my_like==0">
							<image src="../../static/content/no_zan.png" mode=""></image>
							{{item.like_num}}
						</view>
						<view class="zan_box_zan" v-if="item.my_like==1">
							<image src="../../static/content/zan.png" mode=""></image>
							{{item.like_num}}
						</view>
						<view class="dianping">
							<image src="../../static/liu.png" mode=""></image>
							{{item.children.length}}
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class="white_ping">
			<image src="../../static/other/white.png" mode=""></image>
		</view>
		
		<bottom :remark="'项目楼盘点评页+预约看房'" :point="103" :title="'预约看房'" :pid="parseInt(project_id)" :telphone="telphone"></bottom>
		
	</view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue';
import bottom from '../../components/mine/bottom.vue';
	export default {
		data() {
			return {
				 ceshi1: 3,
				 value:3,
				 data:[],
				 project_id:"",
				 telphone:'',
				 page:1,
			};
		},
		components:{
		    uniRate,
			bottom
		},
		onLoad(option){
			this.project_id = option.id;
			let page = this.page;
			this.getdata(option.id,page);
		},
		onReachBottom(){
			console.log('滑倒低了');
			let id = this.project_id;
			this.getmore(id);
		},
		methods:{
			getdata(id,page){
				 let token = uni.getStorageInfoSync('token');
				 let other = uni.getStorageInfoSync('other');
				uni.request({
					url:this.apiserve+"/applets/comment/list",
					data:{
						id:id,   //项目id
						page:page,  //第几页
						limit:10, //每页几条
						token:token,
						other:other,
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							 console.log(res);
							 this.data = res.data.data;
							 this.telphone = res.data.common.phone;
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
			getmore(id){
				 let page = this.page + 1;
				 let token = uni.getStorageInfoSync('token');
				 let other = uni.getStorageInfoSync('other');
				uni.request({
					url:this.apiserve+"/applets/comment/list",
					data:{
						id:id,   //项目id
						page:page,  //第几页
						limit:10, //每页几条
						token:token,
						other:other,
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							 console.log(res);
							 this.data = this.data.concat(res.data.data);
							
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			}
			
		}
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
	.dian_list{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background: #fff;
		padding-bottom: 130rpx;
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
				line-height: 44rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
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
					.zan_box_no{
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
					.zan_box_zan{
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
						color: #40A2F4;
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
