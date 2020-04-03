<template>
    <div class="pagination">
    <!-- 
          调用组件步骤在，1、页面中template中引入
          <Pagination @handleSizeChange="handleSizeChange" @handleCurrentChange="handleCurrentChange" :paginationData="paginationData"/>
          2、在script数据源中定义:
          paginationData:{//分页
           pageSize:10,
           currentPage:1,
            total:1000
           }
           3、定义方法:handleSizeChange、handleCurrentChange
         -->
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginationData.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="paginationData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="paginationData.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
    props:{
       paginationData:{
             type:Object,
             default(){
                 return{
                      pageSize:10,
                      currentPage:1,
                      total:100
                 }
             }
       }
    },
    methods:{
        handleSizeChange(val){
           this.$emit('handleSizeChange',val)
        },
        handleCurrentChange(val){
           this.$emit('handleCurrentChange',val)
        }
    }
}
</script>
<style lang="scss">
.pagination{
text-align: right;
margin-top: 6px;
}
</style>