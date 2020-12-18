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
			let uuid = uni.getStorageSync('uuid')
			let staffid = options.id
			let city = uni.getStorageSync('city')
			let url = `http://localhost:3000/chengdu/cxtalk/${uuid}/${staffid}/814,${city}?uuid=${uuid}`
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
