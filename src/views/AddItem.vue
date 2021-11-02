<template>
	<div class="d-flex justify-content-center mt-5 pt-5">
		<form style="width: 500px" @submit.prevent="addItem">
			<h1>Add item</h1>
			<!-- 2 column grid layout with text inputs for the first and last names -->
			<div class="row mb-4">
				<div class="col">
					<div class="form-outline">
						<input
							v-model="itemData.name"
							type="text"
							id="name"
							class="form-control"
						/>
						<label class="form-label" for="name">Item name</label>
					</div>
				</div>
				<div class="col">
					<div class="form-outline">
						<input
							v-model="itemData.price"
							type="number"
							id="price"
							class="form-control"
						/>
						<label class="form-label" for="price">Item price</label>
					</div>
				</div>
			</div>

			<div class="form-outline row mb-4">
				<div class="col">
					<select
						class="browser-default custom-select form-control"
						v-model="itemData.payment"
					>
						<option selected>Select payment method:</option>
						<option value="card">Card</option>
						<option value="cash">Cash</option>
					</select>
				</div>
				<div class="col">
					<select
						class="browser-default custom-select form-control"
						v-model="itemData.delivery"
					>
						<option selected>Select delivery method:</option>
						<option value="regular">Regular</option>
						<option value="fast">Fast</option>
					</select>
				</div>
			</div>

			<!-- Message input -->
			<div class="form-outline mb-4">
				<textarea
					v-model="itemData.description"
					class="form-control"
					id="description"
					rows="4"
				></textarea>
				<label class="form-label" for="description">Item description</label>
			</div>

			<div
				class="form-outline mb-4 file-upload-wrapper"
				style="margin-left: -100px"
			>
				<label class="form-label" for="input-file-now">Add image: </label>
				<input type="file" id="input-file-now" class="file-upload" />
			</div>

			<!-- Submit button -->
			<button type="submit" class="btn btn-primary btn-block mb-4">
				Add item
			</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			itemData: {
				name: "",
				price: "",
				description: "",
				payment: "",
				delivery: "",
		//	user_id: this.$store.state.activeUser,
				user_id: "3",
				image: "",
			},
			errors: [],
		};
	},
	methods: {
		addItem() {
			try {
				console.log(this.itemData);
				this.$store.dispatch("addItem", this.itemData);
							this.$router.push("/");
			} catch (error) {
				this.errors = error;
			}
		},
	},
	created() {
		console.log(this.$store.state.activeUser);
	}
};
</script>

<style>
</style>