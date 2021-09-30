<template>
  <div id="app">
    <!-- <font-awesome-icon icon="spinner" /> -->
    <Header />
    <Jumbo/>
    <div class="marketing">
      <Marketing v-for="(item,index) in market" :key="index"
      :item="item"/>
    </div>
    <WorkWith/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Jumbo from './components/Jumbo.vue';
import Marketing from './components/Marketing.vue';
import WorkWith from './components/WorkWith.vue';
import Contact from './components/Contact.vue';
import * as image from "@/assets/data/image.js"

export default {
  name: 'App',
  components: {
    Header,
    Jumbo,
    Marketing,
    WorkWith,
    Contact,
  },
  data(){
    return {
      market:image.Market,
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "@/style/general.scss";
.marketing{
  margin: 150px 0;
}
</style>
