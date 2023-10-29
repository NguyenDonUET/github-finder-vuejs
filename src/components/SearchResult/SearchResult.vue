<template>
  <div class="">
    <h1>Result</h1>
    <div v-for="item in searchUserResult" :key="item.id">
      {{ item.login }}
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();

const { searchUserResult } = storeToRefs(globalStore);
</script>

<style lang="scss" scoped></style>
