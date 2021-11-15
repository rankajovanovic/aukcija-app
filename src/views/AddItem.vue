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

			<div class="form-outline mb-4">
				<input class="form-control" id="url" type="text" v-model="itemData.image" />				
				<label class="form-label" for="url">Image url</label>
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
				user_id: this.$store.state.activeUser.__ob__.dep.id,
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
		/*
      Adds url to our images if
      the integrity check passes
    */
		handleFromUrl(url = null) {
			this.verifyUrlIntegrity(url || this.url)
				.then(() => {
					this.itemData.image = this.url;
					console.log(this.itemData.image);
					this.url = null;
				})
				.catch((e) => {
					this.url = null;
					alert("Could not load image." + e);
				});
		},
		/*
      Loads the url into an Image object
      to do lite integrity check
    */
		verifyUrlIntegrity(url) {
			// src @jfriend00
			// https://stackoverflow.com/questions/9714525/javascript-image-url-verify
			return new Promise(function (resolve, reject) {
				const timeout = 5000;
				let timer,
					img = new Image();
				img.onerror = img.onabort = function (e) {
					clearTimeout(timer);
					reject(e);
				};
				img.onload = function () {
					clearTimeout(timer);
					resolve("success");
				};
				timer = setTimeout(function () {
					// reset .src to invalid URL so it stops previous
					// loading, but doesn't trigger new load
					img.src = null;
					reject("timeout");
				}, timeout);
				img.src = url;
			});
		},

	},
	created() {
		console.log(this.$store.state.activeUser);
	}
};
</script>

<style>

</style>