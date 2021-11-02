<template>
 <div id="nav">
      <router-link to="/"> <i class="fas fa-home"></i> Home</router-link> 
<div v-if="isAuthenticated">
    <router-link to="/add"> Add Item </router-link> |
    <span  @click="handleLogout"> Logout </span> |
    <span class=""> <i class="fas fa-user-alt"></i> {{activeUser.first_name}}  {{activeUser.last_name}} </span>
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
    }
}
</script>

<style>

</style>