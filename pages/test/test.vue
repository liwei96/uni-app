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
			//#ifdef MP-BAIDU
			swan.setPageInfo({
				title: '允家新房-周边详情',
				keywords: '允家新房-周边详情',
				description: '允家新房-周边详情',
				success: res => {
					console.log('setPageInfo success', res);
				},
				fail: err => {
					console.log('setPageInfo fail', err);
				}
			})
			//#endif
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