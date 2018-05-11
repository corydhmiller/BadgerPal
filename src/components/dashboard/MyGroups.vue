<template>
	<div class="my-groups">
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
						<div class="option">Invite Friend</div>
						<div class="option">Edit Group Name</div>
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