import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Layout from '@/views/Layout.vue'

//动态路由加载函数
const localData = localStorage.getItem('RouterList')
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: Layout,
    meta: { requiresAuth: true },
    redirect: (to)=>{
      // 有路由数据，根据路由数据进行跳转
      if(localData){
        const children = JSON.parse(localData).routerList[0].children 
        // 有子路由，跳转到第一个子路由；没有子路由，跳转到对应的根路径
        if(children && children.length > 0){
          return { path: children[0].path }
        }else{
          return { path: JSON.parse(localData).routerList[0].meta.path }
        }
      }else{
        return { path: '/' }
      }
    },
    children: [
      
      // {
      //   path: "dashboard",
      //   name: 'dashboard',
      //   meta: { id: '1', icon: 'Platform', path: '/dashboard', name: '控制台'  },
      //   component: Dashboard,
      // },
      // {
      //   path: "auth",
      //   name: 'auth',
      //   meta: { id: '2', icon: 'Grid', path: '/auth', name: '权限管理' },
      //   children: [
      //     {
      //       path: "admin",
      //       name: 'admin',
      //       meta: { id: '1', icon: 'User', path: '/auth/admin', name: '用户管理' },
      //       component: User,
      //     },
      //     {
      //       path: "group",
      //       name: 'group',
      //       meta: { id: '2', icon: 'Menu', path: '/auth/group', name: '菜单管理' },
      //       component: Menu,
      //     }
      //   ]
      // },
      // {
      //   path: "vppz",
      //   name: 'vppz',
      //   meta: { id: '3', icon: 'Bell', path: '/vppz', name: 'DIDI陪诊' },
      //   children: [
      //     {
      //       path: "staff",
      //       name: 'staff',
      //       meta: { id: '1', icon: 'Checked', path: '/vppz/staff', name: '陪护管理' },
      //       component: Companion,
      //     },
      //     {
      //       path: "order",
      //       name: 'order',
      //       meta: { id: '2', icon: 'List', path: '/vppz/order', name: '订单管理' },
      //       component: Order,
      //     }
      //   ]
      // }
      
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false }
  },

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
