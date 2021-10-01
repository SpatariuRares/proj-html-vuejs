<template>
  <div class="container ">
    <nav class="navbar navbar-expand-lg navbar-light header">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img :src="require(`@/assets/images/${logo.link}`)" :alt="logo.alt"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(link,index) in links" :key="index" class="text-center" >
              <div class="d-inline-block" :class="link.active?'active':null">
                {{link.text}} 
                <font-awesome-icon v-if="link.icon!=null" :icon="link.icon" />
              </div>
            </li>
          </ul>
          <div class="d-none d-lg-flex align-items-center p-3">
            <font-awesome-icon icon="phone-alt" class="orange"/>
            <p class="m-0 ps-2">(555) 802-1234</p>
          </div>
        <form class="d-flex">
          <button class="bottone opac d-none d-lg-block">
            Free Quote
          </button>
        </form>
      </div>
    </div>
  </nav>
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
        hamburger:false,
      }
  },
  methods:{
    changeHamburger(){
      this.hamburger =!this.hamburger
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.header {
  ul{
    list-style: none;
    padding-left: 1rem;
    li{
      margin: 0 10px;
      padding-bottom: 5px;
      div{
        &.active,
        &:hover{
          color: $Ectasy;
          border-bottom: 2px solid $Ectasy
        }
      }
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
