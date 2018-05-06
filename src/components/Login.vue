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
  import Firebase from 'firebase'

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
        console.log(content);
      },
      submitLogin() {
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
          this.setMessageContent('You have successfully logged in.')
          this.$store.dispatch('setUser');
          this.$router.replace('app')
        },
        (err) => {
          this.setMessageContent('Oops! ' + err.message)
        }).catch((error) => {
          this.setMessageContent(`An error occured during the login process.`)
        })
      }
    }
  }

</script>

<style lang="scss" scoped>

.login {
  text-align:center;
}

</style>