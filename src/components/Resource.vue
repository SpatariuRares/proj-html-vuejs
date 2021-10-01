<template>
<div class="container">
  <div class="d-flex flex-column py-4 flex-lg-row justify-content-between">
    <h2 class="my-4 col-12 col-lg-6">Marketing Tips And Tricks How to Write Stunning Blog Techniques to Reduce For Your Website Post Titles Facebook Ads Spend </h2>
    <div class=" d-lg-flex flex-column justify-content-center">
      <button class="bottone">Read More Case Studies</button>
    </div>
  </div>
  <div class="row d-flex">
    <div class="col-12 col-lg-4 d-flex flex-column justify-content-between" v-for="(example,index) in resource" :key="index">
      <div class="position-relative">
        <img :src="require(`@/assets/images/${example.image}`)" :alt="example.alt">
        <div class="overlay-orange"></div>
      </div>
      <h3 class="my-4">{{example.text}}</h3>
    </div>
  </div>
</div>
</template>

<script>
import * as image from "@/assets/data/image.js";
export default {
  name: 'Resource',
  data(){
    return {
      resource:image.Resource,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
img{
  width: 100%;
}
</style>
