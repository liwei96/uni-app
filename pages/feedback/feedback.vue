<template>
	<view>
		<view class="toptitle" @tap="back">
			<image src="../../static/all-back.png" mode=""></image>
			<text>意见反馈</text>
		</view>
		<view class="box">
			<textarea value="" placeholder="输入您的宝贵建议" placeholder-class="test" v-model="txt" />
			<view class="txt">
				您有任何问题需要帮助可以写在这里，我们的人员将在最短时间内回复您，感谢您对允家新房的支持！
			</view>
			<view class="btn" @tap="put">
				确定
			</view>
		</view>
		<toast ref="toast" :txt="toasttxt"></toast>
	</view>
</template>

<script>
	var that
	import toast from '@/components/mytoast/mytoast.vue'
	export default {
		data() {
			return {
				txt: '',
				toasttxt: ''
			}
		},
		components:{
			toast
		},
		onLoad() {
			that = this
		},
		methods: {
			back(){
				uni.navigateBack({
					data:1
				})
			},
			put(){
				let tel = uni.getStorageSync('phone')
				let city = uni.getStorageSync('city')
				let kid = uni.getStorageSync('kid')
				let other = uni.getStorageSync('other')
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
							url:that.putserve+'/front/flow/sign',
							method:'GET',
							data:{
								tel: tel,
								city: city,
								page: 4,
								source: "线上推广1",
								kid: kid,
								other: other,
								position: 107,
								remark: that.txt,
								ip: ip,
								staff_id: 106,
							  },
							 success: (res) => {
							 	console.log(res)
								if(res.data.code == 200) {
									that.toasttxt = '已为您成功提交'
								}
							 }
						})
					}
				})
			}
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
	.box {
		padding: 0 30rpx;
		textarea {
			width: 630rpx;
			height: 320rpx;
			border-radius: 24rpx;
			background-color: #F5F6F7;
			padding: 30rpx;
			margin-bottom: 24rpx;
			margin-top: 30rpx;
		}
		.test {
			color: #7E7F80;
			font-size: 30rpx;
		}
		.txt {
			color: #7E7F80;
			font-size: 24rpx;
			line-height: 36rpx;
			margin-bottom: 72rpx;
		}
		.btn {
			width: 100%;
			height: 80rpx;
			border-radius: 12rpx;
			text-align: center;
			line-height: 80rpx;
			background-color: #3EACF0;
			color: #FFFFFF;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
</style>
