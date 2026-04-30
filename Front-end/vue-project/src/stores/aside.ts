import { defineStore } from 'pinia'
import { type MenuItem } from '@/types/router'
 import {type AsideMenuState} from "@/types/menu"

export const useAsideStore = defineStore('isCollapse', {
  state: (): AsideMenuState => {
    return {
      // 侧边栏折叠状态
      asideCollapse: false, 
      // 菜单列表
      selectMenu: <MenuItem[]>([]),
      // 激活菜单的id
      menuActive:'1-1'
    }
  },
  persist: {
     pick: ['selectMenu', 'menuActive'],
  },
  
  actions: {
    // 侧边栏折叠
    isCollapse() {
      this.asideCollapse = !this.asideCollapse
    },

    // 添加菜单
    addMenu(payload: MenuItem) {
      // 判断当前菜单是否已存在
      const existItem = this.selectMenu.find(item => item.name === payload.name);
      if (existItem) {
        return;
      } else {
        this.selectMenu.push(payload);
      }
    },

    // 删除菜单
    closeMenu(index: number) {
      console.log(index);
      this.selectMenu.splice(index, 1);
    },
    // 菜单激活
    updateMenuActive(payload: string) {
      this.menuActive = payload
    }
  }
})

