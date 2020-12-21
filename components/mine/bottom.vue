<template>
	<view class="bottom_fixed">
		<view class="zixun" @tap="gotalk">
			<image src="../../static/content/bottom.png" mode=""></image>
			<view class="text">
				在线咨询
			</view>
		</view>
		<view class="tel_box"  @tap="boTel(telphone)">
			<image src="../../static/content/tel_bot.png" mode=""></image>
			电话咨询
		</view>
		<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">
		<view class="yuyue_box">
			<image src="../../static/content/yuyue.png" mode=""></image>
			预约看房
		</view>
		</button>
		<wyb-popup ref="popup" type="center" height="750" width="650" radius="12" :showCloseIcon="true" @hide="setiscode">
			<sign :type="codenum" @closethis="setpop" :title="title_e" :pid="pid_d" :remark="remark_k" :position="position_n" :isok="isok"></sign>
		</wyb-popup>
		
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import sign from '@/components/sign.vue'
	export default {
		props:{
			remark:{
				type:String
			},
			point:{
				type:Number
			},
			title:{
				type:String
			},
			pid:{
				type:String
			},
			telphone:{
				type:String
			}
		},
		components:{
			sign,
			wybPopup
		},
		data() {
			return {
				codenum:1,
				title_e:'',
				pid_d:0,
				remark_k:'',
				position_n:0,
				isok: 0
			};
		},
		methods:{
			gotalk(){
				uni.navigateTo({
					url:'/pages/message/message'
				})
			},
			setiscode(){
				this.codenum = 0
			},
			boTel(tel) {
				uni.makePhoneCall({
					phoneNumber: tel,
					success: function() {
						console.log('拨打电话',tel);
					} //仅为示例
				});
			},
			baoMing(remark,point,title,pid){
				console.log(remark,point,title,pid);
				this.$refs.popup.show();
				this.pid_d = pid;
				this.position_n = point ;
				this.title_e = title;
				this.remark_k = remark;
			},
			async getPhoneNumber(e) {
				console.log(e)
				let that = this
				if(e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
					that.baoMing(that.remark,that.point,that.title,that.pid)
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
								console.log(res)
								let tel = res.data.mobile
								uni.setStorageSync('phone',tel)
								let openid = uni.getStorageSync('openid')
								that.tel = tel
								that.baoMing(that.remark,that.point,that.title,that.pid)
							}
						})
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
											that.baoMing(that.remark,that.point,that.title,that.pid)
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
		}
	}
</script>

<style lang="less">

.bottom_fixed{
	width: 100%;
	height: 109rpx;
	padding-left: 45rpx;
	padding-top: 19rpx;
	background-color: #fff;
	position: fixed;
	bottom: 0rpx;
	left: 0rpx;
	border-top: none;
	//border-top:1rpx solid #fff;
	.zixun{
		font-size: 24rpx;
		font-weight: 500;
		color: #626466;
		float:left;
		margin-right: 40rpx;
		display: flex;
		align-items: center;
		flex-direction: column;
		image{
			width: 48rpx;
			height: 42rpx;
		}
	}
	.tel_box{
		width: 256rpx;
		height: 88rpx;
		background: linear-gradient(270deg, #FF7519, #FFAE3D);
		border-radius: 12rpx;
		float: left;
		image{
			width: 36rpx;
			height: 36rpx;
		}
		font-size: 32rpx;
		font-weight: bold;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 20rpx;
	}
	
	button::after{ border: none;}
	.yuyue_box{
		width: 256rpx;
		height: 88rpx;
		background: linear-gradient(-45deg, #348AFF, #6ACCFF);
		border-radius: 12rpx;
		float:left;
		image{
			width: 36rpx;
			height: 36rpx;
		}
		font-size: 32rpx;
		font-weight: bold;
		line-height: 88rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
