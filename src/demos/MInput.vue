<template>
<div>
  <group title="Default">
    <m-input title="message" placeholder="I'm placeholder"></m-input>
  </group>
</div>
</template>

<script>
import { MInput, Group } from '../components/'

export default {
  ready () {
  },
  components: {
    MInput,
    Group
  },
  data () {
    return {}
  }
}
</script>
