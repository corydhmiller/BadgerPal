<template>
  <div class="app-wrapper">
    <h2>Users</h2>
    <div>
      <div v-if="!usersLoaded">{{userLoadingText}}</div>
      <ul>
        <li v-for="user of users" v-bind:key="user['.key']">
          <strong>{{user.name}}</strong><br />{{user.email}}
          <br />
          {{user.uid}}
        </li>
      </ul>
    </div>
    <h2>My Groups</h2>
    <div>
      <div v-if="!groupsLoaded">{{groupLoadingText}}</div>
      <ul>
        <li v-for="group of groups" v-bind:key="group['.key']">
          <strong>{{group['.key']}}</strong>
        </li>
      </ul>
    </div>
    <button class="button button--black" v-on:click="createNewGroup">
        <span>+ Add Group</span>
      </button>
      <button class="button button--black" v-on:click="addUserToGroup">
        <span>Add User to Group</span>
      </button>
  </div>
</template>

<script>
import { db } from '../firebase';

export default {
	data() {
		return {
			currentUserUID: this.$store.getters.getUser.uid,
			users: [],
			locations: [],
			groups: [],
			groupsLoaded: false,
			usersLoaded: false,
			groupLoadingText: 'Loading groups...',
			userLoadingText: 'Loading users...'
		};
	},
	firestore() {
		return {};
	},
	methods: {
		createNewGroup() {
			db
				.collection('groups')
				.add({})
				.then(newGroup => {
					console.log(newGroup.id);
					db
						.collection('groups')
						.doc(newGroup.id)
						.set(
							{
								[this.currentUserUID]: true
							},
							{ merge: true }
						);
				});
		},
		addUserToGroup(groupID) {
			db
				.collection('groups')
				.doc(groupID)
				.set({ [this.currentUserUID]: true });
		}
	},
	mounted() {
		this.$binding('groups', db.collection('groups').where(this.currentUserUID, '==', true))
			.then(() => {
				this.groupsLoaded = true;
			})
			.catch(err => {
				console.error(err);
			});
		this.$binding('users', db.collection('users'))
			.then(() => {
				this.usersLoaded = true;
			})
			.catch(err => {
				console.error(err);
			});
	}
};
</script>


<style scoped>

</style>
