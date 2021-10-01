<template>
<div class="container my-5">
  <h2 :class="textcenter?'text-center':null" class="my-4">Trusted by Leading Organisations</h2>
  <div class="row d-flex">
    <div class="col-4 d-flex flex-column justify-content-between" v-for="(example,index) in trust" :key="index">
      <div class="position-relative">
        <img :src="require(`@/assets/images/${example.image}`)" :alt="example.alt">
        <div class="overlay-orange"></div>
      </div>
      <h3 class="my-4">{{example.text}}</h3>
      <h2>{{example.number}}</h2>
      <p>{{example.detail}}</p>
    </div>
  </div>
  <div class="d-flex justify-content-center my-4">
    <button class="bottone">Read More Case Studies</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Trust',
  props:["textcenter","trust"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
img{
  width: 100%;
}
</style>
