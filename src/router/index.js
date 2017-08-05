import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import navbar from '../components/navbar'
import sidebar from '../components/sidebar'
import footbar from '../components/footbar'
import signin from '../views/Signin'
import signup from '../views/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        top:navbar,
        main:hello,
        bottom:footbar
      }
    },
    {
      path: '/doc',
      name: 'doc',
      components:{
        top:navbar,
        main:sidebar,
        bottom:footbar
      }
    },
    {
      path:'/signin',
      name: 'signin',
      components:{
        main:signin,
      }
    },
    {
      path:'/signup',
      name: 'signup',
      components:{
        main:signup,
      }
    }
  ]
})
