<template>
    <div class="header">
      <slot>首页(子组件的)</slot>
      <ul v-if="back" class="clearfix">
        <li class="iconfont icon-fanhui"  @click="goback">上一页</li>
        <li class="iconfont icon-home"  @click="gohome">返回主页</li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "appheader",
      props:{
          back:{
            type:Boolean,
            default:false
          }
      },
      methods:{
          goback(){
            this.$router.go(-1)
          },
          gohome(){
            console.log('返回主页')
            this.$router.push('home')
          }
      }
    }
</script>

<style scoped lang="less">
  .clearfix::after{
    content:'';
    display:block;
    clear: both;
  }
.header{
  position: relative;
  top: 0;
  left: 0;
  text-align: center;
  font-weight: bold;
  background: lightblue;
  height: 40px;
  line-height: 40px;
  ul{
    position: absolute;
    top: 0;
    left: 2%;
    margin-left:10px ;
    li{
      float: left;
      padding-right: 10px;
      font-size: 8px;
    }
  }



}
</style>
