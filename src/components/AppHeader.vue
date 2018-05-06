<template>
  <div class="header">
    <div class="header-section">
      <div class="logo">BadgerPal</div>
    </div>
    <div class="header-section fill-space">

    </div>
    <div class="header-section">
      <div v-on:click="logout" v-if="user">
        <router-link to="login">Logout</router-link>
      </div>
      <div v-if="!user">
        <router-link to="login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  data () {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logout() {
      Firebase.auth()
      .signOut()
      .then(() => {
        this.$router.replace('login')
        this.$store.dispatch('setUser');
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
