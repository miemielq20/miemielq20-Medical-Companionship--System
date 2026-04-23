import { defineStore } from 'pinia'
import { type MenuItem } from '@/types/user'

export const useAsideStore = defineStore('isCollapse', {
  state: () => {
    return {
      asideCollapse: false,
      selectMenu: <MenuItem[]>([])
    }
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
    }

  }
})

