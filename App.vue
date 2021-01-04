<script>
	var that
	export default {
		onLaunch: function() {
			that = this
			if (!uni.getStorageSync('city')) {
				uni.setStorageSync('city', 1)
				uni.setStorageSync('cityname', '杭州')
			}
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
			uni.connectSocket({
				url: 'wss://ws.edefang.net?uuid=' + uuid
			});
			// uni.onSocketOpen(function (res) {
			// 	console.log('WebSocket连接已打开！');
			//   that.checkOpenSocket()
			// });
			// this.openConnection()
			uni.request({
				url: 'https://ll.edefang.net/getIp.php',
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
		},
		onUnload() {
			uni.onSocketClose(function(res) {
				console.log('WebSocket 已关闭！');
			});
		},
		data() {
			return {
				timeout: 6000,
				timeoutObj: {},
				SocketTask: {}
			}
		},
		methods: {
			// 判断是否已连接
			checkOpenSocket() {
				uni.sendSocketMessage({
					data: 'ping',
					success: res => {
						
					},
					fail: err => {
						// 未连接打开websocket连接
						that.openConnection();
					}
				});
			},
			openConnection() {
				// 打开连接
				uni.closeSocket(); // 确保已经关闭后再重新打开
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
				that.SocketTask = uni.connectSocket({
					url: 'wss://ws.edefang.net?uuid=' + uuid,
					success(res) {
						console.log('连接成功 connectSocket=', res);
					},
					fail(err) {
						console.log('连接失败 connectSocket=', err);
					}
				});
				console.log(that.SocketTask)
				// setTimeout(()=>{
					
				// },3000)
				that.SocketTask.onOpen(res=>{
					that.SocketTask.send({
						data: 'PING'
					});
					that.onSocketMessage();
				})
			},
			//	打开成功监听服务器返回的消息
			onSocketMessage() {
				// 消息
				this.timeout = 6000;
				this.timeoutObj = null;
				this.SocketTask.onMessage(res => {
					that.getSocketMsg(res.data); // 监听到有新服务器消息
				});
			},
			// 监听到有新服务器消息
			getSocketMsg(reData) {
				// 监听到服务器消息
				this.reset(); // 检测心跳reset,防止长时间连接导致连接关闭
			},
			// 检测心跳reset
			reset() {
				clearInterval(this.timeoutObj);
				this.start(); // 启动心跳
			},
			// 启动心跳 start
			start() {
				this.timeoutObj = setInterval(function() {
					that.SocketTask.send({
						data: 'PING',
						success: res => {
						},
						fail: err => {
							console.log('连接失败重新连接....');
							that.openConnection();
						}
					});
				}, that.timeout);
			}

		}
	}
</script>

<style>
@import "/wxcomponents/vant/dist/common/index.wxss";
	/*每个页面公共css */
</style>
