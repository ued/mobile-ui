<template>
  <div class="mui-group-item no-access mui-group-item-switch" v-if="isGroupItem">
    <div class="mui-group-item-hd">
    	<label class="mui-label" :style="{width: labelWidth || defaultLabelWidth + 'em'}" v-if="title">{{title}}</label>
    	<inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
    </div>
    <div class="mui-group-item-bd mui-group-item-primary">
      <slot></slot>
    </div>
    <div class="mui-group-item-ft">
      <input class="mui-switch" type="checkbox" :disabled="disabled" v-model="value"/>
    </div>
  </div>
  <input v-else class="mui-switch" type="checkbox" :disabled="disabled" v-model="value"/>
</template>

<script>
import InlineDesc from '../inline-desc/'

export default {
  components: {
    InlineDesc
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean
    },
    title: {
      type: String
    },
    inlineDesc: {
      type: String
    },
    labelWidth: {
      type: String,
      default: ''
    },
    isGroupItem: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    defaultLabelWidth: function () {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1
    }
  }
}
</script>

<style lang="less">
@import "./style.less";
</style>
