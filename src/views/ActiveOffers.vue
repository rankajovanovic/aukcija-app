<template>
	<div>
		<h1 class="mb-5">Active bids</h1>
		<table class="table" v-if="!!bids">
			<thead>
				<tr>
					<th scope="col">Item name</th>
					<th scope="col">Item bid price</th>
					<th scope="col">Item end time</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="bid in bids" :key="bid.id">
					<td>
						<router-link
							:to="{ name: 'single-item', params: { id: bid.item.id } }"
						>
							{{ bid.item.name }}</router-link
						>
					</td>
					<td>{{ bid.price }}</td>
					<td>{{ bid.item.end_time }}</td>
					<td>
						<button
							class="btn btn-outline-danger btn-lg btn-floating"
							@click.prevent="handleDelete(bid.id)"
						>
							<i class="fas fa-trash-alt"></i>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import bidService from "../services/BidService";
export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(["bids"]),
		...mapActions(["getBids", "deleteBid"]),
	},
	methods: {
		handleDelete(id) {
			bidService.deleteb(id);
		},
	},
	async created() {
		await this.getBids();
	},
};
</script>

<style>
</style>