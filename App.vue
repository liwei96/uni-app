<script>
	export default {
		onLaunch: function() {
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
				uni.setStorageSync('uuid', timestamp)
				uuid = timestamp
			}
			if(!uni.getStorageSync('city')) {
				uni.setStorageSync('city',1)
				uni.setStorageSync('cityname','杭州')
			}
			uni.connectSocket({
				url: 'ws://39.98.227.114:9509?uuid=' + uuid
			});
			uni.request({
				url: 'http://ll.edefang.net/getIp.php',
				method: 'GET',
				success: (res) => {
					let ip = res.data
					ip = ip.split('=')[1].split(':')[1]
					ip = ip.substring(1)
					ip = ip.slice(0, -3)
					uni.setStorageSync('ip', ip)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
