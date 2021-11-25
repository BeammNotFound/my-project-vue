<template>
  <div>
    <heads></heads>
    <introduction></introduction>
<!--    <experience></experience>-->
  </div>
</template>

<script>
import heads from './components/Head.vue'
import introduction from './components/Introduction.vue'
// import experience from './components/Experience.vue'

export default {
  name: 'App',
  components: {
    introduction,
    heads,
    // experience
  }
}
</script>

<style>
</style>
