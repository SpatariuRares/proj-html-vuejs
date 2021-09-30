<template>
<div class="container my-5">
  <div class="row d-flex">
    <div class="d-flex col-3">
      <div class="col-3">
        <img  :src="require(`@/assets/images/${contact.image}`)" :alt="contact.alt">
      </div>
      <div class="col d-flex flex-column">
        <h6 class="m-0">{{contact.name}}</h6>
        <p class="m-0">{{contact.job}}</p>
      </div>
    </div>
    <div class="d-flex col">
      <h3>{{contact.targer}}</h3>
    </div>
    <div class="col-3">
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
  name: 'Sontact',
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
  width:50px;
  border-radius: 50%;
  padding: 0;
  aspect-ratio: 1/1;
}
p{
  font-size:0.7em;
}
</style>
