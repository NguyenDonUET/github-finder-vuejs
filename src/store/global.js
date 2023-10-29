import { defineStore } from "pinia";
import { ref } from "vue";
import { searchByUserName, getUserDetail } from "@/services/githubApi";

export const useGlobalStore = defineStore("globalStore", () => {
  const userNameQuery = ref("octocat");
  const searchUserResult = ref(null);
  const currentPage = ref(1);
  const theme = ref("");

  const errorMsg = ref(null);
  const isLoading = ref(false);

  // methods
  const searchUser = async () => {
    try {
      if (!userNameQuery.value) return;
      isLoading.value = true;
      const data = await searchByUserName(userNameQuery.value);
      console.log("🚀 ~ data:", data.items);
      searchUserResult.value = data.items;
      console.log("🚀 ~  searchUserResult.value:", searchUserResult.value);
    } catch (error) {
      errorMsg.value = "Error";
      console.log(error.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    userNameQuery,
    searchUserResult,
    currentPage,
    errorMsg,
    isLoading,
    theme,
    searchUser,
  };
});
