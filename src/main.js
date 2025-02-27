import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/theme-chalk/dark/css-vars.css' // 引入官方暗黑模式
const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')

