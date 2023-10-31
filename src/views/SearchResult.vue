<template>
  <BaseLoading v-if="isLoading" />
  <SearchResultError v-if="errorMsg" />

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
import SearchResultCard from "@components/SearchResult/SearchResultCard.vue";
import BaseLoading from "@components/BaseLoading.vue";
import SearchResultError from "@components/SearchResult/SearchResultError.vue";
import { onMounted, onUnmounted } from "vue";

const globalStore = useGlobalStore();

const { searchUserResult, isLoading, errorMsg } = storeToRefs(globalStore);
const { searchUser, setQueryandCurrentPage, resetValues } = globalStore;

import { useRoute, useRouter } from "vue-router";
const route = useRoute();

onMounted(() => {
  const { q, page } = route.query;
  setQueryandCurrentPage(q, page);
  searchUser();
});

onUnmounted(() => {
  resetValues();
});
</script>
