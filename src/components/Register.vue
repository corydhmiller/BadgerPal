<template>
  <div class="register">
    <div class="flex flex--center flex--column">
      <h3>Create Your Account</h3>
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
      <button class="button button--yellow" v-on:click="submitRegistration">
        <span>Login</span>
      </button>
      <div class="message">{{message}}</div>
    </div>
  </div>
</template>

<script>
  import Firebase from 'firebase'
  import {db} from '../firebase'

  export default {
    name: 'Register',
    data() {
      return {
        name: 'Preffy',
        email: '',
        password: '',
        message: '',
        messageType: ''
      }
    },
    methods: {
      setNameInDatabase() {
        namesRef.push({
          name: this.name,
          edit: false
        })
      },
      setMessageContent(content) {
        this.message = content;
      },
      createNewUserInDatabase(user) {
        // This is a hack to sort out the issue described here:
        // https://github.com/firebase/firebase-js-sdk/issues/311
        const data = JSON.parse(JSON.stringify(user))
        db.collection('users').doc(data.uid).set(data)

      },
      submitRegistration() {
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
            this.createNewUserInDatabase(user)
            this.setMessageContent('Account created.')
            this.$router.replace('login')
          },
          (err) => {
            this.setMessageContent('Oops! ' + err.message);
          });
      }
    }
  }

</script>

<style scoped lang="scss">


</style>
