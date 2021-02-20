<template>
	<view class="senddian">
		<!-- <view class="toptitle">
			 <view class="status_bar">
			 </view>
			<navigator open-type="navigateBack" delta="1">
				<image src="../../static/all-back.png" mode=""></image>
				<text>楼盘点评</text>
			</navigator>
		</view> -->
		<view class="pro">
			<view class="pro_one">
				<image :src="building.img" mode=""></image>
				<view class="right_pro">
					<view class="pro_name">{{building.name}}<text class="status">{{building.state}}</text></view>
					<view class="price">{{building.price}}元/m²</view>
					<view class="type">{{building.type}}<text>|</text>{{building.city}}-江干<text>|</text>{{building.area}}m² </view>
					<view class="tese">
						<text class="zhuang">{{building.decorate}}</text>
						<text class="other">{{building.railway}}</text>
						<text class="other" v-if="building.features">{{building.features[0]}}</text>
					</view>
				</view>
			</view>
		</view>

		<view class="see">
			<text class="tit">您看过该楼盘吗？</text>
			<view class="wen">
				<text :class="select==4?'active':''" @tap="selTiao(4)">未看房</text>
				<text :class="select==5?'active':''" @tap="selTiao(5)">已看房</text>
			</view>
			<view class="tit mine">楼盘评价</text>
				<view class="star">
					<uni-rate v-model="value" :margin="7" color="#E8EBED" active-color="#FF7519" :size="24" @change="rateValue" class="xing">
					</uni-rate>
					<text class="text">{{text[index]}}</text>
				</view>
				<view class="textarea_box">
					<textarea placeholder-style="color:#7D7E80;font-weight:normal" placeholder="这个楼盘怎么样？我来说两句" maxlength='50' focus="true"
					 v-model="text_value" class="textarea" />
					<view class="num_length">
					{{text_value.length}}/50
				</view>
			 </view>
			<!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"> -->
			 <view class="fabu" @tap="submitDian(building.id)">
			 	发布点评
			 </view>
			 </button>
		 </view>
		 <mytoast :txt="msg" ref="msg"></mytoast>
	</view>
</view>	
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue';
	import mytoast from "@/components/mytoast/mytoast.vue"
	export default {
		components:{
			uniRate,
			mytoast
		},
		data() {
			return {
				text_value:'',
				building:{},
				select:0,
				text:["极差","差",'一般',"好","非常好"],
				index:0,
				has_xing:false,
				has_sel:false,
				msg:''
				//极差，差，一般，好，非常好
			};
		},
		onLoad(option){
			console.log(option);
			this.getData(option.id);
		},
		methods:{
			getPhoneNumber(e) {
				let that = this
				// #ifdef  MP-BAIDU
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					let url = '/pages/senddian/senddian?id='+this.building.id
					uni.setStorageSync('backurl',url)
					console.log(url)
				} else {
					let session = uni.getStorageSync('token')
					if(session){
						that.submitDian(that.building.id)
					}else {
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
											that.tel = tel
											uni.request({
												url:"https://api.edefang.net/applets/login",
												method:'GET',
												data:{
													phone: tel,
													openid: openid
												},
												success: (res) => {
													uni.setStorageSync('token',res.data.token)
													that.submitDian(that.building.id)
												}
											})
											
										}
									})
									
								}
							})
						  }
						});
						}
					this.isok = 1
				}
				// #endif
				// #ifdef  MP-WEIXIN
				if(e.detail.errMsg != 'getPhoneNumber:ok') {
					this.isok = 0
					let url = '/pages/senddian/senddian?id='+this.building.id
					uni.setStorageSync('backurl',url)
					console.log(url)
				} else {
					let session = uni.getStorageSync('token')
					if(session){
						that.submitDian(that.building.id)
					}else {
						uni.login({
						  provider: 'weixin',
						  success: function (res) {
							uni.request({
								url: 'https://ll.edefang.net/api/weichat/jscode2session',
								method:'get',
								data:{
									code: res.code
								},
								success: (res) => {
									console.log(res)
									uni.setStorageSync('openid', res.data.data.openid)
									uni.setStorageSync('session', res.data.data.session_key)
									uni.request({
										url: "https://ll.edefang.net/api/weichat/decryptData",
										data: {
											data: e.detail.encryptedData,
											iv: e.detail.iv,
											sessionKey: res.data.data.session_key
										},
										success: (res) => {
											console.log(res)
											let data = JSON.parse(res.data.message)
											let tel = data.purePhoneNumber
											uni.setStorageSync('phone',tel)
											let openid = uni.getStorageSync('openid')
											that.tel = tel
											uni.request({
												url:"https://api.edefang.net/applets/login",
												method:'GET',
												data:{
													phone: tel,
													openid: openid
												},
												success: (res) => {
													uni.setStorageSync('token',res.data.token)
													that.submitDian(that.building.id)
												}
											})
											
										}
									})
									
								}
							})
						  }
						});
						}
					this.isok = 1
				}
				// #endif
				
			},
			selTiao(num){
				this.select = num;
				this.has_sel = true;
			},
			rateValue(num){
				//console.log(num,'评分');
				this.index = num.value-1;
				this.has_xing = true;
			},
			getData(id){
				uni.showLoading({
				    title: '加载中'
				});
				let  other = uni.getStorageSync("other");
				let  token =  uni.getStorageSync("token");
				uni.request({
					url:this.apiserve+"/applets/building/base",
					data:{
						id:id,
						other:other,
						token: token
					},
					method:"GET",
					success: (res) => {
						if(res.data.code==200){
							 console.log(res);
						    this.building = res.data.building; 
							  uni.hideLoading();
							// this.text_all = res.data.building.introduce;
							// this.text = res.data.building.introduce.substring(0,82);
						}else {
							console.log(res);
							
						}
					},
					fail: (error) => {
						console.log(error);
					}
				})
			},
			submitDian(id){
				let token = uni.getStorageSync("token");
				//判空
				if(this.has_sel ==true){
					 if(this.has_xing ==true){
						  if(this.text_value.length!==0){
							   uni.request({
							   	url:this.dianserve+"comment/save",
							   	method:"POST",
							   	data:{
							   		token:token,
							   		pid:"", //被评论id
							   		bid:id, //项目id
							   		content:this.text_value, // 评论内容
							   		consider_buy: this.index,  //是否考虑买  1 有兴趣 2 待对比 3 不考虑 4未看房 5 已看房 
							   		score:this.value
							   	},
								header:{
									'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
								},
							   	success:(res)=>{
							   		if(res.data.code== 200){
							   			console.log(res);
										this.msg = res.data.message;
										this.$refs.msg.show() ;
										let baseurl = uni.getStorageSync('backurl');
										uni.navigateTo({
											url:baseurl
										})
							   		}else{
										 this.msg = res.data.message;
										 this.$refs.msg.show() ;
									}
							   	},
								fail : (error) =>{
									 console.log(error)
								}
							   	
							   })
						  }else{
							   this.msg ="评价内容不能为空";
							   this.$refs.msg.show();
							   
						  }
					 }else{
						this.msg ="请选择楼盘评价";
						this.$refs.msg.show() ;
					 }
				}else{
					this.msg ="请选择是否看过该楼盘";
					this.$refs.msg.show() ;
				}
		
			},
		}
	}
