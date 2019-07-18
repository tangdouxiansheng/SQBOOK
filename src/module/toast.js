//封装一个信息提示框  可改变信息内容、显示位置、显示时长
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Toast } from 'mint-ui';
Vue.use(MintUI);
export default class Msg {                          //导出Msg对象
 showMsg(msg,site,time) {                           //定义showMsg方法,传入参数
        Toast({
            message:String(msg),                    //信息
            position:String(site),                  //位置
            duration:time                           //时长
        })
    }
}


//使用方式
// import Msg from '../module/toast'           //在要引用的地方引入,注意路径问题
// var msg = new Msg                           //实例化对象
//msg.showMsg('显示信息','显示位置',时长)           //调用函数方法并传入实参     
