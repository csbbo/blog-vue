import Vue from 'vue'
import VueRouter from 'vue-router'

import ArticlePreview from './components/ArticlePreview'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import Friends from './components/Friends'
import Profile from './components/Profile'
import NotFound from './components/404'

Vue.use(VueRouter)

const routes = [
    {path:'/',component:ArticlePreview},
    {path:'/article',component:Article},
    {path:'/list',component:ArticleList},
    {path:'/friends',component:Friends},
    {path:'/profile',component:Profile},
    {path:'/404',component:NotFound},
    // {path:'/info',redirect:'/base',component:Info,children:[
    //   {path:'/base',component:BaseInfo}
    // ]},
    {path:'*',redirect:'/404'},
]

export default new VueRouter({
  routes,
  mode:'history'
})