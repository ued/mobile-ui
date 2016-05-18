<template>
  <a href="javascript:" class="mui-btn"
  :class="{'mui-btn-disabled': disabled,
    'mui-btn-mini': mini,
    'mui-btn-transparent': transparent,
    'mui-btn-default': btype === 'default',
    'mui-btn-brand': btype === 'brand',
    'mui-btn-primary': btype === 'primary',
    'mui-btn-warn': btype === 'warn',
    'mui-btn-dangerous': btype === 'dangerous'
  }">{{ text }}<slot></slot></a>
</template>

<script>
export default {
  props: {
    btype: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="less">
@import "./style.less";
</style>
