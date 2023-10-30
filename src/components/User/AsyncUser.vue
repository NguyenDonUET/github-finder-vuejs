<template>
  <div class="max-w-2xl mx-auto bg-semiDark">
    <h2 class="text-center">{{ user.login }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getUserByName } from "@/services/githubApi";

const route = useRoute();

const user = await getUserByName(route.params.username);
console.log("🚀 ~ user:", user);
</script>
