<template>
	<view class="prodetail">
		<view class="toptitle">
			<navigator :url="`../content/content?id=${building.id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>{{building.name}}</text>
			</navigator>
		</view>
		<view class="pro_top">
			<view class="name">
				{{building.name}}
			</view>
			<view class="tese_line">
				<text class="tese">{{building.state}}</text>
				<text class="other">{{building.type}}</text>
				<text class="other">{{building.railway}}</text>
				<text class="other" v-for="(item,index) in building.features" :key="item.id" v-if="index<=3">{{item}}</text>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 基本信息 -->
		<view class="xinxi">
			<view class="tit">
				基本信息
			</view>
			<view class="dan_price">
				<text class="left">参考单价：</text>
				<text class="jia_right">
					{{building.price}}
					<text class="dan">元/m²</text>
				</text>
			</view>
			<view class="zong_price">
				<text class="left">参考总价：</text>
				<text class="jia_right">
					{{building.total_price}}
					<text class="dan">万起</text>
				</text>
				<text class="cha" @tap="baoMing(building.id,'项目详情页+查低价',105,'查低价')">查底价</text>
			</view>
			<view class="type">
				<text class="left">类       型：</text>
				  {{building.type}}
			</view>
			<view class="huxing">
				 <text class="left">户       型：</text>
				 <text class="con">{{building.room_types}}</text>
				 <view class="more" @tap="goHuxing(building.id)">
					 更多户型
				     <image src="../../static/content/right.png" mode=""></image>
				 </view>
			</view>
			<view class="address">
				 <text class="left">楼盘地址：</text>
				 <text class="add">{{building.address}}</text>
			</view>
			
		</view>
		<view class="bg_hui"></view>
		<!-- 销售信息 -->
		<view class="sales">
			<view class="tit">
				销售信息
			</view>
			<view class="open_time">
				<text class="left">开盘时间：</text>
				<text class="time">
					{{building.open_time}}
				</text>
				<text class="kai_btn" @tap="baoMing(building.id,'项目详情页+开盘通知',92,'开盘提醒我')">开盘通知</text>
			</view>
			<view class="push_time">
				<text class="left">加推时间：</text>
				<text class="time">
					{{building.push_time}}
				</text>
			</view>
			<view class="jiao_time">
				<text class="left">交房时间：</text>
				<text class="time">
					{{building.give_time}}
				</text>
			</view>
			<view class="yu_zheng">
				<text class="left">预  售  证：</text>
				<text class="zheng">
					{{building.license}}
				</text>
			</view>
			<view class="chan_nian">
				<text class="left">产权年限：</text>
				<text class="year">
					{{building.year}}年
				</text>
			</view>
			<view class="kai_shang">
				<text class="left">开  发  商：</text>
				<text class="shang">
					{{building.developer}}
				</text>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 建筑信息 -->
		<view class="jianzhu">
			<view class="tit">
				建筑信息
			</view>
			<view class="common">
				<text class="left">户型面积：</text>
				<text class="right">
					{{building.area}}m²
				</text>
			</view>
			<view class="common">
				<text class="left">建筑面积：</text>
				<text class="right">
					{{building.built_area}}m²
				</text>
			</view>
			<view class="common">
				<text class="left">容积率：</text>
				<text class="right">
					{{building.capacity_rate}}
				</text>
			</view>
			<view class="common">
				<text class="left">绿化率：</text>
				<text class="right">
					{{building.green_rate}}%
				</text>
			</view>
			<view class="common">
				<text class="left">层高：</text>
				<text class="right">
					{{building.height}}年
				</text>
			</view>
			<view class="common">
				<text class="left">车位情况：</text>
				<text class="right">
					{{building.parking_rate}}（{{building.parking_num}}个车位）
				</text>
			</view>
			<view class="common">
				<text class="left">装修状况：</text>
				<text class="right">
					{{building.decorate}}
				</text>
			</view>
			<view class="common">
				<text class="left">公交路线：</text>
				<text class="right">
					{{building.traffic}}
				</text>
			</view>
			<view class="common">
				<text class="left">物业费用：</text>
				<text class="right">
					{{building.property_fee}}元/m²月
				</text>
			</view>
			<view class="common">
				<text class="left">物业公司：</text>
				<text class="right">
					{{building.proprety_company}}
				</text>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 项目介绍  -->
		<view class="jieshao">
			<view class="tit">
				项目介绍 
			</view>
			<view class="content">
				<text class="text">{{text}}</text>
				<text class="zhan" v-show="zhan" v-if="building.introduce.length>=82" @click="showHide">[展开]</text>
			</view>
		</view>
		<bottom></bottom>
		
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n"></sign>
		</wyb-popup>
		
	</view>
</template>

