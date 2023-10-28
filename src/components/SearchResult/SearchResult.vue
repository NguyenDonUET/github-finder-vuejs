<template>
  <div>
    Result
    <h1>{{ user?.login }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped></style>
