<template>
	<div class="d-flex justify-content-center mt-5 pt-5">
		<form @submit.prevent="handleRegister">
			<h1>Register</h1>
			<!-- 2 column grid layout with text inputs for the first and last names -->
			<div class="row mb-4">
				<div class="col">
					<div class="form-outline">
						<input
							v-model="credentials.first_name"
							type="text"
							id="first_name"
							class="form-control"
							required 
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
							required
						/>
						<label class="form-label" for="last_name" v-if="!credentials.last_name">Last name</label>
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
					required
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
					:class="validation.password || 'is-invalid'"
				/>
				<label class="form-label" for="password" v-if="!credentials.password">Password</label>
				<div class="invalid-feedback">
					Pasword must have at least 8 characters and 1 need to be a number.
				</div>
			</div>

			<div class="form-outline mb-4">
				<input
					v-model="credentials.password_confirmation"
					type="password"
					id="password_confirmation"
					class="form-control"
					autocomplete="off"
					:class="validation.password_confirmation || 'is-invalid'" 				/>
				<label class="form-label" for="password_confirmation" v-if="!credentials.password_confirmation"
					>Confirm Password</label
				><div class="invalid-feedback">
					Confirm password must match password.
				</div>
				
			</div>

			<!-- Submit button -->
			<button type="submit" class="btn btn-primary btn-block mb-4">
				Sign up
			</button>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
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
			validation: {
				password: true,
				password_confirmation: true,
			}
		};
	},
	methods: {
		...mapActions(['register']),
		validate() {
			let errors = 0;
			const passwordRegex = /^(?=.*\d).+$/;
			if (this.credentials.password.length < 8 || !passwordRegex.test(this.credentials.password)) {
				this.validation.password = false;
				errors++;
			} else this.validation.password = true;
			if (!(this.credentials.password === this.credentials.password_confirmation)) {
				this.validation.password_confirmation = false;
				errors++;
			} else this.validation.password_confirmation = true;
			return !errors;
		},
		async handleRegister() {
			try {
				if (!this.validate()) return;
				await this.register(this.credentials);
				this.$router.push('/');
			} catch (error) {
				console.log('register', error);
			}
		},
	},
};
</script>

