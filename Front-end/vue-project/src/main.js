import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

import PanelHead from "@/components/panel/PanelHead.vue"

//路由守卫
router.beforeEach((to, from) => {
  const token = localStorage.getItem('token')

  // 如果需要认证，但没 token，跳转到登录页
  if (to.meta.requiresAuth && !token) {
    console.log('没有 token')
    return {
      path: '/login',
    }
  }else{
    if(token && to.path==='/login'){
      return {
        path: '/',
      }
    }
  }

  // 其他情况放行
  return true
})

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//注册组件
app.component('PanelHead', PanelHead)

app.use(createPinia())
app.use(router)

app.mount('#app')
