<template>
  <div class="container" id="app">
    <navBar></navBar>
    <router-view/>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
export default {
	components: { navBar },
	methods: {
		
	}
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
