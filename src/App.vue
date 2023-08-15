<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
import NavBar from './components/navBar/NavBar.vue';
import {RouterView} from 'vue-router'
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Spartan:wght@300;400;500&display=swap");

* {
  font-family: "Spartan", sans-serif;
}
</style>