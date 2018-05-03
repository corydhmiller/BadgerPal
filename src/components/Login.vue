<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email" />
    <br />
    <input type="password" placeholder="Password" />
    <br />
    <button>Login</button>
    <p>Don't have an account yet? Create one</p>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
      }
    }
  }

</script>

<style scoped>
.login {
  text-align:center;
}
input {
  padding: 1rem;
  margin: 1rem;
  width:20%;
  font-size: 1rem;
}

button {
  width:20%;
  background: #8AC396;
  color:#f9f9f9;
  padding: 1rem;
  margin: 1rem;
  font-weight:600;
  border: none;
  border-radius: .2rem;
  font-size: 1rem;
}

</style>