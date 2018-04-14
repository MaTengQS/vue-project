<!-- 商家列表 组件 -->
<template>
  <div class="seller-list-item">
    <div class="left">
      <img v-lazy="data.pic_url">
    </div>

    <div class="right">
      <div class="name">{{ data.name }}</div>

      <div class="mid clearfix">
        <star class="lf" :size="24" :score="data.wm_poi_score"></star>
        <span class="count fl">月销{{ data.month_sale_num }}</span>
        <span class="distance fr">{{ data.distance }}</span>
        <span class="time fr">{{ data.avg_delivery_time }}分钟</span>
      </div>

      <div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '@/components/base/star/star'

export default {
  components: {
    Star
  },
  data () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>
<style lang='scss' scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.seller-list-item {
  margin-bottom: 5px;
  display: flex;
  padding: 10px 0;
  overflow: hidden;
  @include onepx('bottom');
  &last-child {
    &:after {
      border-top: 0;
    }
  }
  .left {
    flex: 0 0 90px;
    width: 90px;
    img {
      display: block;
      width: 70px;
      margin: 0 auto;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 15px;
    overflow: hidden;
    .name {
      font-size: 17px;
      color: #333;
      overflow: hidden;
      font-weight: bold;
      margin-right: 15px;
      overflow: hidden;
      @include ellipsis(1);
    }
    .mid {
      flex: 1;
      font-size: 12px;
      color: #666;
      margin-top: 7px;
      .star {}
      .count {
        margin-left: 10px;
      }
      .distance {
        margin-left: 5px;
        margin-top: 2px;
      }
      .time {
        @include right-bar();
      }
    }
  }
}
</style>
