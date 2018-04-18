<!-- 商家详情页 -->
<template>
  <div>
    <!-- 商家模块头部 -->
    <seller-header :seller='seller'></seller-header>
    11111
  </div>
</template>

<script>
import SellerHeader from '@/components/base/seller-header/seller-header'
import utils from '@/assets/js/utils'
import axios from 'axios'

export default {
  components: {
    SellerHeader
  },
  data () {
    return {
      seller: {
        id: utils.http.urlParse().id || '0001'
      }
    }
  },
  props: {},
  watch: {},
  methods: {
    _initData () {
      axios.get('/api/seller?id=' + this.seller.id).then((res) => {
        if (res.data.code === 0) {
          // 添加 ID 属性
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  },
  filters: {},
  computed: {},
  created () {
    this._initData()
  },
  mounted () {},
  destroyed () {}
}
</script>
<style lang='scss' scoped>
</style>
