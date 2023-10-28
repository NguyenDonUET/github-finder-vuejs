<template>
  <div>
    <TheHeading />
    <SearchBar
      v-model:userNameQuery.trim.lazy="userNameQuery"
      @onSearchUser="searchUser"
    />
    <BaseLoading v-if="isLoading" />
    <SearchResultError v-if="errorMsg" :errorMsg="errorMsg" />
    <SearchResult v-if="!isLoading && !errorMsg" :user="searchUserResult" />
  </div>
</template>

<script setup>
import SearchBar from "@components/SearchBar/SearchBar.vue";
import SearchResult from "@components/SearchResult/SearchResult.vue";
import TheHeading from "@components/TheHeading.vue";
import { onMounted, ref } from "vue";
import { searchByUserName, getUserDetail } from "./services/githubApi";
import BaseLoading from "@components/BaseLoading.vue";
import SearchResultError from "@components/SearchResult/SearchResultError.vue";

const userNameQuery = ref("octocat");
const searchUserResult = ref(null);
const errorMsg = ref(null);
const isLoading = ref(false);

const searchUser = async () => {
  try {
    if (!userNameQuery.value) return;
    isLoading.value = true;
    const data = await getUserDetail(userNameQuery.value);
    console.log("🚀 ~ data:", data);
    searchUserResult.value = data;
  } catch (error) {
    errorMsg.value = "Error";
    console.log(error.message);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
