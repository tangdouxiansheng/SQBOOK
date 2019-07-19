<template>
  <div class="category">
    <headNav>
      <template slot="names"><p class="headTitle">分类</p></template>
    </headNav>
    <h1>This is an 分类页面</h1>
  </div>
</template>
<script>
import headNav from "../module/header.vue"
export default {
  components:{
    headNav
  }
}
</script>
<style lang="scss">
  .headTitle{
    font-size:16px;
    color:#333;
  }
</style>



