<template>
<div id="nav">
    <router-link to="/"> <i class="fas fa-home"></i> Home</router-link> 
    <div v-if="isAuthenticated">
        <router-link to="/add"> Add Item </router-link> |
        <router-link to="/active-offers"> Active Offers </router-link> |
        <router-link to="/sold-items"> Sold Item </router-link> |
        <router-link to="/buy-history"> Buy History </router-link> |
        <router-link to="/profile"> <i class="fas fa-user-alt"></i> Profile </router-link> |
        <span  @click="handleLogout"> Logout </span> 
    </div>
    <div v-else>
        <router-link to="/login" > Login </router-link> |
        <router-link to="/register" > Register </router-link>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'navBar',
    computed: {
        ...mapGetters(['activeUser', 'isAuthenticated'])
    },
    methods: {
        ...mapActions(['logout']),
        async handleLogout() {
            await this.logout();
            this.$router.push('/login');
        }
    },
}
</script>

<style>

</style>