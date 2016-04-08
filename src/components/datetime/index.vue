<template>
<a class="mui_group_item" href="javascript:">
  <div class="mui_group_item_bd mui_group_item_primary">
    <p>{{title}}</p>
    <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
  </div>
  <div class="mui_group_item_ft with_arrow dp-value">{{value}}</div>
</a>
</template>

<script>
import Picker from './datetimepicker'
import Group from '../group'
import GroupItem from '../group-item'
import InlineDesc from '../inline-desc'
import Base from '../../libs/base'

export default {
  mixins: [Base],
  components: {
    Group,
    GroupItem, //引入group-item样式
    InlineDesc
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: '',
      twoWay: true
    },
    inlineDesc: {
      type: String
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    placeholder: {
      type: String
    },
    minYear: {
      type: Number
    },
    maxYear: {
      type: Number
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    titleText: {
      type: String
    },
    yearRow: {
      type: String,
      default: '{value}'
    },
    monthRow: {
      type: String,
      default: '{value}'
    },
    dayRow: {
      type: String,
      default: '{value}'
    },
    hourRow: {
      type: String,
      default: '{value}'
    },
    minuteRow: {
      type: String,
      default: '{value}'
    }
  },
  created () {
    this.$dispatch('group.class.add', 'mui_group_item_access') // 点击的样式
  },
  ready () {
    var _this = this
    const uuid = this.uuid
    this.$el.setAttribute('id', 'dp-id-' + uuid)
    let options = {
      trigger: '#dp-id-' + uuid,
      format: _this.format,
      value: _this.value,
      output: '.dp-value',
      confirmText: _this.confirmText,
      cancelText: _this.cancelText,
      titleText: _this.titleText,
      yearRow: _this.yearRow,
      monthRow: _this.monthRow,
      dayRow: _this.dayRow,
      hourRow: _this.hourRow,
      minuteRow: _this.minuteRow,
      onConfirm: function (value) {
        _this.value = value
      }
    }
    if (this.minYear) {
      options.minYear = this.minYear
    }
    if (this.maxYear) {
      options.maxYear = this.maxYear
    }
    this.picker = new Picker(options)
  },
  watch: {
    value: function (val) {
      this.$dispatch('change', val)
    }
  },
  beforeDestroy () {
    this.picker.destroy()
  }
}
</script>

<style>
@import './datetimepicker.css';
</style>
