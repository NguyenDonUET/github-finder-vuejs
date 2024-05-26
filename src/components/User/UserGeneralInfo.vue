<template>
  <div
    class="general col-start-2 col-span-3 pl-6 lg:pl-0 space-y-1 md:space-y-0 lg:col-start-2 lg:col-end-4"
  >
    <h2 class="text-xl md:text-2xl font-bold truncate">{{ name }}</h2>
    <p class="text-base text-lightBlue">@{{ name }}</p>
  </div>
</template>

<script setup>
defineProps(["name"])
</script>
