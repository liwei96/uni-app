<template>
	<view class="content">
		<web-view :src="url" v-if="url.length"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			let name = uni.getStorageSync('cityname')
			let id = options.id
			let url = `http://m.jy1980.com/hangzhou/rim/${id}/1?uuid=kWNznYTEzB3s1608096182000&isbaidu=1`
			// url = url+'&cityname='+name
			this.url = url
			console.log(url)
		},
		data() {
			return {
				url: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>