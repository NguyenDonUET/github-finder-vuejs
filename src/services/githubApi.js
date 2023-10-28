import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/json",
  },
});

export const searchByUserName = async (username, perPage, page = 1) => {
  const response = await customFetch.get(
    `/search/users?q=${username}&per_page=${perPage}&page=${page}`
  );
  return response.data;
};

export const getUserDetail = async (username) => {
  const response = await customFetch.get(`/users/${username}`);
  return response.data;
};
