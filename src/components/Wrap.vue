<template>
  <div class="app-wrapper">
    <h2>Users</h2>
    <div class="user" v-for="group of group">{{group.users}}</div>
  </div>
</template>

<script>
import {db} from '../firebase';

export default {
  data () {
    return {
      group: {},
      loggedin: false
    }
  },
  firebase: {
    users: {
      source: db.ref('group'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  }
}
</script>


<style scoped>

</style>
