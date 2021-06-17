import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Toolbar from './views/Toolbar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },

    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/chat.vue')
    },

    {
      path: '',
      name: 'Toolbar',
      component: Toolbar,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },

        {
          path: 'movie',
          name: 'movie',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/movie.vue')
        },

        {
          path: 'promotion',
          name: 'promotion',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/promotion.vue')
        },

        {
          path: 'book/:id',
          name: 'book',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/book.vue')
        },

        {
          path: 'promo2',
          name: 'promo2',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/promo2.vue')
        },

        {
          path: 'seat/:movieid/:round',
          name: 'seat',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/seat.vue')
        },
        {
          path: 'news',
          name: 'news',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/news.vue')
        },

        {
          path: 'news2',
          name: 'news2',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/news2.vue')
        },

        {
          path: 'new3',
          name: 'new3',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/new3.vue')
        },

        
        {
          path: 'ticket',
          name: 'ticket',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/ticket.vue')
        }
      ]
    }
  ]
})
