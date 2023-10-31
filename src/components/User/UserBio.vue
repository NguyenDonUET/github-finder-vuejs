<template>
  <div class="col-span-3 pt-6 lg:col-start-2 col-span-5">
    <p class="h-min">
      {{ bio || "Not Available" }}
    </p>
  </div>
</template>

<script setup>
defineProps(["bio"]);
</script>
