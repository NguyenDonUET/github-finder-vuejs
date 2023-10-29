<template>
  <div class="container">
    <SearchBar
      v-model:userNameQuery.trim.lazy="userNameQuery"
      @onSearchUser="searchUser"
    />
    <BaseLoading v-if="isLoading" />
    <SearchResultError v-if="errorMsg" />
    <div class="min-h-full">
      <SearchResult v-show="searchUserResult" />
    </div>
    <ThePagination />
  </div>
</template>

<script setup>
import SearchBar from "@components/SearchBar/SearchBar.vue";
import SearchResult from "@components/SearchResult/SearchResult.vue";
import BaseLoading from "@components/BaseLoading.vue";
import SearchResultError from "@components/SearchResult/SearchResultError.vue";
import ThePagination from "@/components/ThePagination.vue";

import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();

const { userNameQuery, searchUserResult, isLoading, errorMsg } =
  storeToRefs(globalStore);

const { searchUser } = globalStore;
</script>
