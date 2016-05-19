<template>
<div :class="[buttons.length < 3 ? 'mui-dialog-confirm' : 'mui-dialog-general']" v-show="show">
    <div class="mui-mask"></div>
    <div class="mui-dialog">
        <div class="mui-dialog-hd"><strong class="mui-dialog-title">{{ head }}</strong></div>
        <div class="mui-dialog-bd">
          {{{ content }}}
          <slot></slot>
        </div>
        <div class="mui-dialog-ft">
            <a v-for="button in buttons"
              :class="['mui-btn-dialog'].concat(button.classes)"
              @click="button.onClick"
              >{{ button.name }}</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  ready () {
    // 把dom结构移在最外面，
    // 防止被挡住
    document.body.appendChild(this.$el)
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    head: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    buttons: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less">
@import "style.less";
</style>
