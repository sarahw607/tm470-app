<template>
  <div id="app">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: { AppNavbar, AppHeader }
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
  background-color: #cfcfcd;
  color: #454545;
}
</style>
