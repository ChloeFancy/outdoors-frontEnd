import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homePage/homepage'
import login from '@/components/common/login'
import register from '@/components/common/register'
import countryPage from "@/components/country/countryPage"
import continentPage from "@/components/continent/continentPage"
import spotPage from "@/components/spot/spotPage"
import articlePage from "@/components/article/articlePage"
import personalCenter from "@/components/personalCenter/personalCenter"
import personalPage from "@/components/personalPage/personalPage"
import searchPage from "@/components/searchPage/searchPage"
import userSearch from "@/components/searchPage/userSearch"
import spotSearch from "@/components/searchPage/spotSearch"
import strategySearch from "@/components/searchPage/strategySearch"

import contactUs from "@/components/contactUs/contactUs"

import fansList from "@/components/personalCenter/fans";
import following from "@/components/personalCenter/following";
import strategy from "@/components/personalCenter/strategy";
import modifyPwd from "@/components/personalCenter/modifyPassword";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/homepage', redirect: '/'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/continentPage',
      name: 'continent',
      component: continentPage,
      props: true,
    },
    {
      path: '/countryPage',
      name: 'country',
      component: countryPage,
      props: true,
    },
    {
      path: '/spotPage',
      name: 'spot',
      component: spotPage,
      props: true,
    },
    {
      path: '/articlePage',
      name: 'article',
      component: articlePage,
      props: true,
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter,
      children:[
        { name:'fan', path: '/personalCenter/fan', component: fansList },
        { name:'follow', path: '/personalCenter/follow', component: following },
        { name:'strategy', path: '/personalCenter/strategy', component: strategy },
        { name: 'modifyPwd', path: '/personalCenter/modifyPwd', component: modifyPwd },
      ]
    },
    {
      path: '/personalPage',
      name: 'personalPage',
      component: personalPage,
      children:[
        { name:'fan', path: '/personalPage/fan', component: fansList },
        { name:'follow', path: '/personalPage/follow', component: following },
        { name:'strategy', path: '/personalPage/strategy', component: strategy }
      ]
    },
    {
      path: '/searchPage',
      name: 'search',
      component: searchPage,
      children:[
        { path: '/search/user', component: userSearch },
        { path: '/search/spot', component: spotSearch },
        { path: '/search/strategy', component: strategySearch }
      ]
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
