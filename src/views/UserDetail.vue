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
        <div v-if="errorMsg" class="p-14 text-center dark:text-light">
          <h2 class="text-3xl">{{ errorMsg }}</h2>
        </div>
        <BaseLoading v-else />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import BaseLoading from "@/components/BaseLoading.vue";
import AsyncUser from "@components/User/AsyncUser.vue";
import { onErrorCaptured, ref } from "vue";

const errorMsg = ref("");

onErrorCaptured((err) => {
  errorMsg.value = err.response.data?.message || err.message;
  console.log(err);
});
</script>
