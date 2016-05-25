<template>
<div class="mui-group-item" :class="{'no-access': !access}">
  <div class="mui-group-item-bd mui-group-item-primary">
    <slot>
      <p>{{title}}</p>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </slot>
  </div>
  <div class="mui-group-item-ft" :class="{'with-arrow': withArrow}">
    <slot name="ft">
      {{rightDesc}}
    </slot>
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
  }
}
</script>

<style lang="less">
@import "style.less";
</style>
