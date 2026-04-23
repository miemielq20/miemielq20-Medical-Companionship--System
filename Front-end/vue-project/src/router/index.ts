import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import Layout from '@/views/Layout.vue'

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'main',
    component: Layout,
    meta: { requiresAuth: true },
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
