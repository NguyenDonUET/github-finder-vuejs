<template>
  <div class="container">
    <SearchBar
      v-model:userNameQuery.trim.lazy="userNameQuery"
      @onSearchUser="handleSearchUser"
    />
    <div class="min-h-full">
      <router-view></router-view>
    </div>
    <ThePagination />
  </div>
</template>

<script setup>
import SearchBar from "@components/SearchBar/SearchBar.vue";

import ThePagination from "@/components/ThePagination.vue";

import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const globalStore = useGlobalStore();

const { userNameQuery } = storeToRefs(globalStore);

const { searchUser } = globalStore;

const handleSearchUser = () => {
  searchUser();
  router.push({ name: "search", query: { q: userNameQuery.value, page: 1 } });
};
</script>
