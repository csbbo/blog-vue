import Vue from 'vue'
import VueRouter from 'vue-router'

import ArticlePreview from './components/ArticlePreview'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import Search from './components/Search'
import Friends from './components/Friends'
import Profile from './components/Profile'
import NotFound from './components/404'

Vue.use(VueRouter)

const routes = [
    {path:'/',component:ArticlePreview},
    {path:'/article',component:Article},
    {path:'/list',component:ArticleList},
    {path:'/search',component:Search},
    {path:'/friends',component:Friends},
    {path:'/profile',component:Profile},
    {path:'/404',component:NotFound},
    // {path:'/login',component:Login},
    // {path:'/404',component:NotFound},
    // {path:'/info',redirect:'/base',component:Info,children:[
    //   {path:'/base',component:BaseInfo},
    //   {path:'/cpu',component:Cpu},
    //   {path:'/mem',component:Mem},
    //   {path:'/files',component:Files},
    //   {path:'/ports',component:Ports},
    //   {path:'/success_ip',component:SuccessIP},
    //   {path:'/fail_ip',component:FailIP},
    //   {path:'/email_setting',component:EmailSetting},
    //   {path:'/sms_setting',component:SmsSetting},
    // ]},
    {path:'*',redirect:'/404'},
]

export default new VueRouter({
  routes,
  mode:'hash'
})