<template>
  <div class="login">
    <div class="flex flex--center flex--column">
      <h3>Sign In</h3>
      <div class="input">
        <input type="text" v-model="email" required />
        <label>Email</label>
        <span></span>
      </div>
      <div class="input">
        <input type="password" v-model="password" required />
        <label>Password</label>
        <span></span>
      </div>
      <button class="button button--black" v-on:click="submitLogin">
        <span>Login</span>
      </button>
      <div class="message message--error" v-if="showMessage">{{message}}</div>
      <!-- <p>Don't have an account yet?
        <router-link to="/register">Create an account</router-link>
      </p> -->
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
        message: '',
        showMessage: false
      }
    },
    methods: {
      setMessageContent(content) {
        this.message = content
        this.showMessage = true
        console.log(content)
      },
      submitLogin() {
        Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
            this.$store.dispatch('setUser');
            this.$router.replace('app')
          },
          (err) => {
            this.setMessageContent('Oops! ' + err.message)
          }).catch((error) => {
          this.setMessageContent(`An error occured during the login process.`)
        })
      }
    },
    watchers: {
      removeMessage() {
      }
    }
  }

</script>

<style lang="scss" scoped>


</style>
