<template>
	<main>
		<div class="container">
			<!--Section: Products v.3-->
			<section class="text-center mb-4">
				<item-search @handleSearchText="setSearchText"></item-search>

				<!--Grid row-->
				<div class="row fadeIn">
					<!--Grid column-->
					<div
						class="col-lg-3 col-md-6 mb-4"
						v-for="item in this.$store.state.items"
						:key="item.id"
					>
						<!--Card-->
						<div class="card">
							<!--Card image-->

							<div class="view overlay">
								<img :src="item.image" class="card-img-top" alt="" />
							</div>
							<!--Card image-->

							<!--Card content-->
							<div class="card-body text-center">
								<!--Category & Title-->

								<strong>
									<h5 class="dark-grey-text">
										<router-link
											:to="{ name: 'single-item', params: { id: item.id } }"
										>
											{{ item.name }}</router-link
										>
									</h5>
								</strong>

								<h6>
									<p class="grey-text">
										{{ item.description }}
										<span class="badge badge-pill danger-color">NEW</span>
									</p>
								</h6>
								<p>
									<i class="far fa-user"></i> {{ item.user.first_name }}
									{{ item.user.last_name }}
								</p>
								<h4 class="font-weight-bold blue-text">
									<strong>Price: {{ item.price }}$</strong>
								</h4>
							</div>
							<!--Card content-->
						</div>
						<!--Card-->
					</div>
					<!--Grid column-->

					<!--Grid column-->
				</div>
				<button
					class="btn btn-outline-primary"
					style="margin-bottom: 50px, width: 150px"
					v-if="currentSize <= numberOfItems"
					@click="loadMoreItems"
				>
					Load More
				</button>
			</section>
		</div>
	</main>
</template>

<script>
import itemSearch from "../components/itemSearch.vue";
import { mapActions, mapGetters } from "vuex";

export default {
	components: {
		itemSearch,
	},
	data() {
		return {
			searchText: "",
			currentSize: 8,
		};
	},
	computed: {
		...mapGetters(["items", "numberOfItems"]),
	},
	methods: {
		...mapActions(["getItems"]),

		loadMoreItems() {
			this.currentSize += 8;
			this.getItems({
				pagination: this.currentSize,
				searchText: this.searchText,
			});
		},

		setSearchText(search) {
			this.searchText = search;
			this.getItems({
				pagination: this.currentSize,
				searchText: this.searchText,
			});
		},
	},
	created() {
		console.log(this.items);
	},
	beforeRouteEnter(to, from, next) {
		next((vm) => {
			vm.getItems({ pagination: 8, searchText: "" });
		});
	},
};
</script>

<style>
.form-outline .form-control {
	border: solid 1px gray !important;
}
</style>
