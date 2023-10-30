<template>
  <div class="flex items-center justify-center pt-2">
    <vue-awesome-paginate
      v-if="totalResult >= 1"
      :total-items="totalResult"
      :items-per-page="itemsPerPage"
      :max-pages-shown="5"
      v-model="page"
      :on-click="onClickHandler"
      :hide-prev-next-when-ends="false"
      :show-ending-buttons="true"
    >
      <template #first-page-button>
        <div class="flex items-center justify-center">
          <svg
            class="paginate-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4m6-8L7 5l4 4"
            />
          </svg>
        </div>
      </template>

      <template #prev-button>
        <div class="flex items-center justify-center">
          <svg
            class="paginate-btn translate-x-[-2px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </div>
      </template>

      <template #next-button>
        <div class="flex items-center justify-center">
          <svg
            class="paginate-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </div>
      </template>

      <template #last-page-button>
        <div class="flex items-center justify-center">
          <svg
            class="paginate-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </div>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { onMounted } from "vue";
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore();

const { totalResult, currentPage } = storeToRefs(globalStore);

const { itemsPerPage } = globalStore;
const { changeCurrentPage } = globalStore;

import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const page = ref(1);

watch(currentPage, (newPage, oldPage) => {
  console.log(newPage);
  page.value = newPage;
});

const onClickHandler = (page) => {
  changeCurrentPage(page);
  currentPage.value = page;
  router.push({ query: { ...route.query, page } });
};

// onMounted(() => {
//   currentPage.value = parseInt(route.query.page);
// });
</script>

<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}
.paginate-buttons {
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  border: 1px solid rgb(217, 217, 217);
  color: black;
}
.paginate-buttons:hover {
  background-color: #d8d8d8;
}
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
