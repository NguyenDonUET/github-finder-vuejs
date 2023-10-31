<template>
  <div class="max-w-2xl mx-auto">
    <form
      @submit.prevent="submit"
      class="flex items-center gap-0 sm:gap-2 rounded-2xl shadow-cardShadow dark:bg-semiDark py-2 sm:px-8 px-2 dark:border-none"
    >
      <svg
        class="hidden md:block"
        height="24"
        width="25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
          fill="#0079ff"
        ></path>
      </svg>
      <input
        autofocus
        class="flex-1 px-2 py-4 bg-transparent rounded-2xl outline-none text-lg sm:text-xl dark:text-white"
        :value="userNameQuery"
        type="search"
        placeholder="Search GitHub username..."
        @input="$emit('update:userNameQuery', $event.target.value)"
      />
      <button
        :disabled="isLoading"
        class="px-2 py-3 sm:px-4 sm:py-3 hover:opacity-80 rounded-lg text-sm md:text-lg font-bold capitalize bg-electric text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        search
      </button>
    </form>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();
const { isLoading } = storeToRefs(globalStore);

defineProps({
  userNameQuery: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:userNameQuery", "onSearchUser"]);

const submit = () => {
  emit("onSearchUser");
};
</script>
