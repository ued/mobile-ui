<template>
  <div class="mui-group-item">
    <div class="mui-group-item-hd">
      <label class="mui-label" :style="{width: labelWidth || defaultLabelWidth + 'em'}" v-if="title">{{title}}</label>
      <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="mui-group-item-bd mui-group-item-primary">
      <input class="mui-input" :type="type" :pattern="pattern" placeholder="{{placeholder}}" v-model="value" @blur="blur" v-el:input/>
    </div>
    <div class="mui-group-item-ft">
      <i class="mui-icon mui-icon-clear" v-show="showClear && value" @click="clear"></i>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'
import InlineDesc from '../inline-desc/'

export default {
  ready () {
    if (!this.title && !this.placeholder) {
      console.warn('no title and no placeholder?')
    }
  },
  mixins: [Base],
  components: {
    InlineDesc
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: String,
      default: ''
    },
    inlineDesc: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      type: [String, Number],
      default: ''
    },
    keyboard: {
      type: String
    },
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    pattern: function () {
      if (this.keyboard === 'number') {
        return '[0-9]*'
      }
    },
    defaultLabelWidth: function () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
    }
  },
  methods: {
    clear: function () {
      this.value = ''
      this.focus = true
      let event = document.createEvent('HTMLEvents')
      event.initEvent('input', true, false)
      this.$els.input.value = ''
      this.$els.input.dispatchEvent(event)
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
    focus (newVal) {
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
