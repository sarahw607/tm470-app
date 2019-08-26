<template>
  <div id="app">
    <app-navbar></app-navbar>
    <main class="container">
    <router-view/>
    </main>
    <footer><div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></footer>
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

footer{
  height: 75px;
  background-color: #9a879d;
  position: fixed;
  bottom:0;
  width: 100%;
}

header, main, footer {
    flex-shrink: 0;
}

</style>
