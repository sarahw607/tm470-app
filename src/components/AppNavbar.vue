<template>
  <nav>
    <ul>
      <router-link to="/" tag="li">
        <a>Search</a>
      </router-link>
      <router-link to="/cupboard" tag="li">
        <a to="/cupboard">Store Cupboard</a>
      </router-link>
      <li>
        <a href="#">Food Advice</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  width: 100%;
  background-color: #9a879d;
  height: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  height: 100%;
}
li {
  display: inline-block;
  height: 100%;
}

a {
  height: 100%;
  display: inline-block;
  padding: 15px 20px;
}
.active {
  background-color: #ae8ca3;
}
</style>
