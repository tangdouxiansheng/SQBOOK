<template>
  <div class = "index">
    <div class = "index_nav">
        <img src = "../assets/sqlogo.png" class = "nav_img"/>
        <h2>书旗小说</h2>
        <router-link to="/Search">
            <i class="fa fa-search faa" aria-hidden="true"></i>
        </router-link>
         <router-link to="/BookShelf">
            <i class="fa fa-bookmark-o faa" aria-hidden="true"></i>
        </router-link>
        <router-link to="/User">
            <i class="fa fa-user-circle faa" aria-hidden="true"></i>
        </router-link>
    </div>
    <div class = "index_click">
        <router-link to="/Category">
            <i class="fa fa-calculator fbb" aria-hidden="true"></i>
            <p>分类</p>
        </router-link> 
        <router-link to="/Ranking">
            <i class="fa fa-bar-chart fbb" aria-hidden="true"></i>
            <p>排行</p>
        </router-link>
        <router-link to="/Boy">
            <i class="fa fa-mars fbb" aria-hidden="true"></i>
            <p>男频</p>
        </router-link>
        <router-link to="/Girl">
            <i class="fa fa-mercury fbb" aria-hidden="true"></i>
            <p>女频</p>
        </router-link>
        <router-link to="/BookList">
            <i class="fa fa-book fbb" aria-hidden="true"></i>
            <p>书单</p>
        </router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
    .index_nav{
        width:100%;
        min-width:4.818rem;
        height:0.8rem;
        line-height:0.8rem;
        text-align: center;
        border-bottom:0.018rem solid #ccc;
    }
    .nav_img{
        width:0.455rem;
        height:0.455rem;
        float:left;
        margin-top:0.182rem;
        margin-left:0.364rem;
    }
    .index_nav h2{
        float:left;
        margin-left:0.364rem;
    }
    .index_nav a{
        color:rgb(238, 122, 14);
        float:right;
        margin-right:0.364rem;
    }
    .faa{
        font-size:0.436rem;
    }
    .index_click{
        width:100%;
        min-width:4.818rem;
        display: flex;
        justify-content: space-around;
        border-bottom:0.018rem solid rgb(212, 209, 209);
    }
    .index_click a{
        color:rgb(238, 122, 14);
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size:0.218rem;
        text-decoration: none;
        margin-top:0.182rem;
        margin-bottom:0.364rem;
    }
    .index_click p{
        margin-top:0.091rem;
    }
    .fbb{
        font-size:0.436rem;
    }
</style>