<template>
  <div>
    <group title="default format: YYYY-MM-DD">
      <datetime
      :value.sync="value1"
      @change="change"
      title="初始值2016-02-11"></datetime>
    </group>

    <group title="format: HH:II">
      <datetime
      :value.sync="value2"
      format="HH:II"
      @change="change"
      title="时间"
      ></datetime>
    </group>

    <group title="format: YYYY-MM-DD H:II 和 inline-desc">
      <datetime
      :value.sync="value3"
      title="日期和时间"
      inline-desc="选择日期和时间"
      @change="change"
      format="YYYY-MM-DD H:II"
      ></datetime>
    </group>

    <group title="使用 placeholder">
      <datetime
      :value.sync="value4"
      title="标题"
      @change="change"
      format="YYYY-MM-DD HH:II"
      ></datetime>
    </group>

    <group title="设置 min-year and max-year">
      <datetime
      :value.sync="value5"
      title="years after 2000"
      @change="change"
      :min-year=2000
      :max-year=2016
      format="YYYY-MM-DD HH:II"
      ></datetime>
    </group>

    <group title="文案的自定义">
      <datetime
      :value.sync="value6"
      title="按钮和单位"
      inline-desc="inline-desc"
      @change="change"
      :min-year=2000
      :max-year=2016
      format="YYYY-MM-DD HH:II"
      year-row="{value}年"
      month-row="{value}月"
      day-row="{value}日"
      hour-row="{value}点"
      minute-row="{value}分"
      confirm-text="完成按钮"
      cancel-text="取消按钮"
      title-text="标题"
      ></datetime>
    </group>
  </div>
</template>

<script>
import { Datetime, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    Datetime,
    Group
  },
  data () {
    return {
      value1: '2016-02-11',
      value2: '',
      value3: '',
      value4: '这是Placeholder',
      value5: '',
      value6: 'Placeholder'
    }
  },
  methods: {
    change (value) {
      console.log('change', value)
    }
  }
}
</script>

<style>
</style>
