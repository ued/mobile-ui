<template>
  <div>
    <div class="mui_group_title" v-if="title" :style="{color:titleColor}">{{title}}</div>
    <div class="mui_group" :class="{'no_group_title':!title}">
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
      this.$el.querySelector('.mui_group').classList.add(value)
    }
  }
}
</script>

<style lang="less">
@import "./style.less";
.no_group_title {
  margin-top:15px;
}
</style>
