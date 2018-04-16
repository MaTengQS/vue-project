<!-- 商家详情页 -->
<template>
  <div>
    <!-- 商家模块头部 -->
    <seller-header></seller-header>
    11111
  </div>
</template>

<script>
import SellerHeader from '@/components/base/seller-header/seller-header'
export default {
  components: {
    SellerHeader
  },
  data () {
    return {}
  },
  props: {},
  watch: {},
  methods: {
    c () {
      console.log(1111)
    }
  },
  filters: {},
  computed: {},
  created () {
    this.c()
  },
  mounted () {},
  destroyed () {}
}
</script>
<style lang='scss' scoped>
</style>
