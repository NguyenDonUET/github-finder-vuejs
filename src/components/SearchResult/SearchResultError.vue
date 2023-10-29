<template>
  <div>
    <h2>{{ errorMsg }}</h2>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();

const { errorMsg } = storeToRefs(globalStore);
</script>
