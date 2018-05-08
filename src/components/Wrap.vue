<template>
  <div class="app-wrapper">
    <h2>Users</h2>
    <div>
      <article v-for="(location, idx) in locations" :key="idx">
        <h1>{{ location.name }}</h1>
      </article>
    </div>
    <div>
      <ul>
        <li v-for="user of users" v-bind:key="user['.key']">{{user.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'

export default {
  data () {
    return {
      users: [],
      locations: []
    }
  },
  firestore () {
    return{
      locations: db.collection('users')
    }
  },
  created() {

  }
}
</script>


<style scoped>

</style>
