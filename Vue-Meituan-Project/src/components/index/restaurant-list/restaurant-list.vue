<!-- 商家列表页 -->
<template>
  <div class="restaurant-list">
      <header-bar @back="back"></header-bar>

      <seller-list-item v-for="item in restaurantList"
                        :key="item.index"
                        :data="item"
                        @toRestaurant="toRestaurant()"></seller-list-item>
  </div>
</template>

<script>
import SellerListItem from '@/components/base/seller-list-item/seller-list-item'
import HeaderBar from '@/components/base/header-bar/header-bar'
import axios from 'axios'

export default {
  components: {
    SellerListItem,
    HeaderBar
  },
  data () {
    return {
      restaurantList: []
    }
  },
  props: {},
  watch: {},
  methods: {
    _initRestaurantListData () {
      axios.get('/api/restaurantList').then(res => {
        if (res.data.code === 0) {
          this.restaurantList = res.data.data.data.poilist
          console.log(res)
        }
      })
    },
    back () {
      this.$router.push({
        path: '/index'
      })
    },
    toRestaurant () {
      this.$router.push({
        path: '/restaurant'
      })
    }
  },
  filters: {},
  computed: {},
  created () {
    this._initRestaurantListData()
  },
  mounted () {},
  destroyed () {}
}
</script>
<style lang='scss' scoped>
.restaurant-list {
    background-color: #fff;
    margin-top:42px;
}
</style>
