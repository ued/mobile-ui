<template>
<div style="padding: 0 15px;">
  <group title="正常类"></group>
  <m-button>提交</m-button>
  <m-button type="brand">确认</m-button>
  <m-button type="primary">添加</m-button>
  <m-button type="warn">收藏</m-button>
  <m-button type="dangerous">删除</m-button>

  <group title="正常类-disabled"></group>
  <m-button disabled>提交</m-button>
  <m-button type="brand" disabled>确认</m-button>
  <m-button type="primary" disabled>添加</m-button>
  <m-button type="warn" disabled>收藏</m-button>
  <m-button type="dangerous" disabled>删除</m-button>

  <group title="mini类"></group>
  <m-button mini>搜索</m-button>
  <m-button type="brand" mini>搜索</m-button>
  <m-button type="primary" mini>搜索</m-button>
  <m-button type="warn" mini>搜索</m-button>
  <m-button type="dangerous" mini>搜索</m-button>

  <group title="mini类-disabled"></group>
  <m-button mini disabled>搜索</m-button>
  <m-button type="brand" mini disabled>搜索</m-button>
  <m-button type="primary" mini disabled>搜索</m-button>
  <m-button type="warn" mini disabled>搜索</m-button>
  <m-button type="dangerous" mini disabled>搜索</m-button>

  <group title="transparent类"></group>
  <m-button transparent>搜索</m-button>
  <m-button type="brand" transparent>搜索</m-button>
  <m-button type="primary" transparent>搜索</m-button>
  <m-button type="warn" transparent>搜索</m-button>
  <m-button type="dangerous" transparent>搜索</m-button>

  <group title="transparent类 + mini"></group>
  <m-button mini transparent>搜索</m-button>
  <m-button type="brand" mini transparent>搜索</m-button>
  <m-button type="primary" mini transparent>搜索</m-button>
  <m-button type="warn" mini transparent>搜索</m-button>
  <m-button type="dangerous" mini transparent>搜索</m-button>
  
</div>
</template>

<script>
import { MButton, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    MButton,
    Group
  },
  data () {
    return {}
  }
}
</script>
