import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.apiserve = 'http://39.98.227.114:9560'
Vue.prototype.putserve = 'http://ll.edefang.net'
Vue.prototype.dianserve = 'http://39.98.227.114:9550/'
Vue.prototype.httpsapi = 'https://api.edefang.net'
// Vue.prototype.ip = ip_arr['ip'];
const app = new Vue({
    ...App
})
app.$mount()
