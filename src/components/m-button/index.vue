<template>
	<a href="javascript:"
	class="mui-btn"
	:class="{
		'mui-btn-disabled':disabled,
		'mui-btn-mini': mini,
		'mui-btn-brand':type==='brand',
		'mui-btn-primary':type==='primary',
		'mui-btn-warn':type==='warn',
		'mui-btn-default':type==='default',
		'mui-btn-b-white':type==='b-white',
		'mui-btn-c-white':type==='c-white',
		'mui-btn-c-blue':type==='c-blue',
		'mui-btn-c-green':type==='c-green',
		'mui-btn-c-orange':type==='c-orange',
		'mui-btn-d-white':type==='d-white',
		'mui-btn-e-white':type==='e-white',
		'mui-btn-f-orange':type==='f-orange'}">
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
