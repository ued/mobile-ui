<template>
<div>
  <group title="正常类"></group>
  <m-button>提交</m-button>
  <m-button type="brand">确认</m-button>
  <m-button type="primary">添加</m-button>
  <m-button type="warn">删除</m-button>

  <group title="正常类-disabled"></group>
  <m-button disabled>提交</m-button>
  <m-button type="brand" disabled>确认</m-button>
  <m-button type="primary" disabled>添加</m-button>
  <m-button type="warn" disabled>删除</m-button>

  <group title="mini类"></group>
  <m-button mini>搜索</m-button>
  <m-button type="brand" mini>搜索</m-button>
  <m-button type="primary" mini>搜索</m-button>
  <m-button type="warn" mini>搜索</m-button>

  <group title="mini类-disabled"></group>
  <m-button mini disabled>搜索</m-button>
  <m-button type="brand" mini disabled>搜索</m-button>
  <m-button type="primary" mini disabled>搜索</m-button>
  <m-button type="warn" mini disabled>搜索</m-button>

  <group title="B类"></group>
  <m-button type="b-white" style="display:inline-block;">空调</m-button>
  <group title="C类" ></group>
  <m-button type="c-white" >返回商城</m-button>
  <m-button type="c-blue" >返回商城</m-button>
  <m-button type="c-green">签到</m-button>
  <m-button type="c-orange">签到</m-button>
  <group title="D类"></group>
  <m-button type="d-white">查看图文详情</m-button>
  <group title="E类"></group>
  <m-button type="e-white">获取验证码</m-button>

  <group title="F类"></group>
  <div class="f-orange-wrap">
    图片
  </div>
  <m-button type="f-orange">立即购买</m-button>
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
