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
        <h3>Votes: {{colorV}}</h3>

    </article>

    <article>
        <img src="../assets/prisma1.png" id="prisma" alt="prisma image" width="70"/>
        <h2>Shape</h2>
        <h3>Votes: {{shapeV}}</h3>
    </article>

    <article>
        <img src="../assets/prisma2.png" id = "prisma2" alt="pyramid image" width="70"/>
        <h2>Features</h2>
        <h3>Votes: {{featuresV}}</h3>
    </article>
  </section>
  <section>
    <button class="refresh_button" v-on:click="update()">Refresh votes</button>
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
        colorV: '',
        shapeV: '',
        featuresV:''
      }
    },

    beforeMount() {
      var votes = updateImgVote()
      this.colorV = votes[0]
      this.shapeV = votes[1]
      this.featuresV = votes[2]
      
    },

    mounted(){
      if (this.colorV < this.shapeV && this.colorV < this.featuresV) {
          document.getElementById("cube").style.filter = "grayscale(80%)";
      }
      if (this.shapeV < this.colorV && this.shapeV < this.featuresV) {
        document.getElementById("prisma").style.filter = "grayscale(80%)";
        console.log("shape " + shapeV)
      }
      if (this.featuresV < this.colorV && this.featuresV < this.shapeV) {
        document.getElementById("prisma2").style.filter = "grayscale(80%)";
      }

      if ((this.colorV < this.shapeV && this.colorV > this.featuresV) || (this.colorV > this.shapeV && this.colorV < this.featuresV)) {
        document.getElementById("cube").style.filter = "grayscale(45%)";
      }
      
      if ((this.shapeV < this.colorV && this.shapeV > this.featuresV) || (this.shapeV > this.colorV && this.shapeV < this.featuresV)) {
        document.getElementById("prisma").style.filter = "grayscale(45%)";
      }

      if ((this.featuresV > this.shapeV && this.featuresV < this.colorV) || (this.featuresV < this.shapeV && this.featuresV > this.colorV)) {
        document.getElementById("prisma2").style.filter = "grayscale(45%)";
      }
    },

    /*updated() {
      colorV = this.currentVotes[0]
      shapeV = this.currentVotes[1]
      featuresV = this.currentVotes[2]
      console.log(colorV)
      console.log(shapeV)
      console.log(featuresV)
        
      if (this.colorV < this.shapeV && this.colorV < this.featuresV) {
          document.getElementById("cube").style.filter = "grayscale(80%)";
      }
      if (this.shapeV < this.colorV && this.shapeV < this.featuresV) {
        document.getElementById("prisma").style.filter = "grayscale(80%)";
        console.log("shape " + shapeV)
      }
      if (this.featuresV < this.colorV && this.featuresV < this.shapeV) {
        document.getElementById("prisma2").style.filter = "grayscale(80%)";
      }
      if (this.colorV > this.shapeV && this.colorV > this.featuresV) {
        document.getElementById("cube").style.filter = "grayscale(0%)";
      }
        
    },*/

    methods: {
      update() {
        var votes = updateImgVote()
        this.colorV = votes[0]
        this.shapeV = votes[1]
        this.featuresV = votes[2]
        console.log(this.colorV)
        this.changeImageColor()
      }, 

      changeImageColor() {
        console.log("color " + this.colorV)
        if (this.colorV < this.shapeV && this.colorV < this.featuresV) {
            document.getElementById("cube").style.filter = "grayscale(80%)";
        }
        if (this.shapeV < this.colorV && this.shapeV < this.featuresV) {
          document.getElementById("prisma").style.filter = "grayscale(80%)";
          console.log(shapeV)
        }
        if (this.featuresV < this.colorV && this.featuresV < this.shapeV) {
          document.getElementById("prisma2").style.filter = "grayscale(80%)";
        }

        if ((this.colorV < this.shapeV && this.colorV > this.featuresV) || (this.colorV > this.shapeV && this.colorV < this.featuresV)) {
          document.getElementById("cube").style.filter = "grayscale(60%)";
        }
        
        if ((this.shapeV < this.colorV && this.shapeV > this.featuresV) || (this.shapeV > this.colorV && this.shapeV < this.featuresV)) {
          document.getElementById("prisma").style.filter = "grayscale(60%)";
        }

        if ((this.featuresV > this.shapeV && this.featuresV < this.colorV) || (this.featuresV < this.shapeV && this.featuresV > this.colorV)) {
          document.getElementById("prisma2").style.filter = "grayscale(60%)";
        }
        if (this.colorV == this.shapeV) {
          document.getElementById("prisma").style.filter = "sepia(90%)";
          document.getElementById("cube").style.filter = "sepia(90%)";
        }
        if((this.colorV == this.featuresV)){
          document.getElementById("cube").style.filter = "sepia(90%)";
          document.getElementById("prisma2").style.filter = "sepia(90%)";
        }
        if (this.shapeV == this.featuresV){
          document.getElementById("prisma").style.filter = "sepia(90%)";
          document.getElementById("prisma2").style.filter = "sepia(90%)";
        }
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

  p {
    font-family: 'Segoe UI', sans-serif;
    font-size: 1em;
    color: #cdcbe3;
    font-weight: normal;
    margin-bottom: 40px;
  }

  .refresh_button {    
    background-color: #c1a9e5;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 15px;
    margin-top: 15px;
    border: none;
    outline: none;
    cursor: pointer;
  }

</style>
