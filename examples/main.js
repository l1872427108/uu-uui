import Vue from 'vue'
import App from './App.vue'

import './assets/font/iconfont.css';
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, {
  size: 'small'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
