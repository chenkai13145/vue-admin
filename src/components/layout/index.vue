<template>
    <div class="index">
        <el-row style="display:flex;">
            <el-col :span="$store.getters.navleft?1:3" :class="$store.getters.navleft?'leftcolor':'maxleft leftcolor'">
                 <LeftNva/>
            </el-col>
            <el-col style="overflow: hidden;" :span="$store.getters.navleft?23:21">
                <el-row>
                     <TopNav/> 
                </el-row>
                <el-row class="content">
                     <router-view/>
                </el-row>
                <!-- 内容 -->
            </el-col>
        </el-row>
    </div>
</template>
<script>
import TopNav from '../nav/topNav'
import LeftNva from '../nav/leftNva'
import {LoginFn} from '@/api/login'
export default {
  created(){
    // LoginFn({userName:'admin',passWord:'123456'}).then(res=>{
    //   console.log(res)
    // })
  },
    components:{
        TopNav,
        LeftNva
    }
}
</script>
<style  lang="scss" scoped>

/deep/.leftcolor{
    background-color: #2b2b2b;
    padding-left: 0 !important;
    padding-right: 0 !important;
    height: 100vh;
    box-sizing: border-box;
    transition: all 0.4s linear;
    min-width: 64px;
}
.maxleft{
   min-width: 190px;
}
/deep/.el-row{
 margin-left: 0 !important;
    margin-right: 0 !important;
}
.content{
    overflow-y:auto;
    height: calc(100vh - 50px);
    padding: 30px 40px;
    box-sizing: border-box;
    background-color: rgb(245, 241, 241);
}

</style>