<template>
  <div class="space-x-4 flex items-center gap-x-0">
    <slot></slot>
    <p>{{ content || "Not Available" }}</p>
  </div>
</template>

<script setup>
defineProps(["content"]);
</script>
