<template>
<div class="container my-5">
  <div class="row d-flex">
    <div class="col-4" v-for="(example,index) in trust" :key="index">
      <img :src="require(`@/assets/images/${example.image}`)" :alt="example.alt">
    </div>
  </div>
</div>
</template>

<script>
import * as Trust from '@/assets/data/image.js'
export default {
  name: 'Sontact',
  data(){
    return {
      trust:Trust.Trust,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";

</style>
