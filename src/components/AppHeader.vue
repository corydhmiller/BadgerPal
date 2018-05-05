<template>
  <div class="header">
    <div class="logo">BadgerPal</div>
    <ul>
      <li>Sign Out</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background:#333;
  color:#fefefe;
  display:flex;
  flex-direction: row;
  align-items: center;
  padding: .5rem;
  & ul {
    justify-self: flex-end;
  }
}
.logo {
  font-weight: 600;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  margin:0;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
