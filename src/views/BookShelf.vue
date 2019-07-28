<template>
  <div class="bookshelf">
    <div class = "header_div">
      <i class="fa fa-share-square" aria-hidden="true" @click="goback"></i>
      <slot name="names"><p>我的书架</p></slot>
      <span class="header_div_right" @click="change" :class="{'right':bool}"></span>
    </div>
    <div class="empty"></div>
    <div class="shelf">
        <ul>
            <li v-for="(item,index) in list" :key="index">
               <p class="img"><img :src="item.src" alt=""></p>
               <p class="text-box">{{item.name}}</p>
               <span class="del" v-show="bool" @click="del(index)"></span>
            </li>
            <li @click="goindex">
               <p class="img-box"></p>
            </li>
        </ul>
    </div>
    <foot/>
  </div>
</template>

<script>
import foot from "../module/foot"
  export default {
    components:{
      foot
    },
    data(){
      return{
         bool:false,
         list:[]
      }
    },
    created(){
        this.list = this.$store.state.cart
    },
    methods:{
            goback(){
                this.$router.go(-1)
            },
            goindex(){
                this.$router.push("/")
            },
            change(){
               this.bool =!this.bool;
            },
            del(index){
              this.list.splice(index,1);
            },
            
        },
  }
</script>

<style scoped>
  .header_div{
        width:100%;
        height:0.873rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position:fixed;
        top:0;
        background:#fff;
        z-index:10;
        font-size:15px;
        border-bottom:1px solid rgb(250, 245, 245);
    }
    .header_div_right{
       top: 0;
       width: 1rem;
       height: .4rem;
       background: url(data:image/png;base64,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)no-repeat 10px center;
       background-size: .4rem;
    }
    .right{
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAn1BMVEUAAAAA8L4Ayo4A2p4AzpAAyo4Ayo4Ayo0Ayo4Ay44A1Z4AyY4Ayo4Ayo0Ayo4Ayo4AzI8A1JYAyo4Ayo4AzI8Ay48AypAAzZEAyo0AyY0Ayo4Ayo4Ayo0Ay44Ayo8AzY8AzJEAzZIA0JUA0pIA0JUAyY4Ayo4Ayo0Ayo4Ayo4Ayo4Ayo4Ay44Ay48Ayo4Ayo4Ay44Ay40Ay44Ayo4AyY27UK0GAAAANHRSTlMAA/sGGcX23otgDPPrzJ58OQnVs0dAMiTw7ufj2ZhPLikeFREP0cC8ramkknVrWrmEcGZVp6ke5QAAAvVJREFUeNrs2etOwkAQhuGv0Fo5iAVtaRVEQc4HBef+r02NIR1YEm07E/fHPjfAS4BlZwrHcRzHcRzHcRzHcS7ZBemg48NaK/qW3cNSDfpxpVzobZez9QjFBXQsfIKi/pS+1DYorEVHNcXC5wf6EaOoHuWFH2BU+miOoq6JFe6gYtSmowxFNUNe2ACg2UchCus/EqNQmGSU66Bq4QHCopRyqY8SXkJitsJ9Lcqxw7ZC4R6C4pO+GCX5A2I2gn1XlGvFgEzhLYTcn/RFqMDvGYXCfWmESsZTYt4h4KlGuSxBRZMbYq6F+9oJYFnhx0nfCAJeA2LWqGTH+x6eIaJ5UjgUuAezPpnCmVEo0PfYh5junJiOh3IOwn288I2YVbnCLTHhC0TV74hZlincG32KhYs6itoQM/Ahrr6oVHir08d5S2Lu6uX7ej5UeCti3rr4u3dipmMo8TrEzLulZkS6mYDRLJw1bev7MiQm+FvhmpjgFQIEX818T5rMz+vXQm9Y4FuhUTjR+V2ZVM4M82TSZ566Y42z3aTxv1BfSPUJ/POL3y84gbuT+A2Nk7h9St9xOZn7u+iUwClNQM3Zv/cZM6TKpCo6hSvM+sJ7DPFtifgmyLo+Y5cmurFT2UaaO89/d1boDyzrO9+Ih8RsYIW4RZftYYnocuEW1ohSMh1gkSSjcw1YJWnb3Xd8+suegdvms507SIEQBoIoysAMcwa34v3P6E7QXrhJ9JHUP0GDGtNdVa0XqD9i/SPRjxn9oNZ/dfpl4Syfe9ct/cKqX/n1pklvO/XGXR993AyPXq9QH7/pA0x9BKwP0YsM0Uqkn0TI0aUwXUwscmwjkX4WQRu3BJTn1eqtmMSWoht7GlqjulRY5XPLvKXb83SDo24R1U22lw7oo9mUdaO3bpXf8LBBt7jGUeHYgZcVjwyVaSlWoR5b04N/enTyyfDp8h0vvts1AF0V3P94EXI+hM+vMfgd9aGLIPhVGvwyEn+dSwghhBBCCCGEMD47UXIg/pgcp64AAAAASUVORK5CYII=)no-repeat 10px center;
      background-size: .4rem;

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
    .empty{
       height:0.818rem
    }
    .shelf{
      background: #fff;
      padding:0.3rem 0 0.3rem 0.436rem;
     
    }
    .shelf>ul{
      display: flex;
      flex-wrap: wrap
    }
    .shelf>ul>li{
      list-style: none;
      padding: 0.218rem  0.4rem 0.436rem 0;
      position: relative;

    }
    .img-box{
       width:1.764rem;
       height:2.336rem;
       background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwBAMAAADMe/ShAAAAG1BMVEUAAADn5+fm5ubn5+fu7u7t7e3n5+fm5ubm5uYQ4K/cAAAACHRSTlMA5+6oHhyppvhzH1gAAADXSURBVHja7d2xCYMAEIbRK3QCIXEAHcDOUpwguEG6tOnSipDc2NlBAgfhff3xur+9iNM10/UWFa2ZYwn8yDxK4D5zL4EzM8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMPh3cDtlQZcltixpiFcNfERfA+918FwDf2Ktgcdo7hVudzOZYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDD4D+CyB3Fz5rsE3jKHErh9dsv56y8nDeAoHydmVwAAAABJRU5ErkJggg==) center center no-repeat;
       background-size: .6rem;
       box-shadow: rgba(0,0,0,.11) 0 0.04rem 0.06rem;
    }
    .text-box{
        width:1.764rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        color: #333;
        font-size: .24rem;
        line-height: .32rem;
        padding-top: .24rem;
        text-align: center;
    }
    .img>img{
        width:1.764rem;
        height:2.336rem;
    }
    .del{
      display: inline-block;
        width: .4rem;
        height: .4rem;
        padding: .2rem;
        right: -.1rem;
        top: -.2rem;
        background: url(data:image/png;base64,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) center center no-repeat;
        background-size: .4rem;
        position: absolute;
    }
</style>

