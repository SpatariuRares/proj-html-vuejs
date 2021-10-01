<template>
  <div class=" container">
    <h3 class="text-center" >Awards</h3>
    <div class="row">
      <div class="col-6 col-lg-3 d-flex flex-column align-items-center justify-content-center" v-for="(item,index) in awards" :key="index">
        <img :src="require(`@/assets/images/${item.image}`)" :alt="item.alt">
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as image from '@/assets/data/image.js';

export default {
  name: 'Awards',
  data(){
    return {
      awards:image.Awards,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
img{
  width: 50%;
}

</style>
