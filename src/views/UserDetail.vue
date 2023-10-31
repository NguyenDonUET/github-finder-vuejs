<template>
  <div class="text-light container">
    <h1
      class="text-center text-xl md:text-2xl md:mb-10 uppercase font-bold mb-12 text-green-400"
    >
      Detail informations
    </h1>
    <Suspense>
      <AsyncUser #default />
      <template #fallback>
        <h2 v-if="errorMsg">{{ errorMsg }}</h2>
        <h2 v-else>Loading...</h2>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncUser from "@components/User/AsyncUser.vue";
import { onErrorCaptured, ref } from "vue";

const errorMsg = ref("");

onErrorCaptured((err) => {
  errorMsg.value = err.message;
  console.log(err.message);
});
</script>
