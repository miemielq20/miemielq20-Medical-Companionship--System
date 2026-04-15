import http from '@/utils/request'


// 验证码请求参数类型
interface CodeRequest {
  tel: string
}

// 登录请求参数类型
interface LoginRequest {
  userName: string
  passWord: string
  validCode?: string
}

interface menuRequest{
  id:number,
  name:string,
  permissions:string
}
// 发送验证码
export const getCode = (data: CodeRequest) => {
  return http.post('/get/code', data)
}

// 用户权限验证
export const userAuthentication=(data: LoginRequest)=>{
  return http.post('/user/authentication',data, {
  })
}

// 登录
export const login=(data:LoginRequest)=>{
  return http.post('/login',data)
}


// 获取用户菜单
export const userGetMenu=()=>{
  return http.get('/user/getMenu')
}

//用户权限修改
export const userSetmenu=(data:menuRequest)=>{
  return http.post('/user/setMenu',data)
}