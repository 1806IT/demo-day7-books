// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false
// 倒入轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 使用轮播图插件
import 'swiper/dist/css/swiper.css'
//引用css
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
