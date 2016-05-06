<template>
<label class="mui_group_item mui_cell_radio mui_check_label" for="radio_{{uuid}}_{{index}}" v-for="(index, option) in options">
  <div class="mui_group_item_bd mui_group_item_primary">
      <p>{{ option.text }}</p>
  </div>
  <div class="mui_group_item_ft">
      <input type="radio" class="mui_radio" id="radio_{{uuid}}_{{index}}" :value="option.value" v-model="value">
      <span class="weui_icon_checked"></span>
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
