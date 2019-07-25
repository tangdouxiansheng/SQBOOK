<template>
<div class="container">
    <!-- 头部状态栏 切换标题 -->
    <headNav>
      <template slot="names"><p class="headTitle" v-html="number===1 ? '登陆' : '注册'"></p></template>
    </headNav>
  <!-- 注册界面 -->
  <div class="user" v-show="number===1 ? bool: !bool">
     <p><label>账户</label><input type="text" id="username" placeholder="请输入用户名/手机号/邮箱"><span></span></p> 
     <p><label>密码</label><input type="password" id="password" placeholder="请输入6-16字母数字混合密码" size="16"><span></span></p>
     <div class="agree">
        <p><input type="checkbox" @click="check"/> 同意 <a href="http://t.shuqi.com/route.php?pagename=#!/from/booktouch/ct/sqserv">《阿里文学用户服务协议》</a> 和 <a href="http://t.shuqi.com/route.php?pagename=#!/from/booktouch/ct/sqprct">《隐私服务协议》</a></p>
     </div>
     <button @click="logon" class="btn1" disabled >注册</button> 
     <div class="miss">
       <div class="left">忘记密码</div><div class="right" @click="goLogon">登陆</div>
     </div>
  </div>
  <!-- 登陆界面 -->
 <div class="user" v-show="number===1 ? !bool: bool">
     <p><label>账户</label><input type="text" id="username1" placeholder="请输入用户名"></p> 
     <p><label>密码</label><input type="password" id="password1" placeholder="请输入密码"></p>
     <div class="agree">
        <p><input type="checkbox" @click="check"/> 同意 <a href="http://t.shuqi.com/route.php?pagename=#!/from/booktouch/ct/sqserv">《阿里文学用户服务协议》</a> 和 <a href="http://t.shuqi.com/route.php?pagename=#!/from/booktouch/ct/sqprct">《隐私服务协议》</a></p>
     </div>
     <button @click="register" class="btn1" disabled  :class="{'btnColor':flag}">登陆</button> 
     <div class="miss">
       <div class="left">忘记密码</div><div class="right" @click="goRegister">注册</div>
     </div>
  </div>
</div>  
</template>

<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>

<script>
//导入头部插槽文件
import headNav from "../module/header.vue"
//导入jquery方法
import $ from "jquery";
//导入提示框对象
import Msg from '../module/toast'
//实例化提示框 
var msg = new Msg    

export default {
    data(){
      return{
         number:1,      //显示/隐藏 注册和登陆界面的变量
         bool:false,
         flag:false
      }
    },
    components:{
      headNav         //注册组件
    },
    methods:{
      //注册方法
       logon(){
         if($('#username').val()===''|| $('#password').val()===''){
              msg.showMsg('输入不能为空','top',1000)
              return;
         }else{
            this.putData();
         }
         
       },
       //注册请求  
       putData(){
            this.$axios.post('/HD/logon',{
             params:{
                username:$('#username').val(),
                password:$('#password').val(),
             }
           }).then((res)=>{
                 if(res.data.status===0){
                      msg.showMsg('注册成功','top',1000)
                      this.goLogon();
                  
                  }else{
                     msg.showMsg('用户名重复','top',1000)
                 }
           })
       },
       //登陆方法
       register(){
           if($('#username1').val()===''|| $('#password1').val()===''){
              msg.showMsg('输入不能为空','top',1000)
                return;
            }else{
              this.logonData();
          }
       },
      //登陆请求
      logonData(){
            this.$axios.post('/HD/register',{
             params:{
                username:$('#username1').val(),
                password:$('#password1').val(),
             }
           }).then((res)=>{
                 if(res.data.status===0){
                      msg.showMsg('欢迎回来'+$('#username1').val(),'top',1000)
                      this.$router.push('/src/views/BookList.vue')
                  
                  }else{
                     msg.showMsg('用户名或密码错误','top',1000)
                 }
           })
       },
       //跳转至注册页面
       goRegister(){
          this.number = 2;
       },
       //跳转至登陆页面
       goLogon(){
         this.number = 1;
       },
       //是否同意协议复选框的单击事件
       check(){
          //如果复选框是选中状态  就解除登陆/注册button的禁用状态
            if($("input[type='checkbox']").is(':checked')){
                //修改复选框选中时的按钮颜色
                this.flag = true;
                $('button').attr("disabled",false); 
            }else{
                $('button').attr("disabled",true);
                this.flag = false;
            }
       }
}
}
</script>

<style scoped>
.container{
    padding: .5rem .47rem 0 0;
}
.user{
    font: .14rem "Helvetica Neue",Helvetica,STHeiTi,sans-serif;
    color: #494949;
    line-height: 1;
    padding-left:0.45rem;
}
.user>p{
    border-bottom: 1px solid #f3f3f3;
    font-size:15px;
    margin-top: .44rem;
    position: relative;
    overflow: hidden;
}
.user>p label{
    color: #333;
    line-height: .5rem;
    margin-right: .4rem;
}
.user>p input{
   outline: none;
   border:none;
   font-size: 16px;
   width:4rem
}
.agree{
    color: #999;
    line-height: .4rem;
    padding-top: 1rem;
    text-align: center;
}
.agree>p input{
   vertical-align: middle;
}
.agree>p a{
    color: #00C98D;
    text-decoration: none;
}
.btn1{
    width: 100%;
    height: .88rem;
    font-size: .32rem;
    /* background: #E6E7ED; */
    color: #C6C7CC;
    text-align: center;
    line-height: .88rem;
    margin-top: .32rem;
    border-radius: .08rem;
    border: none;
    outline: none;
    
}
.miss{
    margin-top: .32rem;
    padding: 0 .56rem;
    display: flex;
    justify-content:space-between;
}
.miss .left{
    color: #999;
    font-size: .28rem;
}
.miss .right{
    color: #00C98D;
    font-size: 14px;
}
.btnColor{
    background: #00C98D;
    color:#f3f3f3;
}
</style>
