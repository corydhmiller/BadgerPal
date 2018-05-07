<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  data () {
    return {
      loggedin: false
    }
  },
  components: {
    AppHeader
  },
  methods: {
    setUser: function() {
      this.$store.dispatch('setUser');
    }
  },
  created() {
    this.setUser();
  }
}
</script>

<style lang="scss">
@import 'sass/style'
</style>
