<template>
<div>
  <div class="ex-layout-1">
    <flexbox class="mui-product-wrap" :margin-left="8">
        <flexbox-item class="left-wrap">
            <img class="product-img" src="https://img.mdcdn.cn/ImageStore/106835/pic/b67b1b72a19a96e1A20996/b67b1b72a19a96e1A20996_430*430.jpg" alt="" />
        </flexbox-item>
        <flexbox-item class="middle-wrap">
            <h5 class="product-title">电烤箱 25L黄金容量 多功能 烘焙入门首选 MG25NF-AD</h5>
            <p class="product-detail">白色/5L</p>
            <span class="invoice-selector">电子发票</span>
        </flexbox-item>
        <flexbox-item class="right-wrap">
            <div class="">&yen; 799.00</div>
            <div class="">x1</div>
            <div class="bottom-label">7天退款</div>
        </flexbox-item>
    </flexbox>
  </div>
</div>
</template>

<script>
import Flexbox from '../flexbox'
import FlexboxItem from '../flexbox-item'

export default {
  components: {
    Flexbox,
    FlexboxItem
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "./style.scss";
</style>
