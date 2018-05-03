<template>
  <div class="login">
    <h3>Create Your Account</h3>
    <input type="text" placeholder="Email" />
    <br />
    <input type="password" placeholder="Password" />
    <br />
    <button>Sign Up &raquo;</button>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
      }
    }
  }

</script>

<style scoped lang="scss">

.signup {
  text-align:center;
}

input {
  padding: 1rem;
  margin: 1rem;
  width:20%;
  font-size: 1rem;
}

</style>