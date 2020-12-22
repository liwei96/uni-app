<template>
	<view>
		<web-view :src="url" v-if="url.length"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			let name = uni.getStorageSync('cityname')
			let id = options.id
			let city = options.cid
			let pro = options.bid
			let uuid = uni.getStorageSync('uuid')
			let staffid = options.id
			let url = `http://m.jy1980.com/chengdu/cxtalk/${uuid}/${staffid}/${pro},${city}?uuid=${uuid}`
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
