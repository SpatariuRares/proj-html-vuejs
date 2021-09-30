<template>
  <div id="app">
    <!-- <font-awesome-icon icon="spinner" /> -->
    <Header />
    <Jumbo/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Jumbo from './components/Jumbo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Jumbo
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "@/style/general.scss";

</style>
