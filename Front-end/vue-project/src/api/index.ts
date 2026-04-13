import http from '@/utils/request'

// 验证码请求参数类型
interface CodeRequest {
  tel: string
}

// 发送验证码
export const getCode = (data: CodeRequest) => {
  return http.post('/get/code', data)
}
