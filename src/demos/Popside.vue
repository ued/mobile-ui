<template>
<div>
  <group>
    <group-item
    title="Popside"
    right-desc="点击出弹窗"
    @click="click1"></group-item>
    <group-item
    title="全屏Popside"
    right-desc="点击出弹窗"
    @click="click2"></group-item>
  </group>

  <popside :show.sync="show1">
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
    <p style="font-size: 42px;">可以自定义html内容</p>
  </popside>
  <popside :show.sync="show2">
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
    <p style="font-size: 62px;" @click="click2">点击关闭</p>
  </popside>
</div>
</template>

<script>
import { Popside, Group, GroupItem, Flexbox, FlexboxItem } from '../components/'

export default {
  components: {
    Popside,
    Group,
    GroupItem,
    Flexbox,
    FlexboxItem
  },
  methods: {
    click1 () {
      this.show1 = !this.show1
    },
    click2 () {
      this.show2 = !this.show2
    }
  },
  data () {
    return {
      show1: false,
      show2: false
    }
  }
}
</script>

<style>
</style>
