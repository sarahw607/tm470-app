<template>
  <nav>
    <ul class="menu">
      <li class="toggle" v-on:click="toggleMenuIcon()">
        <a href="#">
          <img
            v-bind:class="{ hidden: !showMenu }"
            class="icon"
            src="@/assets/img/close-button.svg"
          />
          <img v-bind:class="{ hidden: showMenu }" class="icon" src="@/assets/img/menu-button.svg" />
        </a>
      </li>
      <div v-bind:class="{ hidden: !showMenu }" class="menu-content">
        <router-link to="/" tag="li" class="item">
          <a>Search</a>
        </router-link>
        <router-link to="/cupboard" tag="li" class="item">
          <a>Store Cupboard</a>
        </router-link>
        <router-link to="/safety" tag="li" class="item">
          <a>Food Safety</a>
        </router-link>
        <span class="last">
          <router-link to="/login" tag="li" class="item">
            <a>Log In</a>
          </router-link>
          <router-link to="/signup" tag="li" class="item">
            <a>Sign Up</a>
          </router-link>
        </span>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: function () {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenuIcon: function () {
      this.showMenu = !this.showMenu
    }
  }
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
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.menu li {
  padding: 15px 5px;
  white-space: nowrap;
}

.active {
  background-color: #ae8ca3;
}

.icon {
  height: 20px;
  width: 20px;
}

.toggle {
  margin-left: auto;
  display: none;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .menu {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .toggle {
    display: block;
  }

  .item {
    width: 100%;
  }
  .hidden {
    display: none;
  }
}
</style>
