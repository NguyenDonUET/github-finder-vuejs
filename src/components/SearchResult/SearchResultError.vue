<template>
  <div>
    <h2>{{ errorMsg }}</h2>
  </div>
</template>

<script setup>
defineProps({
  errorMsg: {
    type: String,
  },
});
</script>
