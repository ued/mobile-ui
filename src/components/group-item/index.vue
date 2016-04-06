<template>
<a class="mui_group_item" href="javascript:">
  <div class="mui_group_item_bd mui_group_item_primary">
    <p>{{title}}</p>
    <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
  </div>
  <div class="mui_group_item_ft with_arrow">{{rightDesc}}</div>
</a>
</template>

<script>
import InlineDesc from '../inline-desc/'

export default {
  components: {
    InlineDesc
  },
  props: {
    title: String,
    inlineDesc: String,
    rightDesc: String
  },
  created () {
    this.$dispatch('group.class.add', 'mui_group_item_access') // 点击的样式
  }
}
</script>

<style lang="less">
@import "../group/_supports.less";
.mui_group_item {
    // onepx
    position: relative;
    &:before {
        .setTopLine(@muiCellBorderColor);
        left: @muiCellGapH;
    }
    &:first-child {
        &:before {
            display: none;
        }
    }
}
.mui_group_item {
    padding: @muiCellGapV @muiCellGapH;
    position: relative; //这个是为了兼容group容器onepx方案被before挡住而做的
    display: flex;
    align-items: center;
}

.mui_group_item_ft {
    text-align: right;
    color: @globalTextColor;
    &.with_arrow:after {
      content: " ";
      .setArrow_Wap(right, 6px, #C8C8CD, 2px);
      top: -1px;
      margin-left:.3em;
    }
}

.mui_group_item_primary {
    flex: 1;
}
a.mui_group_item_access {
    text-decoration: none;// Tony 16.02.08
    &.mui_group_item:not(.no_access) {
        // 在group_item_access和其它类型的group_item混着用的场景下，其它group_item要加no_access，避免有点击态
        .setTapColor;
        &:active {
            background-color: #ECECEC;
        }
    }
    &.mui_group_item {
        color: inherit;
    }
    .mui_group_item_ft {
        &:after {
            content: " ";
            .setArrow_Wap(right, 6px, #C8C8CD, 2px);
            top: -1px;
            margin-left:.3em;
        }
    }
}
</style>
