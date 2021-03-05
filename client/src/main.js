import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import header from './components/Header.vue'
import footer from './components/Footer.vue'
import ElementUI from 'element-ui';
import './css/reset.css'

Vue.component('my-header',header);
Vue.component('my-footer',footer);
//导入axios组件
import axios from 'axios'
//设置Vue的原型对象axios供全局使用
Vue.prototype.axios = axios;
axios.defaults.baseURL="http://hljshaoxiandui.applinzi.com";
//导入ElementUI组件
// import ElementUI, { Footer } from 'element-ui'
//导入ElementUI样式文件
//通过Vue.use()方法将ElementUI注册为Vue的插件
import 'element-ui/lib/theme-chalk/index.css'
import './css/nav-select.css'


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
