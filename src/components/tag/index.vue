<template>
  <span
  :class="['mui-tag', {
    'mui-tag-line': line,
    'mui-tag-orange': type === 'orange',
    'mui-tag-white': type === 'white',
    'mui-tag-green': type === 'green',
    'mui-tag-gray': type === 'gray',
    'mui-tag-purple': type === 'purple'
  }]"><slot>{{ text }}</slot></span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'orange'
    },
    line: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
