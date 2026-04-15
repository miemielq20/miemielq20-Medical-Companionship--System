<template>
    <button @click="dialogTableVisible = true">打开</button>
    <el-dialog v-model="dialogTableVisible" :before-close="handleClose" width="40%">
        <h3>添加权限</h3>
        <el-form ref="formRef" :model="form" label-width="80px">
            <el-form-item v-show="false" prop="id"></el-form-item>
            <el-form-item label="权限名称" prop="name" :rules="[
                { required: true, message: '名字不能为空' ,trigger: 'blur' },
            ]">
                <el-input v-model="form.name" pleaceholder="请输入权限名称" />
            </el-form-item>
            <el-form-item label="权限" prop="permissions" max-width="600px">
                <el-tree style="max-width: 600px" :data="permissionData" show-checkbox node-key="id"
                    :default-expanded-keys="[2, 3]" :default-checked-keys="[4, 5]" ref="treeRef" />
            </el-form-item>
        </el-form>
        <template #footer>
            <el-button type="primary" @click="confirm(formRef)">确定</el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { userGetMenu } from '@/api/index'
    import { onMounted } from 'vue'
    import { type FormInstance } from 'element-plus'
    import { userSetmenu } from '@/api/index'


    // 弹窗
    const dialogTableVisible = ref(false)
    const form = ref({
        name: '',
        permissions: '',
        id: 0
    })
    const permissionData = ref([])
    const treeRef = ref()
    const formRef = ref()

    // 获取权限数据
    onMounted(() => {
        userGetMenu().then(res => {
            permissionData.value = res.data.data
        })
    })

    // 关闭弹窗
    const handleClose = () => {
        dialogTableVisible.value = false
    }

    const confirm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return
        await formEl.validate((valid, fields) => {
            if (valid) {
               const checkedKeys = JSON.stringify(treeRef.value.getCheckedKeys()) 
               userSetmenu({id:form.value.id,name:form.value.name,permissions:checkedKeys})
            } else {
                console.log('error submit!', fields)
            }
        })
    }
</script>