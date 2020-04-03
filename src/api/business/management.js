//结佣管理
import request from '@/utils/request'
//门店列表
export function deptList(data){
      return request({
          url:'/department/deptList',
          method:'post',
          data
      })
}

//根据状态查询门店对佣列表
export function deptInvoiceList(data){
    return request({
        url:'/ticket/deptInvoiceList',
        method:'post',
        data
    })
}

//门店对佣详情
export function deptInvoiceDetail(data){
    return request({
        url:'/ticket/deptInvoiceDetail',
        method:'post',
        data
    })
}

//门店对佣编辑
export function editDeptInvoice(data){
    return request({
        url:'/ticket/editDeptInvoice',
        method:'post',
        data
    })
}
//添加门店对佣
export function addDeptInvoice(data){
    return request({
        url:'/ticket/addDeptInvoice',
        method:'post',
        data
    })
}
//查询【门店对佣单】操作日志
export function deptInvoiceLog(data){
    return request({
        url:'/ticket/deptInvoiceLog',
        method:'post',
        data
    })
}

