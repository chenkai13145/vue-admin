<template>
  <div class="leftnav">
    <div class="leftTop">
      <i @click="iconFn" v-show="isCollapse" class="iconoff el-icon-s-unfold"></i>
    <i @click="iconFn" v-show="!isCollapse" class="iconoff el-icon-s-fold"></i>
    </div>
    
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="$store.getters.hovuerindex.toString()"
      @open="handleOpen"
      @close="handleClose"
      :open="$store.getters.hovuerindex"
      :collapse="isCollapse"
      background-color="#2b2b2b"
      active-text-color="#e22b38"
      text-color="#babace"
      mode="vertical"
    >
      <el-submenu popper-class="popper-class" v-for="(item,index) in $store.getters.routeArr" :key="item.key" :index="index.toString()">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <template v-if="item.children">
          <el-menu-item
            v-for="(items,inde) in item.children"
            :key="items.path"
            :index="index.toString()+inde.toString()"
            @click="pathTo(index.toString()+inde.toString(),items.path)"
            :class="$store.getters.hovuerindex==(index.toString()+inde.toString())?'houerlink':''"
          >
            <span slot="title">{{items.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-submenu>

    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
     hovuerindex:20,
      isCollapse: false,
      menu: {
        system: "系统",
        user: "用户",
        properties: "楼盘",
        business: "业务",
        reportform: "报表"
      },
      dataArr: [],
      icon:['el-icon-monitor','el-icon-user','el-icon-office-building','el-icon-suitcase','el-icon-s-data']
    };
  },
  created() {
    let items = this.$router.options.routes.find(item => {
      return item.name === "Home";
    });
    let arr = this.menu;
    let routeArr = [];
    let count=0
    for (let key in arr) {
      let obj = {};
      obj.indexs=count
      obj.title = arr[key];
      obj.key = key;
      obj.children = [];
      obj.icon=this.icon[count]
      items.children.forEach((item,index) => {
        if (item.path.indexOf(obj.key) != -1) {
            obj.children.push(item);
        }
      });
      routeArr.push(obj);
      count++;
    }
     this.dataArr =routeArr.map((item,index)=>{
          item.children.forEach((items,indexs)=>{
              items.count=index.toString()+indexs.toString()
          })
          return item
      })
    this.$store.commit('routerArrFn',this.dataArr)
 
  },
  methods: {
    //   路由跳转事件
      pathTo(e,path){
          let obj={
              num:e,
              router:this.$router,
              path
          }
          this.$store.dispatch('pathindex',obj)
      },
    handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    },
    // 展开收缩事件
    iconFn() {
      this.isCollapse = !this.isCollapse;
      this.$store.dispatch("catnavLeft", this.isCollapse);
    }
  }
};
</script>
<style lang="scss">
$color: #babace;
$bgcolor: #2b2b2b;
.leftnav {
  height: 100%;
  .leftTop{
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #1D1D1D;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    background-color: $bgcolor;
    border: none;
    color: #fff;
    height: calc(100% - 50px);
    overflow: auto;
    -ms-scroll-chaining: chained;
    -ms-overflow-style: none;
    -ms-content-zooming: zoom;
    -ms-scroll-rails: none;
    -ms-content-zoom-limit-min: 100%;
    -ms-content-zoom-limit-max: 500%;
    -ms-scroll-snap-type: proximity;
    -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse)::-webkit-scrollbar {
    width: 0;
  }
  .el-submenu .el-menu,
  .el-menu--collapse{
    background-color: $bgcolor;
    color: $color;
    box-sizing: border-box;
    overflow: hidden;
    border: none;
  }
  .el-submenu__title,
  .el-submenu .el-menu-item {
    color: $color;
    border: none;
  }
  .iconoff {
    padding-left: 20px;
    font-size: 30px;
    color: $color;
  }
  .houerlink{
      border-left: 2px solid #e22b38 !important;
      background-color:#252525 !important;
  }
}
</style>