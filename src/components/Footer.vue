<template>
<div class="container my-5">
  <div class="row">
    <div class="col-12 col-lg-4">
      <h4>
        {{text.title}}
      </h4>
      <ul class="d-flex px-0 py-3 list-unstyled">
        <li class="px-2" v-for="(social,index) in socials" :key="index">
          <a :href="social.link">
            <i class="fab" :class="social.icon"></i>
          </a>
        </li>  
      </ul> 
    </div>
    <div class="d-flex col-12 col-lg-8 flex-wrap list">
      <ul class="col-12 col-lg-4 list-unstyled" v-for="(list,indexlist) in lists" :key="indexlist">
        <li>
          <h6>
          {{list.title}}
          </h6>
        </li>
        <li class="py-1" v-for="(link,index) in list.links" :key="index+'list'">
          <a :href="link.link">
            {{link.text}}
          </a>
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column flex-lg-row justify-content-between pt-5 pb-3" >
      <div>{{text.copyright}}</div>
      <div>{{text.callUs}}</div>
      <div>{{text.email}}</div>
    </div>
  </div>
</div>
</template>

<script>
import * as link from '@/assets/data/link.js';
import * as text from '@/assets/data/text.js';

export default {
  name: 'footer',
  data(){
    return {
      socials:link.social,
      text:text.footer,
      lists:link.footerLink,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
a{
  color: $Black;
  text-decoration: none;
}
.list{
  font-size: 0.9rem;
  a:hover{
    color: $Black;
  }
}
</style>
