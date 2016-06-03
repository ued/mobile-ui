<template>
<div>
  <group title="Dialog">
    <group-item
    title="1个按钮"
    right-desc="点击出弹窗"
    @click="triggerDialog1"></group-item>
    <group-item
    title="2个按钮"
    right-desc="点击出弹窗"
    @click="triggerDialog2"></group-item>
    <group-item
    title="2个以上按钮"
    right-desc="点击出弹窗"
    @click="triggerDialog3"></group-item>
  </group>

  <dialog
  :show="dialog.show"
  :head="dialog.head"
  :content="dialog.content"
  :buttons="dialog.buttons"></dialog>
</div>
</template>

<script>
import { Dialog, Group, GroupItem } from '../components/'

export default {
  components: {
    Dialog,
    Group,
    GroupItem
  },
  methods: {
    triggerDialog1 () {
      let _this = this
      let _dialog = this.dialog
      _dialog.head = 'Dialog'
      _dialog.content = '这是一个按钮的例子'
      _dialog.buttons = [{
        name: '关闭',
        onClick () {
          _this.dialog.show = false
        }
      }]
      _this.dialog.show = !this.dialog.show
    },
    triggerDialog2 () {
      let _this = this
      let _dialog = this.dialog
      _dialog.head = 'Dialog'
      _dialog.content = '<span style="color:red;">这是2个按钮的例子</span>'
      _dialog.buttons = [{
        name: '关闭',
        classes: 'default',
        onClick () {
          _this.dialog.show = false
        }
      }, {
        name: '按钮2',
        classes: 'primary',
        onClick () {
          console.log('点击按钮2')
        }
      }]
      _this.dialog.show = !this.dialog.show
    },
    triggerDialog3 () {
      let _this = this
      let _dialog = this.dialog
      _dialog.head = 'Dialog'
      _dialog.content = '<p style="text-align:center;">这是2个以上按钮的例子</p>'
      _dialog.buttons = [{
        name: '关闭',
        classes: ['your_class1', 'your_class2'],
        onClick () {
          _this.dialog.show = false
        }
      }, {
        name: '按钮2',
        classes: 'default',
        onClick () {
          console.log('点击按钮2')
        }
      }, {
        name: '按钮3',
        classes: 'primary',
        onClick () {
          console.log('点击按钮3')
        }
      }]
      _this.dialog.show = !this.dialog.show
    }
  },
  data () {
    return {
      dialog: {
        show: false,
        head: '',
        content: '',
        buttons: [{
          name: '',
          classes: '',
          onClick () {
          }
        }]
      }
    }
  }
}
</script>

<style>
</style>
