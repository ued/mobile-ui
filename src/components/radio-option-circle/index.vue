<template>
<label class="mui-group-item mui-group-item-radio mui-check-label" for="radio-{{uuid}}">
  <div class="mui-group-item-hd">
    <input type="radio" class="mui-radio-circle" id="radio-{{uuid}}" :value="optionValue" v-model="value">
    <span class="weui-icon-radio-circle"></span>
  </div>
  <div class="mui-group-item-bd mui-group-item-primary">
      <slot>
        <p>{{ optionText }}</p>
        <inline-desc v-if="option.inlineDesc">{{ optionInlineDesc }}</inline-desc>
      </slot>
  </div>
  <div class="mui-group-item-ft">
      <slot name="ft">
      </slot>
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
    optionText: {
      type: String,
      default: ''
    },
    optionInlineDesc: {
      type: String,
      default: ''
    },
    optionValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      default: '',
      twoWay: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import (reference) "../group-item/style.less"; // 引入group-iem样式
@import "./style.less";
</style>
