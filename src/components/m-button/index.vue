<template>
  <a href="javascript:" class="mui-btn"
  :class="{'mui-btn-disabled': disabled,
    'mui-btn-mini': mini,
    'mui-btn-transparent': transparent,
    'mui-btn-default': type === 'default',
    'mui-btn-brand': type === 'brand',
    'mui-btn-primary': type === 'primary',
    'mui-btn-warn': type === 'warn',
    'mui-btn-dangerous': type === 'dangerous'
  }"><slot>{{ text }}</slot></a>
</template>

<script>
export default {
  props: {
    type: {
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
