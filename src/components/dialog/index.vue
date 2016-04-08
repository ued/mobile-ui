<template>
<div :class="[buttons.length < 3 ? 'mui_dialog_confirm' : 'mui_dialog_general']" v-show="show">
    <div class="mui_mask"></div>
    <div class="mui_dialog">
        <div class="mui_dialog_hd"><strong class="mui_dialog_title">{{ head }}</strong></div>
        <div class="mui_dialog_bd">{{{ content }}}</div>
        <div class="mui_dialog_ft">
            <a v-for="button in buttons"
              :class="['mui_btn_dialog', button.classes]"
              @click="button.onClick"
              >{{ button.name }}</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
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
