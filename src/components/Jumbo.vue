<template>
<div class="jumbo">
  <!-- <img class="jumbo" :src="require(`@/assets/images/${jumbo.link}`)" :alt="jumbo.alt"> -->
  <div class="opacity">
    <div class="container text">
      <div class="row">
        <div class="col-6 px-5 descrizione">
          <h1>
            Unlock your Online<br>Growth Potential
          </h1>
          <h6 class="py-3">
            Online marketing to secure customer retention,
            leads, and sales. We focus on the bigger picture.
          </h6>
          <button class="bottone">
            Our service
            <font-awesome-icon  icon="arrow-right" />
          </button>
        </div>
        <div class="col-6 form">
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
              <p>By submitting my data | agree to be contacted</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="position-absolute d-flex  flex-column  quadratini">
    <div class="d-flex flex-column justify-content-between align-items-center  quadratino">
      <font-awesome-icon class="icon" :icon="['fab', 'atlassian']" />
      <p>demos</p>
    </div>
    <div class="d-flex flex-column justify-content-between align-items-center quadratino">
      <p id="prezzo" class="m-0"><sup>$</sup>39</p>
      <p>on sale</p>
    </div>
  </div>
</div>
</template>

<script>
import * as image from "@/assets/data/image.js"
export default {
  name: 'Jumbo',
  data(){
    return {
      jumbo: image.jumboImage,
      avatar: image.jumboAvatar,
      icon:image.jumboicon,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.jumbo{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("../assets/images/marketing-intro.jpg");
  background-size: cover;
  padding-top: 50px;
  position: relative;
  .quadratini{
    top: 20px;
    right: 10px;
    *{
      margin: 0;
    }
    .quadratino{
      background:$White;
      margin: 10px;
      padding: 10px;
      aspect-ratio: 1/1;
      border-radius:10px;
      #prezzo{
        color:$Lima;
        font-size:1.5rem;
        font-weight:700;
        transform:scale(1.5);
        sup{
          font-size:1rem;
          font-weight:700;
        }
      }
      .icon{
        font-size: 2rem;
      }
    }
  }
}
.text{
  color: $White;
  position: relative;
  top: 40px;
  .descrizione{

    .bottone{
      background-color:$White;
      color: $Black;
      font-weight: 600;
      padding: 10px 30px;
      &:hover{
        background-color:transparent;
        border: 2px solid $White;
        color: $White;
      }
    }
  }
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
}
</style>
