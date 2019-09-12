import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/main.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    console.log('insert')
  },
  update () {
    console.log('update')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
