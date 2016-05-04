<template>
	<a href="javascript:"
	class="mui_btn"
	:class="{
		'mui_btn_disabled':disabled,
		'mui_btn_mini': mini,
		'mui_btn_brand':type==='brand',
		'mui_btn_primary':type==='primary',
		'mui_btn_warn':type==='warn',
		'mui_btn_default':type==='default'}">
		{{text}}
		<slot></slot>
	</a>
</template>

<script>
export default {
  props: {
    type: {
      required: false,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    mini: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="less">
@import "style.less";
</style>
