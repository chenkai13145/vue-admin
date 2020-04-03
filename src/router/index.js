import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Layout from 'components/layout/index'

Vue.use(VueRouter)
const _import=(paths)=>()=>import(`@/views${paths}.vue`)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 全局路由(无需嵌套上左右整体布局)

const globalRoutes = [
  {
    path: '/404',
    component: _import('/common/404'),
    name: '404',
    meta: { title: '404未找到' }
  },
  {
    path:'/',
    redirect:'/system/administrator'
  },
  {
    path: '/login',
    component: _import('/common/login'),
    name: 'login',
    meta: { title: '登录' }
  },
  {
    path:'*',
    redirect:'/404'
  }
]
//系统路由
const system=[
  {
    path:'/system/administrator',
    name:'administrator',
    component:_import('/system/administrator'),
    meta:{requireAuth:true,title:'管理员'}
  },
  {
   path:'/system/advertisement',
   name:'advertisement',
   component:_import('/system/advertisement'),
   meta:{requireAuth:true,title:'首页轮播广告'}
 },
 {
   path:'/system/advertising',
   name:'advertising',
   component:_import('/system/advertising'),
   meta:{requireAuth:true,title:'启动广告'}
 },
 {
   path:'/system/appversion',
   name:'appversion',
   component:_import('/system/appversion'),
   meta:{requireAuth:true,title:'APP版本'}
 },
 {
   path:'/system/headlines',
   name:'headlines',
   component:_import('/system/headlines'),
   meta:{requireAuth:true,title:'首页头条'}
 },
 {
   path:'/system/local',
   name:'local',
   component:_import('/system/local'),
   meta:{requireAuth:true,title:'地市'}
 },
 {
   path:'/system/role',
   name:'role',
   component:_import('/system/role'),
   meta:{requireAuth:true,title:'管理员角色'}
 },
]
//用户路由
const user=[
  {
    path:'/user/broker',
    name:'broker',
    component:_import('/user/broker'),
    meta:{requireAuth:true,title:'经纪人'}
  },
  {
    path:'/user/brokerrole',
    name:'brokerrole',
    component:_import('/user/brokerrole'),
    meta:{requireAuth:true,title:'经纪人角色'}
  },
  {
    path:'/user/customer',
    name:'customer',
    component:_import('/user/customer'),
    meta:{requireAuth:true,title:'客户'}
  },
  {
    path:'/user/intermediary',
    name:'intermediary',
    component:_import('/user/intermediary'),
    meta:{requireAuth:true,title:'中介门店'}
  },
]
// 楼盘路由
const properties=[
  {
    path:'/properties/panorama',
    name:'panorama',
    component:_import('/properties/panorama'),
    meta:{requireAuth:true,title:'全景图'}
  },
  {
    path:'/properties/sale',
    name:'sale',
    component:_import('/properties/sale'),
    meta:{requireAuth:true,title:'楼盘'}
  },
]
// 业务路由
const business=[
  {
    path:'/business/commission',
    name:'commission',
    component:_import('/business/commission'),
    meta:{requireAuth:true,title:'收佣管理'}
  },
  {
    path:'/business/management',
    name:'management',
    component:_import('/business/management'),
    meta:{requireAuth:true,title:'结佣管理'}
  },
  {
    path:'/business/activities',
    name:'activities',
    component:_import('/business/activities'),
    meta:{requireAuth:true,title:'红包活动'}
  },
  {
    path:'/business/feedback',
    name:'feedback',
    component:_import('/business/feedback'),
    meta:{requireAuth:true,title:'意见反馈'}
  },
  {
    path:'/business/msgpush',
    name:'msgpush',
    component:_import('/business/msgpush'),
    meta:{requireAuth:true,title:'消息推送'}
  },
  {
    path:'/business/nocard',
    name:'nocard',
    component:_import('/business/nocard'),
    meta:{requireAuth:true,title:'无红包卡片'}
  },
  {
    path:'/business/order_import',
    name:'order_import',
    component:_import('/business/order_import'),
    meta:{requireAuth:true,title:'成交单导入'}
  },
  {
    path:'/business/orderquery',
    name:'orderquery',
    component:_import('/business/orderquery'),
    meta:{requireAuth:true,title:'成交单查询'}
  },
  {
    path:'/business/papertemplate',
    name:'papertemplate',
    component:_import('/business/papertemplate'),
    meta:{requireAuth:true,title:'报备模板'}
  },
]
// 报表路由
const reportform=[
  {
    path:'/reportform/distribution',
    name:'distribution',
    component:_import('/reportform/distribution'),
    meta:{requireAuth:true,title:'红包发放统计'}
  },
  {
    path:'/reportform/newspaper',
    name:'newspaper',
    component:_import('/reportform/newspaper'),
    meta:{requireAuth:true,title:'报备统计（楼盘）'}
  },
  {
    path:'/reportform/sheet',
    name:'sheet',
    component:_import('/reportform/sheet'),
    meta:{requireAuth:true,title:'成交统计单'}
  },
  {
    path:'/reportform/stores',
    name:'stores',
    component:_import('/reportform/stores'),
    meta:{requireAuth:true,title:'报备统计（门店）'}
  },
  {
    path:'/reportform/terracotta',
    name:'terracotta',
    component:_import('/reportform/terracotta'),
    meta:{requireAuth:true,title:'项目总对俑表'}
  }
]



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children:[...system,...user,...properties,...business,...reportform,
      {
      path:'*',
      redirect:'/404'
    }],
    
  }
]

const router = new VueRouter({
  mode:'hash',
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes:[...globalRoutes,...routes]
})

router.beforeEach((to,from,next)=>{
  // if (to.matched.some(res => res.meta.requireAuth)) {
  // if(!store.getters.userinfo.account){
  //     next('/login')
  //  }else{
  //    next()
  //  }}else{
  //   next()
  //  }
  next()
})

export default router
