<template>
  <div id="app">
    <h1>BadgerPal</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$green: #8AC396;

body, html {
  font-size: 18px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  width:20%;
  background: $green;
  color:#f9f9f9;
  padding: 1rem;
  margin: 1rem;
  font-weight:600;
  border: none;
  border-radius: .2rem;
  font-size: 1rem;
  box-shadow: 3px 3px 0 0 darken($green, 10%)
}

</style>
