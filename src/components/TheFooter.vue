<template>
  <footer className="w-full font-semibold bg-black text-gray-400 p-3">
    <p className="text-base md:text-xl text-center">
      Copyright © {{ currentYear }} Don Nguyen. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
