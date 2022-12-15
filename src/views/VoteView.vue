<template>
  <section class="slider-container">
    <article>
        <img class="slider-item" src="../assets/cubo.png"
              alt="cube image" width="70"/>
        <h2>Color</h2>
         <div>
            <router-link to = "/results" class="insertBtn" type="button" v-on:click="updateVote">Vote</router-link>
        </div>


    </article>

    <article>
        <img class="slider-item" src="../assets/prisma1.png"
              alt="prisma image" width="70"/>
        <h2>Shape</h2>
         <div>
            <router-link to = "/results" class="insertBtn" type="button" v-on:click="updateVote">Vote</router-link>
        </div>
    </article>

    <article>
        <img class="slider-item" src="../assets/prisma2.png"
              alt="pyramid image" width="70"/>
        <h2>Features</h2>
         <div>
            <router-link to = "/results" class="insertBtn" type="button" v-on:click="updateVote">Vote</router-link>
        </div>
    </article>

  </section>
</template>

<script>
import { updateVote } from "../main";
export default{
    methods: {
        updateVote()
    }
}

</script>
