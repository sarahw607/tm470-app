<template>
  <div id="app">
    <app-navbar></app-navbar>
    <main class="container">
    <router-view/>
    </main>
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

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('./assets/background-image.jpg');
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: flex-start;
}

header, nav, footer {
    flex: 1 100%;
}
</style>
