<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <button v-on:click="submitLogin">Login &raquo;</button>
    <div class="message">{{message}}</div>
    <p>Don't have an account yet? <router-link to="/register">Create an account</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data () {
      return {
        email: '',
        password: '',
        message: ''
      }
    },
    methods: {
      setMessageContent(content) {
        this.message = content
      },
      submitLogin() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
          this.setMessageContent('You have successfully logged in.')
          this.$router.replace('hello')
        },
        (err) => {
          this.setMessageContent('Oops! ' + err.message)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>

.login {
  text-align:center;
}
input {
  padding: 1rem;
  margin: 1rem;
  width:20%;
  font-size: 1rem;
}

</style>