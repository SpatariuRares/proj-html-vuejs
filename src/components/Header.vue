<template>
  <div class="container d-flex align-items-center justify-content-between header my-3">
    <img :src="require(`@/assets/images/${logo.link}`)" :alt="logo.alt">
    <ul class="d-flex m-0">
      <li v-for="(link,index) in links" :key="index" :class="link.active?'active':null" >
        {{link.text}} 
        <font-awesome-icon v-if="link.icon!=null" :icon="link.icon" />
      </li>
    </ul>
    <div class="d-flex align-items-center ps-3">
      <font-awesome-icon icon="phone-alt" class="orange"/>
      <p class="m-0 ps-2">(555) 802-1234</p>
    </div>
    <button class="bottone opac">
      Free Quote
    </button>
  </div>
</template>

<script>
import * as dataHeader from '@/assets/data/link.js';
import * as logo from '@/assets/data/image.js'
export default {
  name: 'Header',
  data(){
    return {
        links:dataHeader.headerlink,
        logo:logo.logoImage,
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
ul{
  list-style: none;
  padding-left: 1rem;
  li{
    margin: 0 10px;
    padding-bottom: 5px;
    &.active,
    &:hover{
      color: $Ectasy;
      border-bottom: 2px solid $Ectasy
    }
  }
}
.bottone{
  padding: 10px 30px;
}
.opac:hover{
  background-color:$Ectasy;
  color: $White;
}
</style>
