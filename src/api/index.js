import request from '../utils/request'

export const getUserList = (data) => {
    return request({
        url: '/user/getPageUser',
        method: 'post',
        data
    })
}

export const getGround = () => {
    return request({
        url: '/admin/index',
        method: 'get',
      
    })
}

export const disableUser = (data) => {
    return request({
        url: '/admin/updateUser',
        method: 'get',
      data,
    })
}
