import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Layout from '@/views/Layout.vue'
import Dashboard from '@/views/dashboard/index.vue'
import User from '@/views/auth/user/index.vue'
import Menu from '@/views/auth/menu/index.vue'
import Companion from '@/views/vppz/companion/index.vue'
import Order from '@/views/vppz/order/index.vue'


const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'layout',
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "dashboard",
        name: 'dashboard',
        meta: { id: '1', icon: 'Platform', path: '/dashboard', title: '控制台'  },
        component: Dashboard,
      },
      {
        path: "auth",
        name: 'auth',
        meta: { id: '2', icon: 'Grid', path: '/auth', title: '权限管理' },
        children: [
          {
            path: "user",
            name: 'user',
            meta: { id: '1', icon: 'User', path: '/auth/user', title: '用户管理' },
            component: User,
          },
          {
            path: "menu",
            name: 'menu',
            meta: { id: '2', icon: 'Menu', path: '/auth/menu', title: '菜单管理' },
            component: Menu,
          }
        ]
      },
      {
        path: "vppz",
        name: 'vppz',
        meta: { id: '3', icon: 'Bell', path: '/vppz', title: 'DIDI陪诊' },
        children: [
          {
            path: "companion",
            name: 'companion',
            meta: { id: '1', icon: 'Checked', path: '/vppz/companion', title: '陪护管理' },
            component: Companion,
          },
          {
            path: "order",
            name: 'order',
            meta: { id: '2', icon: 'List', path: '/vppz/order', title: '订单管理' },
            component: Order,
          }
        ]
      }
      
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
