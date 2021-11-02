<template>
	<div class="d-flex justify-content-center mt-5 pt-5">
		<form @submit.prevent="login">
			<!-- Email input -->
			<div class="form-outline mb-4">
				<input
					v-model="credentials.email"
					type="email"
					id="email"
					class="form-control"
				/>
				<label class="form-label" for="email">Email address</label>
			</div>

			<!-- Password input -->
			<div class="form-outline mb-4">
				<input
					v-model="credentials.password"
					type="password"
					id="password"
					class="form-control"
				/>
				<label class="form-label" for="password">Password</label>
			</div>

			<!-- Submit button -->
			<button type="submit" class="btn btn-primary btn-block mb-4">
				Sign in
			</button>

			<!-- Register buttons -->
			<div class="text-center">
				<p>Not a member? <a href="#!">Register</a></p>
			</div>
		</form>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Login",
	data() {
		return {
			credentials: {
				email: "",
				password: "",
			},
		};
	},
	computed: {
		...mapGetters(["activeUser"]),
	},
	methods: {
		async login() {
			try {
				await this.$store.dispatch("login", this.credentials);
				this.$router.push("/");
			} catch (error) {
				console.log(error);
				alert("Invalid credentials");
			}
		},
	},
};
</script>