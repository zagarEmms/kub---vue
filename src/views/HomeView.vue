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
          <router-link to = "/vote" class="insertBtn" v-on:click="create_login()">Send</router-link>
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
                let userLogin = {
                    email: this.email,
                }
                addUser(userLogin)
                this.$root.email = userLogin.email
                localStorage.setItem('email', this.email)

                //console.log(localStorage.getItem('email'))
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
</style>