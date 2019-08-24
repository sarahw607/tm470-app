<template>
  <nav>
    <ul class="menu">
      <router-link to="/" tag="li" class="item">
        <a>Search</a>
      </router-link>
      <router-link to="/cupboard" tag="li" class="item">
        <a>Store Cupboard</a>
      </router-link>
      <router-link to="/safety" tag="li" class="item">
        <a>Food Safety</a>
      </router-link>
            <router-link to="/login" tag="li" class="item">
        <a>Log In</a>
      </router-link>
            <router-link to="/signup" tag="li" class="item">
        <a>Sign Up</a>
      </router-link>
     <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
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
  background-color: #9a879d;
}

ul {
  list-style-type: none;
}

li {
  display: inline-block;
  height: 100%;
}
.menu{
  display: flex;
  flex-direction: row;
}

.menu li {
    font-size: 16px;
    padding: 15px 5px;
    white-space: nowrap;
}

.active{
  background-color: #ae8ca3
}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
  .menu{
  flex-direction: column;
  align-items: center;
  }

}
</style>
