// types/menu.ts
import {type RouteRecordRaw } from 'vue-router';

// 菜单项
export type MenuItem = RouteRecordRaw & {
  icon?: string;            // 可选：图标
  meta?: {
    title?: string;         // 可选：备用标题
    icon?: string;          // 可选：备用图标
    hidden?: boolean;       // 可选：是否隐藏菜单
  };
  children?: MenuItem[];    // 递归子菜单
};