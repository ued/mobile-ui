<template>
<label class="mui-group-item mui-group-item-radio mui-check-label" for="radio-{{uuid}}-{{index}}" v-for="(index, option) in options">
  <div class="mui-group-item-bd mui-group-item-primary">
      <p>{{ option.text }}</p>
      <inline-desc v-if="option.inlineDesc">{{ option.inlineDesc }}</inline-desc>
  </div>
  <div class="mui-group-item-ft">
      <input type="radio" class="mui-radio" id="radio-{{uuid}}-{{index}}" :value="option.value" v-model="value">
      <span class="weui-icon-checked"></span>
  </div>
</label>
</template>

<script>
import Base from '../../libs/base'
import InlineDesc from '../inline-desc/'

export default {
  ready () {
  },
  mixins: [Base],
  components: {
    InlineDesc
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Number],
      default: '',
      twoWay: true
    }
  },
  data: function () {
    return {}
  }
}
</script>

<style lang="less">
@import (reference) "../group-item/style.less"; // 引入group-iem样式
@import "./style.less";
</style>
