<template>
  <div class="mui-group-item">
      <div class="mui-group-item-bd mui-group-item-primary">
          <textarea class="mui-textarea" placeholder="{{placeholder}}" rows="3" v-model="value"></textarea>
          <div class="mui-textarea-counter" v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div>
      </div>
  </div>
</template>

<script>
import Base from '../../libs/base'

export default {
  minxins: [Base],
  components: {
  },
  props: {
    showCounter: {
      type: Boolean,
      default: true
    },
    max: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  watch: {
    value: function (newVal) {
      if (this.max && this.value.length > this.max) {
        this.value = newVal.slice(0, this.max)
      }
      this.$dispatch('change', this.value)
    }
  },
  computed: {
    count: function () {
      return this.value.length
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import (reference) "../group-item/style.less"; // 引入group-iem样式
@import "./style.less";
</style>
