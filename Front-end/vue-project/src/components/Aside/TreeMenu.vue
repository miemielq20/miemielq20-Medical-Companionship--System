<template>
    <div>
        <template v-for="item in AsideMenu" :key="item.path" >
            <el-menu-item v-if="!item.children || item.children.length == 0" :index="item.meta?.path"
            @click="handleClick(item)">
                <el-icon v-if="item.meta?.icon" size="24">
                    <component :is="item.meta?.icon" />
                </el-icon>
                <span>{{ item.meta?.title }}</span>
            </el-menu-item>
            <el-sub-menu v-else :index="item.meta?.path">
                <template #title>
                    <el-icon>
                       <component :is="item.meta?.icon" />
                    </el-icon>
                     <span>{{ item.meta?.title }}</span>
                </template>
             <tree-menu :AsideMenu="item.children"></tree-menu>
            </el-sub-menu>
        </template>
    </div>
</template>

<script setup lang="ts">
     import { useRouter } from 'vue-router'
     import {type MenuItem} from "@/types/user"
     const router = useRouter()
     //侧边栏路由跳转
    const handleClick = (item: MenuItem): void => {
     if (item.meta?.path) {
       router.push(item.meta.path)
     }
    }
    
    defineProps<{
        AsideMenu: MenuItem[]
    }>()
</script>