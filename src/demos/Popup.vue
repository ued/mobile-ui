<template>
<div>
  <group>
    <group-item
    title="Popup"
    right-desc="点击出弹窗"
    @click="click1"></group-item>
    <group-item
    title="全屏Popup"
    right-desc="点击出弹窗"
    @click="click2"></group-item>
    <group-item
    title="地址"
    :right-desc="picker.value.join()"
    @click="triggerPickerShow"></group-item>
  </group>

  <popup :show.sync="show1" height="200px">
    <p>可以自定义html内容</p>
  </popup>
  <popup :show.sync="show2" height="100%">
    <p @click="click2">点击关闭</p>
  </popup>
  <popup :show.sync="picker.show">
    <flexbox class="test_btns_wrap">
      <flexbox-item class="btn_1" @click="triggerPickerShow">按钮1</flexbox-item>
      <flexbox-item class="btn_2" @click="triggerPickerShow">按钮2</flexbox-item>
    </flexbox>
    <picker :data='picker.data' :columns=3 :value.sync='picker.value'></picker>
  </popup>
</div>
</template>

<script>
import { Popup, Group, GroupItem, Picker, Flexbox, FlexboxItem } from '../components/'

export default {
  components: {
    Popup,
    Group,
    GroupItem,
    Picker,
    Flexbox,
    FlexboxItem
  },
  methods: {
    click1 () {
      this.show1 = !this.show1
    },
    click2 () {
      this.show2 = !this.show2
    },
    triggerPickerShow () {
      this.picker.show = !this.picker.show
    }
  },
  data () {
    return {
      show1: false,
      show2: false,
      picker: {
        show: false,
        value: ['uk', 'liverpool', ''],
        data: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '英国',
          value: 'uk',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '深圳',
          value: 'china001002',
          parent: 'china001'
        }, {
          name: '南宁',
          value: 'china002001',
          parent: 'china002'
        }, {
          name: '伦敦',
          value: 'london',
          parent: 'uk'
        }, {
          name: '利物浦',
          value: 'liverpool',
          parent: 'uk'
        }, {
          name: '空',
          value: '',
          parent: 'london'
        }, {
          name: '空',
          value: '',
          parent: 'liverpool'
        }]
      }
    }
  }
}
</script>

<style>
.test_btns_wrap {
  background-color: #fff;
  text-align: center;
}
.btn_1 {
  color: blue;
}
</style>
