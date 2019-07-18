<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in list" :key="index">
                <img :src="item.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      
    </div>
    
</template>
<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
export default {
     data(){
         return{
             list:[]
         }
     },
      created(){
        this.$axios.get("/mz/gateway?type=2&cityId=110100&k=5921267",{
            'headers':{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156198147664424509516"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then((res)=>{
            this.list = res.data.data
        })
    },
    watch:{
        list(){
            this.$nextTick(()=>{
                var mySwiper = new Swiper('.swiper-container',{
                    loop:true,
                    autoplay:{
                        delay:3000,
                        disableOnInteraction:false
                    },
                    pagination:{
                        el:'.swiper-pagination',
                    }
                })
            })
        }
    }
}
</script>
