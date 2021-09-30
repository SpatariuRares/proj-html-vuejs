<template>
  <div id="app">
    <!-- <font-awesome-icon icon="spinner" /> -->
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "@/style/general.scss";

</style>
