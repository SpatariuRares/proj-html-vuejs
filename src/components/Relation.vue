<template>
    <div class="container my-5">
    <div class="row">
        <div class="col-6">
        <div v-for="(item,index) in relation" :key="index">
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
        </div>
        </div>
        <div class="d-flex flex-column col-6">
        <div class="d-flex align-items-center p-4" v-for="(item,index) in relationicon" :key="index">
            <div class="col-2 mx-3">
            <div class="icon d-flex align-items-center justify-content-center">
                <font-awesome-icon icon="square-full" class="orange"/>  
            </div>
            </div>
            <div class="d-flex flex-column col-8">
            <h3>
                {{item.title}}
            </h3>
            <p>
                {{item.text}}
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>

<script>

import * as text from "@/assets/data/text.js"

export default {
  name: 'App',
  data(){
    return {
      relation:text.relation,
      relationicon:text.relationIcon,
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
@import "@/style/general.scss";

.icon{
  width: 100%;
  aspect-ratio: 1/1;
  border: 1px solid $Ectasy;
  align-self: stretch;
  border-radius:20%;
  font-size:1.5rem;
}
</style>
