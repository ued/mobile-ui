<template>
<label class="mui-group-item mui-cell-radio mui-check-label" for="radio-{{uuid}}-{{index}}" v-for="(index, option) in options">
  <div class="mui-group-item-bd mui-group-item-primary">
      <p>{{ option.text }}</p>
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
      type: String,
      default: '',
      twoWay: true
    },
    inlineDesc: {
      type: String
    }
  },
  methods: {
    clear: function () {
      this.value = ''
      this.focus = true
    },
    blur: function () {
      this.setTouched()
    }
  },
  data: function () {
    let data = {
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      focus: false
    }
    return data
  },
  watch: {
    focus: function (newVal) {
      if (newVal) {
        this.$els.input.focus()
      }
    }
  }
}
</script>

<style lang="less">
@import (reference) "../group-item/style.less"; // 引入group-iem样式
@import "./style.less";
</style>
