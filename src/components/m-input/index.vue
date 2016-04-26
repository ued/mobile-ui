<template>
	<div class="mui_group_item">
    <div class="mui_group_item_hd">
    	<label class="mui_label" :style="{width: labelWidth + 'em'}" v-if="title">{{title}}</label>
    	<inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="mui_group_item_bd mui_group_item_primary">
      <input class="mui_input" :type="type" :pattern="pattern" placeholder="{{placeholder}}" v-model="value" @blur="blur" v-el:input/>
    </div>
    <div class="mui_group_item_ft">
      <i class="weui_icon weui_icon_clear" v-show="showClear && value" @click="clear"></i>
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
    placeholder: {
      type: String
    },
    value: {
      type: String,
      default: '',
      twoWay: true
    },
    keyboard: {
      type: String
    },
    inlineDesc: {
      type: String
    },
    isType: {
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
    labelWidth: function () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
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
@import "../group-item/style.less"; // 引入group-iem样式
@import "./style.less";
</style>
