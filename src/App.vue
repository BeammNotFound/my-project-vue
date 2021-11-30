<template>
  <div id="main">
    <heads id="headBox"></heads>
    <introduction id="introductionBox"></introduction>
    <experience id="experienceBox"></experience>
    <others id="othersBox"></others>
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
console.log(" __ __  ___     ___  ___  ___  ___  _ __\n" +
    "|  \\  \\| . \\   / __>|_ _|| . || . \\| / /\n" +
    "|     ||   / _ \\__ \\ | | |   ||   /|  \\\n" +
    "|_|_|_||_\\_\\<_><___/ |_| |_|_||_\\_\\|_\\_\\\n");

function showTop() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  // console.log(scrollTop)
  if (scrollTop > 200) {
    document.getElementById("headBox").style.marginBottom = '0';
    document.getElementById("introductionBox").style.display = "block";
  }
  if (scrollTop > 1420) {
    document.getElementById("introductionBox").style.marginBottom = '0';
    document.getElementById("experienceBox").style.display = "block";
  }
}
window.onscroll  = showTop
</script>

<style>
#headBox {
  margin-bottom: 100vh;
}
#introductionBox {
  display: none;
  margin-bottom: 100vh;
}
#experienceBox {
  display: none;
  margin-bottom: 100vh;
}
#othersBox {
  display: none;
}
</style>
