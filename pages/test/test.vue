<template>
	<view class="content">
		<web-view :src="'http://localhost:3000/hangzhou/rim/1445?uuid=kWNznYTEzB3s1608096182000'" v-if="url.length"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			let name = uni.getStorageSync('cityname')
			console.log(name)
			let url = 'http://localhost:3000/hangzhou/rim/1445?uuid=kWNznYTEzB3s1608096182000'
			url = url+'&cityname='+name
			this.url = url
			console.log(url)
		},
		data() {
			return {
				url: 'http://localhost:3000/hangzhou/map?uuid=kWNznYTEzB3s1608096182000'
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>