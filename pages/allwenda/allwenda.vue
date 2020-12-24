<template>
	<view class="allwenda">
		<view class="toptitle">
			<navigator :url="`../content/content?id=${project_id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back1.png" mode=""></image>
				<text>楼盘问问</text>
			</navigator>
		</view>
		<view class="img_box">
			<image src="../../static/other/all_wen_top.png" mode=""></image>
		</view>
		<view class="wen_list">
			<template v-for="item in data">
				<view class="list_one" v-if="item.answer!==''" :key="item.id">
					<navigator :url="`../wendadetail/wendadetail?id=${item.id}`">
						<view class="tit">
							<text class="wen">问</text>
							{{item.question}}
						</view>
						<view class="da">
							<view class="top">
								<image :src="item.staff.head_img" mode=""></image>
								<view class="rig">
									<view class="name_box">
									    {{item.staff.name}}
										<text>专业解答</text>
									</view>
									<view class="pp">
										咨询师帮您在线解答
									</view>
								</view>
							</view>
							<view class="bottom" >
								{{item.answer.substring(0,42)}}
								<text v-if="item.answer.length>=42" >[全文]</text>
							</view>
						</view>
					</navigator>
				</view>
			</template>
			<!-- 没回答的 -->
			<template v-for="item in data">
				<view class="list_one_no" v-if="item.answer==''">
						<view class="tit">
							<navigator :url="`../wendadetail/wendadetail?id=${item.id}`">
							     <text class="wen">问</text>
								  {{item.question}}
							</navigator>
						</view>
						<view class="da_box">
							<view class="da">
								我来回答
							</view>
						</view>
				</view>
			</template>
			<!-- 允家房友 -->
			<!-- <view class="list_one_yun">
					<view class="tit">
						<text class="wen">问</text>
						 本项目厨房管道的排风原理和方式是什么？会不
						会出现油烟倒灌情况?
					</view>
					<view class="da">
						<view class="top">
							<image src="../../static/content/ping_img.png" mode=""></image>
							<view class="rig">
								<view class="name_box">
									167****4567
								</view>
								<view class="pp">
									允家房友
								</view>
							</view>
						</view>
						<view class="bottom">
							厨房排气道采用等截面变压式排气道，并在进气口设置可调变压防火止回阀，在管道内部，气...
						</view>
					</view> -->
<!-- 			</view> -->
			<!-- 写问答 -->
			<view class="white_wen" @tap="goTiwen(project_id)">
				<image src="../../static/other/loudian.png" mode=""></image>
			</view>
			
			<bottom :remark="remark" :point="103" :title="'预约看房'" :pid="parseInt(project_id)" :telphone="telphone"></bottom>
		</view>
	</view>
</template>

