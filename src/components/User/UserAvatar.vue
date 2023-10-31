<template>
  <img class="w-32 w-32 rounded-full lg:row-span-2" :src="url" :alt="alt" />
</template>

<script setup>
defineProps(["url", "alt"]);
</script>

<style lang="scss" scoped></style>
