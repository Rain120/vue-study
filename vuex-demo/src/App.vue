<template>
  <div id="app">
    <recommend></recommend>
  </div>
</template>

<script>
import Recommend from 'components/recommend'
export default {
  name: 'App',
  components: {
    Recommend
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
