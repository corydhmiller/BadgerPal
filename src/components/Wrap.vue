<template>
  <div class="app-wrapper">
    <h2>Users</h2>
    <div>
      <ul>
        <li v-for="user of users" v-bind:key="user['.key']">
          <strong>{{user.name}}</strong><br />{{user.email}}
          <br />
          {{user.uid}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
	data() {
		return {
			users: [],
			locations: []
		};
	},
	firestore() {
		return {
			users: db.collection('users')
		};
	}
};
</script>


<style scoped>

</style>
