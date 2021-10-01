<template>
  <div class=" col-3 d-flex flex-column align-items-end chat">
    <div v-if="show" class=" chat-mesage p-3">
      <img :src="require(`@/assets/images/${chat.image}`)" :alt="chat.alt">
      <div class="text-end">
        <font-awesome-icon icon="times" @click="changeshow"/>
      </div>
      <p>
        {{chat.text}}
      </p>
    </div>
    <div class="b-orange d-flex messagio justify-content-center align-items-center my-3" @click="changeshow">
      <font-awesome-icon icon="comment-alt"/>
    </div>
  </div>
</template>

<script>
import * as image from '@/assets/data/image.js';

export default {
  name: 'Chat',
  data(){
    return {
      show: true,
      chat:image.chat,
    }
  },
  methods:{
    changeshow(){
      console.log("ciao")
      this.show =!this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.chat {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
.chat-mesage{
  background-color:$White;
  position:relative;
  box-shadow:0px 0px 10px $Gunsmoke;
  border-radius: 10px;
  img{
    position:absolute;
    top:0;
    left:50%;
    transform:translate(-50%, -50%);
    width:20%;
    border-radius:50%;
  }
}
.messagio{
  height: 4rem;
  width:4rem;
  border-radius: 50%;
  font-size: 1.8rem;
  color:$White;
}
</style>
