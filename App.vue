<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			let uuid = uni.getStorageSync('uuid')
			if (!uuid) {
				let timestamp = Date.parse(new Date());
				var $chars =
					"ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
				var maxPos = $chars.length;
				var pwd = "";
				let i = 0;
				for (i = 0; i < 12; i++) {
					pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
				}
				timestamp = pwd + timestamp;
				uni.setStorageSync('uuid',timestamp)
			}
			uni.connectSocket({
			  url: 'ws://39.98.227.114:9509?uuid='+uuid
			});
			uni.onSocketOpen(function (res) {
			  console.log('WebSocket连接已打开！');
			});
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
