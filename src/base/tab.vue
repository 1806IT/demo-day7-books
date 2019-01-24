<template>
  <div class="footer">
    <router-link :to="{path:'/home'}">
      <a class="iconfont icon-home"></a>
      <span>首页</span>
    </router-link>
    <router-link :to="{path:'/list'}">
      <a class="iconfont icon-list"></a>
      <span>列表</span>
    </router-link>
    <router-link to="/add">
      <a class="iconfont icon-tianjia"></a>
      <span>添加</span>
    </router-link>
    <router-link :to="{path:'/collect'}">
      <a class="iconfont icon-shoucang"></a>
      <span>收藏</span>
    </router-link>
    <!--<router-link :to="{path:'/detail'}">详情</router-link>-->
  </div>
</template>


<style scoped lang="less">
.footer{
  position:fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  display:flex;
  border-top: 1px solid grey;

  a{
    display:flex;
    flex-direction:column;
    flex: 1;
    align-items: center;
    justify-content: center;
    color: #c9764d;
  }
  a.router-link-active{
    color: red;
  }
}
</style>
