import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permission from './mockServeData/permission'

Mock.mock('/api/home/getData',homeApi.getStatisticalData)
Mock.mock(/api\/permission\/getMenu/,permission.getMenu)