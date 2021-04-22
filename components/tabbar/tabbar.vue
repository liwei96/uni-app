<template>
	<view class="tabbar">
		<view class="li" v-for="(item,key) in list" @tap="go(item.pagePath,key)" :key="key">
			<image v-if="key != type" :src="item.iconPath" mode=""></image>
			<image v-if="key == type" :src="item.selectedIconPath" mode=""></image>
			<view :class="key==type?'txt active' : 'txt'">
				{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			type:{
				type:Number
			}
		},
		data(){
			return {
				list: [{
						"text": "首页",
						"pagePath": "/pages/index/index",
						"iconPath": "/static/tabs/index.png",
						"selectedIconPath": "/static/tabs/index-active.png"
					},
					{
						"text": "楼盘",
						"pagePath": "/pages/building/building",
						"iconPath": "/static/tabs/building.png",
						"selectedIconPath": "/static/tabs/building-active.png"
					},
					{
						"text": "消息",
						"pagePath": "/pages/message/message",
						"iconPath": "/static/tabs/message.png",
						"selectedIconPath": "/static/tabs/message-active.png"
					},
					{
						"text": "我的",
						"pagePath": "/pages/home/home",
						"iconPath": "/static/tabs/home.png",
						"selectedIconPath": "/static/tabs/home-active.png"
					}
				]
			}
		},
		methods:{
			go(url,key) {
				if(this.type === key) {
					return
				}
				console.log(789,url)
				uni.navigateTo({
					url: url
				})
			}
		}
	}
</script>

<style lang="less">
	.tabbar{
		background-color: #FFFFFF;
		width: 100%;
		height: 98rpx;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		z-index: 99999999;
		align-items: center;
		border-top: 1rpx solid #F7F7F7;
		.li {
			image {
				width: 48rpx;
				height: 48rpx;
			}
			.txt {
				color: #646466;
				font-size: 22rpx;
			}
			.active {
				color: #5EBAFF;
			}
		}
	}
</style>
