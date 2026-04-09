import { defineStore } from 'pinia'
import { type MenuItem } from '../types/user'

export const useAsideStore = defineStore('isCollapse', {
  state: () => {
    return {
      asideCollapse: false,
      selectMenu: [] as MenuItem[]
    }
  },
  actions: {
    isCollapse() {
      this.asideCollapse = !this.asideCollapse
    },

    addMenu(payload: MenuItem) {
      const existItem = this.selectMenu.find(item => item.path === payload.path);
      if (existItem) {
      } else {
        this.selectMenu.push(payload);
      }
    },

    closeMenu(index: number) {
      console.log(index);
      //this.selectMenu.splice(index, 1);
    }

  }
})

