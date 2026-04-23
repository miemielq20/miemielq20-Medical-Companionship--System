// types/menu.ts
import { type RouteRecordRaw } from 'vue-router';

// 路由 菜单项
export type MenuItem = RouteRecordRaw & {
  meta?: {
    name?: string;
    icon?: string;
    path?: string;  // 添加 path 字段，用于菜单导航路径
  };
  describe?: string;
  children?: MenuItem[];    // 递归子菜单
};

// 验证码请求参数类型
export type CodeRequest = {
  tel: string
}

// 登录请求参数类型
export type LoginRequest = {
  userName: string
  passWord: string
  validCode?: string
}

// 菜单请求参数类型
export type MenuRequest = {
  id: number,
  name: string,
  permissions: string
}

// 获取用户信息请求参数类型
export type AutAdminRequest = {
  pageNum: number,
  pageSize: number,
}

// 修改用户信息请求参数类型
export type UpdateUserRequest = {
  name: string
  permissions_id: number
}

// 菜单列表请求参数类型
export type MenuListRequest = AutAdminRequest