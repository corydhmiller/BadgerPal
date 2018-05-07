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
  import {namesRef} from '../firebase'

  export default {
    name: 'Register',
    data () {
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
        namesRef.push({name: this.name, edit: false})
      },
      setMessageContent(content) {
        this.message = content;
      },
      submitRegistration() {
        Firebase.database().ref('users/qprdu5i1u').set({
          email: this.email,
        });
        Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
          Firebase.firestore().collection('users').doc(user.uid).set(user)
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