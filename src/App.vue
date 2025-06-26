<script setup>
import Header from "@/static/Header.vue";
import Footer from "@/static/Footer.vue";
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
  
  <Footer />
</template>

<style scoped></style>
