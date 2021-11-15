<template>
  <div>
    <h1>{{this.$store.state.activeUser.first_name}} {{this.$store.state.activeUser.last_name}}</h1>

	<div class="d-flex justify-content-center mt-5 pt-5">
		<form method="PUT" @submit.prevent="handleUpdateUser">
			<h1>Change profile</h1>
			<!-- 2 column grid layout with text inputs for the first and last names -->
			<div class="row mb-4">
				<div class="col">
					<div class="form-outline">
						<input
							v-model="credentials.first_name"
							type="text"
							id="first_name"
							class="form-control"
						/>
						<label class="form-label" for="first_name" v-if="!credentials.first_name">First name</label>
					</div>
				</div>
				<div class="col">
					<div class="form-outline">
						<input
							v-model="credentials.last_name"
							type="text"
							id="last_name"
							class="form-control"
						/>
						<label class="form-label" for="last_name" v-if="!credentials.last_name" >Last name</label>
					</div>
				</div>
			</div>

			<!-- Email input -->
			<div class="form-outline mb-4">
				<input
					v-model="credentials.email"
					type="email"
					id="email"
					class="form-control"
				/>
				<label class="form-label" for="email" v-if="!credentials.email">Email address</label>
			</div>

			<!-- Password input -->
			<div class="form-outline mb-4">
				<input
					v-model="credentials.password"
					type="password"
					id="password"
					class="form-control"
					autocomplete="off"
				/>
				<label class="form-label" for="password" v-if="!credentials.password">Password</label>
			</div>

			<div class="form-outline mb-4">
				<input
					v-model="credentials.password_confirmation"
					type="password"
					id="password_confirmation"
					class="form-control"
					autocomplete="off"
				/>
				<label class="form-label" for="password_confirmation"
					v-if="!credentials.password_confirmation" >Confirm Password</label
				>
			</div>

			<!-- Submit button -->
			<button type="submit" class="btn btn-primary btn-block mb-4">
				Update Profile
			</button>
		</form>
	</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	data() {
		return {
			credentials: {
        user_id: this.$store.state.activeUser.id,
				email: "",
				password: "",
				password_confirmation: "",
				first_name: "",
				last_name: "",
			},
		};
	},
	computed: {
		...mapGetters(['activeUser']),
		
	},
methods: {
  ...mapActions(['getActiveUser', 'updateUser']),
  async handleUpdateUser() {
			try {
				await this.updateUser(this.credentials);
			} catch (error) {
				console.log(error);
			}
  },

},
created() {
	this.credentials = this.$store.state.activeUser;
},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.getActiveUser();
		});

  }
}
</script>

<style>

</style>