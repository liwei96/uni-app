import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


App.mpType = 'app'
Vue.prototype.apiserve = 'http://39.98.227.114:9560'

const app = new Vue({
    ...App
})
app.$mount()
