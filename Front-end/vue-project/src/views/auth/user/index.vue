<template>
    <panel-head />

    <el-table :data="tableData.list" style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="name" label="昵称" />
        <el-table-column prop="permissions_id" label="所属组别">
            <template #default="scope">
                {{ permissionName(scope.row.permissions_id) }}
            </template>
        </el-table-column>
        <el-table-column prop="active" label="状态">
            <template #default="scope">
                <el-tag :type="scope.row.active ? 'success' : 'danger'">{{ scope.row.active ? '正常' : '异常' }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" />
        <el-table-column prop="create_time" label="创建时间" >
            <template #default="scope">
                <div class="time-into">
               <el-icon><Clock /></el-icon>
               <span>{{ scope.row.create_time }}</span>
               </div>
            </template>
        </el-table-column>>
        <el-table-column label="操作" width="180">
            <template #default="scope">
                <el-button type="primary">编辑</el-button>
            </template>
        </el-table-column>>
    </el-table>

    <div class="pagination-into">
        <el-pagination v-model:current-page="paginnationData.pageNum" :page-size="paginnationData.pageSize"
            layout="total, prev, pager, next" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :total="tableData.total" />
    </div>
</template>

<script lang="ts" setup>

    import { authAdmin, menuSelectlist } from '@/api/index'
    import { ref, reactive, onMounted } from 'vue'

    import { type PermissionGroup, type Permissions } from '@/types/permisson'
    import dayjs from 'dayjs'

    // 列表参数
    const paginnationData = {
        pageNum: 1,
        pageSize: 10
    }

    // 列表数据
    const tableData = reactive({
        list: <PermissionGroup[]>([]),
        total: 0
    })

    // 权限名称
    const options = ref<PermissionGroup[]>([])

    // 获取权限数据
    onMounted(() => {
        getList()
        menuSelectlist().then(res => {
            options.value = res.data.data
        })
    })
    // 权限名称
    const permissionName = (id: number) => {
        const data = options.value.find(item => item.id === id)
        return data ? data.name : '超级管理员'
    }
    //请求列表数据
    const getList = () => {
        authAdmin(paginnationData).then(res => {
            // 处理数据类型
            const { list, total } = res.data.data as { list: Permissions[], total: number }
            list.forEach(item => {
                item.create_time = dayjs(item.create_time).format('YYYY-MM-DD')
            })
            tableData.list = list
            tableData.total = total
        })
    }


    // 页数改变
    const handleSizeChange = (val: number) => {
        paginnationData.pageSize = val
        getList()
    }

    // 分页
    const handleCurrentChange = (val: number) => {
        paginnationData.pageNum = val
        getList()
    }

</script>

<style scoped>
    .time-into {
        display: flex;
        align-items: center;
        gap: 5px;
    }

</style>