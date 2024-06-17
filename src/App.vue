<template>
  <MainContent msg="Welcome to Your Vue.js App"/>
</template>

<script>
import MainContent from './components/MainContent.vue'

export default {
  name: 'App',
  components: {
    MainContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
div,span,h1,h2,h3,ul,li {
  margin: 0;
  padding: 0;
}
</style>
