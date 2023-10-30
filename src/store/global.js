import { defineStore } from "pinia";
import { ref } from "vue";
import { searchByUserName } from "@/services/githubApi";
import { useDark, useToggle } from "@vueuse/core";

export const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const useGlobalStore = defineStore("globalStore", () => {
  const userNameQuery = ref("nguyenDon");
  const searchUserResult = ref(null);
  const currentPage = ref(1);
  const totalResult = ref(0);
  const itemsPerPage = 8;

  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  const errorMsg = ref(null);
  const isLoading = ref(false);

  // methods
  const searchUser = async () => {
    try {
      if (!userNameQuery.value) return;
      searchUserResult.value = [];
      isLoading.value = true;
      errorMsg.value = null;
      const data = await searchByUserName(
        userNameQuery.value,
        itemsPerPage,
        currentPage.value
      );
      // update result list
      searchUserResult.value = data.items;
      // update total items
      totalResult.value = data.total_count;
    } catch (error) {
      errorMsg.value = error.message;
      totalResult.value = 0;
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  const changeCurrentPage = (page) => {
    currentPage.value = page;
    searchUser();
  };

  const setQueryandCurrentPage = (name, page) => {
    userNameQuery.value = name;
    currentPage.value = parseInt(page);
  };

  const resetValues = () => {
    userNameQuery.value = "";
    searchUserResult.value = null;
    currentPage.value = 1;
    totalResult.value = 0;
  };

  return {
    userNameQuery,
    searchUserResult,
    currentPage,
    errorMsg,
    isLoading,
    totalResult,
    itemsPerPage,
    searchUser,
    changeCurrentPage,
    toggleDark,
    isDark,
    setQueryandCurrentPage,
    resetValues,
  };
});
