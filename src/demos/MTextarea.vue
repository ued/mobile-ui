<template>
<div>
  <group title="Default">
    <m-textarea :max="200" placeholder="I'm placeholder"></m-textarea>
  </group>
</div>
</template>

<script>
import { MTextarea, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    MTextarea,
    Group
  },
  data () {
    return {}
  },
  methods: {
  }
}
</script>
