<template>
  <div class="app-wrapper">
    <h2>Users</h2>
    <div>
      <ul>
        <li v-for="user of users" v-bind:key="user['.key']">{{user.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import firestore from '@firebase/firestore'
import {db} from '../firebase'

export default {
  data () {
    return {
      users: [],
      group: {},
      loggedin: false
    }
  },
  methods: {
    getUsers() {
      db.collection('users').get().then(query => {
        query.forEach(user => {
          this.users.push(user.data())
        })
      })
    }
  },
  firebase: {
  },
  created() {
    this.getUsers()
  }
}
</script>


<style scoped>

</style>
