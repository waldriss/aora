import {
    useInfiniteQuery,
    useQuery
  } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { getAllPosts, getLatestPosts } from "../appwrite";


export const usegetAllPosts = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_ALL_POSTS],
      queryFn: () => getAllPosts(),
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      staleTime: 100,
    });
  };

  export const usegetLatestPosts = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_LATEST_POSTS],
      queryFn: () => getLatestPosts(),
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      staleTime: 100,
    });
  };