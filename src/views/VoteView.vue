<template>
  <Header></Header>
  <section>
    <h1>Vote for the feature you would like to reveal</h1>
    <h3>Swipe to the sides to discover them</h3>
  </section>
  <section class="slider-container">
    <article>
        <img src="../assets/cubo.png" alt="cube image" width="110"/>
        <h2>Color</h2>
        <p>Do you prefer a match of colored garments? Or do you prefer the classic black and white? Discover the colors of the new sneakers just here... </p>
        <div>
            <router-link to = "/realtimeVote" class="insertButton" type="button" v-on:click="createVote(1)">Vote</router-link>
        </div>
    </article>

    <article>
        <img src="../assets/prisma1.png" alt="prisma image" width="110"/>
        <h2>Shape</h2>
        <p>Do you dare to know the lines that will shape the new Nike sneaker? Could you imagine them?</p>
        <div>
            <router-link to = "/realtimeVote" class="insertButton" type="button" v-on:click="createVote(2)">Vote</router-link>
        </div>
    </article>

    <article>
        <img src="../assets/prisma2.png" alt="pyramid image" width="110"/>
        <h2>Features</h2>
        <p>"Just do it" they said... Sneak in the secret characteristics of the new sneaker</p>
        <div>
            <router-link to = "/realtimeVote" class="insertButton" type="button" v-on:click="createVote(3)">Vote</router-link>
        </div>
    </article>
  </section>  
  
</template>

<script>
    import { updateVote, sumVote, getAllVotes } from "../main";
    import Header from "../components/header.vue"
    
    export default {
        components: {
            Header
        },

        beforeMount(){
            getAllVotes()
        },

        methods: {
            createVote(figureId) {
                updateVote(figureId)
            }
        }
    }

</script>

<style>
    h1 {
      font-size: 1.3em;
      color: #cdcbe3;
      margin: 20px 40px;
    }

    h2 {
      font-family: 'Segoe UI', sans-serif;
      font-size: 1em;
      color: #cdcbe3;
      font-weight: bold;
    }

    p {
        color: #cdcbe3;
        font-family: 'Segoe UI', sans-serif;
        font-size: 1em;
        color: #cdcbe3;
        font-style: italic;
        font-weight: normal;
        margin: 0 40px;
    }
    
    .insertButton {
        background-color: #c1a9e5;
        color: black;
        margin-top: 10px;
        padding: 10px 25px;
        border-radius: 20px;
        font-size: 15px;
        border: none;
        outline: none;
        cursor: pointer;
        text-decoration: none;
    }

    .slider-container {
        display: flex;
        width: 100%;
        height: 70vh;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        margin-top: 20px;
    }

    .slider-container article {
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        scroll-snap-align: center;
    }
    .slider-container div {
        margin-top: 20px;
    }

</style>
