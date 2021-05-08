<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Input Range</router-link> |
      <router-link to="/peoleList">People List</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    created() {
      this.$store.dispatch('getData');
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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

.btn {
  min-width: 70px;
  min-height: 50px;
  padding: 10px 20px;
  background-color: #56433D;

  border-radius: 25px;

  color: #F9C941;
  font-size: 0.9em;

  cursor: pointer;
}
</style>
