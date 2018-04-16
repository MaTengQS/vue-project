import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = (resolve) => {
  import('@/components/index/index').then((module) => {
    resolve(module)
  })
}

const ReataurantList = (resolve) => {
  import('@/components/index/restaurant-list/restaurant-list').then((module) => {
    resolve(module)
  })
}

const RestaurantDetail = (resolve) => {
  import('@/components/index/restaurant-detail/restaurant-detail').then((module) => {
    resolve(module)
  })
}

const Goods = (resolve) => {
  import('@/components/index/restaurant-detail/goods/goods').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/restaurant_list',
      component: ReataurantList
    },
    {
      path: '/restaurant',
      redirect: '/restaurant/goods',
      component: RestaurantDetail,
      children: [
        {
          path: 'goods',
          component: Goods
        }
      ]
    }
  ]
})
