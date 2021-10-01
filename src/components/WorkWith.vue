<template>
<div class="container">
  <div class="row">
    <h2>Some Brands We Work With</h2>
    <p>Quisque aliquet, libero consequat elementum convallis.</p>
    <div class="d-flex flex-wrap my-5">
       <img v-for="(partner,index) in partners" :key="index" class="col-4 col-lg-2 py-2 px-4" :src="require(`@/assets/images/${partner.path}`)" :alt="partner.alt">
    </div>
  </div>
</div>
</template>

<script>
import * as partner from '@/assets/data/image.js'
export default {
  name: 'WorkWith',
  data(){
    return {
      partners:partner.WorkWith,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
div{
  text-align: center;
  h2{
    font-weight: 700;
  }
}
</style>
