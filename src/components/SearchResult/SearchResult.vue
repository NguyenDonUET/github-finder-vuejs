<template>
  <div
    class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12"
  >
    <SearchResultCard
      v-for="user in searchUserResult"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";
import SearchResultCard from "./SearchResultCard.vue";

const globalStore = useGlobalStore();

const { searchUserResult } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>
