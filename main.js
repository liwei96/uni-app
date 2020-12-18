import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.apiserve = 'http://39.98.227.114:9560'
Vue.prototype.putserve = 'http://ll.edefang.net'
Vue.prototype.dianserve = 'http://39.98.227.114:9550/'
Vue.prototype.login = function(e,that){
	
	let session = uni.getStorageSync('session')
	if(session){
		uni.request({
			url: 'https://api.edefang.net/applets/baidu/decrypt',
			method:'get',
			data:{
				iv: e.detail.iv,
				data: e.detail.encryptedData,
				session_key: session
			},
			success: (res) => {
				console.log(res)
				let tel = res.data.mobile
				uni.setStorageSync('phone',tel)
				let openid = uni.getStorageSync('openid')
				that.tel = tel
				if(!uni.getStorageSync('token')) {
					uni.request({
						url:"https://api.edefang.net/applets/login",
						method:'GET',
						data:{
							phone: tel,
							openid: openid
						},
						success: (res) => {
							console.log(res)
							uni.setStorageSync('token',res.data.token)
							
						}
					})
				}
			}
		})
	}else {
		uni.login({
		  provider: 'baidu',
		  success: function (res) {
		    console.log(res.code);
			uni.request({
				url: 'https://api.edefang.net/applets/baidu/get_session_key',
				method:'get',
				data:{
					code: res.code
				},
				success: (res) => {
					console.log(res)
					uni.setStorageSync('openid',res.data.openid)
					uni.setStorageSync('session',res.data.session_key)
					uni.request({
						url:"https://api.edefang.net/applets/baidu/decrypt",
						data:{
							data: e.detail.encryptedData,
							iv:e.detail.iv,
							session_key:res.data.session_key
						},
						success: (res) => {
							console.log(res)
							let tel = res.data.mobile
							uni.setStorageSync('phone',tel)
							let openid = uni.getStorageSync('openid')
							that.tel = tel
							uni.request({
								url:"https://api.edefang.net/applets/login",
								method:'GET',
								data:{
									phone: tel,
									openid: openid
								},
								success: (res) => {
									console.log(res)
									uni.setStorageSync('token',res.data.token)
								}
							})
						}
					})
				}
			})
		  }
		});
	}
	
}
// Vue.prototype.ip = ip_arr['ip'];
const app = new Vue({
    ...App
})
app.$mount()
