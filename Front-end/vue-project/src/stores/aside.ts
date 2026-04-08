import { defineStore } from 'pinia'

export const useAsideStore= defineStore('isCollapse', {
  state: () => {
    return {
      asideCollapse: false
    }
  },
  actions: {
    isCollapse() {
      this.asideCollapse = !this.asideCollapse
    }
  }
})

