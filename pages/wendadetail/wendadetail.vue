<template>
	<view class="wendadetail">
		<view class="toptitle">
			<navigator :url="`../allwenda/allwenda?id=${data.bid}`" class="nav_top" open-type="navigate">
				<image src="../../static/all-back.png" mode=""></image>
				<text>问答详情</text>
			</navigator>
		</view>
		<view class="wen_top">
			<view class="tit">
				<text class="wen">问</text>
				 {{data.question}}
			</view>
			
			<view class="pro_one">
				<image :src="building.img" mode=""></image>
				<view class="right_pro">
					<view class="pro_name">{{building.name}}<text class="status">{{building.state}}</text></view>
					<view class="price">{{building.price}}元/m²</view>
					<view class="type">{{building.type}}<text>|</text>{{building.city_name}}-{{building.country}}<text>|</text>{{building.area}}m² </view>
					<view class="tese">
						<text class="zhuang">{{building.decorate}}</text> 
						<text class="other">1号线</text>
						<text class="other" v-for="item in building.feature">{{item}}</text>
					</view>
				</view>
			</view>
			<!-- 没回复-->
			<view class="huifu_btn" v-if="data.answer==''">
				我来回答
			</view>
			<!-- 免费咨询 -->
			<view class="da" v-show="data.answer!==''">
				<view class="top">
					<view class="left_box">
						<image :src="staff.staff.head_img" mode=""></image>
						<view class="rig">
							<view class="name_box">
								{{staff.staff.name}}
								<text>专业解答</text>
							</view>
							<view class="pp">
								最近咨询<text>{{staff.num}}</text>人
							</view>
						</view>
					</view>
					<button class="right_btn" open-type="getPhoneNumber" hover-class="none"
					@getphonenumber="getPhoneNumber($event,data.bid,'项目问答详情页+免费咨询',104,'免费咨询')">
						免费咨询
					</button>
				</view>
				<!-- 允家房友-->
          <!-- <view class="top">
					<view class="left_box">
						<image src="../../static/content/ping_img.png" mode=""></image>
						<view class="rig">
							<view class="name_box">
							138****4854
							</view>
							<view class="pp">
								允家房友
							</view>
						</view>
					</view>
				</view> -->
				<view class="bottom">
					{{data.answer}}
				</view>
				
				<view class="time_box">
					<view class="time">
						{{data.time}}
					</view>
					<button open-type="getPhoneNumber" v-if="data.my_like==1" hover-class="none"
					@getphonenumber="getPhoneNumber($event,data.bid,'项目问答详情页+点赞',104,'点赞',1,data.id)">
						<view class="zan" >
							<image src="../../static/content/zan.png" mode=""></image>
							有用({{data.like_num}})
						</view>
					</button>
					<button open-type="getPhoneNumber" v-if="data.my_like==0" hover-class="none"
					@getphonenumber="getPhoneNumber($event,data.bid,'项目问答详情页+点赞',104,'点赞',1,data.id)"
					>
						<view class="nozan" >
							<image src="../../static/content/no_zan.png" mode=""></image>
							有用({{data.like_num}})
						</view>
					</button>
				</view>
			</view>
		</view>
		<view class="hui_bg"></view>
	<!-- 	相关楼盘问答 -->
	<view class="about_wen">
		<view class="title">
			相关楼盘问答
		</view>
		<view class="wen_tit" v-for="item in relevant" :key="item.id">
			<navigator :url="`../wendadetail/wendadetail?id=${item.id}`">
				<text class="wen">问</text>
				{{item.question}}
			</navigator>
		</view>
		<view class="btn" @tap="showAllwen">
			查看杭州全部楼盘问答
		</view>
	</view>
	<view class="hui_bg"></view>
	<!-- 猜你喜欢 -->	
	<twosee :title="title" :project="recommends"></twosee>
	<bottom :remark="'项目问答详情页+预约看房'" :point="103" :title="'预约看房'" :pid="data.bid" :telphone="telphone"></bottom>
	<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
		<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n" :isok="isok"></sign>
	</wyb-popup>
	</view>
</template>

