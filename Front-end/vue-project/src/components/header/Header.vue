<template>
    <div class="header">
        <div class="header-left"@click="toggleAside">
            <el-icon size="20" >
                <Fold />
            </el-icon>
        </div>
        <div class="header-tags">

        </div>
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
    import {useAsideStore} from "@/stores/aside";
    const asideStore = useAsideStore();
    const toggleAside = () => {
        asideStore.isCollapse();
    };
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
            justify-content: center;
            align-items: center;
        }

        .header-left:hover {
            background: #f5f5f5;
            cursor: pointer;
        }

        .header-right {
            width: 200px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            .username {

                height: 100%;
            }

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