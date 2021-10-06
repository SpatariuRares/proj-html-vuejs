<template>
  <div class="container my-5">
    <div class="row">
        <div class="col-lg-6">
        <div v-for="(item,index) in relation" :key="index">
            <h2>{{item.title}}</h2>
            <p>{{item.text}}</p>
        </div>
      </div>
      <div class="d-flex flex-column col-lg-6">
        <div class="d-flex align-items-center p-4" v-for="(item,index) in relationicon" :key="index">
            <div class=" mx-3">
            <div class="icon d-flex align-items-center justify-content-center">
              <i class="fas fa-square orange"></i>
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
  name: 'Relation',
  data(){
    return {
      relation:text.relation,
      relationicon:text.relationIcon,
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/style/general.scss";

.icon{
  padding:20px;
  border: 1px solid $Ectasy;
  align-self: stretch;
  border-radius:20%;
  font-size:1.5rem;
}
</style>
