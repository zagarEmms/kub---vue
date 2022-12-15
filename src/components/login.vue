<template>
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
            <router-link to = "/vote" class="insertBtn" type="button" v-on:click="create_login">Send</router-link>
        </div>
    </section>
</template>

<script>
    import { addUser } from "../main";
    export default {
        data() {
            return {
                email: ''
            }
        },

        methods: {
            create_login() {
                let userLogin = {
                    email: this.email,
                    vote: 0
                }
                addUser(userLogin)
            },

            updateVote(){
                let userLogin ={
                    vote: "a"
                } 
                updateVote(userLogin)
            }
        }
    }

    
</script>

<style>

</style>