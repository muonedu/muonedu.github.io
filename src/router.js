import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('@/views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/Student/student.vue')
    },
    {
      path: '/corporate',
      name: 'corporate',
      component: () => import('@/views/Corporate/corporate.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/Event/event.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact/contact.vue')
    }
  ]
})
