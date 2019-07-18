//封装自定义指令，监听滚动条变化
import Vue from "vue";
Vue.directive('scroll',(el,binding)=>{          //scroll为自定义的指令名称
    var dis = Number(el.getAttribute("scrolltop"));//scrolltop为要监听的DOM元素的属性名，用来定义滚动条高度
    el.addEventListener("scroll",()=>{      //scroll区别上面的scroll，这里表示事件名称
        if(el.scrollTop>dis){
            binding.value.bool = true;
        }else{
            binding.value.bool = false;
        }
    })
})

//注意:布尔值在这里使用bool