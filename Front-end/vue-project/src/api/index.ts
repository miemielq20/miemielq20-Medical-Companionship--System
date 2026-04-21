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

// 菜单请求参数类型
interface menuRequest{
  id:number,
  name:string,
  permissions:string
}

// 获取用户信息请求参数类型
interface autAdminRequest{
  pageNum:number,
  pageSize:number,
}

interface updateUserRequest {
  name: string
  permissions_id: number
}

interface menuListRequest extends autAdminRequest {}
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

//账号管理
export const authAdmin=(params:autAdminRequest)=>{
  return http.get('/auth/admin',{params})
}

//菜单权限下拉
export const menuSelectlist=()=>{
  return http.get('/menu/selectlist')
}

//菜单权限列表
export const menuList=(params:menuListRequest)=>{
  return http.get('/menu/list',{params})
}

//菜单权限添加
export const updateUser=(data:updateUserRequest)=>{
  return http.post('/update/user',data)
}