<template>
  <div id="app">
    <tab></tab>
    <router-view></router-view>

  </div>
</template>

<script>
  import tab from './base/tab'
export default {
  name: 'App',
  components:{
    tab
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;

  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  input,button{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .content{
    position: fixed;
    width:100%;
    top: 50px;
    /*buttom:50px;*/
    overflow: auto;
    border: 1px solid red;

  }
</style>
