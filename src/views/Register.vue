<template>
	<div class="d-flex justify-content-center mt-5 pt-5">
		<form @submit.prevent="register">
			<!-- 2 column grid layout with text inputs for the first and last names -->
			<div class="row mb-4">
				<div class="col">
					<div class="form-outline">
						<input v-model= "credentials.first_name" type="text" id="first_name" class="form-control" />
						<label class="form-label" for="first_name">First name</label>
					</div>
				</div>
				<div class="col">
					<div class="form-outline">
						<input v-model= "credentials.last_name" type="text" id="last_name" class="form-control" />
						<label class="form-label" for="last_name">Last name</label>
					</div>
				</div>
			</div>

			<!-- Email input -->
			<div class="form-outline mb-4">
				<input v-model = "credentials.email" type="email" id="email" class="form-control" />
				<label class="form-label" for="email">Email address</label>
			</div>

			<!-- Password input -->
			<div class="form-outline mb-4">
				<input v-model = "credentials.password" type="password" id="password" class="form-control" />
				<label class="form-label" for="password">Password</label>
			</div>

      <div class="form-outline mb-4">
				<input v-model = "credentials.password_confirmation" type="password" id="password_confirmation" class="form-control" />
				<label class="form-label" for="password_confirmation">Confirm Password</label>
			</div>

			<!-- Submit button -->
			<button type="submit" class="btn btn-primary btn-block mb-4">
				Sign up
			</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			credentials: {
				email: "",
				password: "",
				password_confirmation: "",
				first_name: "",
				last_name: "",
			},
		};
	},
	methods: {
		async register() {
			try {
				await this.$store.dispatch("register", this.credentials);
				alert("user registrovan");
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>