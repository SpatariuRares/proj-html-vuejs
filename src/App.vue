<template>
  <div id="app">
    <Header />
    <Jumbo
    :jumbo="jumbo"
    :avatar="avatar"
    :icon="icon"
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
      <Relation/>
      <Awards/>
    </div>
    <Marketing 
    class="my-5"
      :item="kate"
      :button="false"/>
    <div class="b-GrayNurse">
      <Resource/>
    </div>
    <JumboMain
    :jumbo="jumbo"
    :avatar="avatar"
    :icon="icon"/>
    <Footer/>
    <Chat/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Jumbo from './components/Jumbo.vue';
import JumboMain from './components/JumboMain.vue';
import Marketing from './components/Marketing.vue';
import WorkWith from './components/WorkWith.vue';
import Contact from './components/Contact.vue';
import Trust from './components/Trust.vue';
import Footer from './components/Footer.vue';
import Resource from './components/Resource.vue';
import Chat from './components/Chat.vue';
import Awards from './components/Awards.vue';
import Relation from './components/Relation.vue';
import * as image from "@/assets/data/image.js";
import * as text from "@/assets/data/text.js"

export default {
  name: 'App',
  components: {
    Header,
    Jumbo,
    JumboMain,
    Marketing,
    WorkWith,
    Contact,
    Trust,
    Resource,
    Footer,
    Chat,
    Awards,
    Relation
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
      relation:text.relation,
      relationicon:text.relationIcon,
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
