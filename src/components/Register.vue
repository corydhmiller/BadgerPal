<template>
  <div class="login">
    <h3>Create Your Account</h3>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <button v-on:click="submitRegistration">Sign Up &raquo;</button>
    <br />
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    name: 'Register',
    data () {
      return {
        email: '',
        password: '',
        message: '',
        messageType: ''
      }
    },
    methods: {
      setMessageContent(content) {
        this.message = content;
      },
      submitRegistration() {
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
          this.setMessageContent('Account created.');
        },
        (err) => {
          this.setMessageContent('Oops! ' + err.message);
        });
      }
    }
  }

</script>

<style scoped lang="scss">

.signup {
  text-align:center;
}
</style>