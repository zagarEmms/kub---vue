<template>
    <img alt="Kub logo" src="../assets/logo_transp.png">
    <login></login>
</template>

<script>

// @ is an alias to /src
import login from '@/components/login.vue'

export default {
  name: 'HomeView',
  components: {
    login
  }
}
</script>
