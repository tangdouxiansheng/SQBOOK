<template>
  <div class="girl">
    <headNav>
      <template slot="names"><p class="headTitle">分类</p></template>
    </headNav>
    <h1>This is an 女频页面</h1>
    <foot/>
  </div>
</template>
<script>
import headNav from "../module/header.vue"
import foot from "../module/foot"
export default {
  components:{
    headNav,foot
  }
}
</script>