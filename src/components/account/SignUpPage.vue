<template>
  <div class="content">
    <h1>Sign Up</h1>
    <p>Sign up for a more personalised experience, where you are able to maintain a 'Store Cupboard' of ingredients that you an include in your recipe searches</p>
    <form>
      <div>
        <label>First Name</label>
        <input type="text" v-model="firstName"/>
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" v-model="lastName"/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="email"/>
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="password"/>
      </div>
     <button type="button" v-on:click="register()">Sign Up</button>
    </form>
    <div>{{message}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUpPage',
  data: function () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    register: function () {
      const apiUrl = `${process.env.ROOT_API}/register`
      axios.post(apiUrl, {firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password}).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
