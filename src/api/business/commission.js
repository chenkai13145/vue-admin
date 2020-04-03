//收佣管理
import request from '@/utils/request'
// 根据简单状态查询发票列表
export function simpleInvoiceList(data){
    return request({
        url:'/ticket/simpleInvoiceList',
        method:'POST',
        data:data
    })
}

// 根据简单状态查询发票列表
export function allDynaList(data){
    return request({
        url:'/project/allDynaList',
        method:'POST',
        data:data
    })
}

// 开发商发票-选择楼盘列表
export function invoiceProject(data){
    return request({
        url:'project/invoiceProject',
        method:'POST',
        data:data
    })
}

// 添加楼盘开发商信息
export function addDutyNo(data){
    return request({
        url:'/project/addDutyNo',
        method:'POST',
        data:data
    })
}
//查询开发商信息
export function findKfsInfo(data){
    return request({
        url:'/ticket/findKfsInfo',
        method:'POST',
        data:data
    })
}
//发票接口明细（开票详情）
export function invoiceDetail(data){
    return request({
        url:'/ticket/invoiceDetail',
        method:'POST',
        data:data
    })
}
//审核发票
export function checkInvoice(data){
    return request({
        url:'/ticket/checkInvoice',
        method:'POST',
        data:data
    })
}

//经纪人列表
export function userList(data){
    return request({
        url:'/user/userList',
        method:'POST',
        data:data
    })
}
//查询发票操作日志
export function invoiceLog(data){
    return request({
        url:'/ticket/invoiceLog',
        method:'POST',
        data:data
    })
}
// 获取成交单详细
export function ticketDetail(data){
    return request({
        url:'/ticket/ticketDetail',
        method:'POST',
        data:data
    })
}
//成交单-开发商佣金详情
export function ticketKfsDetail(data){
    return request({
        url:'/ticket/ticketKfsDetail',
        method:'POST',
        data:data
    })
}

//门店对佣详情
// export function deptInvoiceDetail(data){
//     return request({
//         url:'/ticket/deptInvoiceDetail',
//         method:'POST',
//         data:data
//     })
// }

// export function selDeptTicketList(data){
//     return request({
//         url:'/ticket/selDeptTicketList',
//         method:'POST',
//         data:data
//     })
// }
//(认购单)/ticket/commitInvoice
export function selectTicketList(data){
    return request({
        url:'/ticket/selectTicketList',
        method:'POST',
        data:data
    })
}

//发（开）票添加接口
export function addInvoice(data){
    return request({
        url:'/ticket/addInvoice',
        method:'POST',
        data:data
    })
}

//发（开）票添加接口
export function commitInvoice(data){
    return request({
        url:'/ticket/commitInvoice',
        method:'POST',
        data:data
    })
}


//发票编辑接口
export function editInvoice(data){
    return request({
        url:'/ticket/editInvoice',
        method:'POST',
        data:data
    })
}

//发票确认收佣
export function commInvoice(data){
    return request({
        url:'/ticket/commInvoice',
        method:'POST',
        data:data
    })
}


