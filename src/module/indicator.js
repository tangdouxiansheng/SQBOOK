//封装加载提示框 
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
import axios from "axios"
Vue.use(MintUI);
axios.interceptors.request.use((config)=>{
  Indicator.open("已在骑马赶来的路上");
  return config;
})
axios.interceptors.response.use((res)=>{
  Indicator.close();
  return res;
})