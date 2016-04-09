<template>
<div v-show="show" transition="mui_actionsheet">
    <div class="mui_mask_transition" @click="closeActionSheet"></div>
    <div class="mui_actionsheet">
        <div class="mui_actionsheet_menu">
            <div
            v-for="button in buttons"
            :class="['mui_actionsheet_button'].concat(button.classes)"
            @click="button.onClick">
              {{ button.name }}
            </div>
        </div>
        <div class="mui_actionsheet_action">
            <div class="mui_actionsheet_button" @click="closeActionSheet">{{ cancelText || '取消' }}</div>
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
