<template>
  <div>
    <heads></heads>
    <introduction></introduction>
    <experience></experience>
    <others></others>
  </div>
</template>

<script>
import heads from './components/Head.vue'
import introduction from './components/Introduction.vue'
import experience from './components/Experience.vue'
import others from './components/Others.vue'

export default {
  name: 'App',
  components: {
    introduction,
    heads,
    experience,
    others
  }
}
</script>

<style>
</style>
