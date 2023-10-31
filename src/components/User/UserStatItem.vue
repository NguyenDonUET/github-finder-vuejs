<template>
  <div class="space-y-2">
    <span>{{ title }}</span>
    <h3
      class="text-center font-extrabold text-black dark:text-white text-lg md:text-xl"
    >
      {{ content }}
    </h3>
  </div>
</template>

<script setup>
defineProps(["title", "content"]);
</script>
