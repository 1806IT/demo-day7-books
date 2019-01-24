import axios from 'axios'
axios.default.baseURL='http://localhost:3000';
//增加默认的请求路径


//获取轮播图数据,返回的是promis对象
export let getSliders=()=>{
  axios.get('/sliders')
}


