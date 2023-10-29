<template>
  <TheHeading />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>

<script setup>
import TheHeading from "@components/TheHeading.vue";
import TheFooter from "@components/TheFooter.vue";
import { RouterView } from "vue-router";
</script>

<style lang="scss" scoped></style>
