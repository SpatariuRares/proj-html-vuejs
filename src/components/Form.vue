<template>
  <div class=" form">
    <div class="callback d-flex p-3 flex-column justify-content-center align-items-center">
      <img class="avatar" :src="require(`@/assets/images/${avatar.link}`)" :alt="avatar.alt">
      <h5 class="py-2 m-0">Richard Madsen</h5>
      <p class="py-2 m-0">Marketing Consultant Expert</p>
      <div class="d-flex orange py-2 m-0">
        <font-awesome-icon icon="phone-alt" />
        (555) 802-1234
      </div>
      <form action="" class="d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center my-2">
          <input type="text" name="name" id="name" placeholder="Your Name*" required>
          <img :src="require(`@/assets/images/${icon.link}`)" :alt="avatar.alt">
        </div>
        <div class="d-flex justify-content-between align-items-center my-2">
          <input type="email" name="email" id="email" placeholder="Your Email*" required>
        </div>
        <div class="d-flex justify-content-between align-items-center my-2">
          <input type="tel" name="number" id="number" placeholder="Your Number*" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required maxlength="10" minlength="10">
        </div>
        <button class="bottone my-2">Get a callback</button>
      </form>
        <p>{{text.agre}}</p>
    </div>
  </div>
</template>

<script>
import * as formtext from "@/assets/data/text.js"
export default {
  name: 'Form',
  props:["avatar","icon"],
  data(){
    return{
      text:formtext.formText
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";

  .callback{
    background-color:$White;
    border-radius: 20px;
    color: $Black;
    box-shadow: 0px 0px 4px$Gunsmoke;
    p{
      color: $Gunsmoke;
    }
    .avatar{
      width: 100px;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }
    form{
      width: 100%;
      div{
        width: 100%;
        border-radius: 5px;
        border: 1px solid $Gunsmoke;
        padding: 10px 30px;
        input{
          width: 90%;
          border: 0;
          &:focus-visible{
            outline: 0;
          }
        }
      }
    }
  }
  .form{
    padding: 0 5%;
  }
</style>
