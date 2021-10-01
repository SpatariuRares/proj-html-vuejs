<template>
<div class="jumbo main">
  <div class="opacity">
    <div class="container text">
      <div class="row">
        <div class="col-12 col-lg-6 px-5 descrizione">
          <h2>
            {{text.title}}
          </h2>
          <h4 class="py-3">
           {{text.text}}
          </h4>
          <hr class="col-3">
          <h5>
            {{text.cit}}
          </h5>
          <p class="person mt-4 mb-0">{{text.person}}</p>
          <p class="job">{{text.job}}</p>
        </div>
        <Form
        class="col-12 col-lg-6"
        :avatar="avatar"
        :icon="icon"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Form from '@/components/Form.vue';
import * as text from "@/assets/data/text.js"
export default {
  name: 'Jumbo',
  components:{
    Form,
  },
  props:["jumbo","avatar","icon"],
  data(){
    return{
      text:text.jumboMain
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";

.main{
  background-color: $Black;
  padding: 50px;
}
.text{
  color: $White;
  .descrizione{
    h4{
      font-weight: 400;
    }
    h5{
      font-weight:300;
      font-style: italic;
    }
    .person{
      font-weight:600;
    }
    .job{
      font-weight:300;
      font-size: 0.9rem;
    }
  }
}
</style>
