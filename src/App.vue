<template>
  <div id="app">
    <!-- <font-awesome-icon icon="spinner" /> -->
    <Header />
    <Jumbo
    :jumbo="jumbo"
    :avatar="avatar"
    :icon="icon"
    :position="true"
    :quadratini="true"/>
    <div class="marketing">
      <Marketing v-for="(item,index) in market" :key="index"
      :item="item"
      :button="true"/>
    </div>
    <WorkWith/>
    <Contact/>
    <Trust
    :trust="trust"/>
    <div class="py-5 b-GrayNurse">
      <Marketing 
      :item="work"
      :button="true"/>
    </div>
    <Marketing 
    class="my-5"
      :item="kate"
      :button="false"/>
    <div class="b-GrayNurse">
      <Resource/>
    </div>
    <Jumbo
    :jumbo="jumbo"
    :avatar="avatar"
    :icon="icon"
    :position="false"
    :quadratini="false"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Jumbo from './components/Jumbo.vue';
import Marketing from './components/Marketing.vue';
import WorkWith from './components/WorkWith.vue';
import Contact from './components/Contact.vue';
import Trust from './components/Trust.vue';
import Resource from './components/Resource.vue';
import * as image from "@/assets/data/image.js"

export default {
  name: 'App',
  components: {
    Header,
    Jumbo,
    Marketing,
    WorkWith,
    Contact,
    Trust,
    Resource
  },
  data(){
    return {
      market:image.Market,
      trust:image.Trust,
      work:image.work,
      kate:image.kate,
      jumbo: image.jumboImage,
      avatar: image.jumboAvatar,
      icon:image.jumboicon,
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
