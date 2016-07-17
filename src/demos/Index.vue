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
    title="MHeader"
    right-desc="头部样式"
    v-link="'/components/m-header'"></group-item>
    <group-item
    title="MButton"
    right-desc="按钮样式"
    v-link="'/components/m-button'"></group-item>
    <group-item
    title="Tag"
    right-desc="活动标签样式"
    v-link="'/components/tag'"></group-item>
    <group-item
    title="Flexbox"
    right-desc=""
    v-link="'/components/flexbox'"></group-item>
    <group-item
    title="Tab"
    right-desc="tab选择栏"
    v-link="'/components/tab'"></group-item>
    <group-item
    title="Layout"
    right-desc="参见布局展示"
    v-link="'/components/layout'"></group-item>
  </group>
  <group title="Form类">
    <group-item
    title="MInput"
    right-desc="Input样式"
    v-link="'/components/m-input'"></group-item>
    <group-item
    title="MTextarea"
    right-desc="Textarea样式"
    v-link="'/components/m-textarea'"></group-item>
    <group-item
    title="Radio"
    right-desc="Radio样式"
    v-link="'/components/radio'"></group-item>
    <group-item
    title="RadioCircle"
    right-desc="另一种Radio样式"
    v-link="'/components/radio-circle'"></group-item>
    <group-item
    title="Selector"
    right-desc="Select样式"
    v-link="'/components/selector'"></group-item>
    <group-item
    title="Switch"
    right-desc="Switch样式"
    v-link="'/components/switch'"></group-item>
    <group-item
    title="MNumber"
    right-desc="数量输入框"
    v-link="'/components/m-number'"></group-item>
  </group>
  <group title="弹窗类">
    <group-item
    title="Toast"
    right-desc="loading弹窗"
    v-link="'/components/toast'"></group-item>
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
    title="Popside"
    right-desc="侧边窗"
    v-link="'/components/popside'"></group-item>
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
