<template>
  <div class="content">
    <h1>Login </h1>
    <form>
      <div>
        <label>User name</label>
        <input type="text" v-model="username"/>
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="password"/>
      </div>
     <button type="button" v-on:click="login()">Login</button>
    </form>
    <p>{{message}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data: function () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login: function () {
      const apiUrl = `${process.env.ROOT_API}/login`
      axios.post(apiUrl, {email: this.username, password: this.password}).then(response => {
        if (response.data.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(response.data.token))
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
