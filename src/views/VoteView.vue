<template>
  <section class="slider-container">
    <article>
        <img class="slider-item" src="../assets/cubo.png"
              alt="cube image" width="70"/>
        <h2>Color</h2>
         <div>
            <router-link to = "/results" class="insertBtn" type="button" v-on:click="vote_a">Vote</router-link>
        </div>
        

    </article>

    <article>
        <img class="slider-item" src="../assets/prisma1.png"
              alt="prisma image" width="70"/>
        <h2>Shape</h2>
         <div>
            <router-link to = "/results" class="insertBtn" type="button" v-on:click="vote_b">Vote</router-link>
        </div>
    </article>

    <article>
        <img class="slider-item" src="../assets/prisma2.png"
              alt="pyramid image" width="70"/>
        <h2>Features</h2>
         <div>
            <router-link to = "/results" class="insertBtn" type="button" v-on:click="vote_c">Vote</router-link>
        </div>
    </article>

  </section>
</template>

<script>

</script>
