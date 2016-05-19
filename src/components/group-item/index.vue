<template>
<div class="mui-group-item" :class="{'no-access': !access}">
  <div class="mui-group-item-bd mui-group-item-primary">
    <p>{{title}}</p>
    <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    <slot name="bd"></slot>
  </div>
  <div class="mui-group-item-ft" :class="{'with-arrow': withArrow}">
    {{rightDesc}}
    <slot name="ft"><slot>
  </div>
</div>
</template>

<script>
import InlineDesc from '../inline-desc/'

export default {
  components: {
    InlineDesc
  },
  props: {
    title: String,
    inlineDesc: String,
    rightDesc: String,
    withArrow: {
      type: Boolean,
      default: true
    },
    access: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.$dispatch('group.class.add', 'mui-group-item-access') // 点击的样式
  }
}
</script>

<style lang="less">
@import "style.less";
</style>
