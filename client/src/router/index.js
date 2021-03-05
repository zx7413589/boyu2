import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import news from '../views/boyunews.vue'
import Tel from '../views/Tel.vue'
import dd_detail from '../views/dd_detail'
import mobile from '../views/Moble.vue'
import find from '../views/Find.vue'
import ShopnameDetail from '../views/ShopnameDetail'
import LayoutDetail from '../views/LayoutDetail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path:'/news/:active',
    component:news,
  },
  {
    path:"/news/dd-detail/:id",
    component:dd_detail
  },
  {
    path:"/tel",
    component:Tel
  },
  {
    path:"/phone",
    component:mobile
  },
  {
    path:"/find/:area",
    component:find
  },
  {
    path: '/shopname/detail/:id',
    component: ShopnameDetail
  }, 
  {
    path: '/layout/detail/:id',
    component: LayoutDetail
  },
  
  // {
  //   path:'/dalian',
  //   component:dalian
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode:"history",
  routes,
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }

})

export default router
