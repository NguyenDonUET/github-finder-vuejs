<template>
  <header class="dark:text-light">
    <div class="container">
      <div class="flex justify-between items-center py-8 px-6">
        <RouterLink to="/" class="flex items-center gap-2">
          <img
            v-if="isDark"
            class="w-10 h-10"
            src="/github-logo.svg"
            alt="logo"
          />
          <img
            v-else
            class="w-10 h-10"
            src="/github-logo-light.svg"
            alt="logo"
          />
          <h2
            class="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight whitespace-nowrap"
          >
            Github Finder
          </h2>
        </RouterLink>
        <TheToggleThemeButton />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";
import TheToggleThemeButton from "@components/TheToggleThemeButton.vue";
const globalStore = useGlobalStore();

const { isDark } = storeToRefs(globalStore);
</script>
