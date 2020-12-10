<template>
	<view class="diandetail">
		<view class="toptitle">
			<navigator :url="`../content/content?id=${project_id}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>点评详情</text>
			</navigator>
		</view>
		<view class="top_box">
			<view class="dian_one">
				<view class="top">
					<image src="../../static/content/ping_img.png" mode=""></image>
					<view class="right_tel">
						<text class="tel">{{comment.name}}</text>
						<view class="rate" >
							<uni-rate v-model="comment.score" :margin="7"
							color="#E8EBED" active-color="#FF7519" 
							:readonly="true" :size="16"></uni-rate>
						</view>
					</view>
				</view>
				<text class="con">{{comment.content}}</text>
				<view class="gong">
					<view class="left">
						<text class="time">{{comment.time}}</text>
					</view>
					<view class="zan">
						
						<view class="zan_box" v-if="comment.my_like==1">
							<image src="../../static/content/zan.png" mode=""></image>
							{{comment.like_num}}
						</view>
						<view class="zan_box_no" v-if="comment.my_like==0">
							<image src="../../static/content/no_zan.png" mode=""></image>
							{{comment.like_num}}
						</view>
						
						<view class="dianping">
							<image src="../../static/liu.png" mode=""></image>
							{{hui_num}}
						</view>
					</view>
				</view>
			<!-- 	回复框 -->
				<view class="huifu" v-for="ite in comment.children" :key="ite.id">
					<text class="phone">{{ite.name}}:</text>
					<text class="con">{{ite.content}}</text>
					<view class="time_box">
						<text class="time"> {{ite.time}}</text>
						<text class='shan' v-if="ite.mine==1">删除</text>
					</view>
				</view>
			</view>
			
			<view class="pro_one">
				<image :src="building.img" mode=""></image>
				<view class="right_pro">
					<view class="pro_name">{{building.name}}<text class="status">{{building.state}}</text></view>
					<view class="price">{{building.price}}元/m²</view>
					<view class="type">{{building.type}}<text>|</text>{{building.cityname}}-{{building.country}}<text>|</text>{{building.area}}m² </view>
					<view class="tese">
						<text class="zhuang">{{building.decorate}}</text> 
						<text class="other" v-if="building.railway">{{building.railway}}</text>
						<text class="other" v-for="itm in building.features">{{item.value}}</text>
					</view>
				</view>
			</view>
			<!-- 免费咨询 -->
		    <view class="zixun_top">
		    	<image :src="staff.head_img" mode=""></image>
				<view class="name_box">
					<view class="name">
						<view class="top">
							{{staff.name}}
							<text>满意度{{staff.num}}分</text>
						</view>
						<view class="bottom">
							为客户提供专业的购房建议
						</view>
					</view>
					<view class="btn" @tap="baoMing(project_id,'项目点评详情页+免费咨询',104,'免费咨询')">
						免费咨询
					</view>
				</view>
		    </view>
		</view>
		<view class="bg_hui"></view>
		<view class="prolist">
				<twosee :title="title" :project="recommends"></twosee>
		</view>
		<bottom :remark="'项目点评详情页+预约看房'" :point="103" :title="'预约看房'" :pid="parseInt(project_id)" :telphone="telphone"></bottom>
		
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n"></sign>
		</wyb-popup>
	</view>
</template>
<script>
	import bottom from '../../components/mine/bottom.vue'
	import twosee from '../../components/mine/twosee.vue'
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	export default {
		data() {
			return {
				title:"猜你喜欢",
				
				common:{},
				building:{},
				comment:{},
				recommends:[],
				hui_num:0,
				staff:{},
				project_id:'',
				telphone:'',
				
				codenum:1,
				title_e:'',
				pid_d:0,
				remark_k:'',
				position_n:0,
				telphone:'',
				
			};
		},
		components:{
			twosee,
			bottom,
			uniRate,
			wybPopup,
			sign
		},
		onLoad(option) {
			console.log(option.id);
			this.getdata(option.id);
			this.project_id = option.id;
		},
		methods:{
			baoMing(pid,remark,point,title){
				this.$refs.popup.show();
				this.title_e = title;
				this.pid_d = pid;
				this.remark_k = remark;
				this.title_e  = title;
			},
			setiscode(){
				this.codenum = 0
			},
			getdata(id){
				let token = uni.getStorageInfoSync("token");
				let other = uni.getStorageInfoSync("other");
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
							console.log(res);
							this.common = res.data.common;
							this.building= res.data.building;
							this.comment= res.data.comment;
							this.recommends = res.data.recommends;
							console.log(res.data.comment.children,'hui');
							this.hui_num =  res.data.comment.children.length;
							this.staff = res.data.common.staff;
							this.telphone = res.data.common.phone;
						}
					}
				})
			},
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
	    				color: #3EACF0;
	    				line-height: 24rpx;
	    			}
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
						padding-left: 13rpx;
						padding-right: 13rpx;
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
						height: 28rpx;
						background: #FF7519;
						border-radius: 4rpx;
						font-size: 20rpx;
						font-weight: 400;
						color: #FFFFFF;
						display: inline-block;
						text-align: center;
						margin-left: 7rpx;
						padding-left: 10rpx;
						padding-right: 10rpx;
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
