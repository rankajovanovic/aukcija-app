<template>
	<div class="d-flex justify-content-center mt-5 pt-5">
		<form @submit.prevent="handleLogin">
			<!-- Email input -->
			<div class="form-outline mb-4">
				<input
					v-model="credentials.email"
					type="email"
					id="email"
					class="form-control"
					:class="validation || 'is-invalid'"
				/>
				<label class="form-label" for="email" v-if="!credentials.email"
					>Email address</label
				>
			</div>

			<!-- Password input -->
			<div class="form-outline mb-4">
				<input
					v-model="credentials.password"
					type="password"
					id="password"
					class="form-control"
					autocomplete="off"
					:class="validation || 'is-invalid'"
				/>
				<label class="form-label" for="password" v-if="!credentials.password"
					>Password</label
				>
				<div class="invalid-feedback">Wrong email or password</div>
			</div>

			<!-- Submit button -->
			<button type="submit" class="btn btn-primary btn-block mb-4">
				Sign in
			</button>

			<!-- Register buttons -->
			<div class="text-center">
				<p>Not a member?<router-link to="/register"> Register </router-link></p>
			</div>
		</form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	name: "Login",
	data() {
		return {
			credentials: {
				email: "",
				password: "",
			},
			validation: true,
		};
	},
	computed: {
		...mapGetters(["activeUser"]),
	},
	methods: {
		...mapActions(["login"]),
		async handleLogin() {
			try {
				this.validation = true;
				await this.login(this.credentials);
				this.$router.push("/");
			} catch (error) {
				this.validation = false;
			}
		},
	},
};
</script>