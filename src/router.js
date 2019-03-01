import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import AboutUs from './views/AboutUs'
import Projects from './views/Projects'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
