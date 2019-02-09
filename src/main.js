import Vue from 'vue'
import VueResource from 'vue-resource'
import VueJsonp  from  'vue-jsonp'
import App from './App.vue'
import router from './router'
import global from './global'

Vue.prototype.GLOBAL = global

Vue.use(VueResource)
Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
