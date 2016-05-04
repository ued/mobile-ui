<template>
<div>
  <group title="栗子">
    <group-item
    title="Template"
    right-desc="这是个例子"
    v-link="'/components/_tpl'"></group-item>
  </group>
  <group title="基础样式">
    <group-item
    title="Flexbox"
    right-desc=""
    v-link="'/components/flexbox'"></group-item>
    <group-item
    title="MButton"
    right-desc="按钮样式"
    v-link="'/components/m-button'"></group-item>
    <group-item
    title="MInput"
    right-desc="Input样式"
    v-link="'/components/m-input'"></group-item>
    <group-item
    title="MTextarea"
    right-desc="Textarea样式"
    v-link="'/components/m-textarea'"></group-item>
    <group-item
    title="Tag"
    right-desc="活动标签样式"
    v-link="'/components/tag'"></group-item>
    <group-item
    title="Layout"
    right-desc="参见布局展示"
    v-link="'/components/layout'"></group-item>
  </group>
  <group title="弹窗类">
    <group-item
    title="ActionSheet"
    right-desc="底部浮出按钮"
    v-link="'/components/action-sheet'"></group-item>
    <group-item
    title="Datetime"
    right-desc="时间选择"
    v-link="'/components/datetime'"></group-item>
    <group-item
    title="Dialog"
    right-desc="对话框"
    v-link="'/components/dialog'"></group-item>
    <group-item
    title="Picker"
    right-desc="底部选择滚轮"
    v-link="'/components/picker'"></group-item>
    <group-item
    title="Popup"
    right-desc="底部浮窗"
    v-link="'/components/popup'"></group-item>
  </group>
</div>
</template>

<script>
import { Group, GroupItem } from '../components/'

export default {
  components: {
    Group,
    GroupItem
  },
  data () {
    return {
    }
  }
}
</script>
