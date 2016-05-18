<template>
<div style="padding: 0 15px;">
  <group title="正常类"></group>
  <m-button>提交</m-button>
  <m-button btype="brand">确认</m-button>
  <m-button btype="primary">添加</m-button>
  <m-button btype="warn">收藏</m-button>
  <m-button btype="dangerous">删除</m-button>

  <group title="正常类-disabled"></group>
  <m-button disabled>提交</m-button>
  <m-button btype="brand" disabled>确认</m-button>
  <m-button btype="primary" disabled>添加</m-button>
  <m-button btype="warn" disabled>收藏</m-button>
  <m-button btype="dangerous" disabled>删除</m-button>

  <group title="mini类"></group>
  <m-button mini>搜索</m-button>
  <m-button btype="brand" mini>搜索</m-button>
  <m-button btype="primary" mini>搜索</m-button>
  <m-button btype="warn" mini>搜索</m-button>
  <m-button btype="dangerous" mini>搜索</m-button>

  <group title="mini类-disabled"></group>
  <m-button mini disabled>搜索</m-button>
  <m-button btype="brand" mini disabled>搜索</m-button>
  <m-button btype="primary" mini disabled>搜索</m-button>
  <m-button btype="warn" mini disabled>搜索</m-button>
  <m-button btype="dangerous" mini disabled>搜索</m-button>

  <group title="transparent类"></group>
  <m-button transparent>搜索</m-button>
  <m-button btype="brand" transparent>搜索</m-button>
  <m-button btype="primary" transparent>搜索</m-button>
  <m-button btype="warn" transparent>搜索</m-button>
  <m-button btype="dangerous" transparent>搜索</m-button>

  <group title="transparent类 + mini"></group>
  <m-button mini transparent>搜索</m-button>
  <m-button btype="brand" mini transparent>搜索</m-button>
  <m-button btype="primary" mini transparent>搜索</m-button>
  <m-button btype="warn" mini transparent>搜索</m-button>
  <m-button btype="dangerous" mini transparent>搜索</m-button>
<!-- 
  <group title="F类"></group>
  <div class="f-orange-wrap">
    图片
  </div>
  <m-button btype="f-orange">立即购买</m-button> -->
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
