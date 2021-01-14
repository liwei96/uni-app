<template>
	<view class="login">
		<view class="toptitle">
			<navigator class="nav_top" open-type="navigateBack" delta="1">
				<image src="../../static/all-back.png" mode=""></image>
				<text>手机快捷登录</text>
			</navigator>
		</view>
		<view class="login_box">
			<view class="title">
				<image src="../../static/other/login_img.png"></image>
			</view>
			<view class="tel">
			   <input placeholder="输入手机号" v-model="telphone" 
			   placeholder-style="color:#969799;font-size:30rpx;line-height:128rpx"
			   maxlength="11"/>
			   <text @tap="getCode">{{timetxt}}</text>
			</view>
			<view class="yan">
				  <input placeholder="输入验证码" v-model="code" placeholder-style="color:#969799;font-size:30rpx;line-height:128rpx"/>
			</view>
			<view class="login" @tap="getLogin">登录</view>
		</view>
		<toast ref="toast" :txt="msg"></toast>
	</view>
</template>

<script>
	import toast from "@/components/mytoast/mytoast.vue"
	export default {
		components:{
			toast
		},
		data() {
			return {
				telphone:"",
				code:"",
				second:60,
				timetxt:"验证码",
				msg:"",
				istime: false,
			};
		},
		onLoad(){
			
		},
		methods:{
			getCode(){
				let that = this;
				let phone= this.telphone;
			  var pattern_phone = /^1[3-9][0-9]{9}$/;
			  if(phone==""){
				  this.msg="手机号不能为空"
				  this.$refs.toast.show();
				  return ;
			  } else if(!pattern_phone.test(phone)){
				  this.msg="手机号码不合法"
				  this.$refs.toast.show();
				  return;
			  }
			  let kid= uni.getStorageSync("kid") || null;
			  let other = uni.getStorageSync("other") || null;
			  let ip = ''
			  let city = uni.getStorageSync('city') || 1
			  uni.request({
			  	url: that.putserve+'/getIp.php',
			  	method: 'GET',
			  	success: (res) => {
			  		ip = res.data
			  		ip = ip.split('=')[1].split(':')[1]
			  		ip = ip.substring(1)
			  		ip = ip.slice(0, -3)
			  		uni.request({
			  			url: that.putserve + '/front/flow/sign',
			  			data: {
			  				city: city,
			  				page: 11,
			  				project: "",
			  				remark: "登录",
			  				source: '线上推广2',
			  				name: "",
			  				ip: ip,
			  				position: "106",
			  				tel: phone,
			  				kid: kid,
			  				other: other
			  			},
			  			method: "GET",
			  			success: (res) => {
			  				if(res.data.code == 500) {
			  					this.msg = res.data.message;
			  					that.$refs.toast.show()
			  				} else {
			  					that.teltxt = phone.substr(0, 3) + "****" + phone.substr(7, 11);
			  					let time = 60
			  					var fn = function() {
			  						time--;
			  						if (time > 0) {
			  							that.istime = true
			  							that.timetxt = `重发${time}s`
			  						} else {
			  							that.istime = false
			  							clearInterval(interval);
			  							that.timetxt = `验证码`
			  						}
			  					};
			  					fn();
			  					var interval = setInterval(fn, 1000);
			  					if(that.isok == 1) {
			  						if(!uni.getStorageSync('token')) {
			  							let openid = uni.getStorageSync('openid')
			  							uni.request({
			  								url:"https://api.edefang.net/applets/login",
			  								method:'GET',
			  								data:{
			  									phone: phone,
			  									openid: openid
			  								},
			  								success: (res) => {
			  									console.log(res)
			  									uni.setStorageSync('token',res.data.token)
			  									uni.setStorageSync('phone',phone)
			  								}
			  							})
			  						}
			  						that.msg = "订阅成功";
			  						that.$refs.toast.show()
			  					}else {
			  						that.iscode = true
			  					}
			  					
			  				}
			  				
			  			}
			  		})
			  		uni.request({
			  			url: that.apiserve + '/send',
			  			method: "POST",
			  			data: {
			  				ip: ip,
			  				phone: phone,
			  				source: 3
			  			},
						header: {
							'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
						},
			  			success: (res) => {
			  				console.log(res);
							if(res.data.code==500){
								this.msg= '发送失败，请重试';
								this.$refs.toast.show();
								console.log("500");
							}else {
								this.msg= '短信已发您手机';
								this.$refs.toast.show();
							}
			  			}
			  		})
			  	}
			  })
			  
			  
			},
			getLogin(){
			 	let that = this
			 	if (!this.code) {
			 		this.msg = "请输入验证码";
			 		this.$refs.toast.show()
			 		return;
			 	}
				var phone = this.telphone;
				uni.request({
					url: that.apiserve + '/sure',
					method: "POST",
					data: {
						phone: phone,
						source: 3,
						code: that.code
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
					},
					success: (res) => {
						console.log(res)
						if(res.data.code === 500) {
							that.msg = '验证码不正确';
							that.$refs.toast.show()
						} else {
							uni.setStorageSync('phone',phone)
							let  basurl = uni.getStorageSync('backurl');
							that.msg = "订阅成功";
							that.$refs.toast.show()
							uni.setStorageSync('token',res.data.token)
							uni.setStorageSync('pass',true)
							if(basurl){
								uni.removeStorageSync('backurl')
								if(basurl == '/pages/home/home') {
									uni.navigateTo({
										url:basurl
									})
								}else{
									uni.navigateTo({
										url:basurl
									})
								}
								
							} else {
								uni.navigateTo({
									url:'/pages/home/home'
								})
							}
						}
					}
				})
			}
		},
		
	}
</script>

<style lang="less">
	page{
		background: #fff;
	}
.login{
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
	.login_box{
		padding-left:86rpx ;
		padding-right: 72rpx;
	    box-sizing: border-box;
		width: 100%;
		.title{
			display: flex;
			align-items: center;
			margin-bottom: 37rpx;
			margin-top: 98rpx;
			image{
				width: 108rpx;
				height: 56rpx;
				margin:0 auto;
			}
		}
		.tel{
		   height:88rpx ;
		   width:590rpx;
		   border-bottom: 1rpx solid #EDEDED;
		   padding-top: 40rpx;
		   display: flex;
		   text{
			   min-width: 129rpx;
			   height: 53rpx;
			   border: 1rpx solid #00A0E9;
			   border-radius: 8rpx;
			   font-size: 24rpx;
			   font-weight: 400;
			   color: #00A0E9;
			   text-align: center;
			   line-height: 53rpx;
			   padding-left: 5rpx;
			   padding-right: 5rpx;
			   margin-left: auto;
		   }
		}
		.yan{
			height:88rpx ;
			width:590rpx;
			border-bottom: 1rpx solid #EDEDED;
			padding-top: 40rpx;
		}
		.login{
			width: 100%;
			height: 88rpx;
			background: #00A0E9;
			border-radius: 12rpx;
            font-size: 30rpx;
            font-weight: 400;
            color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
			margin-top: 120rpx;
		}
	}
	
	
}
</style>
