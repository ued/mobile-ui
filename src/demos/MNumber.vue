<template>
<div>
  <group title="Default"></group>
  <m-number :value.sync="example1"></m-number>

  <group title="Width"></group>
  <m-number :value.sync="example1" :width="100"></m-number>

  <group title="Max & min & step"></group>
  <m-number :value="6" :max="10" :min="3" :step="0.5"></m-number>

  <group title="Disabled"></group>
  <m-number :value="6" :disabled-decrease="true"></m-number>
  <m-number :value="6" :disabled-increase="true" :style="{'marginTop': '5px'}"></m-number>
  <m-number :value="6" :disabled="true" :style="{'marginTop': '5px'}"></m-number>

  <group title="With group item">
    <group-item
    title="数字编辑器"
    :access="false"
    :with-arrow="false">
      <m-number slot="ft" :value.sync="example1"></m-number>
    </group-item>
  </group>
</div>
</template>

<script>
import { MNumber, Group, GroupItem } from '../components/'

export default {
  ready () {
  },
  components: {
    MNumber,
    Group,
    GroupItem
  },
  methods: {
  },
  data () {
    return {
      example1: 4
    }
  }
}
</script>
