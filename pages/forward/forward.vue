<template>
	<view>
		<view class="toptitle">
			<image src="../../static/all-back.png" mode=""></image>
			<text>预约看房</text>
		</view>
		<image class="topimg" src="../../static/other/forward-top.png" mode=""></image>
		<view class="txt">
			已有<text>781</text>人成功预约免费专车看房
		</view>
		<view class="tit">
			您的称呼:
		</view>
		<view class="radio">
			<view class="item" @click="sex = 0">
				<image :src="sex === 1 ? normal : active" mode=""></image>
				<text>先生</text>
			</view>
			<view class="item" @click="sex = 1">
				<image :src="sex === 0 ? normal : active" mode=""></image>
				<text>女士</text>
			</view>
		</view>
		<view class="tit">
			您的称呼:
		</view>
		<picker mode="date" :value="date" start="starttime" @change="bindDateChange">
			<view class="box">
				<view>{{time}}</view>
				<image src="../../static/other/help-go.png" mode=""></image>
			</view>
		</picker>
		<view class="tit">
			想看的楼盘<text>（非必填）</text>
		</view>
		<view class="box">
			<view>选择楼盘</view>
			<image src="../../static/other/help-go.png" mode=""></image>
		</view>
		<view class="btn" @click="put">
			确定
		</view>
		<popup ref="popup" type="center" height="438" width="578" radius="12" closeIconPos="top-right" showCloseIcon="true"
		 closeIconSize="32" @hide="setback">
			<view class="popup-content">
				<view class="tit">
					预约看房
				</view>
				<view class="one" v-if="!iscode">
					<view class="input-box">
						<input type="text" value="" placeholder="请输入手机号" placeholder-class="txt" maxlength="11" />
					</view>
					<view class="msg">
						<check></check>
						<view class="kk">我已阅读并同意<text>《允家服务协议》</text></view>
					</view>
					<view class="yes" @click="send">
						确定
					</view>
				</view>
				<view class="two" v-if="iscode">
					<view class="codemsg">
						验证码已发送到187****4376  请注意查看
					</view>
					<view class="input-box">
						<input type="text" value="" placeholder="请输入手机号" placeholder-class="txt" maxlength="11" />
						<text>57秒后重发</text>
					</view>
					<view class="yes">
						确定
					</view>
				</view>
			</view>
		</popup>
	</view>
</template>

<script>
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue'
	import wycheckbox from '@/components/jiuai-checkbox/jiuai-checkbox.vue'
	export default {
		components: {
			"popup": wybPopup,
			"check": wycheckbox
		},
		data() {
			return {
				date: '2020',
				time: '请选择您要预约的看房时间',
				sex: 0,
				normal: '../../static/other/forward-normal.png',
				active: '../../static/other/forwark-active.png',
				iscode: false
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.target.value
				this.time = e.target.value
				console.log(this.date)
			},
			put() {
				this.$refs.popup.show()
			},
			setback(){
				this.iscode = false
			},
			send(){
				this.iscode = true
			}
		},
		mounted() {
			let date = new Date()
			this.starttime = date.getFullYear() + '-' + ((date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() +
				1)) + '-' + (date.getDate() > 10 ? date.getDate() : '0' + date.getDate())
			this.date = this.starttime
			console.log(this.date)
		}
	}
</script>

<style lang="less">
	.toptitle {
		color: #17181A;
		font-size: 32rpx;
		padding: 0 29.88rpx;
		margin-top: 39.84rpx;
		line-height: 87.64rpx;

		image {
			width: 32rpx;
			height: 32rpx;
			margin-right: 14rpx;
			margin-bottom: -4rpx;
		}
	}

	.topimg {
		width: 100%;
		height: 200rpx;
	}

	.txt {
		color: #333333;
		font-size: 30rpx;
		text-align: center;
		margin-top: 48rpx;
		margin-bottom: 90rpx;

		text {
			color: #FF5454;
		}
	}

	.tit {
		color: #111212;
		font-size: 26rpx;
		margin-bottom: 32rpx;
		padding: 0 30rpx;
	}

	.radio {
		display: flex;
		padding: 0 30rpx;
		margin-bottom: 58rpx;

		.item {
			display: flex;
			align-items: center;
			margin-right: 80rpx;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 48rpx;
			}

			text {
				color: #646566;
				font-size: 32rpx;
			}
		}
	}

	.box {
		border: 2rpx solid #CFD2D4;
		border-radius: 12rpx;
		background-color: #FAFAFA;
		display: flex;
		align-items: center;
		width: 92%;
		margin-left: 4%;
		height: 88rpx;
		margin-bottom: 58rpx;

		view {
			color: #969799;
			font-size: 28rpx;
			margin-left: 28rpx;

			text {
				color: #969799;
				font-size: 20rpx;
			}
		}

		image {
			width: 32rpx;
			height: 32rpx;
			margin-left: auto;
			margin-right: 26rpx;
		}
	}

	.btn {
		width: 92%;
		margin-left: 4%;
		height: 80rpx;
		border-radius: 12rpx;
		background-color: #3EACF0;
		text-align: center;
		line-height: 80rpx;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 30rpx;
	}

	.popup-content {
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
