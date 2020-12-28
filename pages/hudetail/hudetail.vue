<template>
	<view class="hu_detail">
		<view class="toptitle">
			<view class="status_bar">
			</view>
			<navigator  class="nav_top" open-type="navigateBack" delta="1">
				<image src="../../static/all-back.png" mode=""></image>
				<text>户型详情</text>
			</navigator>
		</view>
		<view class="top_img">
			<image :src="one.big" mode="" @tap="showbig(one.big)"></image>
		</view>
		<view class="name_box">
			<view class="name">{{one.title}} <text>{{one.state}}</text></view>
			<view class="price">约 <text>{{one.price}}</text>万/套</view>
			<view class="jian_box">
				<view class="line"> <text>建面：</text>{{one.area}}m²</view>
				<view class="line"> <text>总价：</text>约{{one.price}}万元/套</view>
				<view class="line"> <text>类型：</text>{{one.type}}</view>
				<view class="line"> <text>层高：</text>{{one.height}}</view>
			</view>
			<view class="tese_one"> <text>特色：</text>{{one.special}}</view>
			<view class="address">
				<view class="left" @tap="goaround">
					<image src="../../static/address.png" mode="" class="icon_ad"></image>
					<text>{{one.address}}</text>
				</view>
			
				<image src="../../static/content/right.png" mode="" class="right"></image>
			</view>
			<view class="bot">
				 <button  open-type="getPhoneNumber"   class="zixun" hover-class="none"
				 @getphonenumber="getPhoneNumber($event,one.bid,'楼盘户型详情页+咨询详细户型',97,'咨询户型底价')">
				 	咨询详细户型
				 </button>
				 <button open-type="getPhoneNumber" hover-class="none" class="dijia" 
				 @getphonenumber="getPhoneNumber($event,one.bid,'楼盘户型详情页+咨询楼盘底价',105,'咨询楼盘底价')">
				 	咨询楼盘底价
				 </button>
			</view>
		</view>
		<view class="bg_hui"></view>
		
		<view class="zixunshi">
			<view class="tit">允家咨询师</view>
			<view class="tese">
				 <view class="te_01">
				 	<image src="../../static/content/zhuan.png" mode=""></image>
					专业服务
				 </view>
				 <view class="te_02">
				 	<image src="../../static/content/dingwei.png" mode=""></image>
			       区域解读
				 </view>
				 <view class="te_03">
				 	<image src="../../static/content/huxing.png" mode=""></image>
				 	户型分析
				 </view>
			</view>
			<view class="ye_one">
				<image :src="staff.head_img" mode="" class="head_img"></image>
				<view class="peo">
					<view class="top">
					    {{staff.name}}
						<text>满意度{{staff.num}}分</text>
					</view>
					<view class="bottom">
						了解房源特色，专业挑好房
					</view>
				</view>
				<view class="bo_tel">
					<button open-type="getPhoneNumber" hover-class="none"
					@getphonenumber="getPhoneNumber($event,one.bid,'楼盘户型详情页+咨询服务',104,'咨询服务')"
					class="bo_zi">
						<image src="../../static/content/zixun.png" mode="" 
						></image>
					</button>
					<image src="../../static/content/tel.png" mode=""
					@tap="boTel(telphone)"></image>
				</view>
			</view>
			
			<view class="hu_fen">
				<view class="tit">户型分析</view>
				<view class="content_01">
					1.{{one.analysis}}
				</view>
				<!-- <view class="content_02">
					2.{{one.analysis[1].content}}
				</view> -->
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 优惠信息 -->
		<view class="hui">
			<view class="tit">
				<text>优惠信息</text>
				<image src="../../static/content/wen.png" mode=""></image>
			</view>
			<view class="youhui_01">
				<text class="text">
					售楼处专供允家平台客户
					<text class="jie">
						（{{num.dead_line}}截止）
					</text>
				</text>
				<view class="right">
					<button open-type="getPhoneNumber"  class="ling_btn" hover-class="none"
					@getphonenumber="getPhoneNumber($event,one.bid,'楼盘户型详情页+领取优惠',94,'领取优惠')">
						领取优惠
					</button>
					<text>{{num.receive_num}}人已领取</text>
				</view>
			</view>
			<view class="youhui_02">
				<text class="text">
					免费专车1对1服务限时券
					<text class="jie">
					（剩余{{shengnum}}张）
					</text>
				</text>
				<view class="right">
					<button class="ling_btn" open-type="getPhoneNumber"  hover-class="none" 
					@getphonenumber="getPhoneNumber($event,one.bid,'楼盘户型详情页+免费领取',95,'免费领取')">
						免费领取
					</button>
					<text>{{num.remain_num}}人已领取</text>
				</view>
			</view>
		</view>
		<view class="bg_hui"></view>
		<!-- 本楼盘其它户型 -->
		<view class="hu_list_box">
			<view class="tit">
				本楼盘其它户型
			</view>
			
			<view class="hu_list">
				<template v-if="other_rooms.length>0">
					<view class="hu_one" v-for="item in other_rooms" :key="item.id">
						<navigator :url="`../hudetail/hudetail?id=${item.id}`">
							<view class="left_pro">
								<image :src="item.small" mode=""></image>
							</view>
							<view class="right_pro">
								 <view class="name_box_box">
									  <text class="name">{{item.title}}</text>
									  <text class="status">{{item.state}}</text>
								 </view>
								 <view class="mian">
									<text class="left">建面:</text>
									<text class="right">{{item.area}}m²</text>
								 </view>
								 <view class="type">
									<text class="left">类型：</text>
									<text class="right">{{item.type}}</text>
								 </view>
								 <view class="price">
									<text class="left">总价：</text>
									<text class="right">约 <text class="em">{{item.price}}</text>万/套</text>
								 </view>
							</view>
						</navigator>
					</view>
				</template>
				
				<tempalte v-else>
					 <view class="zanwu">
					 	 暂无其他户型楼盘
					 </view>
				</tempalte>
				
			</view>
		</view>
		<view class="bg_hui"></view>
	  <!-- 看了该楼盘的人还看了 -->
	     <view class="see_box">
	     	<seebottom :title="title" :project="recommends"></seebottom>
	     </view>
		<bottom :remark="'项目户型详情页+预约看房'" :point="103" :title="'预约看房'" :pid="one.bid" :telphone="telphone"></bottom>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n" :isok="isok"></sign>
		</wyb-popup>
		<wyb-popup ref="popup1" type="center" height="1000" width="700" radius="0" :showCloseIcon="false" @hide="setiscode">
			<image :src="url" mode="" class="bigimg" @tap="hideimg"></image>
		</wyb-popup>
	</view>
