<template>
  <div class="container item">
    <div class="row d-flex" :class="item.left?'flex-row-reverse':null">
      <div class="col-6">
        <img class="jumbo" :src="require(`@/assets/images/${item.svg}`)" alt="">
      </div>
      <div class="col-6 p-5">
        <p v-if="item.little!=null">{{item.little}}</p>
        <h2 class="title my-4">{{item.title}}</h2>
        <p class="text">{{item.text}}</p>
        <p v-if="item.work!=null">{{item.work}}</p>
        <button class="bottone" v-if="button">{{item.button}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Marketing',
  props:["item","button"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.item{
  .title{
    font-size:2em;
    font-weight: 600;
  }
  .text{
    font-size:1.3rem;
  }
  img{
    width: 100%;
  }
}
</style>
