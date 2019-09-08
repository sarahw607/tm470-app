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
        <router-link to="/cupboard" tag="li" class="item" v-if="isLoggedIn()">
          <a>Store Cupboard</a>
        </router-link>
        <router-link to="/safety" tag="li" class="item">
          <a>Food Safety</a>
        </router-link>
      </div>
              <div class="last" v-if="!isLoggedIn()" v-bind:class="{ hidden: !showMenu }">
          <router-link to="/login" tag="li" class="item">
            <a>Log In</a>
          </router-link>
          <router-link to="/signup" tag="li" class="item">
            <a>Sign Up</a>
          </router-link>
        </div>
        <div>
          <li class="item" v-if="isLoggedIn()" v-on:click="logOut()" v-bind:class="{ hidden: !showMenu }">
            <a v-on:click="logOut()">Sign Out</a>
          </li>
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
    },
    isLoggedIn: function () {
      return localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null
    },
    logOut: function () {
      console.log('log out')
      localStorage.removeItem('user')
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
}

.menu-content {
  flex: 1;
  text-align: center;
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

.last{
  margin-left: auto;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .menu {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .menu-content {
    width: 100%
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
