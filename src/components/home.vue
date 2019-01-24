<template>
    <div>
      <appheader >首页</appheader>
      <div class="content">
        <swiper></swiper>
      </div>

    </div>
</template>

<script>
  //1引入组件2，注册组件3，使用组件
  import swiper from '../base/swiper'
  import {getSliders} from '../api/index'
  import appheader from '../base/appheader'
    export default {
        name: "home",
      created(){
          alert(1)
        getSliders()
      },
      components:{
          appheader,swiper
      }
    }
</script>

<style scoped>

</style>
