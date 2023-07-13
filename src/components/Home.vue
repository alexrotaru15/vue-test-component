<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const test = () => {
  router.push({ name: "about" });
};
</script>

<template>
  <h2>Home</h2>
  <router-link to="about">about</router-link>
</template>
