<template>
	<view class="sign">
		<view class="title">{{title}}</view>
		<view class="txt">{{text}}</view>
		<view class="one" v-if="!iscode">
			<view class="input">
				<input type="text" placeholder="请输入手机号" placeholder-class="place" v-model="tel" :disabled="ok"/>
				<view class="setnull" v-if="ok" @tap="setnull">
					x
				</view>
			</view>
			<view class="msg">
				<jiuaicheckbox @change='changeBox' borderStyle='1px solid #D4D7D9' color='#40A2F4' :checked='checked' :borderRadius='6'
				 :fontSize='20' :checkBoxSize='30'></jiuaicheckbox>我已阅读并同意<text>《允家服务协议》</text>
			</view>
			<view class="btn" @tap="send">
				立即订阅
			</view>
			<view class="bomtxt">
				有专属咨询师为您提供专业的购房意见和1v1服务
			</view>
		</view>
		<view class="two" v-if="iscode">
			<view class="telmsg">
				验证码已发送到{{teltxt}} 请注意查看
			</view>
			<view class="input">
				<input type="text" value="" placeholder="请输入验证码" placeholder-class="place" v-model="code" />
				<text>{{timetxt}}</text>
			</view>
			<view class="btn btn1" @tap="sure">
				确定
			</view>
		</view>
		<toast ref="toast" :txt="toasttxt"></toast>
	</view>
