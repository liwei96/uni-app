<template>
	<view class="help">
		<view class="toptitle" @tap="back">
			<view class="status_bar">
			          <!-- 这里是状态栏 -->
			      </view>
			<image src="../../static/all-back1.png" mode=""></image>
			<text>帮我找房</text>
		</view>
		<view class="topbb">
			
		</view>
		<image src="../../static/other/help-top.jpg" mode="" class="topimg"></image>
		<view class="box">
			<view class="tit">
				您能接受的总价范围是多少？
			</view>
			<view class="num">
				<text class="big">{{num}}</text>
				<text class="small">万</text>
			</view>
			<view>
				<slider value="240" @changing="sliderChange" min="20" max="500" activeColor="#3EACF0" backgroundColor="#EDEDED"
				 block-size="20" />
			</view>
			<view class="slider-msg">
				<text class="left">20万</text>
				<text class="right">500万+</text>
			</view>
			<view class="slider-txt">
				<text class="txt">您可以购买的房子总价约为</text>
				<text class="price">{{num}}</text>
				<text class="dam">万</text>
			</view>
			<view class="tit">
				您意向购买哪种户型？
			</view>
			<view class="hus">
				<view :class="hu == item.name ? 'hu' : ''" v-for="item in houses" :key="item.id" @tap="hu = item.name">
					{{item.name}}
				</view>
			</view>
			<view class="tit">
				您意向购买的区域是？
			</view>
			<view class="city" @click="show">
				<text>{{cityname}}</text>
				<image src="../../static/other/help-go.png" mode=""></image>
			</view>
			<view class="tit">
				您意向购买多大面积？
			</view>
			<view class="area">
				<view :class="area == item.name ? 'active' : ''" v-for="item in areas" :key="item.id" @tap="area = item.name">
					{{item.name}}
				</view>
			</view>
			<view class="tit">
				您还有其它要求吗？
			</view>
			<textarea value="" placeholder="说说您的想法，让我们更好的服务您" class="remark" :adjust-position="true" placeholder-class="istxt"
			 v-model="remark" />
			</view>
		<view class="bom">
			<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="btn" v-if="!pass">提交</button>
			<view class="btn" v-if="pass" @tap="show1(1)">提交</view>
		</view>
		<popup ref="popup" type="bottom" height="458" width="500">
		    <view class="popup-content">
		        <view class="top">
		        	<text @tap="close">取消</text>
		        	<text class="yes" @tap="yes">确定</text>
		        </view>
				<view class="content">
					<view class="con">
						<view :class="city == '不限' ? 'active' : ''" :key="item.id" @tap="city = '不限'">
							不限
						</view>
						<view :class="city == item.name ? 'active' : ''" v-for="item in citys" :key="item.id" @tap="city = item.name">
							{{item.name}}
						</view>
					</view>
				</view>
		    </view>
		</popup>
		<popup ref="popup1" type="center" height="438" width="578" radius="12" closeIconPos="top-right" :showCloseIcon="true"
		 closeIconSize="32" @hide="setback">
			<view class="popup-content1">
				<view class="tit">
					帮我找房
				</view>
				<view class="one" v-if="!iscode">
					<view class="input-box">
						<input type="text" value="" placeholder="请输入手机号" placeholder-class="txt" maxlength="11" v-model="tel" :disabled="isok == 1"/>
						<view class="close" @tap="setnull" v-if="isok == 1">
							x
						</view>
					</view>
					<view class="msg">
						<check :checkBoxSize='20' :fontSize='18' :checked="true" @change="change"></check>
						<view class="kk">我已阅读并同意<text @tap="goserve">《允家服务协议》</text></view>
					</view>
					<view class="yes" @tap="send">
						确定
					</view>
				</view>
				<view class="two" v-if="iscode">
					<view class="codemsg">
						验证码已发送到{{teltxt}}  请注意查看
					</view>
					<view class="input-box">
						<input type="text" value="" placeholder="请输入手机号" placeholder-class="txt" maxlength="11" v-model="code"/>
						<text @tap="sendmsg">{{timetxt}}</text>
					</view>
					
					<view class="yes" @tap="sure">
						确定
					</view>
				</view>
			</view>
		</popup>
		<toast ref="toast" :txt="toasttxt"></toast>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import toast from '@/components/mytoast/mytoast.vue'
	import wycheckbox from '@/components/jiuai-checkbox/jiuai-checkbox.vue'
	var that
	export default {
		components: {
				"toast": toast,
		        "popup":wybPopup,
				"check": wycheckbox
		    },
		data() {
			return {
				pass: false,
				num: 240,
				houses: [],
				areas: [],
				citys: [],
				city: '不限',
				remark: '',
				hu: '',
				cityname: '不限',
				area: '',
				checked: true,
				toasttxt: '',
				tel: '',
				code: '',
				iscode: false,
				teltxt: '',
				timetxt: '',
				time: 0,
				isok: 0,
				position: 0
			}
		},
		onShow() {
			that = this
			this.getinfo()
			this.pass = uni.getStorageSync('pass')
			this.tel = uni.getStorageSync('phone')
			//#ifdef MP-BAIDU
			swan.setPageInfo({
				title: '允家新房-帮我找房',
				keywords: '允家新房-帮我找房',
				description: '允家新房-帮我找房',
				success: res => {
					console.log('setPageInfo success', res);
				},
				fail: err => {
					console.log('setPageInfo fail', err);
				}
			})
			//#endif
		},
		methods: {
			setnull() {
				this.tel = ''
				this.isok = 0
			},
			async getPhoneNumber(e) {
				console.log(e)
				let that = this
				if (e.detail.errMsg == 'getPhoneNumber:fail auth deny') {
					this.isok = 0
				} else {
					this.isok = 1
					this.pass = true
					uni.setStorageSync('pass',true)
					let session = uni.getStorageSync('session')
					if (session) {
						uni.request({
							url: 'https://api.edefang.net/applets/baidu/decrypt',
							method: 'get',
							data: {
								iv: e.detail.iv,
								data: e.detail.encryptedData,
								session_key: session
							},
							success: (res) => {
								console.log(res)
								let tel = res.data.mobile
								uni.setStorageSync('phone', tel)
								let openid = uni.getStorageSync('openid')
								that.tel = tel
							}
						})
					} else {
						uni.login({
							provider: 'baidu',
							success: function(res) {
								console.log(res.code);
								uni.request({
									url: 'https://api.edefang.net/applets/baidu/get_session_key',
									method: 'get',
									data: {
										code: res.code
									},
									success: (res) => {
										console.log(res)
										uni.setStorageSync('openid', res.data.openid)
										uni.setStorageSync('session', res.data.session_key)
										uni.request({
											url: "https://api.edefang.net/applets/baidu/decrypt",
											data: {
												data: e.detail.encryptedData,
												iv: e.detail.iv,
												session_key: res.data.session_key
											},
											success: (res) => {
												console.log(res)
												let tel = res.data.mobile
												uni.setStorageSync('phone', tel)
												let openid = uni.getStorageSync('openid')
												that.tel = tel
											}
										})
			
									}
								})
							}
						});
					}
				}
				this.$refs.popup1.show()
			},
			send() {
				console.log(this.checked)
				let that = this
				if(!this.checked) {
					that.toasttxt = '请选择用户协议'
					that.$refs.toast.show()
					return
				}
				var phone = this.tel;
				var pattern_phone = /^1[3-9][0-9]{9}$/;
				if (phone == "") {
					this.toasttxt = "请输入手机号";
					this.$refs.toast.show()
					return;
				} else if (!pattern_phone.test(phone)) {
					this.toasttxt = "手机号码不合法";
					this.$refs.toast.show()
					return;
				}
				let kid = uni.getStorageSync('kid') || ''
				let other = uni.getStorageSync('other') || ''
				let ip = ''
				let city = uni.getStorageSync('city') || 1
				let txt = `客户想找总价为：${that.num}万`;
				      if (that.hu) {
				        txt = txt + `；户型为：${that.hu}`;
				      }
				      if (that.cityname) {
				        txt += `；区域为：${that.cityname}`;
				      }
				      if (that.area) {
				        txt += `；面积为：${that.area}`;
				      }
				      txt += "的房子";
				      if (that.txt) {
				        txt += `；客户留言：${that.remark}`;
				      }
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
								remark: txt,
								source: '线上推广2',
								ip: ip,
								position: 110,
								tel: phone,
								kid: kid,
								other: other
							},
							method: "GET",
							success: (res) => {
								if(res.data.code == 500) {
									that.toasttxt = '请不要重复报名';
									that.$refs.toast.show()
									setTimeout(()=>{
										that.$refs.popup1.hide()
									},1500)
								} else {
									that.teltxt = phone.substr(0, 3) + "****" + phone.substr(7, 11);
									that.iscode = true
									that.time = 60
									var fn = function() {
										that.time--;
										if (that.time > 0) {
											that.istime = true
											that.timetxt = `重新发送${that.time}s`
										} else {
											that.istime = false
											clearInterval(interval);
											that.timetxt = `获取验证码`
										}
									};
									fn();
									var interval = setInterval(fn, 1000);
									if(that.isok == 1) {
										that.toasttxt = "订阅成功";
										that.$refs.toast.show()
										that.iscode = false
										that.$refs.popup1.hide()
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
												}
											})
										}
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
								console.log(res)
							}
						})
					}
				})
			},
			setback(){
				this.iscode = false
			},
			sendmsg() {
				console.log(that.time)
				if(that.time > 0) {
					return
				}
				let phone = this.tel
				let ip = ''
				uni.request({
					url: that.putserve+'/getIp.php',
					method: 'GET',
					success: (res) => {
						ip = res.data
						ip = ip.split('=')[1].split(':')[1]
						ip = ip.substring(1)
						ip = ip.slice(0, -3)
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
								console.log(res)
								that.time = 60
								var fn = function() {
									that.time--;
									if (that.time > 0) {
										that.istime = true
										that.timetxt = `重新发送${that.time}s`
									} else {
										that.istime = false
										clearInterval(interval);
										that.timetxt = `获取验证码`
									}
								};
								fn();
								var interval = setInterval(fn, 1000);
							}
						})
					}
				})
			},
			change(e) {
				this.checked = e.detail.checked
			},
			goserve() {
				uni.navigateTo({
					url:"/pages/serve/serve"
				})
			},
			sure() {
				if (!this.code) {
					this.toasttxt = "请输入验证码";
					this.$refs.toast.show()
					return;
				}
				let phone = this.tel;
				let code = this.code
				uni.request({
					url: that.apiserve + '/sure',
					method: "POST",
					data: {
						code: code,
						phone: phone,
						source: 3
					},
					header: {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
					},
					success: (res) => {
						console.log(res)
						if(res.data.code === 500) {
							that.toasttxt = '验证码不正确';
							that.$refs.toast.show()
						} else {
							that.toasttxt = "订阅成功";
							that.$refs.toast.show()
							that.iscode = false
							this.$refs.popup1.hide()
							if(!uni.getStorageSync('token')) {
								uni.setStorageSync('token',res.data.token)
								uni.setStorageSync('usertel',that.tel)
							}
						}
					}
				})
			},
			show1(n) {
				this.isok = n
				this.$refs.popup1.show()
			},
			sliderChange(e) {
				this.num = e.detail.value
			},
			show() {
				this.$refs.popup.show()
			},
			close() {
				this.$refs.popup.hide()
			},
			yes() {
				this.cityname = this.city
				this.$refs.popup.hide()
			},
			getinfo() {
				uni.showLoading({
					title:"加载中"
				})
				let city = uni.getStorageSync('city')
				let token = uni.getStorageSync('token')
				uni.request({
					url:that.apiserve+'/jy/help/condition',
					method:'GET',
					data:{
						city: city,
						token: token
					},
					success: (res) => {
						console.log(res)
						that.houses = res.data.house_types
						that.areas = res.data.areas
						that.citys = res.data.countries
						console.log(that.houses)
						uni.hideLoading()
					}
				})
			},
			back() {
				uni.navigateBack({
					data:1
				})
			}
		},
		mounted(){
		}
	}
