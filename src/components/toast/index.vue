<template>
  <div
  :class="{
    'mui-loading-toast': type === 'loading',
    'mui-success-toast': type === 'success',
    'mui-warning-toast': type === 'warning'
  }"
  v-show="show">
    <div class="mui-mask-transparent"></div>
    <div class="mui-toast">
      <i class="mui-icon-toast" v-if="!(type === 'loading')"></i>
      <div class="mui-loading" v-if="(type === 'loading')">
        <div class="mui-loading-leaf mui-loading-leaf-0"></div>
        <div class="mui-loading-leaf mui-loading-leaf-1"></div>
        <div class="mui-loading-leaf mui-loading-leaf-2"></div>
        <div class="mui-loading-leaf mui-loading-leaf-3"></div>
        <div class="mui-loading-leaf mui-loading-leaf-4"></div>
        <div class="mui-loading-leaf mui-loading-leaf-5"></div>
        <div class="mui-loading-leaf mui-loading-leaf-6"></div>
        <div class="mui-loading-leaf mui-loading-leaf-7"></div>
        <div class="mui-loading-leaf mui-loading-leaf-8"></div>
        <div class="mui-loading-leaf mui-loading-leaf-9"></div>
        <div class="mui-loading-leaf mui-loading-leaf-10"></div>
        <div class="mui-loading-leaf mui-loading-leaf-11"></div>
      </div>
      <p class="mui-toast-content" v-if="text">
        {{text}}
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'loading'
    },
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '数据加载中'
    }
  }
}
</script>

<style lang="less">
@import "./style.less";
</style>
