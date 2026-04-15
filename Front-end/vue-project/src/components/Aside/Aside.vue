<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu :style="{ width: isCollapse ? '50px' : '200px' }" active-text-color="#ffd04b" background-color="#545c64"
        class="el-menu-vertical-demo" default-active="2" text-color="#fff"   :collapse="isCollapse" >
        <p class="title">{{ isCollapse?'DIDI' :'DIDI陪诊' }}</p>
        <TreeMenu :AsideMenu="AsideMenu" />
      </el-menu>
    </el-col>
  </el-row>
</template>


<script lang="ts" setup>

  import { useRouter } from 'vue-router'
  import TreeMenu from '@/components/Aside/TreeMenu.vue'
  import { useAsideStore } from '@/stores/aside'
  const AsideStore = useAsideStore()

  //侧边栏状态
  const  isCollapse = computed(() => {
    return AsideStore.asideCollapse
  })

  const router = useRouter()
  import { computed } from 'vue'
  
  // 侧边栏菜单routes配置信息
  const AsideMenu = computed(() => router.options.routes[0]?.children || [])

</script>
<style lang="less">
  .tac {
    height: 100%;
    overflow: hidden;

    .el-menu-vertical-demo {
      height: 100%;
      transition: none!important;

      .title {
        text-align: center;
        color: white;
        font-size: 24px;
      }
    }

  }
</style>
