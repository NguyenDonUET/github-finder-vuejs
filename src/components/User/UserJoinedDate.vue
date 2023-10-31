<template>
  <div
    class="joined-date text-sm col-start-2 col-span-3 row-start-2 pl-6 lg:pl-0 lg:col-start-4 lg:row-start-1 self-center"
  >
    <p class="whitespace-wrap lg:text-end">
      Joined {{ convertDateFormat(joinDate) }}
    </p>
  </div>
</template>

<script setup>
import { convertDateFormat } from "@/utils/formatDate.js";

defineProps(["joinDate"]);
</script>
