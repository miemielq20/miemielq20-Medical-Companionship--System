import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import getDynamicRouter from './utils/getList'

// pinia 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
 
// element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

//头部组件
import PanelHead from "@/components/panel/PanelHead.vue"


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) 

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//注册组件
app.component('PanelHead', PanelHead)
app.use(pinia)

//动态路由加载标记
let isDynamicRoutesLoaded = false

// 如果刷新页面已经有 token，先加载动态路由，避免首次导航时路由表不完整
const token = localStorage.getItem('token')
if (token) {
  await getDynamicRouter()
  isDynamicRoutesLoaded = true
}

app.use(router)

//路由守卫  
router.beforeEach(async( to, from) => {
  const token = localStorage.getItem('token')

  // 已登录（有 token）
  if (token) {
    if (to.path === '/login') {
      return { path: '/' }
    }

    if (!isDynamicRoutesLoaded) { 
      await getDynamicRouter()
      //已加载
      isDynamicRoutesLoaded = true  
      return { ...to, replace: true }
    } else {
       return true 
    }

  } 
  // 未登录（无 token）
  else {
    if (to.path === '/login') {
       return true
    } else {
       return { path: '/login' }
    }
  }
})

app.mount('#app')





