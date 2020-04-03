import {logout} from '@/api/login/index'
const user={
    state: {
        userinfo:JSON.parse(sessionStorage.getItem('userinfo'))||{},//用户信息
        token:JSON.parse(sessionStorage.getItem('userinfo'))?JSON.parse(sessionStorage.getItem('userinfo')).token:null,//token状态
        navleft:false,//展开/收拢开关
        hovuerindex:sessionStorage.getItem('hovuerindex')?sessionStorage.getItem('hovuerindex'):0, //菜单激活下标
        routeArr:[],
        arrData:[],
        nav:[]
    },
    mutations: {
        clearLogin(state,data){
            logout().then(res=>{
                if(res.data.code==='000'){
                    state.userinfo={}
                    state.token=null
                 //    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('userinfo')
                    sessionStorage.removeItem('hovuerindex')
                    data.push('/login')
                    this._vm.$message.success({message:res.data.msg,center:true})
                }
            })
        
        },
        routerArrFn(state,data){
          state.routeArr=data
        },
        catnavLeft(state,data){
            state.navleft=data
        },
        selectindex(state,data){
            state.hovuerindex=data.num
            data.router.push(data.path)
            sessionStorage.setItem('hovuerindex',data.num)
        },
        routerWatch(state,data){
            state.routeArr.forEach(item=>{
                item.children.forEach(items=>{
                    if(items.path===data){
                        state.hovuerindex=items.count
                        // console.log(state.hovuerindex)
                    }
                })
            })
        },
        loginFn(state,data){
            sessionStorage.removeItem('userinfo')
            sessionStorage.removeItem('hovuerindex')
            state.userinfo=data.fromdata.bizData.items[0]
            if(data.fromdata.code===0){
                data.that.$message.error({message:data.fromdata.msg,center:true})
                return;
            }
            data.that.$message.success({message:'登录成功',center:true})
            data.that.$router.push('/')
            sessionStorage.setItem('userinfo',JSON.stringify(data.fromdata.bizData.items[0])) //保存用户信息
            state.token=data.fromdata.bizData.items[0].token//保存token
        },
        navlist(state,data){
          state.nav=data
        }
    },
    actions: {
        // 退出登录
        clearLogin({commit},data){
            commit('clearLogin',data)
        },
        // 改变leftnav宽度
        catnavLeft({commit},data){
            commit('catnavLeft',data)
        },
        // 改变菜单下标激活
        pathindex({commit},data){
            commit('selectindex',data)
        },
        //路由监听重定向
        routerWatch({commit},data){
            commit('routerWatch',data)
        },
        // 登录
        loginFn({commit},data){
            commit('loginFn',data)
        },
        //存储过滤后的路由
        navlist({commit},data){
            commit('navlist',data)
        }
    }
}
export default user;