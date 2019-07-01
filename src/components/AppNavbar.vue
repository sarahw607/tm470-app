<template>
  <nav>
    <ul>
      <li>
        <a :to="{name: 'Home'}">Search</a>
      </li>
      <li>
        <a href="#">Store Cupboard</a>
      </li>
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
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
