<template>
  <div class="container ">
    <div class="d-flex align-items-center justify-content-between header my-3">
      <img :src="require(`@/assets/images/${logo.link}`)" :alt="logo.alt">
      <ul class="d-none d-lg-flex m-0">
        <li v-for="(link,index) in links" :key="index" :class="link.active?'active':null" >
          {{link.text}} 
          <font-awesome-icon v-if="link.icon!=null" :icon="link.icon" />
        </li>
      </ul>
      <div class="d-none d-lg-flex align-items-center ps-3">
        <font-awesome-icon icon="phone-alt" class="orange"/>
        <p class="m-0 ps-2">(555) 802-1234</p>
      </div>
      <button class="bottone opac d-none d-lg-block">
        Free Quote
      </button>
      <button class="hamburgerMenu d-inline-block d-lg-none" @click="changeHamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div v-if="hamburger" class="text-center hamburger" :class="hamburger?'animation' :null">
      <ul class="d-block d-lg-none m-0">
      <li v-for="(link,index) in links" :key="index" class="d-flex justify-content-center">
        <div class="py-2" :class="link.active?'active':null" >
          {{link.text}} 
          <font-awesome-icon v-if="link.icon!=null" :icon="link.icon" />
        </div>
      </li>
      </ul>
      <div class="d-flex py-2 d-lg-none justify-content-center align-items-center ps-3">
        <font-awesome-icon icon="phone-alt" class="orange"/>
        <p class="m-0 ps-2">(555) 802-1234</p>
      </div>
      <button class="bottone opac d-lg-none py-2">
        Free Quote
      </button>
    </div>
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
      &.active,
      &:hover{
        color: $Ectasy;
        border-bottom: 2px solid $Ectasy
      }
    }
  }
}
.hamburger{
  height:0;
  ul{
    list-style: none;
    padding-left: 1rem;
    li{
      margin: 0 10px;
      padding-bottom: 5px;
      .active,
      div:hover{
        color: $Ectasy;
        border-bottom: 2px solid $Ectasy
      }
    }
  }
  &.animation{
    margin: 10px;
    height: 100%;
    animation: entrata 0.4s ;
  }
}


.hamburgerMenu{
  outline:0;
  border: 1px solid $Ectasy;
  background-color:rgba($Ectasy, 0.2);
  width:50px;
  border-radius: 5px;
  line-height:5px;
  padding: 5px;
  span{
    display: inline-block;
    width: 80%;
    height: 5px;
    background-color:rgba($Ectasy,1)
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
