<template>
  <el-row justify="center" :align="'middle'" class="container">
    <el-card class="login-card" shadow="hover">
      <template #header>
        <div class="login-title">
          <el-image :src="imgUrl" class="login-image" fit="cover" />
        </div>
      </template>
      <div class="jump-link">
        <el-link type="primary" @click="handChange()">{{ formType ? '返回登录' : '注册登录' }}</el-link>
      </div>
      <el-form v-model="userForm" class="userForm">
        <el-form-item prop="userName">
          <el-input v-model="userForm.username" placeholder="手机号" >
            <template #prefix>
              <el-icon class="el-input__icon">
                <UserFilled />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userForm.password" type="password" show-password placeholder="密码" >
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="userForm.code" placeholder="验证码" >
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
              <template #append>获取验证码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn">
            注册账号
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>

</template>


<style lang="less" scoped>
  .container {
    height: 100vh;
    width: 100%;
  }

  .login-card {
    max-width: 430px;
    width: 100%;

    // 移除header的padding和边框
    :deep(.el-card__header) {
      padding: 0 !important;
      margin: 0 !important;
    }

    // 移除body的padding
    :deep(.el-card__body) {
      padding: 0 !important;
      margin: 0 !important;
    }

    .login-image {
      width: 100% !important;
      height: 180px !important;
      display: block;
      margin: 0;
      padding: 0;
    }

    // 为跳转链接添加间距
    .jump-link {
      padding: 8px;
      text-align: right;
    }

    .userForm {
      padding: 10px;

      .login-btn {
        width: 100%;
      }
      .code-btn {
        width: 30%;
      }
    }

  }


</style>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  const imgUrl = '/image/login-bg.jpeg'
  const formType = ref(0)

 
  const handChange = () => {
    formType.value = formType.value ? 0 : 1
  }

  const userForm = reactive({
    username: '',
    password: '',
    code: ''
  })
</script>