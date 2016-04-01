<template>
<a class="weui_cell" href="javascript:">
  <div class="weui_cell_bd weui_cell_primary">
    <p>{{title}}</p>
    <inline-desc v-if="inlineDesc">{{inlineDesc}}</inline-desc>
  </div>
  <div class="weui_cell_ft with_arrow vux-datetime-value">{{value}}</div>
</a>
</template>

<script>
import Picker from './datetimepicker'
import Group from '../group/'
import InlineDesc from '../inline-desc/'
import Base from '../../libs/base'

export default {
  mixins: [Base],
  components: {
    Group,
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
    this.$dispatch('group.class.add', 'weui_cells_access')
  },
  ready () {
    var _this = this
    const uuid = this.uuid
    this.$el.setAttribute('id', 'vux-datetime-' + uuid)
    let options = {
      trigger: '#vux-datetime-' + uuid,
      format: _this.format,
      value: _this.value,
      output: '.vux-datetime-value',
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
@import './datetimepicker.css'
</style>
