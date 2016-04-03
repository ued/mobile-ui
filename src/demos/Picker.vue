<template>
  <div>
    <group-title>不设置默认值时，赋值并选中第一个</group-title>
    <picker :data='years' :value.sync='year1' @change='change'></picker>

    <group-title>设置默认值时</group-title>
    <picker :data='years' :value.sync='year2' @change='change'></picker>

    <group-title>双向绑定</group-title>
    <input v-model='year3'/>
    <picker :data='years' :value.sync='year3' @change='change'></picker>

    <group-title>多列非联动</group-title>
    <picker :data='data4' :value.sync='data4Value' @change='change'></picker>

    <group-title>多列联动</group-title>
    <picker :data='data5' :columns=3 :value.sync='data5Value' @change='change'></picker>
  </div>
</template>

<script>
import { GroupTitle, Picker } from '../components/'

let years = []
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}
export default {
  ready () {
  },
  components: {
    GroupTitle,
    Picker
  },
  watch: {
    data5Value: {
      handler (val) {
        let str = `val: ${val}` // 注意这里的标点
        console.log(str)
      },
      deep: true // 深度监控
    }
  },
  data () {
    return {
      years: [years],
      year1: [''],
      year2: ['2013'],
      year3: ['2015'],
      data4: [
        ['你', '我', '他'],
        ['you', 'I', 'him'],
        ['ni', 'wo', 'ta'],
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1]
      ],
      data4Value: ['你', 'I', 'ta', 1, 5],
      data5: [{
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
      }],
      data5Value: ['uk', 'liverpool', '']
    }
  },
  methods: {
    change (value) {
      // 这里的value值，只是当前这一层的变化，更深一层的变化，不会展示
      console.log('change', value)
    }
  }
}
</script>

<style>
</style>
