<template>
	<view class="aroundweb">
		<web-view :src="src" :webview-styles="webviewStyles" v-if="src!==''" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pro_id:"",
				src:"",
			    webviewStyles: {
						progress: {
							color: '#3EACF0'
						}
				}
			};
		},
		onLoad(option){
			console.log(option);
			this.pro_id = option.id;
			this.src = "http://m.jy1980.com/hangzhou/rim/"+option.id;
			console.log(this.src,'src');
		},
		methods:{
			getMessage(e){
				console.log("接收到消息"+e.detail)
			}
		}
	}
</script>

<style lang="less">

</style>
