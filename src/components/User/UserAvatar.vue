<template>
  <a :href="html_url" target="_blank" class="inline-block">
    <img
      class="w-32 object-cover rounded-full lg:row-span-2"
      :src="url"
      :alt="alt"
  /></a>
</template>

<script setup>
defineProps(["url", "alt", "html_url"])
</script>

<style lang="scss" scoped></style>
