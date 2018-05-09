<template>
  <div class="app-wrapper">
    <h2>My User Info</h2>
    <div>
      <div v-if="!userInfoLoaded">{{userLoadingText}}</div>
      <div>
          <ul>
            <li><strong>Name:</strong> {{user.name}}</li>
            <li><strong>Email:</strong> {{user.email}}</li>
            <li><strong>User id:</strong> {{user.uid}}</li>
          </ul>
      </div>
    </div>
    <h2>My Groups</h2>
		<div v-show="!userHasGroups"><p>You don't have any accountability groups set up yet. Would you like to start one?</p>
		<button class="button button--black" v-on:click="createNewGroup">
        <span>+ Add Group</span>
      </button>
			</div>
    <div>
      <div v-if="!groupsLoaded">{{groupLoadingText}}</div>
      <ul>
        <li v-for="group of groups" v-bind:key="group['.key']">
          <strong>{{group['.key']}}</strong>
        </li>
      </ul>
    </div>
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
			user: '',
			locations: [],
			groups: [],
			groupsLoaded: false,
			userInfoLoaded: false,
			userHasGroups: true,
			groupLoadingText: 'Loading groups...',
			userLoadingText: 'Loading user info...'
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
				.set({[this.currentUserUID]: true});
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
		this.$binding('user', db.collection('users').doc(this.currentUserUID))
			.then(() => {
				this.userInfoLoaded = true;
			})
			.catch(err => {
				console.error(err);
			});
	}
};
</script>


<style scoped>

</style>
