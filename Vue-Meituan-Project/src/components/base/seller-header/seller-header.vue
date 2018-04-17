<!-- 商家魔窟头部 组件 -->
<template>
  <!-- v-if可以保证数据拿到后渲染组件 -->
  <div class="seller-header" v-if="seller">
    <!-- 主要内容：左侧头像、右侧描述 -->
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>

      <!-- 内容 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ seller.name }}</span>
        </div>

        <!-- 描述 -->
        <div class="description">
          <span>{{ seller.description }} / {{seller.deliveryTime}}</span>分钟送达
        </div>

        <!-- 活动 -->
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
      <!-- 活动个数 -->
      <div class="supports-count" v-if="seller.supports" @click="dataiShow = true">
        <span>{{ seller.supports.length }}个活动</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <!-- 公告 -->
      <div>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      datailShow: false,
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  beforeMount () {},
  created () {},
  mounted () {},
  destroyed () {}
}
</script>
<style lang='scss' scoped>
@import '~@/assets/scss/const.scss';
@import '~@/assets/scss/mixin.scss';

.seller-header {
  position: relative;
  color: #fff;
  line-height: 1;
  font-size: 13px;
  font-weight: 200;
  overflow: hidden;
  background-color: rgba(7, 17, 27, 0.5);
  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
    .avatar {
      display: inline-block;
      font-size: 14px;
      vertical-align: top;
      img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    .content {
      display: inline-block;
      margin-left: 16px;
      .title {
        margin: 2px 0 8px 0;
        .brand {
          width: 30px;
          height: 18px;
          display: inline-block;
          vertical-align: top;
          background-size: 30px 18px;
          background-repeat: no-repeat;
          @include bg-image('./img/brand')
        }
        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }
      .description {
        margin-bottom: 10px;
        font-size: 13px;
        line-height: 13px;
      }
      .supports {
        .icon{
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-right: 4px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          vertical-align: top;
          &.decrease {
            @include bg-image('./img/decrease_1')
          }
          &.discount {
            @include bg-image('./img/discount_1')
          }
          &.guarantee {
            @include bg-image('./img/guarantee_1')
          }
          &.invoice {
            @include bg-image('./img/invoice_1')
          }
          &.special {
            @include bg-image('./img/special_1')
          }
        }
        .text {
          font-size: 10px;
          line-height: 14px;
        }
      }
    }
    .supports-count {
      position: absolute;
      right: 12px;
      bottom: 18px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 14px;
      background-color: rgba(0, 0, 0, 0.2);
      span{
        font-size: 10px;
        line-height: 24px;
      }
      i {
        position: relative;
        top: 1px;
        font-size: 10px;
        margin-left: 2px;
        line-height: 24px;
      }
    }
  }
}
</style>