<script>
import bottom from "../../components/mine/bottom.vue";
import twosee from '../../components/mine/twosee.vue';
import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
import sign from '@/components/sign.vue'
	export default {
		data() {
			return {
				title:'猜你喜欢',
				building:{},
				data:[],
				recommends:[],
				relevant:[],
				staff:{},
				
				codenum:1,
				title_e:'',
				pid_d:0,
				remark_k:'',
				position_n:0,
				telphone:'',
				isok:0
			};
		},
		components:{
			bottom,
			twosee,
			
			wybPopup,
			sign
		},
		onLoad(option){
			console.log(option);
			this.getdata(option.id)
		},
		methods:{
			wenDian(id){
				let token = uni.getStorageSync("token")
				uni.request({
					url:this.apiserve + "/jy/question/like",
					data:{
						token:token,
						id:id
					},
					method:"POST",
					success: (res)=>{
						if(res.data.code ==200){
							console.log(res);
						}else{
							console.log(res)
						}
					}
				})
			},
			async getPhoneNumber(e,pid,remark,point,title,type,wen_id) {
				let that = this
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					if(type) {
						let token = uni.getStorageSync("token");
						if(token){
							if(type ==1){ //点赞
								this.wenDian(wen_id)
								this.getdata(pid)
							}
						}else{
							let url="/pages/wendadetail/wendadetail?id="+pid;
							uni.setStorageSync("backurl",url)
							uni.navigateTo({
								url:"/pages/login/login"
							})
						}
						
					}else{
						this.isok = 0
						that.baoMing(pid,remark,point,title)
					}
				} else {
					if(type){
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
									uni.request({
										url:"https://api.edefang.net/applets/login",
										method:'GET',
										data:{
											phone: tel,
											openid: openid
										},
										success: (res) => {
											console.log(res)
											uni.setStorageSync('token',res.data.token)
											if(type==1){ //点赞
												that.wenDian(wen_id)
												that.getdata(pid)
											}
										}
									})
								}
							})
						}else {
							console.log(session,"没保存session")
							uni.login({
							  provider: 'baidu',
							  success: function (res) {
							   // console.log(res.code);
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
												uni.request({
													url:"https://api.edefang.net/applets/login",
													method:'GET',
													data:{
														phone: tel,
														openid: openid
													},
													success: (res) => {
														console.log(res)
														uni.setStorageSync('token',res.data.token)
														if(type==1){ //点赞
															that.wenDian(wen_id)
															that.getdata(pid)
														}
														
													}
												})
												// that.$refs.sign.tel = tel
												// that.baoMing(pid,remark,point,title)
											}
										})
										
									}
								})
							  }
							});
							} 
					}else {
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
				}
			},
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
				let other = uni.getStorageSync('other');
				let token = uni.getStorageSync('token');
				uni.request({
					url:this.apiserve+"/applets/question/detail",
					data:{
						id:id,
						other:other,
						token:token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							
						   this.building = res.data.building;
						   this.data = res.data.data;
						   this.recommends = res.data.recommends;
						   this.relevant = res.data.relevant;
						   this.staff = res.data.common.staff;
						   this.telphone = res.data.common.phone;
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
			showAllwen(){
				uni.navigateTo({
					url:"../allwenda/allwenda?id=0"
				})
			}
			
			
			
		}
	}
</script>

<style lang="less">
	page{
		background-color: #fff;
	}
	button::after{
		border:none;
	}
.wendadetail{
	.toptitle{
		color: #fff;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		padding-top: 39.84rpx;
		line-height: 87.64rpx;
		background-color: #FFF;
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
			  color: #17181A;
			}
		}
	}
	.wen_top{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing: border-box;
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
		   margin-top: 40rpx;
		   margin-bottom: 40rpx;
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
		   			padding-left: 16rpx;
		   			padding-right: 16rpx;
		   		}
		   	}
		   	.tese{
		   		.zhuang{
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
					padding-left: 8rpx;
					padding-right: 8rpx;
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
	   .huifu_btn{
		   width: 100%;
		   height: 80rpx;
		   background: #F0F6FA;
		   border-radius: 12rpx;
			font-size: 30rpx;
			font-weight: 400;
			color: #40A2F4;
			line-height: 80rpx;
			text-align: center;
			margin-bottom: 40rpx;
	   }
	}
	.da{
		.top{
			width: 660rpx;
			height: 105rpx;
			border-top: 1rpx solid #F2F2F2;
			padding-top: 40rpx;
			.left_box{
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
							display: inline-block;
						}
					}
					.pp{
						font-size: 24rpx;
						font-weight: 500;
						color: #7D7E80;
						line-height: 30rpx;
						text{
							color:#FF6A48;
						}
					}
					
				}
			}
			.right_btn{
				width: 140rpx;
				height: 52rpx;
				background: linear-gradient(-45deg, #38A7EA, #63D5FF);
				border-radius: 26rpx;
				line-height: 52rpx;
				text-align: center;
				float: right;
				font-size: 24rpx;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 5rpx;
				padding-left: 0rpx;
				padding-right: 0rpx;
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
			padding-top: 30rpx;
			border-radius:24rpx;
			padding-right: 30rpx;
		}
		.time_box{
			width: 100%;
			height: 100rpx;
			.time{
				font-size: 24rpx;
				font-weight: 400;
				color: #969799;
				line-height: 100rpx;
				float: left;
			}
			.zan{
				float: right;
				display: flex;
				align-items: center;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
				font-size: 22rpx;
				font-weight: 500;
				color: #40A2F4;
				line-height: 100rpx;
			}
			.nozan{
				float: right;
				display: flex;
				align-items: center;
				image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 8rpx;
				}
				font-size: 22rpx;
				font-weight: 500;
				color:#969799;
				line-height: 100rpx;
			}
		}
	}
	.hui_bg{
		width: 100%;
		height:20rpx ;
		background:#F7F7F7 ;
	}
//相关楼盘问答	
	.about_wen{
		padding-left: 30rpx;
		padding-right: 30rpx;
		box-sizing:border-box;
		width: 100%;
		padding-bottom: 40rpx;
		.title{
			font-size: 34rpx;
			font-weight: bold;
			color: #323233;
			line-height: 114rpx;
		}
		.wen_tit{
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
			color: #323233;
			line-height: 45rpx;
			margin-bottom: 40rpx;
			margin-top: 7rpx;
		}
		.btn{
			width: 100%;
			height: 80rpx;
			background:#F0F6FA ;
			font-size: 30rpx;
			font-weight: 400;
			color: #40A2F4;
			line-height: 80rpx;
			text-align: center;
			border-radius: 12rpx;
			padding-left: 0rpx;
			padding-right: 0rpx;
		}
	}
	.about_lou{
		padding-bottom: 100rpx;
	}
	
}
</style>
