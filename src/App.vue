<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
    <router-view/>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
export default {
  name: 'App',
  components: { AppNavbar }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('./assets/background-image.jpg');
  color: #454545;
  min-height: 100vh;
}
</style>