<script>
import  bottom from '../../components/mine/bottom.vue'
var that;
export default {
	data() {
		return {
			data:[],
			project_id:'',
			remark:'',
			telphone:'',
			page:1,
			hua:true,
		};
	},
	components:{
		bottom
	},
	
	onLoad(option) {
		if(option.id==0 ||option.id==undefined || option.id==null){
			this.remark = "全部问答页+预约看房"
		}else{
			this.remark = "项目问答页+预约看房"
		}
      that = this;
	  this.getdata(option.id);
	  this.project_id = option.id;
	  console.log(this.project_id)
	},
	onReachBottom(){
		if(this.hua == true){
			this.getmore(this.project_id);
		}
	},
	methods:{
		goTiwen(id){
			uni.navigateTo({
				url:`../tiwen/tiwen?id=id`
			})
		},
		getdata(id){
			let city_id = uni.getStorageSync('city');
			let token = uni.getStorageSync('token');
			let other = uni.getStorageSync('other');
		   	let page = that.page;
			uni.request({
				url:that.apiserve+"/applets/question/list",
				data:{
					city:city_id,
					page:page,
					limit:"10",
					project:id,  //如果是全部问答project 传0
					other:other,
					token:token,
				},
				method:"GET",
				success: (res) => {
					if(res.data.code==200){
						 that.data = res.data.data;
						 that.telphone = res.data.common.phone;
						 // #ifdef MP-BAIDU
						  let header = res.data.common.header;
						  swan.setPageInfo({
						  	title: header.title,
						  	keywords: header.keywords,
						  	description: header.description,
						  	success: res => {
						  		console.log('setPageInfo success', res);
						  	},
						  	fail: err => {
						  		console.log('setPageInfo fail', err);
						  	}
						  })
						 // #endif
					}
				},
				fail: (error) => {
					console.log(error);
				}
			})
		},
		getmore(id){
			let city_id = uni.getStorageSync('city');
			let token = uni.getStorageSync('token');
			let other = uni.getStorageSync('other');
			 that.page = that.page +1;
			uni.request({
				url:that.apiserve+"/applets/question/list",
				data:{
					city:city_id,
					page: that.page,
					limit:"10",
					project:id,  //如果是全部问答project 传0
					other:other,
					token:token,
				},
				method:"GET",
				success: (res) => {
					if(res.data.code==200){
						 console.log(res);
						 that.data = that.data.concat(res.data.data);
						 if(res.data.data.length==0){
							  that.hua = false;
						 }
					}
				},
				fail: (error) => {
					console.log(error);
				}
			})
		}
		// showQuan(){
		// 	this.old_flag = false;
		// 	this.quan_false = true;
		// }
	},
	
}
</script>

<style lang="less">
	page{
		background: #fff;
	}
.allwenda{
	.toptitle{
		color: #fff;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #36ACE7;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 30000;
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
			  color: #fff;
			}
		}
	}
	.img_box{
		margin-top: 128rpx;
		image{
		   width: 100%;
		   height: 200rpx;
		}
	}
	.wen_list{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		width: 100%;
		background:#fff;
		padding-bottom: 110rpx;
		.list_one{
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
			.da{
				.top{
					width: 660rpx;
					height: 66rpx;
					padding-top: 30rpx;
					background:#F7F7F7 ;
					padding-left: 30rpx;
					border-radius:24rpx 24rpx 0rpx  0rpx;
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
							}
						}
						.pp{
							font-size: 24rpx;
							font-weight: 500;
							color: #7D7E80;
							line-height: 30rpx;
						}
						
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
					padding-top: 21rpx;
					border-radius:0rpx 0rpx 24rpx  24rpx;
					text{
						color: #628BB9;
					}
				}
			}
	  }
	  .list_one_no{
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
		  .da_box{
			  width: 100%;
			  height: 52rpx;
			  .da{
				  width: 140rpx;
				  height: 52rpx;
				  border: 1rpx solid #AFB0B3;
				  border-radius: 26rpx;
				  font-size: 24rpx;
				  font-weight: 500;
				  color: #4B4C4D;
				  text-align: center;
				  line-height: 52rpx;
				  float: right;
			  }
		  }
		  
	  }
	  .list_one_yun{
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
		 .da{
				.top{
					width: 660rpx;
					height: 66rpx;
					padding-top: 30rpx;
					background:#F7F7F7 ;
					padding-left: 30rpx;
					border-radius:24rpx 24rpx 0rpx  0rpx;
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
							line-height: 30rpx;
						}
						.pp{
							font-size: 24rpx;
							font-weight: 500;
							color: #7D7E80;
							line-height: 24rpx;
							margin-top: 14rpx;
						}
						
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
					padding-top: 21rpx;
					border-radius:0rpx 0rpx 24rpx  24rpx;
				}
			}
	  }
	  .white_wen{
		  width: 100rpx;
		  height: 100rpx;
		  position: fixed;
		  bottom: 160rpx;
		  right: 30rpx;
		  image{
			  width: 100rpx;
			  height: 100rpx;
		  }
	  }
	}
}
</style>
