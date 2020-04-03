<template>
  <div class="login">
    <!-- top -->
    <div class="top">
      <img src="../../assets/logo-s.png" />
      <div>
        <span>|</span>管理平台
      </div>
    </div>
    <!-- top -->
    <!-- 背景 -->
    <div class="context"></div>
    <!-- 背景 -->
    <!--from登录 -->
    <div class="input">
      <div>欢迎登录</div>
      <el-input
        class="input_item"
        prefix-icon="el-icon-s-custom"
        v-model="fromdata.account"
        placeholder="请输入用户名"
      ></el-input>
      <el-input
        class="input_item"
        prefix-icon="el-icon-lock"
        show-password
        v-model="fromdata.password"
        placeholder="请输入密码"
      ></el-input>
      <el-button style="background-color:#009688;border:none;" class="input_item" @click="loginFn" type="danger">登录</el-button>
      <div
        style="color: #009688;
        margin-top: 10px;
       display: inline-block;
             width: 100%;
        text-align: center;"
      >忘记密码?</div>
    </div>
    <!--from登录 -->
  </div>
</template>
<script>
import {LoginFn} from '@/api/login/index'
export default {
  data() {
    return {
      fromdata: {
        password: null,
        account: null,
        phoneCode:'+86',
        appId:'prof'
      }
    };
  },
  methods: {
    // 登录
    loginFn() {
      let off=false
      for(let key in this.fromdata){
        if(!this.fromdata[key]){
          off=true
        }
      }
      if(off){
        this.$message.error({
           message: '用户名或者密码不能为空',
           center: true,
        })
      }else{
        LoginFn(this.fromdata).then(res=>{
          let msg={
            that:this,
            fromdata:res.data
          }
          this.$store.dispatch('loginFn',msg)
        })
        .catch(err=>{
          console.log(err)
          // this.$message.error({
          //  message: '登录异常',
          //  center: true
          //  })
        })
        // fetch('https://zsyunjj.com/yjj/v1.4/user/login',JSON.stringify(this.fromdata))
        //     .then(res=>{console.log(res)})
      }
    }
  }
};
</script>
<style lang="scss">
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .top {
    height: 58px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
    background: #f6fbf9 none repeat scroll 0 0;
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #888;
    span {
      display: inline-block;
      padding: 0 30px;
    }
  }
  .context {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../assets/tealogin-bg.jpg") no-repeat;
    background-size: cover;
  }
  .input {
    padding: 30px 20px;
    width: 360px;
    height: 320px;
    position: absolute;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    div:nth-child(1) {
      width: 100%;
      text-align: center;
      color: #433e37;
      font-weight: 500;
      font-size: 21px;
    }

    .input_item {
      height: 37px;
      margin-top: 30px;
      width: 100%;
    }
    .el-input__inner {
      background-color: #f5f5f8;
      border: none;
    }
  }
}
</style>