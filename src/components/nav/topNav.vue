<template>
  <div class="topnav">
    <el-row>
      <el-col class="leftimg" :span="12">
        <img class="imgs" src="../../assets/logo-blue.png" />
      </el-col>
      <el-col class="miter" :span="12">
        <el-dropdown>
          <span class="el-dropdown-link" style="min-width:150px;border:none;">
            管理员
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>基本信息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <i @click="$store.dispatch('clearLogin',$router)" class="el-icon-switch-button"></i>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.topnav {
    height: 50px;
    min-width: 600px;

  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.08);
  .imgs {
    display: inline-block;
    height: 40px;
    padding-left: 30px;
  }
  .leftimg{
      display: flex;
      align-items: center;
      height: 50px;
  }
  .miter{
      display: flex;
      justify-content: flex-end;
      padding-right: 120px;
      align-items: center;
      height: 50px;
      .el-icon-switch-button{
        padding-left: 40px;
      }
  }
}
</style>