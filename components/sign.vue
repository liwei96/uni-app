<template>
	<view class="sign">
		<view class="title">变价通知我</view>
		<view class="txt">价格变动这么快？！订阅楼盘降价通知，楼盘降价我们将第一时间通知您</view>
		<view class="one" v-if="!iscode">
			<view class="input">
				<input type="text" value="" placeholder="请输入手机号" placeholder-class="place" v-model="tel" />
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
			text: {
				type: String
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
				istime: false
			}
		},
		components: {
			jiuaicheckbox,
			toast
		},
		methods: {
			changeBox(e) { //选中切换事件(由组件发起)
				console.log('点击了checkBox', e);
				this.checked = e.detail.checked
			},
			send() {
				let that = this;
				let checks = this.checked;
				if (!checks) {
					this.toasttxt = "请勾选用户协议";
					console.log(this.toasttxt)
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
				this.teltxt = phone.substr(0, 3) + "****" + phone.substr(7, 11);
				let time = 60
				var fn = function() {
					time--;
					if (time > 0) {
						that.istime = true
						that.timetxt = `重新发送${time}s`
					} else {
						that.istime = false
						clearInterval(interval);
						that.timetxt = `获取验证码`
					}
				};
				fn();
				var interval = setInterval(fn, 1000);
				this.iscode = true
			},
			sure() {
				if(!this.code) {
					this.toasttxt = "请输入验证码";
					this.$refs.toast.show()
					return;
				}
				this.toasttxt = "订阅成功";
				this.$refs.toast.show()
				return;
				this.$emit('closethis',true)
			}
		},
		watch: {
			type(val) {
				if (val == 0) {
					this.iscode = false
				}
			}
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
