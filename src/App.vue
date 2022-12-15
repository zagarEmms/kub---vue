<template>
  <router-view/> 
  <login />
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'App', 
  components: {
    login
  },
  data (){
    return{
        email : localStorage.getItem("email"),
        vote : localStorage.getItem("vote")
    }
  }
}
</script>

<style>
  body {
      margin: 40px 0;
      padding: 0;
      font-family: "Montserrat", sans-serif;
      background-color: black;
      align-content: center;
      text-align: center;
  }

  h1 {
      font-size: 1.5em;
      color: #cdcbe3;

  }

  h2 {
      font-size: 1em;
      color: white;
  }

  .enterDetails{
      border-radius: 25px;
      box-shadow: 0 0 3px 0 rgba(0, 0 , 0, 3);
      background: black;
      padding: 20px;
      text-align: center;

  }

  .enterDetails h1{
      color: #cdcbe3;
      margin-bottom: 30px;
      font-size: 1.5em;
      font-weight: bolder;
  }

  input{
      font-family: "Montserrat", sans-serif;
      font-weight: bolder;
  }

  .enterEmail{
      border-radius: 20px;
      padding: 10px;
      margin: 10px 0;
      width: 70%;
      border: 1px solid #999;
      outline: none;
      transition: 0.25s;
      text-align: center;
  }

  .enterEmail:focus{
      width: 280px;
      border-color: goldenrod;
  }

  button{
      color: #fff;
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      font-size: 15px;
      border: none;
      outline: none;
      cursor: pointer;
  }
  .input-box{
      border-radius: 20px;
      padding: 10px;
      margin: 10px 0;
      width: 60%;
      border: 1px solid #999;
      outline: none;
      transition: 0.25s;
      text-align: center;
  }

  .input-box:focus{
      width: 210px;
      border-color: goldenrod;
  }

  .insertBtn{
      background-color: #6988e1;
      width: 100px;
      margin-top: 10px;
  }

  .logo{
      margin-top: 50px;
  }

  .slider-container {
      display: flex;
      width: 100%;
      height: 100vh;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
  }

  .slider-container article {
      flex: 0 0 100%;
      width: 100%;
      height: 100%;
      scroll-snap-align: center;
  }

  .textProva {
      color: white;
  }

</style>
