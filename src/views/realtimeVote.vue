<template>
  <Header></Header>
  <section>
    <h1>Realtime votations</h1>
    <p>In a few moments you will be able to discover the most voted feature revealed</p>
  </section>
  <section>
    <article>
        <img src="../assets/cubo.png" id ="cube" alt="cube image" width="70"/> 
        <h2>Color</h2>
        <h3>Votes: {{currentVotes[0]}}</h3>

    </article>

    <article>
        <img src="../assets/prisma1.png" id="prisma" alt="prisma image" width="70"/>
        <h2>Shape</h2>
        <h3>Votes: {{currentVotes[1]}}</h3>
    </article>

    <article>
        <img src="../assets/prisma2.png" id = "prisma2" alt="pyramid image" width="70"/>
        <h2>Features</h2>
        <h3>Votes: {{currentVotes[2]}}</h3>
    </article>
  </section>
  <section>
    <button v-on:click="update()">Refresh votes</button>
  </section>

</template>

<script>
  import { updateImgVote } from "../main";
  import Header from "../components/header.vue"

  export default {
    name: 'realtimevote',
    components: {
      Header
    },

    data() {
      return {
        currentVotes: []
      }
    },

    beforeMount() {
      var votes = updateImgVote()
      this.currentVotes[0] = votes[0]
      this.currentVotes[1] = votes[1]
      this.currentVotes[2] = votes[2]
    },

    updated() {
        colorV = this.currentVotes[0]
        shapeV = this.currentVotes[1]
        featuresV = this.currentVotes[2]
        console.log(colorV)
        console.log(shapeV)
        console.log(featuresV)
        
        if (colorV < shapeV && colorV < featuresV) {
          document.getElementById("cube").style.filter = "contrast(20%)";
        } else if (shapeV < colorV && shapeV < featuresV) {
          document.getElementById("prisma").style.filter = "contrast(20%)";
        } else if (featuresV < colorV && featuresV < shapeV) {
          document.getElementById("prisma2").style.filter = "contrast(20%)";
        }
        
    },

    methods: {
      update() {
        var votes = updateImgVote()
        this.currentVotes[0] = votes[0]
        this.currentVotes[1] = votes[1]
        this.currentVotes[2] = votes[2]
        //changeContrastImg()
      }, 

      /*changeContrastImg() {
        colorV = this.currentVotes[0]
        shapeV = this.currentVotes[1]
        featuresV = this.currentVotes[2]
        
        if (colorV < shapeV && colorV < featuresV) {
          document.getElementById("cube").style.filter = "contrast(30%)";
        } else if (shapeV < colorV && shapeV < featuresV) {
          document.getElementById("prisma").style.filter = "contrast(30%)";
        } else if (featuresV < colorV && featuresV < shapeV) {
          document.getElementById("prisma2").style.filter = "contrast(30%)";
        }
        

      }*/

    }
  }

</script>

<style>
  h1 {
    font-size: 1.3em;
    color: #cdcbe3;
    margin: 20px 40px;
  }

  p {
    font-family: 'Segoe UI', sans-serif;
    font-size: 1em;
    color: #cdcbe3;
    font-weight: normal;
    margin-bottom: 40px;
  }

</style>
