<template>
<div :class="[buttons.length < 3 ? 'mui-dialog-confirm' : 'mui-dialog-general']" v-show="show" transition="mui-dialog-mask">
    <div class="mui-dialog-mask" v-el:mask></div>
    <div class="mui-dialog" v-show="show" transition="mui-dialog">
        <div class="mui-dialog-hd">
          <strong class="mui-dialog-title">{{ head }}</strong>
        </div>
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
    // 阻止mask上的滚动
    this.$els.mask.addEventListener('touchmove', (e) => {
      e.stopPropagation()
      e.preventDefault()
      return false
    }, false)
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
  },
  beforeDestroy () {
    this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
  }
}
</script>

<style lang="less">
@import "style.less";
.mui-dialog-mask-transition {
  opacity: 1;
  transition: opacity linear .2s;
}
.mui-dialog-mask-enter,.mui-dialog-mask-leave {
  opacity: 0;
}
.mui-dialog-transition {
  opacity: 1;
  transition-duration: .4s;
  transform: translate(-50%, -50%) scale(1)!important;
  transition-property: transform, opacity!important;
}
.mui-dialog-enter {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.185)!important;
}
.mui-dialog-leave {
  transform: translate(-50%, -50%) scale(1)!important;
}
</style>
