import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import home from '../components/home'
import collect from '../components/collect'
import detail from '../components/detail'
import add from '../components/add'
import list from '../components/list.vue'

export default new Router({
  routes: [
    {path:'/home',component:home},
    {path:'/collect',component:collect},
    {path:'/detail',component:detail},
    {path:'/add',component:add},
    {path:'/list',component:list},
  ]
})
