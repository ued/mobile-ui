<template>
<div v-show="show" transition="mui-actionsheet">
    <div class="mui-mask-transition" @click="closeActionSheet"></div>
    <div class="mui-actionsheet">
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
  }
}
</script>

<style lang="scss">
@import "./style.scss"
</style>
