<template>
  <vue-awesome-paginate
    v-if="totalResult >= 1"
    :total-items="totalResult"
    :items-per-page="itemsPerPage"
    :max-pages-shown="5"
    v-model="currentPage"
    :on-click="onClickHandler"
  />
</template>

<script setup>
import { ref } from "vue";
import { useGlobalStore } from "@/store/global.js";
import { storeToRefs } from "pinia";

const globalStore = useGlobalStore();
const { totalResult } = storeToRefs(globalStore);

const { itemsPerPage } = globalStore;
const { changeCurrentPage } = globalStore;

const currentPage = ref(1);

const onClickHandler = (page) => {
  console.log("🚀 ~ page:", page);
  changeCurrentPage(page);
};
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
