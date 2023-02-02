<template>
  <body>
    <section class="container">
      <img src="../assets/logo_transp.png" alt="logo kub" width="70">
      <h1>X</h1>
      <img src="../assets/nike_logo.png" alt="logo nike" width="80">
    </section>

    <h1 class="title">Welcome to the Nike ft KUB experience</h1>

    <section class="enterDetails">
      <h2>Enter your E-mail to participate:</h2>
      <label>
          <input type="email" class ="input-box" placeholder="Your e-mail" id="emailGiven" v-model="email">
      </label>
      <div>
          <button class="insertButton" type="button" v-on:click="create_login()">Send</button>
      </div>
    </section>
  </body>
</template>

<script>
    import { addUser } from "../main";

    export default {
      name: '/',
      data() {
          return {
            email: '',
            vote: '',
          }
      },
      methods: {
            create_login() {
                if (this.email.length < 6 || this.email.includes("@") == false) {
                    alert("Wrong email")
                    
                } else{
                  let userLogin = {
                    email: this.email,
                  }
                  addUser(userLogin)
                  this.$root.email = userLogin.email
                  localStorage.setItem('email', this.email)
                  this.$router.push('vote');
                }
            },
        },

        
    }

</script>

<style>
  h2 {
      font-family: 'Segoe UI', sans-serif;
      font-size: 1em;
      color: #cdcbe3;
      font-style: italic;
      font-weight: normal;
  }
  
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .title {
    margin-top: 30px;
  }

  .insertButton {
    background-color: #ad69e1;
    color: black;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 15px;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>