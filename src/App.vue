<template>
  <div id="app">
    <site-header></site-header>
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Navbar, SiteHeader }
};
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
