<template>
  <el-row justify="center" :align="'middle'" class="container">
    <el-card class="login-card" shadow="hover">
      <template #header>
        <div class="login-title">
          <el-image :src="imgUrl" class="login-image" fit="cover" />
        </div>
      </template>
      <div class="jump-link">
        <el-link type="primary" @click="handChange()">{{ formType ? '返回登录' : '注册账号' }}</el-link>
      </div>
      <el-form :model="userForm" class="userForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="userForm.username" placeholder="手机号">
            <template #prefix>
              <el-icon class="el-input__icon">
                <UserFilled />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userForm.password" type="password" show-password placeholder="密码">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="userForm.code" placeholder="验证码">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
            <template #append><span @click="getCode">
                {{ cutdown.text }}
              </span></template>
          </el-input>
        </el-form-item>
        <el-form-item v-if="userForm">
          <el-button type="primary" class="login-btn">
            {{formType?"注册账号":"登录"  }}
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
  import type { FormRules } from 'element-plus'

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

  // 正则
  const phoneReg = /^1[3-9]\d{9}$/;
  const passwordReg = /^.{6,20}$/;
  const validateUsername = (rule: any, value: string, callback: any) => {
    if (!phoneReg.test(value)) {
      callback(new Error('请输入正确的手机号码'))
    } else {
      callback()
    }
  }

  const validatePassword = (rule: any, value: string, callback: any) => {
    if (!passwordReg.test(value)) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }

  //校验
  const rules = reactive<FormRules<typeof userForm>>({
     username: [{ validator: validateUsername, trigger: 'blur' }],
     password: [{ validator: validatePassword, trigger: 'blur' }],
})


 

  const cutdown = reactive({
    text: '获取验证码',
    time: 60
  })

  const flag = ref(true)
  //获取验证码
  const getCode = () => {

    if (!flag.value) return
    flag.value = false
    if (!userForm.username || !phoneReg.test(userForm.username)) {
      return ElMessage({
        message: '请输入正确的手机号格式',
        type: 'warning',
      })

    }
    setInterval(() => {
      if (cutdown.time <= 0) {
        flag.value = true
        cutdown.text = '获取验证码'
        cutdown.time = 60
        flag.value = true
      } else {
        cutdown.time--
        cutdown.text = cutdown.time + 's'
        console.log('获取验证码')
      }
    }, 1000)
  }
</script>