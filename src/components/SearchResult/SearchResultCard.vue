<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-5"
  >
    <a href="#" class="">
      <img
        class="rounded-full w-32 h-32 mx-auto"
        :src="user.avatar_url"
        :alt="user.login"
      />
    </a>
    <div class="p-4 text-center">
      <a href="#">
        <h5
          class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ user.login }}
        </h5>
      </a>

      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 group/item transition duration-500"
      >
        View more
        <svg
          class="w-3.5 h-3.5 ml-2 group-hover/item:translate-x-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
