import http from '@/utils/request'
import {type CodeRequest,type LoginRequest, type MenuRequest, type MenuListRequest,type AutAdminRequest,type UpdateUserRequest,type MenuItem } from '@/types/user'


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
export const userSetmenu=(data:MenuRequest)=>{
  return http.post('/user/setMenu',data)
}

//账号管理
export const authAdmin=(params:AutAdminRequest)=>{
  return http.get('/auth/admin',{params})
}

//菜单权限下拉
export const menuSelectlist=()=>{
  return http.get('/menu/selectlist')
}

//菜单权限列表
export const menuList=(params:MenuListRequest)=>{
  return http.get('/menu/list',{params})
}

//菜单权限添加
export const updateUser=(data:UpdateUserRequest)=>{
  return http.post('/update/user',data)
}

//
export const menuPermissions=()=>{
  return http.get(`/menu/permissions`)
}