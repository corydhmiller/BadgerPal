<template>
	<div class="app-wrapper">
		<h2>My User Info</h2>
		<div>
			<div v-if="!userInfoLoaded">{{userLoadingText}}</div>
			<div v-show="userInfoLoaded">
				<ul>
					<li>
						<strong>Name:</strong> {{user.name}}</li>
					<li>
						<strong>Email:</strong> {{user.email}}</li>
					<li>
						<strong>User id:</strong> {{user.uid}}</li>
				</ul>
			</div>
		</div>
		<h2>My Groups</h2>
		<div v-if="!groupsLoaded">{{groupLoadingText}}</div>
		<div v-show="!userHasGroups && groupsLoaded">
			<p>You don't have any accountability groups set up yet. Would you like to start one?</p>
			<button class="button button--green" v-on:click="createNewGroup">
				<span>Start Your First Group</span>
			</button>
		</div>
		<div v-show="userHasGroups">
			<ul>
				<li v-for="group in orderedGroups" v-bind:key="group['.key']">
					<div v-if="group.name">
						<strong>Group Name:</strong> {{group.name}}</div>
					<div v-else>{{group['.key']}}</div>
					<div class="group-options">
						<div class="option">
							<a href="#" @click="inviteFriend(group['.key'])">Invite Friend</a>
							</div>
						<div class="option">
							<a href="#" @click="editGroupName(group['.key'])">Edit Group Name</a>
							</div>
						<div class="option">
							<a href="#" @click="leaveGroup(group['.key'])">Leave Group</a>
						</div>
					</div>
				</li>
			</ul>
			<button class="button button--green" v-on:click="createNewGroup">
				<span>Add a Group</span>
			</button>
		</div>
	</div>
</template>

<script>
import totemize from 'totemize';
import firebase from 'firebase';
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
			userHasGroups: false,
			groupLoadingText: 'Loading groups...',
			userLoadingText: 'Loading user info...',
			orderMethod: 'createdAt'
		};
	},
	firestore() {
		return {};
	},
	watch: {
		groups: function() {
			this.userHasGroups = this.groups.length > 0;
		}
	},
	computed: {
		orderedGroups: function() {
			function compare(a, b) {
				if (a.createdAt < b.createdAt) return -1;
				if (a.createdAt > b.createdAt) return 1;
				return 0;
			}
			return _.orderBy(this.groups, this.orderMethod);
		}
	},
	methods: {
		createNewGroup() {
			const groupName = totemize();
			db
				.collection('groups')
				.add({})
				.then(newGroup => {
					db
						.collection('groups')
						.doc(newGroup.id)
						.set(
							{
								name: groupName,
								[this.currentUserUID]: true,
								createdAt: Date.now()
							},
							{ merge: true }
						);
				})
				.catch(err => {
					console.log(err.message);
				});
		},
		addUserToGroup(groupID) {
			db
				.collection('groups')
				.doc(groupID)
				.set({ [this.currentUserUID]: true })
				.catch(err => {
					console.log(err.message);
				});
		},
		leaveGroup(groupID) {
			db
				.collection('groups')
				.doc(groupID)
				.update({
					[this.currentUserUID]: firebase.firestore.FieldValue.delete()
				})
				.catch(err => {
					console.log(err.message);
				});
		}
	},
	mounted() {
		this.$binding('groups', db.collection('groups').where(this.currentUserUID, '==', true))
			.then(data => {
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
