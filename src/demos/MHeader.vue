<template>
<div>
  <m-header :title="header1.title" :back-text="header1.backText" :back-cb="header1.backCb"></m-header>

  <m-header :title="header1.title"></m-header>

  <m-header>
    <div style="color: red; line-height:44px;">自定义</div>
  </m-header>

  <m-header>
    <div style="line-height:44px;" slot="left">自定义</div>
    <div style="color: red; line-height:44px;">自定义</div>
    <div style="line-height:44px;" slot="right">自定义</div>
  </m-header>
</div>
</template>

<script>
import { MHeader } from '../components/'

export default {
  components: {
    MHeader
  },
  data () {
    return {
      header1: {
        title: '标题',
        backText: '返回',
        backCb () {
          console.log('clicked back')
        }
      }
    }
  }
}
</script>
