<template>
<div v-show="show" transition="mui-actionsheet-mask">
    <div class="mui-actionsheet-mask" @click="closeActionSheet"></div>
    <div class="mui-actionsheet" v-show="show" transition="mui-actionsheet">
        <div class="mui-actionsheet-menu">
            <div
            v-for="button in buttons"
            :class="['mui-actionsheet-button'].concat(button.classes)"
            @click="button.onClick">
              {{ button.name }}
            </div>
        </div>
        <div class="mui-actionsheet-action">
            <div class="mui-actionsheet-button" @click="closeActionSheet">{{ cancelText || '取消' }}</div>
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
      default: false,
      twoWay: true
    },
    buttons: {
      type: Array,
      default: []
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  methods: {
    closeActionSheet () {
      this.show = false
    }
  },
  beforeDestroy () {
    this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
  }
}
</script>

<style lang="scss">
@import "./style.scss"
</style>
