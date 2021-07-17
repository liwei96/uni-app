<template>
	<view class="toast" v-if="showtaost">
		{{txt || 55555}}
	</view>
</template>

<script>
	export default {
		props:{
			txt:{
				type: String
			}
		},
		data() {
			return {
				showtaost:false
			}
		},
		methods: {
			show() {
				this.showtaost = true
				let that = this
				setTimeout(()=>{
					that.showtaost = false
				},2000)
			}
		}
	}
</script>

<style lang="less">
	.toast {
		position: fixed;
		width: 380rpx;
		padding: 0 10rpx;
		height: 120rpx;
		border-radius: 12rpx;
		text-align: center;
		background: rgba(0,0,0,0.9);
		color: #F2F2F2;
		font-size: 28rpx;
		left: 50%;
		margin-left: -200rpx;
		top: 50%;
		margin-top: -60rpx;
		z-index: 999999999;
		word-break:break-all;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
