<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/fashion">Fashion</router-link> |
    <router-link to="/restaurant">Restaurant</router-link> |
    <router-link to="/grade">Grade</router-link> |
    <router-link to="/forStu">ForStu</router-link> |
    <router-link to="/comp">Component</router-link>  |
    <router-link to="/axios">Axios</router-link> 
  <router-view/>
  </nav>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2C3E50;
}
nav a.router-link-exact-active {
  color: #42B983;
}
</style>









