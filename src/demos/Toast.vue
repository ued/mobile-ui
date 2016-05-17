<template>
<div>
  <group title="Toast">
    <group-item
    title="loading"
    right-desc="点击出弹窗"
    @click="triggerLoadingToast"></group-item>
    <group-item
    title="warning"
    right-desc="点击出弹窗"
    @click="triggerWarningToast"></group-item>
    <group-item
    title="success"
    right-desc="点击出弹窗"
    @click="triggerSuccessToast"></group-item>
  </group>

  <toast
  :show="loadingToast.show"
  :text="loadingToast.text"></toast>
  <toast
  :show="warningToast.show"
  :text="warningToast.text"
  :type="warningToast.type"></toast>
  <toast
  :show="successToast.show"
  :text="successToast.text"
  :type="successToast.type"></toast>
</div>
</template>

<script>
import { Toast, Group, GroupItem } from '../components/'

export default {
  components: {
    Toast,
    Group,
    GroupItem
  },
  methods: {
    triggerLoadingToast () {
      this.loadingToast.show = !this.loadingToast.show
    },
    triggerWarningToast () {
      this.warningToast.show = !this.warningToast.show
    },
    triggerSuccessToast () {
      this.successToast.show = !this.successToast.show
    }
  },
  data () {
    return {
      loadingToast: {
        show: false
      },
      warningToast: {
        show: false,
        type: 'warning',
        text: '系统繁忙'
      },
      successToast: {
        show: false,
        type: 'success',
        text: '操作成功'
      }
    }
  }
}
</script>

<style>
</style>
