import http from '@/utils/request'


// 验证码请求参数类型
interface CodeRequest {
  tel: string
}

interface LoginRequest {
  userName: string
  passWord: string
  validCode?: string
}
// 发送验证码
export const getCode = (data: CodeRequest) => {
  return http.post('/get/code', data)
}

export const userAuthentication=(data: LoginRequest)=>{
  return http.post('/user/authentication',data, {
  })

}

export const login=(data:LoginRequest)=>{
  return http.post('/login',data)
}
