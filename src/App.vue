<template>
  <router-view/> 
</template>

<script>
    export default {
        name: 'App', 
        data() {
            return {
                email : localStorage.getItem("email"),
                token : localStorage.getItem("token"),
                vote : localStorage.getItem("vote")
            }
        }
    }
</script>

<style>
  body {
      margin: 40px 0;
      padding: 0;
      font-family:'Segoe UI', sans-serif;
      background-color: black;
      align-content: center;
      text-align: center;
  }

  h1 {
      font-size: 1.5em;
      color: #cdcbe3;

  }

  .enterDetails{
      border-radius: 25px;
      box-shadow: 0 0 3px 0 rgba(0, 0 , 0, 3);
      margin-top: 50px;
      text-align: center;

  }

  .enterDetails h1{
      color: #cdcbe3;
      margin-bottom: 30px;
      font-size: 1.5em;
  }

  input{
      font-family: "Montserrat", sans-serif;
      font-weight: bolder;
  }

  .input-box{
      border-radius: 20px;
      padding: 10px;
      margin-bottom: 40px;
      width: 30%;
      background-color: #cdcbe3;
      border: 1px solid #a478d7;
      outline: none;
      transition: 0.25s;
      text-align: center;
  }

  .input-box:focus{
      width: 210px;
      border-color: goldenrod;
  }
  
  .insertBtn {
    background-color: #ad69e1;
    color: black;
    width: 100%;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .insertBtn:link {
    text-decoration: none;
  }

</style>
