<template>
  <div>
    <div class="mui-group-title" v-if="title" :style="{color:titleColor}">{{title}}</div>
    <div class="mui-group" :class="{'no-group-title':!title}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import GroupTitle from '../group-title/'

export default {
  components: {
    GroupTitle
  },
  props: {
    title: String,
    titleColor: String
  },
  events: {
    'group.class.add': function (value) {
      this.$el.querySelector('.mui-group').classList.add(value)
    }
  }
}
</script>

<style lang="less">
@import "./style.less";
.no-group-title {
  margin-top:15px;
}
</style>
