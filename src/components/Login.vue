<template>
  <div class="login">
    <div class="flex flex--center">
      <h3>Sign In</h3>
      <div class="styled-input">
        <input type="email" v-model="email" required />
        <label>Email</label>
        <span></span>
      </div>
      <div class="styled-input">
        <input type="password" v-model="password" required />
        <label>Password</label>
        <span></span>
      </div>
      <button class="button button--green button--shadow" v-on:click="submitLogin">Login &raquo;</button>
      <div class="message">{{message}}</div>
      <p>Don't have an account yet?
        <router-link to="/register">Create an account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    name: 'login',
    data() {
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


</style>
