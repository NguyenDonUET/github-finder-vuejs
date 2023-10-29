<template>
  <div class="p-14 text-center dark:text-light">
    <h2 class="text-3xl">{{ errorMsg }}</h2>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();

const { errorMsg } = storeToRefs(globalStore);
</script>
