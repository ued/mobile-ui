<template>
<div>
  <group title="Action Sheet">
    <group-item
    title="1个按钮"
    right-desc="点击弹出"
    @click="triggerActionSheet1"></group-item>
    <group-item
    title="取消按钮文案"
    right-desc="点击弹出"
    @click="triggerActionSheet2"></group-item>
    <group-item
    title="为按钮添加Classes"
    right-desc="点击弹出"
    @click="triggerActionSheet3"></group-item>ffb700
  </group>

  <action-sheet
  :show.sync="actionSheet.show"
  :buttons="actionSheet.buttons"
  :cancel-text="actionSheet.cancelText"></action-sheet>
</div>
</template>

<script>
import { ActionSheet, Group, GroupItem } from '../components/'

export default {
  components: {
    ActionSheet,
    Group,
    GroupItem
  },
  methods: {
    triggerActionSheet1 () {
      let _this = this
      let _actionSheet = this.actionSheet
      _actionSheet.buttons = [{
        name: '关闭',
        onClick () {
          _this.actionSheet.show = false
        }
      }]
      _actionSheet.cancelText = '' // 重置取消按钮文案
      _this.actionSheet.show = !this.actionSheet.show
    },
    triggerActionSheet2 () {
      let _this = this
      let _actionSheet = this.actionSheet
      _actionSheet.buttons = [{
        name: '按钮1',
        onClick () {
          _this.actionSheet.show = false
        }
      }]
      _actionSheet.cancelText = '关闭按钮'
      _this.actionSheet.show = !this.actionSheet.show
    },
    triggerActionSheet3 () {
      let _this = this
      let _actionSheet = this.actionSheet
      _actionSheet.buttons = [{
        name: '关闭',
        classes: ['your_class1', 'your_class2'],
        onClick () {
          _this.actionSheet.show = false
        }
      }, {
        name: '按钮2',
        classes: 'default',
        onClick () {
          console.log('点击按钮2')
        }
      }, {
        name: '按钮3',
        onClick () {
          console.log('点击按钮3')
        }
      }]
      _actionSheet.cancelText = ''
      _this.actionSheet.show = !this.actionSheet.show
    }
  },
  data () {
    return {
      actionSheet: {
        show: false,
        buttons: [{
          name: '',
          classes: '',
          onClick () {
          }
        }],
        cancelText: ''
      }
    }
  }
}
</script>

<style>
</style>
