<template>
	<form class="input-group rounded mb-5"  @submit.prevent="handleSearchText">
		<input
			type="search"
      v-model="search"
			class="form-control rounded"
			placeholder="Search"
			aria-label="Search"
			aria-describedby="search-addon"
		/>
	<button type="submit" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>

	</form>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }   
    },
    methods: {
        handleSearchText() {
            this.$emit('handleSearchText', this.search)
        }
    }
}
</script>

<style>
</style>