</script>

<style lang="less">
	page{
		background:#FFFFFF
	}
	.toptitle {
		color: #FFFFFF;
		font-size: 29.88rpx;
		padding: 0 29.88rpx;
		line-height: 88rpx;
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 9999;
		background-color: #35ACE7;
		.status_bar {
		      height: var(--status-bar-height);
		      width: 100%;
		  }
		image {
			width: 31.87rpx;
			height: 31.87rpx;
			margin-right: 11.95rpx;
			margin-bottom: -3.98rpx;
		}
	}
	.topbb {
		height: var(--status-bar-height);
		width: 100%;
	}
	.topimg {
		width: 100%;
		height: 278.88rpx;
		margin-top: 88rpx;
	}

	.box {
		padding: 0 29.88rpx;

		.tit {
			color: #303233;
			font-size: 31.87rpx;
			font-weight: bold;
			margin-top: 39.84rpx;
			margin-bottom: 39.84rpx;
		}

		.num {
			text-align: center;
			color: #3EACF0;
			font-weight: 800;

			.big {
				font-size: 47.8rpx;
			}

			.small {
				font-size: 39.84rpx;
			}
		}
		.slider-msg {
			color: #969799;
			font-size: 23.9rpx;
			overflow: hidden;
			.left {
				float: left;
			}
			.right {
				float: right;
			}
		}
		.slider-txt {
			margin-top: 19.92rpx;
			margin-bottom: 75.69rpx;
			.txt {
				color: #303233;
				font-size: 25.89rpx;
			}
			.price {
				color: #3EACF0;
				font-size: 29.88rpx;
			}
			.dam {
				color: #3EACF0;
				font-size: 27.88rpx;
			}
		}
		.hus {
			overflow: hidden;
			margin-bottom: 60rpx;
			view {
				width: 155.37rpx;
				height: 59.76rpx;
				border-radius: 11.95rpx;
				text-align: center;
				line-height: 59.76rpx;
				background-color: #F2F2F2;
				color: #4B4C4D;
				font-size: 23.9rpx;
				margin-right: 20rpx;
				float: left;
				margin-bottom: 23.9rpx;
			}
			view:nth-of-type(4n) {
				margin-right: 0;
			}
			.hu {
				border: 0.99rpx solid #3EACF0;
				height: 55.77rpx;
				line-height: 55.77rpx;
				background: #F0F7FA;
				color: #3EACF0;
			}
		}
		.city {
			height: 75.69rpx;
			display: flex;
			border-radius: 11.95rpx;
			border: 1.99rpx solid #CCCCCC;
			background: #FAFAFA;
			align-items: center;
			padding-right: 19.92rpx;
			margin-bottom: 75.69rpx;
			text {
				color: #646566;
				font-size: 29.88rpx;
				margin-left: 35.85rpx;
			}
			image {
				width: 31.87rpx;
				height: 31.87rpx;
				margin-left: auto;
			}
		}
		.area {
			overflow: hidden;
			display: flex;
			view {
				border-radius: 11.95rpx;
				width: 155.37rpx;
				height: 59.76rpx;
				text-align: center;
				line-height: 59.76rpx;
				margin-right: 21.91rpx;
				background-color: #F2F2F2;
				color: #4B4C4D;
				font-size: 23.9rpx;
			}
			.active {
				border: 0.99rpx solid #3EACF0;
				background: #F0F7FA;
				color: #3EACF0;
			}
		}
		.remark {
			border: 0.99rpx solid #CCCCCC;
			height: 179.28rpx;
			padding-top: 19.92rpx;
			border-radius: 11.95rpx;
			background: #FAFAFA;
			padding-left: 19.92rpx;
			font-size: 27.88rpx;
			width: 667.33rpx;
			margin-bottom: 140rpx;
		}
		.istxt {
			color: #969899;
			font-size: 28rpx;
		}
	}
	.bom {
		position: fixed;
		padding: 0 4%;
		bottom: 0;
		left: 0;
		z-index: 10;
		width: 92%;
		height: 119.52rpx;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		.btn {
			width: 100%;
			height: 79.68rpx;
			border-radius: 11.95rpx;
			background-color: #40A2F4;
			color: #FFFFFF;
			font-weight: bold;
			line-height: 79.68rpx;
			font-size: 29.88rpx;
			text-align: center;
		}
		.btn:after{
			border: none;
		}
	}
	.popup-content {
		.top {
			width: 100%;
			height: 99.6rpx;
			background-color: #F5F5F5;
			display: flex;
			align-items: center;
			text {
				color: #7F7F7F;
				font-size: 31.87rpx;
				margin-left: 40rpx;
			}
			.yes {
				color: #3EACF0;
				margin-left: auto;
				margin-right: 46rpx;
			}
		}
		.content {
			height:360rpx;
			padding: 0 30rpx;
			overflow-y: auto;
			.con {
				padding: 50rpx 0;
				view {
					width: 156rpx;
					height: 60rpx;
					border-radius: 12rpx;
					text-align: center;
					line-height: 60rpx;
					background-color: #F2F2F2;
					color: #646566;
					font-size: 24rpx;
					float: left;
					margin-right: 17rpx;
					margin-bottom: 40rpx;
				}
				view:nth-of-type(4n){
					margin-right: 0;
				}
				.active {
					border: 1rpx solid #3EB3F0;
					background: #F0F7FA;
					width: 154rpx;
					height: 54rpx;
					line-height: 54rpx;
					color: #3EACF0;
				}
			}
		}
	}
	.popup-content1 {
		background-color: #FFFFFF;
		border-radius: 12rpx;
	
		.tit {
			color: #333333;
			font-size: 44rpx;
			font-weight: bold;
			text-align: center;
			margin-top: 38rpx;
			margin-bottom: 38rpx;
		}
	
		.input-box {
			width: 498rpx;
			height: 100rpx;
			border-radius: 24rpx;
			background-color: #F7F7F7;
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			position: relative;
			.close {
				position: absolute;
				right: 30rpx;
				top: 28rpx;
				font-size: 30rpx;
			}
			.txt {
				color: #969799;
				font-size: 32rpx;
			}
	
			input {
				font-size: 32rpx;
				margin-left: 24rpx;
			}
			text {
				color: #7495BD;
				font-size: 32rpx;
			}
		}
		.two {
			.input-box {
				margin-bottom: 40rpx;
			}
		}
		.msg {
			margin-bottom: 48rpx;
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			.kk {
				color: #7A7A7A;
				font-size: 24rpx;
				margin-left: 8rpx;
				position: relative;
				top: 6rpx;
				text {
					color: #7495BD;
				}
			}
		}
		.yes {
			width: 498rpx;
			height: 80rpx;
			border-radius: 12rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #3EACF0;
			color: #FFFFFF;
			font-size: 28rpx;
			font-weight: bold;
			margin-left: 40rpx;
		}
		.codemsg {
			color: #999999;
			font-size: 22rpx;
			margin-bottom: 24rpx;
			margin-left: 40rpx;
		}
	}
</style>