<script>
	import bottom from '../../components/mine/bottom.vue';
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	export default {
		data() {
			return {
				text:'',
				building:{},
				text_all:'',
				zhan:true,
				
				codenum:1,
				title_e:'',
				pid_d:'',
				remark_k:'',
				position_n:0,
				telphone:''
			};
		},
		components:{
			 bottom,
			 wybPopup,
			 sign,
		},
		onLoad(option){
			console.log(option);
			this.getData(option.id);
			// this.text=this.text.substring(0,82);
		},
		methods:{
		
			baoMing(pid,remark,point,title){
				this.title_e = title;
				this.pid_d = pid;
				this.remark_k = remark;
				this.position_n = point;
				console.log(pid);
				this.$refs.popup.show();
			},
			setiscode(){
				this.codenum = 0
			},
			getData(id){
				let  other = uni.getStorageInfoSync("other");
				let  token =  uni.getStorageInfoSync("token");
				uni.request({
					url:this.apiserve+"/applets/building/base",
					data:{
						id:id,
						other:other,
						token:token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							 console.log(res);
						    this.building = res.data.building; 
							this.text_all = res.data.building.introduce;
							this.text = res.data.building.introduce.substring(0,82);
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
			showHide(){
				this.text = this.text_all;
				this.zhan = false;
			},
			goHuxing(id){
				// uni.navigateBack({
				// 	delta:1
				// })
				uni.navigateTo({
					url:"../prohuxing/prohuxing?id="+id
				})
			}
		}
	}
</script>

<style lang="less">
.prodetail{
	.toptitle{
		// float: left;
		// color: #17181A;
		// font-size: 32rpx;
		// padding-top:60rpx ;
		// padding-left:30rpx ;
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
	.pro_top{
		background:#fff;
		padding-left: 30rpx;
		padding-right: 30rpx;
		padding-top: 40rpx;
		padding-bottom: 32rpx;
		.name{
			font-size: 40rpx;
			font-weight: 800;
			color: #121212;
			line-height: 40rpx;
			margin-bottom: 19rpx;
		}
		.tese_line{
			.tese{
				width: 68rpx;
				height: 36rpx;
				background: #E6FAF0;
				border-radius: 6rpx;
				font-size: 22rpx;
				font-weight: 500;
				color: #2AC66D;
				text-align: center;
				line-height: 36rpx;
				display: inline-block;
				margin-right:12rpx ;
			}
			.other{
			  	font-size: 22rpx;
			  	font-weight: 500;
			  	color: #7D7D80;
				padding:8rpx 12rpx;
				background:#F5F5F5;
				margin-right:12rpx ;
			}
		}
	}
	.bg_hui{
		width: 100%;
		height: 20rpx;
		background-color:#F7F7F7;
	}
	.xinxi{
		height: 587rpx;
		width: 100%;
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #303233;
			line-height: 114rpx;
		}
		.dan_price{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.jia_right{
				font-size: 32rpx;
				font-weight: bold;
				color: #FE582F;
				line-height: 94rpx;
				.dan{
					font-size: 18rpx;
					font-weight: 400;
					color: #FE582F;
					line-height: 94rpx;
				}
			}
			
		}
		.zong_price{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.jia_right{
				font-size: 32rpx;
				font-weight: bold;
				color: #FE582F;
				line-height: 94rpx;
				.dan{
					font-size: 18rpx;
					font-weight: 400;
					color: #FE582F;
					line-height: 94rpx;
				}
			}
			.cha{
				width: 148rpx;
				height: 56rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				background-color:#F2F9FC;
				display: inline-block;
				font-size: 26rpx;
				font-weight: 500;
				color: #3EACF0;
				text-align: center;
			    line-height: 56rpx;
				float: right;
				margin-top: 20rpx;
			}
		}
		.type{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			font-size: 28rpx;
			font-weight: 500;
			color: #323233;
			line-height: 94rpx;
		}
		.huxing{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				float: left;
			    line-height: 94rpx;
			}
			.con{
				font-size: 28rpx;
				font-weight: 500;
				color: #323233;
				float: left;
				line-height: 94rpx;
			}
			.more{
				font-size: 28rpx;
				font-weight: 500;
				color: #5F7891;
				float: right;
				line-height: 94rpx;
				image{
					width: 24rpx;
					height: 24rpx;
				}
			}
		}
		.address{
			height: 94rpx;
			width: 100%;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.add{
				font-size: 28rpx;
				font-weight: 500;
				color: #323233;
				line-height: 94rpx;
				
			}
		}
	}
	//销售信息
	.sales{
		width: 100%;
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
        height: 683rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.open_time{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.time{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
			.kai_btn{
				width: 148rpx;
				height: 56rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				background-color:#F2F9FC;
				display: inline-block;
				font-size: 26rpx;
				font-weight: 500;
				color: #3EACF0;
				text-align: center;
				line-height: 56rpx;
				float: right;
				margin-top: 20rpx;
			}
		}
		.push_time{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.time{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.jiao_time{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.time{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.yu_zheng{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.zheng{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.chan_nian{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.year{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
		.kai_shang{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.shang{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
	}
	
	//建筑信息
	.jianzhu{
		width: 100%;		padding-left:30rpx;		padding-right: 30rpx;		box-sizing: border-box;		background-color: #fff;		height: 1062rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.common{
			height: 94rpx;
			border-bottom: 1rpx solid #F2F2F2;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			.left{
				font-size: 28rpx;
				font-weight: 500;
				color: #808080;
				line-height: 94rpx;
			}
			.right{
				font-size: 28rpx;
				color: #323233;
				line-height: 94rpx;
			}
		}
	}
	
	//项目介绍
	.jieshao{
		width: 100%;
		padding-left:30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		height:auto;
		margin-bottom: 120rpx;
		.tit{
			font-size: 32rpx;
			font-weight: bold;
			color: #2F3133;
			line-height: 114rpx;
		}
		.content{
			.text{
				font-size: 28rpx;
				font-weight: 500;
				color: #646566;
				line-height: 53rpx;
			}
			.zhan{
				font-size: 30rpx;
				font-weight: 500;
				color: #5F7891;
				line-height: 53rpx;
			}
		}
	}
	
}
</style>
