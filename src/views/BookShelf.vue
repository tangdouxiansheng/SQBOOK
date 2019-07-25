<template>
  <div class="bookshelf">
    <div class = "header_div">
      <i class="fa fa-share-square" aria-hidden="true" @click="goback"></i>
      <slot name="names"><p>我的书架</p></slot>
      <i class="fa fa fa-pencil" aria-hidden="true" @click="goindex"></i>
    </div>
    
  </div>
</template>

<script>
  export default {
    methods:{
            goback(){
                this.$router.go(-1)
            },
            goindex(){
                this.$router.push("/")
            }
        }
  }
</script>

<style>
  .header_div{
        width:100%;
        height:0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        background:#fff;
        z-index:10;
        border-bottom:1px solid rgb(250, 245, 245);
    }
    .fa{
        font-size:0.364rem;
        color:rgb(18, 230, 177);
    }
    .fa-share-square{
        margin-left:0.182rem;
    }
    .fa-pencil{
        margin-right:0.182rem;
    }
</style>