</template>
<script>
	import jiuaicheckbox from '@/components/jiuai-checkbox/jiuai-checkbox.vue'
	import toast from '@/components/mytoast/mytoast.vue'
	export default {
		props: {
			title: {
				type: String
			},
			type: {
				type: Number
			},
			pid: {
				type: Number
			},
			name: {
				type: String
			},
			remark: {
				type: String
			},
			position: {
				type: Number
			},
			isok: {
				type: Number
			}
		},
		data() {
			return {
				tel: '',
				iscode: false,
				second: 60,
				toasttxt: '',
				checked: true,
				teltxt: '',
				timetxt: '',
				istime: false,
				text: '',
				ok: true,
				weixin: false,
				interval: {}
			}
		},
		components: {
			jiuaicheckbox,
			toast
		},
		methods: {
			setnull() {
				this.tel = '',
				this.ok = false
			},
			changeBox(e) { //选中切换事件(由组件发起)
				console.log('点击了checkBox', e);
				this.checked = e.detail.checked
			},
			send() {
				let that = this;
				let checks = this.checked;
				if (!checks) {
					this.toasttxt = "请勾选用户协议";
					this.$refs.toast.show()
					return;
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
				let kid = uni.getStorageSync('kid') || null
				let other = uni.getStorageSync('other') || null
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
								project: that.pid,
								remark: that.remark,
								source: '线上推广2',
								name: that.name,
								ip: ip,
								position: that.position,
								tel: phone,
								kid: kid,
								other: other
							},
							method: "GET",
							success: (res) => {
								if(res.data.code == 500) {
									that.toasttxt = res.data.message;
									that.$refs.toast.show()
									setTimeout(()=>{
										that.$emit('closethis', true)
									},2000)
								} else {
									that.teltxt = phone.substr(0, 3) + "****" + phone.substr(7, 11);
									let time = 60
									let fn = function() {
										time--;
										if (time > 0) {
											that.istime = true
											that.timetxt = `重新发送${time}s`
										} else {
											that.istime = false
											clearInterval(that.interval);
											that.timetxt = `获取验证码`
										}
									};
									fn();
									that.interval = setInterval(fn, 1000);
									if(that.isok == 1 && that.ok) {
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
										that.toasttxt = "订阅成功";
										that.$refs.toast.show()
										setTimeout(()=>{
											that.$emit('closethis', true)
										},2000)
									}else {
										that.iscode = true
										that.$emit('changetype',1)
									}
								}
							}
						})
						if(that.isok == 1 && that.ok) {
							return
						}
						uni.request({
							url: that.apiserve + '/send',
							method: "POST",
							header: {
								'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
							},
							data: {
								ip: ip,
								phone: phone,
								source: 3
							},
							success: (res) => {
								console.log(res)
							}
						})
					}
				})
			},
			sure() {
				let that = this
				if (!this.code) {
					this.toasttxt = "请输入验证码";
					this.$refs.toast.show()
					return;
				}
				var phone = this.tel;
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
							that.toasttxt = '验证码不正确';
							that.$refs.toast.show()
						} else {
							that.toasttxt = "订阅成功";
							that.$refs.toast.show()
							setTimeout(()=>{
								that.$emit('closethis', true)
							},2000)
							if(!uni.getStorageSync('token')) {
								uni.setStorageSync('token',res.data.token)
								uni.setStorageSync('phone',that.tel)
								uni.setStorageSync('pass',true)
							}
						}
					}
				})
			}
		},
		onShow() {
			let type = this.title
			console.log(type)
		},
		mounted() {
			if(this.type ==0){
				this.iscode = false
			}
			if(this.isok == 1) {
				this.ok = true
			}else {
				this.ok = false
			}
			if(this.isok == 1 || this.weixin) {
				this.tel = uni.getStorageSync('phone')
			}else {
				this.tel = ''
			}
			let type = this.title
			console.log(type)
			if (type == "变价通知我") {
				this.text =
					"价格变动这么快？订阅楼盘变价通知，楼盘变价我们将第一时间通知您";
			} else if (type == "开盘提醒我") {
				this.text = "一键订阅最新开盘通知，我们会第一时间通知,不再错过开盘时间";
			} else if (type == "预约看房") {
				this.text = "提前预约看房，我们将提供免费专车接送和专业楼盘讲解";
			} else if (type == "订阅实时动态") {
				this.text = "订阅最新动态，楼盘最新情报抢先知道，帮您找准买房好时机";
			} else if (type == "获取详细周边配套") {
				this.text = "想了解更多周边配套信息？立即获取全面周边配套详解";
			} else if (type == "获取最新成交价") {
				this.text = "获取最新成交价格，看看房友都是什么价格买的房";
			} else if (type == "咨询户型底价") {
				this.text = "好楼盘户型是关键，咨询详细户型信息，安安心心买房";
			} else if (type == "领取分析资料") {
				this.text = "最新楼盘分析资料，看看房产专家对楼盘的投资分析和宜居分析解读";
			} else if (type == "咨询特价房") {
				this.text = "一键预约看房免费小车上门接送，可带家人一起参观多个热门楼盘";
			} else if (type == "领取优惠") {
				this.text = "专享限时优惠折扣，家园专场推出，早抢早优惠";
			} else if (type == "免费领取") {
				this.text = "精准匹配房源，免费接送一次看完好房";
			} else if (type == "获取详细分析报告") {
				this.text = "向允家咨询师免费领取分析报告,内附有购房流程全盘解读";
			} else if (type == "咨询楼盘底价") {
				this.text = "好楼盘户型是关键，咨询户型底价，安安心心买房";
			} else if (type == "咨询服务") {
				this.text = "立即报名，专业人员为你解惑!";
			} else if (type == "领取分析资料") {
				this.text = "最新楼盘分析资料，看看房产专家对楼盘的投资分析和宜居分析解读";
			} else if (type == "一键咨询") {
				this.text = "立即报名，专业人员为你解惑!";
			} else if (type == "免费咨询") {
				this.text = "立即报名，专业人员为你解惑!";
			} else if (type == "咨询详细楼盘信息") {
				this.text = "向家园咨询师免费领取楼盘资料,内附有购房流程全盘解读";
			} else if (type == "免费专车看房") {
				this.text = "免费专车看房，楼下接您随时出发，可带家人一起看楼盘";
			} else if (type == "查低价") {
				this.text = "免费专车看房，楼下接您随时出发，可带家人一起看楼盘";
			}else if(type == "领取全部户型资料"){
				this.text = "好楼盘户型是关键，咨询户型底价，安安心心买房";
			}
		},
		watch: {
			type(val) {
				console.log(val)
				if (val == 0) {
					this.iscode = false
				}
			},
			title(val) {
				console.log(val)
				let type = val
				if (type == "变价通知我") {
					this.text =
						"价格变动这么快？订阅楼盘变价通知，楼盘变价我们将第一时间通知您";
				} else if (type == "开盘提醒我") {
					this.text = "一键订阅最新开盘通知，我们会第一时间通知,不再错过开盘时间";
				} else if (type == "预约看房") {
					this.text = "提前预约看房，我们将提供免费专车接送和专业楼盘讲解";
				} else if (type == "订阅实时动态") {
					this.text = "订阅最新动态，楼盘最新情报抢先知道，帮您找准买房好时机";
				} else if (type == "获取详细周边配套") {
					this.text = "想了解更多周边配套信息？立即获取全面周边配套详解";
				} else if (type == "获取最新成交价") {
					this.text = "获取最新成交价格，看看房友都是什么价格买的房";
				} else if (type == "咨询户型底价") {
					this.text = "好楼盘户型是关键，咨询详细户型信息，安安心心买房";
				} else if (type == "领取分析资料") {
					this.text = "最新楼盘分析资料，看看房产专家对楼盘的投资分析和宜居分析解读";
				} else if (type == "咨询特价房") {
					this.text = "一键预约看房免费小车上门接送，可带家人一起参观多个热门楼盘";
				} else if (type == "领取优惠") {
					this.text = "专享限时优惠折扣，家园专场推出，早抢早优惠";
				} else if (type == "免费领取") {
					this.text = "精准匹配房源，免费接送一次看完好房";
				} else if (type == "获取详细分析报告") {
					this.text = "向允家咨询师免费领取分析报告,内附有购房流程全盘解读";
				} else if (type == "咨询楼盘底价") {
					this.text = "好楼盘户型是关键，咨询户型底价，安安心心买房";
				} else if (type == "咨询服务") {
					this.text = "立即报名，专业人员为你解惑!";
				} else if (type == "领取分析资料") {
					this.text = "最新楼盘分析资料，看看房产专家对楼盘的投资分析和宜居分析解读";
				} else if (type == "一键咨询") {
					this.text = "立即报名，专业人员为你解惑!";
				} else if (type == "免费咨询") {
					this.text = "立即报名，专业人员为你解惑!";
				} else if (type == "咨询详细楼盘信息") {
					this.text = "向家园咨询师免费领取楼盘资料,内附有购房流程全盘解读";
				} else if (type == "免费专车看房") {
					this.text = "免费专车看房，楼下接您随时出发，可带家人一起看楼盘";
				} else if (type == "查低价") {
					this.text = "免费专车看房，楼下接您随时出发，可带家人一起看楼盘";
				}else if(type == "领取全部户型资料"){
					this.text = "好楼盘户型是关键，咨询户型底价，安安心心买房";
				}
			}
		},
		beforeDestroy() {
			clearInterval(this.interval);
		}
	}
