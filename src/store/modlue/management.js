const management={
    state: {
        invoiceId:null, //门店对佣单ID 
        InvoiceDetail:null,//门店详情
    },
    mutations: {
        // 门店对佣单ID 
        invoiceIdFn(state,data){
             state.invoiceId=data
        },
        InvoiceDetail(state,data){
             state.InvoiceDetail=data
        }
    },
    actions: {
        //门店对佣单ID 
        invoiceIdFn({commit},data){
            commit('invoiceIdFn',data)
        },
        //门店详情
        InvoiceDetail({commit},data){
            commit('InvoiceDetail',data)
        }
    }
}

export default management;