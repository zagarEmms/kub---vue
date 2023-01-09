<template>
  <section>
    <article>
        <img src="../assets/cubo.png"
              alt="cube image" width="70"/> 
        <h2>Color</h2>

    </article>

    <article>
        <img src="../assets/prisma1.png"
              id="prisma" alt="prisma image" width="70" v-on:click="brightness"/>
        <h2>Shape</h2>
    </article>

    <article>
        <img src="../assets/prisma2.png"
              alt="pyramid image" width="70"/>
        <h2>Features</h2>
    </article>
  </section>

</template>

<script>

  export default {
    name: 'realtimevote',
    methods: {
        brightness() {
          document.getElementById("prisma").style.filter = "contrast(30%)";
      }  
    }
  }

</script>
