import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home')
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: () => import('./views/AboutUs')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('./views/Projects')
    },
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: () => import('./views/ContactUs')
    }
  ]
})
