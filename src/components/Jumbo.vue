<template>
<div class="jumbo header">
  <div class="opacity">
    <div class="container text">
      <div class="row">
        <div class="col-6 px-5 descrizione">
          <h2>
            Unlock your Online<br>Growth Potential
          </h2>
          <h6 class="py-3">
            Online marketing to secure customer retention,
            leads, and sales. We focus on the bigger picture.
          </h6>
          <button class="bottone">
            Our service
            <font-awesome-icon  icon="arrow-right" />
          </button>
        </div>
        <Form
        class="col-6"
        :avatar="avatar"
        :icon="icon"
        />
      </div>
    </div>
  </div>
  <div v-if="quadratini" class="position-absolute d-flex  flex-column  quadratini">
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
import Form from '@/components/Form.vue';
export default {
  name: 'Jumbo',
  components:{
    Form,
  },
  props:["quadratini","jumbo","avatar","icon"],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/style/vars.scss";
.header{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("../assets/images/marketing-intro.jpg");
  background-size: cover;
  position: relative;
  .text{
    position: relative;
    top: 40px;
 }
}
.main{
  background-color: $Black;
  padding: 50px;
}
.jumbo{
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
