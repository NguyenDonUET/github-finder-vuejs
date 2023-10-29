import { defineStore } from "pinia";
import { ref } from "vue";
import { searchByUserName, getUserDetail } from "@/services/githubApi";

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export const useGlobalStore = defineStore("globalStore", () => {
  const userNameQuery = ref("octocat");
  const searchUserResult = ref(null);
  const currentPage = ref(1);
  const totalResult = ref(0);
  const itemsPerPage = 6;

  const theme = ref(THEME.DARK);

  const errorMsg = ref(null);
  const isLoading = ref(false);

  // methods
  const searchUser = async () => {
    try {
      if (!userNameQuery.value) return;
      searchUserResult.value = [];
      isLoading.value = true;
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
      errorMsg.value = "Error";
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  const changeCurrentPage = (page) => {
    currentPage.value = page;
    searchUser();
  };

  return {
    userNameQuery,
    searchUserResult,
    currentPage,
    errorMsg,
    isLoading,
    theme,
    totalResult,
    itemsPerPage,
    searchUser,
    changeCurrentPage,
  };
});
