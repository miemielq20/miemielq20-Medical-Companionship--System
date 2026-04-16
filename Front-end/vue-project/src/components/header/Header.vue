<template>
    <div class="header">
        <div class="header-left" @click="toggleAside">
            <el-icon size="20">
                <Fold />
            </el-icon>
        </div>
        <ul class="header-tags">
            <li v-for="(item, index) in selectMenuData" :key="item.path"
                :class="{ isActive: $route.path == item.meta?.path }" class="tag">
                <el-icon v-if="item.meta?.icon" size="20">
                    <component :is="item.meta?.icon" />
                </el-icon>
                <router-link :to="{
                    path: item.meta?.path as string
                }"><span>{{ item.meta?.title }}</span> 
                </router-link>
                <el-icon size="14" class="close-icon" color="black" @click.stop="closeTag(item, index)">
                    <Close />
                </el-icon>


            </li>

        </ul>
        <div class="header-right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                    <div class="username"><span>admin</span></div>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item> 退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang="ts" setup>

    import { useAsideStore } from "@/stores/aside";
    import { useRouter } from "vue-router";
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { onMounted } from "vue";

    const route = useRoute();
    const router = useRouter();
    const asideStore = useAsideStore();

    const { selectMenu, isCollapse, closeMenu } = asideStore;
    

    // 切换侧边栏
    const toggleAside = () => {
        isCollapse();
    };

    const selectMenuData = computed(() => {
        return selectMenu;
    });

    //tag关闭
    const closeTag = (item: any, index: number) => {
        // 判断当前关闭的tag是否是当前路由
        if(route.path!==item.meta?.path){
            return;
        }else{
            //判断当前tag位置
           if(selectMenu.length!=0){
                if(index==selectMenu.length-1){
                    // 判断当前tag是否是最后一个
                    if(index==0){
                        closeMenu(index);
                        router.push('/login')
                    }else {
                        //判断当前tag是否为末尾,向前跳
                       closeMenu(index);
                       router.push(selectMenu[index-1]?.meta?.path as string)
                    }
                }else{
                    //当前tag在中间向后跳
                  router.push(selectMenu[index+1]?.meta?.path as string)

                  closeMenu(index);
                }
           }
          
        }

    }


</script>

<style lang="less">
    .header {
        width: 100%;
        height: 50px;
        background: white;
        display: flex;

        .header-left {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header-tags {
            width: 85%;
            height: 50px;
            display: flex;
            align-items: center;
            list-style: none;

            .tag {
                height: 50px;
                padding: 0 12px;
                text-decoration: none;
                color: black;
                display: flex;
                flex-direction: row;
                gap: 6px;
                align-items: center;
                justify-content: center;

                a {
                    text-decoration: none;
                    color: black;
                }
                

                .close-icon {
                    cursor: pointer;
                    visibility: hidden;
                }

                &:hover {
                    background-color: #ebe8e8;
                    cursor: pointer;

                    .close-icon {
                        visibility: inherit;
                    }
                }
            }

            .isActive {
                background-color: #e7e7e7;

                a {
                    color: #2281e1;
                }

            }
        }

        .header-left:hover {
            background: #f5f5f5;
            cursor: pointer;

        }

        .header-right {
            width: 200px;
            height: 50px;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;

            .el-dropdown-link {
                display: flex;
                outline: none;

                .username {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 5px;
                }
            }
        }

        .header-right:hover {
            cursor: pointer;
        }
    }
</style>