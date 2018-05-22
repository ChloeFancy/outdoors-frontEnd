import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homePage/homepage'
import login from '@/components/common/login'
import register from '@/components/common/register'
import countryPage from "@/components/country/countryPage"
import continentPage from "@/components/continent/continentPage"
import spotPage from "@/components/spot/spotPage"
import articlePage from "@/components/article/articlePage"
import personalPage from "@/components/personalCenter/personalPage"

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
      component: personalPage
    }
  ]
})
