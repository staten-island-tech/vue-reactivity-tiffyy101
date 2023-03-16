<template>
<div class="home">
  <h1 v-if="graduated">{{ student }}</h1>
  <h1 v-else>Not yet graduated"></h1>
  <ul>
    <li v-for="animal in animals" :key="animal">{{ animal }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data(){
    return{
      student:"WEEEE",
      graduated: true,
      animals: ["heeee", "neeeee", "beeeee"]
    }
  }
};
</script>
<style>
</style>
