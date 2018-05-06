<template>
  <div class="header">
    <div class="header-section">
      <div class="logo">BadgerPal</div>
    </div>
    <div class="header-section fill-space">

    </div>
    <div class="header-section">
      <div v-on:click="logout" v-if="loggedin">Logout</div>
      <div v-else><router-link to="login">Login</router-link></div>

    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      loggedin: false
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      },
      err => {
        console.log(err.message);
      })
    }
  },
  watchers: {

  }
}
</script>

<style lang="scss" scoped>
.header {
  background:#333;
  color:#fefefe;
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem;
  & ul {
    justify-self: flex-end;
  }
}

.logo {
  font-weight: 600;
}
</style>
