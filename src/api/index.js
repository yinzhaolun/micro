import http from '../utils/request'

export const getData = () =>{
    return http.get('/home/getData')
}
export const getMenu = (data) =>{
    return http.post('/permission/getMenu',data)
}