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
		width: 360rpx;
		height: 120rpx;
		border-radius: 12rpx;
		text-align: center;
		line-height: 120rpx;
		background: rgba(0,0,0,0.9);
		color: #F2F2F2;
		font-size: 32rpx;
		left: 50%;
		margin-left: -180rpx;
		top: 50%;
		margin-top: -60rpx;
		z-index: 999999999;
	}
</style>
