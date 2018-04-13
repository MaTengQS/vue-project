// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// 将全局样式文件写在 main.js
import '@/assets/scss/reset.scss'
import '@/assets/scss/iconfont.scss'
import '@/assets/ali-fonts/iconfont.css'

// 图片懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(Mint)

Vue.use(VueLazyload, {
  loading: '/static/loading-bars.svg'
  // loading: require('@/assets/img/logo.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
