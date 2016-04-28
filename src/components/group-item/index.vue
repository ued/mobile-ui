<template>
<a class="mui_group_item" href="javascript:">
  <div class="mui_group_item_bd mui_group_item_primary">
    <p>{{title}}</p>
    <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
  </div>
  <div class="mui_group_item_ft" :class="{'withArrow': withArrow}">
    {{rightDesc}}
    <slot name="ft"><slot>
  </div>
</a>
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
    }
  },
  created () {
    this.$dispatch('group.class.add', 'mui_group_item_access') // 点击的样式
  }
}
</script>

<style lang="less">
@import "style.less";
</style>
