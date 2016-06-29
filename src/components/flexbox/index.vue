<template>
  <div class="mui-flexbox" :class="{'flex-col': orient == 'vertical', 'flex-row': orient == 'horizontal'}">
    <slot></slot>
  </div>
</template>

<script>
import support from './support'

export default {
  created () {
    this.supported = support.flex
  },
  ready () {
    if (this.supported) {
      this.$el.classList.remove('mui-flexbox')
      this.$el.classList.add('mui-flexbox--unsupport')
    }
  },
  props: {
    marginLeft: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    }
  }
}
</script>

<style>
.mui-flexbox{
  width: 100%;
  text-align: left;
  display: -webkit-box;
  display: -moz-box;
  display: -o-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
}

.mui-flexbox .mui-flexbox-item{
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  -o-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  min-width: 20px;
}

.mui-flexbox-item > .mui-flexbox {
  width: 100%;
  height: 100%;
}

.mui-flexbox .mui-flexbox-item:first-child{
  margin-left: 0!important;
}

.mui-flexbox.flex-col {
  box-orient: vertical;
  flex-direction: column;
}

.flex-col > .mui-flexbox-item {
  width: 100%;
}

.mui-flexbox.flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}

.flex-row > .mui-flexbox-item {
  height: 100%;
}
</style>
