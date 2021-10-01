<template>
<div class="container my-5">
  <div class="row d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex col-lg-3 flex-column align-items-center">
      <div class="col-3">
        <img  :src="require(`@/assets/images/${contact.image}`)" :alt="contact.alt">
      </div>
      <div class="col d-flex flex-column text-center">
        <h6 class="m-0">{{contact.name}}</h6>
        <p class="m-0">{{contact.job}}</p>
      </div>
    </div>
    <div class="d-flex col justify-content-center">
      <h3>{{contact.targer}}</h3>
    </div>
    <div class="col-lg-3 text-center">
      <button class="bottone opac">
        <font-awesome-icon icon="phone-alt" class="orange"/>
        {{contact.number}}
      </button>
    </div>
  </div>
</div>
</template>

<script>
import * as contact from '@/assets/data/image.js'
export default {
  name: 'Contact',
  data(){
    return {
      contact:contact.contact,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.container{
  box-shadow: -1px 1px 2px $Gunsmoke;
  border-radius: 20px;
  padding: 20px 30px;
}
img{
  width:100%;
  border-radius: 50%;
  padding: 0;
  aspect-ratio: 1/1;
}
p{
  font-size:0.7em;
}
</style>
