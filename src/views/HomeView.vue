<template>
  <body>
    <section>
      <img class="logo" src="../assets/logo_transp.png" alt="logo kub" width="120">
    </section>
    <h1>Welcome to the KUB experience</h1>
    <section class="enterDetails">
      <h2>Enter your E-mail to participate:</h2>
      <label>
          <input type="email" class ="input-box" placeholder="Your e-mail" id="emailGiven" v-model="email">
      </label>
      <div>
          <router-link to = "/vote" id="button" class="insertBtn" v-on:click="create_login()">Send</router-link>
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

                console.log(localStorage.getItem('email'))
            },
        },

        
    }

</script>

<style>

</style>