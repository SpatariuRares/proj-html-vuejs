<template>
  <div class="container item">
    <div class="row d-flex" :class="item.left?'flex-row-reverse':null">
      <div class="col-6">
        <img class="jumbo" :src="require(`@/assets/images/${item.svg}`)" alt="">
      </div>
      <div class="col-6 p-5">
        <p>{{item.little}}</p>
        <h2 class="title my-4">{{item.title}}</h2>
        <p>{{item.text}}</p>
        <button class="bottone">Get a Consultation</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marketing',
  props:["item"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.item{
  font-size:1.5rem;
  .title{
    font-size:1.5em;
    font-weight: 600;
  }
}
</style>
