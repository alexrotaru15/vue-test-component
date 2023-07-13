<script setup>
</script>

<template>
  <h2>Home</h2>
  <router-link :to="{ name: 'about', params: { company: 'awala' } }"
    >about</router-link
  >
</template>