</template>

<script>
import seebottom from '../../components/mine/twosee.vue';
import bottom from '../../components/mine/bottom.vue'
import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
import sign from '@/components/sign.vue'
	export default {
		components:{
			seebottom,
			bottom,
			wybPopup,
			sign
		},
		data() {
			return {
				title:"看了该楼盘的人还看了",
				num:'',
				url: '',
				one:{},
				other_rooms:[],
				recommends:[],
				num:{},
				common:{},
				staff:{},
				codenum:1,
				title_e:'',
				pid_d:0,
				remark_k:'',
				position_n:0,
				telphone:'',
				isok:0,
				shengnum:"123"
			};
		},
		onLoad(option){
			this.getdata(option.id);
		},
		methods:{
			hideimg() {
				this.$refs.popup1.hide()
			},
			showbig(url) {
				this.url = url
				this.$refs.popup1.show()
			},
			goaround() {
				let id = this.one.bid
				uni.navigateTo({
					url: "/pages/test/test?id=" + id
				})
			},
			async getPhoneNumber(e,pid,remark,point,title,type) {
				let that = this
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					that.baoMing(pid,remark,point,title)
					if(type) {
						
					}
				} else {
					let session = uni.getStorageSync('session')
					if(session){
						uni.request({
							url: 'https://api.edefang.net/applets/baidu/decrypt',
							method:'get',
							data:{
								iv: e.detail.iv,
								data: e.detail.encryptedData,
								session_key: session
							},
							success: (res) => {
								console.log(res,'session')
								let tel = res.data.mobile
								uni.setStorageSync('phone',tel)
								let openid = uni.getStorageSync('openid')
							    that.tel = tel;
								that.baoMing(pid,remark,point,title)
							}
						})
					}else {
						console.log(session,"没保存session")
						uni.login({
						  provider: 'baidu',
						  success: function (res) {
						    console.log(res.code);
							uni.request({
								url: 'https://api.edefang.net/applets/baidu/get_session_key',
								method:'get',
								data:{
									code: res.code
								},
								success: (res) => {
									console.log(res)
									uni.setStorageSync('openid',res.data.openid)
									uni.setStorageSync('session',res.data.session_key)
									uni.request({
										url:"https://api.edefang.net/applets/baidu/decrypt",
										data:{
											data: e.detail.encryptedData,
											iv:e.detail.iv,
											session_key:res.data.session_key
										},
										success: (res) => {
											console.log(res)
											let tel = res.data.mobile
											uni.setStorageSync('phone',tel)
											let openid = uni.getStorageSync('openid')
											that.$refs.sign.tel = tel
											that.baoMing(pid,remark,point,title)
										}
									})
									
								}
							})
						  }
						});
						}
					this.isok = 1
				}
			},
			boTel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel,
					success: function() {
						console.log('拨打电话');
					} //仅为示例
				});
			},
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
			getdata(id){
				uni.showLoading({
				    title: '加载中'
				});
				let that = this;
				let other = uni.getStorageSync('other')
				let token = uni.getStorageSync('token')
				uni.request({
					url:this.apiserve+"/applets/house/one",
				    data:{
						id:id,
						other:other,
						token:token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							console.log(res);
					        this.one = res.data.one,
							this.common = res.data.common;
							this.other_rooms = res.data.other_rooms;
							this.recommends = res.data.recommends;
							this.num = res.data.num;
							this.staff = res.data.common.staff;
					        this.telphone = res.data.common.phone;
							
							let id = uni.getStorageSync("sheng_num"+res.data.one.bid);
							if(id){
								this.shengnum = id;
							}else{
								this.shengnum = this.shengnum;
							}
							
							
							// #ifdef MP-BAIDU
							let header = res.data.common.header;
							   swan.setPageInfo({
							   	title: header.title,
							   	keywords: header.keywords,
							   	description: header.description,
							   	image: [that.one.small],
							   	success: res => {
							   		console.log('setPageInfo success', res);
							   	},
							   	fail: err => {
							   		console.log('setPageInfo fail', err);
							   	}
							   })
							// #endif
							
							 uni.hideLoading();
						}
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.bigimg {
		width: 100%;
		height: 100%;
	}
	button::after{
		border:none
	}
.hu_detail{
	.toptitle{
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 87.64rpx;
		background-color: #fff;
		position:fixed;
		top:0;
		width: 100%;
		z-index: 30000;
		.status_bar{
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
	.top_img{
		width: 100%;
		height: 400rpx;
		background: #F5F5F5;
		position: relative;
		margin-top: 132rpx;
		image{
			width: 249rpx;
			height: 400rpx;
			position: absolute;
			left: 50%;
			margin-left: -125rpx;
		}
	}
	.name_box{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
		height: 538rpx;
		width: 100%;
		background-color: #fff;
		padding-top: 50rpx;
		.name{
			font-size: 40rpx;
			font-weight: 800;
			color: #17181A;
			// margin-top: 50rpx;
			text{
				width: 68rpx;
				height: 36rpx;
				background: #2AC66D;
				border-radius: 6rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 36rpx;
				display: inline-block;
				text-align: center;
				margin-left: 24rpx;
			}
		}
		.price{
			font-size: 24rpx;
			font-weight: 500;
			color: #FE582F;
			line-height: 74rpx;
			text{
				font-size: 32rpx;
				font-weight: bold;
				color: #FE582F;
				font-weight: bold;
			}
		}
		.jian_box:after{
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
			display: block;
			content: '';
		}
		.jian_box{
			.line{
				font-size: 26rpx;
				font-weight: 500;
				color: #323233;
				width: 50%;
				float: left;
				line-height: 51rpx;
				text{
					font-size: 26rpx;
					font-weight: 500;
					color: #7D7E80;
				}
			}
		}
		.tese_one{
			text{
				font-size: 26rpx;
				font-weight: 500;
				color: #7D7E80;
			}
			font-size: 26rpx;
			font-weight: 500;
			color: #323233;
			width:100%;
			float: left;
			line-height: 51rpx;
		}
		.address{
			display: flex;
			align-items: center;
			// line-height: 92rpx;
			// margin-bottom: 20rpx;
			justify-content: space-between;
			width: 100%;
			.left{
				.icon_ad{
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
					margin-bottom: 28rpx;
				}
				font-size: 32rpx;
				font-weight: 500;
				color: #323233;
				// line-height: 92rpx;
				text{
					font-size: 32rpx;
					font-weight: 500;
					color: #323233;
					width:620rpx ;
					overflow: hidden;
					text-overflow:ellipsis ;
					white-space: nowrap;
					display: inline-block;
					line-height: 92rpx;
				}
				
			}
		
			.right{
				 width: 24rpx;
				 height: 24rpx;
				 float: right;
				 // margin-bottom: rpx;
			}
		}
		.bot{
			.zixun{
				width: 334rpx;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #3EACF0;
				float: left;
				line-height: 80rpx;
				text-align: center;
				margin-right: 22rpx;
			}
			.dijia{
				width: 334rpx;
				height: 80rpx;
				background: #F2F9FC;
				border-radius: 12rpx;
				font-size: 30rpx;
				font-weight: bold;
				color: #3EACF0;
				float: left;
				line-height: 80rpx;
				text-align: center;
			}
		}
	}
	.bg_hui{
		width: 100%;
		height:20rpx;
		background:#F7F7F7 ;
	}
	.zixunshi{
		background:#fff;
		padding-left: 30rpx;
		padding-right: 30rpx;
		width: 100%;
		box-sizing: border-box;
		.tit{
			font-size: 34rpx;
			font-weight: 800;
			color: #17181A;
			line-height: 114rpx;
		}
		.tese:after{
			display: block;
			content: '';
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
		}
		.tese{
			width: 100%;
			margin-bottom:50rpx ;
			view{
				font-size: 26rpx;
				font-weight: 500;
				color: #969699;
				float: left;
				display: flex;
				image{
					width: 32rpx;
					height: 32rpx;
				}
			}
			.te_01{
				margin-right: 34rpx;
			}
			.te_02{
				margin-right: 34rpx;
			}
			.te_03{
				margin-right: 34rpx;
			}
		}
		.ye_one:after{
			display: block;
			content: '';
			height: 0;
			overflow: hidden;
			visibility: hidden;
			clear: both;
		}
		.ye_one{
			height: 80rpx;
			width: 100%;
			margin-bottom: 50rpx;
			display: flex;
			.head_img{
				width: 80rpx;
				height: 80rpx;
				border-radius: 40rpx;
				float: left;
				margin-right: 25rpx;
			}
			.peo{
				float: left;
				.top{
					font-size: 32rpx;
					font-weight: bold;
					color: #323233;
					text{
						width: 115rpx;
						height: 30rpx;
						background: #FA941B;
						border-radius: 6rpx;
						// padding-left: 10rpx;
						// padding-right: 10rpx;
						font-size: 20rpx;
						font-weight: 500;
						color: #FFFFFF;
						display: inline-block;
						text-align: center;
						margin-left: 12rpx;
					}
				}
				.bottom{
					font-size: 24rpx;
					font-weight: 500;
					color: #7D7D80;
					margin-top: 10rpx;
				}
			}
			.bo_tel{
				float: left;
				display: flex;
				button{
					width: 80rpx;
					height: 80rpx;
					image{
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
			
					}
				}
				image {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
				
				}
				.bo_zi{
					margin-right: 60rpx;
					margin-left: 68rpx;
				}
			}
		}
		.hu_fen{
			padding-bottom:30rpx ;
			.tit{
				font-size: 34rpx;
				font-weight: bold;
				color: #121212;
				line-height: 100rpx;
			}
			.content_01{
				font-size: 28rpx;
				font-weight: 500;
				color: #646566;
				line-height: 42rpx;
			}
			.content_02{
				font-size: 28rpx;
				font-weight: 500;
				color: #646566;
				line-height: 42rpx;
				margin-top: 30rpx;
			}
		}
		
	}
//优惠信息
	.hui{
		 width: 100%;
		 height: 475rpx;
		 background: #F7F7F7;
		 padding-left:30rpx ;
		 padding-right: 30rpx;
		 box-sizing: border-box;
		 background-color: #fff;
		 .tit{
			 text{
				 font-size: 34rpx;
				 font-weight: 800;
				 color: #19191A;
				 line-height: 114rpx;
			 }
			 image{
				width: 32rpx;
				height: 32rpx;
				margin-left: 15rpx;
			 }
		 }
		 .youhui_01{
			width: 100%;
			height: 140rpx;
			background:url(../../static/content/youhui_01.png) no-repeat ;
		    background-size: 100% 140rpx;
			margin-bottom: 40rpx;
			margin-top: 2rpx;
			position: relative;
			.text{
				 font-size: 24rpx;
				 font-weight: 400;
				 color: #E6813D;
				 position: absolute;
				 bottom: 22rpx;
				 left: 30rpx;
				.jie{
					font-size: 20rpx;
					font-weight: 500;
					color: #211C18;
				}
			}
			.right{
				.ling_btn{
					width: 150rpx;
					height: 52rpx;
					background: linear-gradient(270deg, #FF7519, #FFAE3D);
					border-radius: 26rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #FFFFFF;
					text-align: center;
					line-height: 52rpx;
					position: absolute;
					top: 28rpx;
					right: 30rpx;
					padding-left: 0rpx;
					padding-right: 0rpx;
				}
				text{
					font-size: 24rpx;
					font-weight: 500;
					color: #FF7519;
					position:absolute;
					right: 48rpx;
					bottom: 19rpx;
				}
			}
		 }
		 .youhui_02{
			 width: 100%;
			 height: 140rpx;
			 background:url(../../static/content/youhui_02.png) no-repeat ;
			 background-size: 100% 140rpx;
			 position: relative;
			 .text{
			 	 font-size: 24rpx;
			 	 font-weight: 400;
			 	 color:#3A80BA;
				 position: absolute;
				 bottom: 22rpx;
				 left: 30rpx;
			 	.jie{
			 		font-size: 20rpx;
			 		font-weight: 500;
			 		color: #211C18;
			 	}
			 }
			 .right{
			 	.ling_btn{
			 		width: 150rpx;
			 		height: 52rpx;
			 		background: linear-gradient(270deg, #348AFF, #6ACCFF);
			 		border-radius: 26rpx;
			 		font-size: 24rpx;
			 		font-weight: 500;
			 		color: #FFFFFF;
			 		text-align: center;
			 		line-height: 52rpx;
					position: absolute;
					top: 28rpx;
					right: 30rpx;
					padding-left: 0rpx;
					padding-right: 0rpx;
			 	}
			 	text{
			 		font-size: 24rpx;
			 		font-weight: 500;
			 		color: #40A2F4;
					position:absolute;
					right: 48rpx;
					bottom: 19rpx;
			 	}
			 }
		 }
	}
//本楼盘其它户型
.hu_list_box{
	padding-left: 30rpx;
	padding-right: 30rpx;
	box-sizing: border-box;
	width: 100%;
	background: #ffff;
  .tit{
	font-size: 34rpx;
	font-weight: bold;
	color: #17181A;
	line-height: 114rpx;
  }
  .hu_list{
	  padding-bottom: 30rpx;
	   .hu_one{
		   padding-bottom: 28rpx;
		   border-bottom: 1rpx solid #F2F2F2;
		   padding-top: 30rpx;
		   .left_pro{
			   width: 220rpx;
			   height: 160rpx;
			   background: #F5F5F5;
			   border-radius: 12rpx;
			   position: relative;
			   float: left;
			   margin-right: 29rpx;
			   image{
				   width: 113rpx;
				   height: 160rpx;
				   position: absolute;
				   left: 50%;
				   margin-left: -56.5rpx;
			   }
		   }
		   .right_pro{
			   .name_box_box{
				   .name{
					   font-size: 32rpx;
					   font-weight: bold;
					   color: #323233;
					   line-height: 40rpx;
				   }
				   .status{
					   width: 68rpx;
					   height: 36rpx;
					   background: #2CD264;
					   border-radius: 6rpx;
					   font-size: 22rpx;
					   font-weight: 500;
					   color: #FFFFFF;
					   line-height: 36rpx;
					   display: inline-block;
					   text-align: center;
					   float: right;
				   }
			   }
			   .mian{
				   .left{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #7D7E80;
					   line-height: 39rpx;
				   }
				   .right{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #323233;
					   line-height: 39rpx;
				   }
			   }
			   .type{
				   .left{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #7D7E80;
					   line-height: 39rpx;
				   }
				   .right{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #323233;
					   line-height: 39rpx;
				   }
			   }
			   .price{
				   line-height: 24rpx;
				   margin-top: 8rpx;
				   .left{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #7D7E80;
					   line-height: 24rpx;
				   }
				   .right{
					   font-size: 24rpx;
					   font-weight: 500;
					   color: #FE582F;
					   line-height: 24rpx;
					   .em{
						  font-size: 32rpx;
						  color:FE582F;
						  font-weight: bold;
					   }
				   }
			   }
			   
			   
		   }
	   }
	   .zanwu{
		   font-size: 24rpx;
		   font-weight: 500;
		   color: #7D7E80;
		   line-height: 42rpx;
		   text-align: center;
		  // margin-bottom: 30rpx;
	   }
  }
}
.see_box{
	padding-bottom: 50rpx;
}
	
}
</style>