</script>

<style lang="less">
	page{
		background: #fff;
	}
.senddian{
	.toptitle{
		color: #17181A;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 87.64rpx;
		background-color: #fff;
		.status_bar {
		      height: var(--status-bar-height);
		      width: 100%;
		  }
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
	.pro{
		padding-left: 30rpx;
		padding-right: 30rpx;
		background: #fff;
		box-sizing: border-box;
		padding-top: 24rpx;
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
					font-weight: normal;
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
	//from表单区
	button::after{ border: none;}
	.see{
		padding-left: 30rpx;
		padding-right: 30rpx;
		background: #fff;
		box-sizing: border-box;
		padding-top: 44rpx;
		.tit{
			font-size: 30rpx;
			font-weight: 500;
			color: #323233;
			line-height: 90rpx;
		}
		.wen{
			text{
				width: 140rpx;
				height: 52rpx;
				background: #F7F7F7;
				border-radius: 26rpx;
				font-size: 24rpx;
				font-weight: 500;
				color: #969699;
				display: inline-block;
				text-align: center;
				line-height: 52rpx;
			}
			text:first-child{
				margin-right: 30rpx;
			}
			.active{
				color: #3EACF0;
				background:#EBF8FF ;
			}
		}
		.mine{
			margin-top:20rpx;
		}
		.star{
			height: 100rpx;
			.xing{
			  float:left
			}
			.text{
				float: left;
				line-height: 36rpx;
				margin-top: 5rpx;
				margin-left: 10rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #969799;

			}
			// background: #4CD964;
		}
		.textarea_box{
			width:100%;
			height: 320rpx;
			position: relative;
			.textarea{
				width: 630rpx;
				height: 290rpx;
				background-color:#F7F7F7 ;
				border-radius: 24rpx;
				padding-top: 30rpx;
				padding-left:30rpx ;
				padding-right: 30rpx;
			}
			.num_length{
				position: absolute;
				right: 17rpx;
				bottom: 18rpx;
				color: #969799;
				font-size: 24rpx;
				line-height: 24rpx;
			}
		}
		 button{
			 padding-left: 0rpx;
			 padding-right: 0rpx;
		
		}
		.fabu{
			width: 100%;
			height: 80rpx;
			background:#F0F6FA;
			font-size: 30rpx;
			font-weight: bold;
			color: #40A2F4;
			text-align: center;
			line-height: 80rpx;
			margin-top: 70rpx;
		}
		
	}
	
	
	
	
}
</style>