</script>
<style lang="less" scoped>
	.sign {
		padding: 0 36rpx;
	}

	.title {
		color: #1F1F1F;
		font-size: 44rpx;
		text-align: center;
		font-weight: bold;
		padding-top: 76rpx;
		margin-bottom: 44rpx;
	}

	.txt {
		color: #3D3D3D;
		font-size: 32rpx;
		line-height: 44rpx;
		margin-bottom: 60rpx;
	}

	.input {
		width: 570rpx;
		height: 110rpx;
		border-radius: 12rpx;
		border: 3rpx solid #B3B3B3;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		position: relative;

		input {
			margin-left: 32rpx;
			font-size: 32rpx;
			width: 92%;
		}
		.setnull {
			position: absolute;
			font-size: 40rpx;
			right: 20rpx;
			top: 24rpx;
		}

		.place {
			color: #999999;
			font-size: 32rpx;
		}

		text {
			color: #7495BD;
			font-size: 32rpx;
			position: absolute;
			top: 36rpx;
			right: 36rpx;
		}
	}

	.msg {
		color: #7A7A7A;
		font-size: 24rpx;
		margin-bottom: 68rpx;

		text {
			color: #7495BD;
		}
	}

	.btn {
		width: 100%;
		height: 88rpx;
		border-radius: 12rpx;
		text-align: center;
		line-height: 88rpx;
		background-color: #3EACF0;
		color: #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}

	.btn1 {
		margin-top: 86rpx;
	}

	.bomtxt {
		color: #8F8F8F;
		font-size: 24rpx;
	}

	.telmsg {
		color: #999999;
		font-size: 24rpx;
		margin-bottom: 24rpx;
	}
</style>
