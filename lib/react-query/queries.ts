import {
    useInfiniteQuery,
    useQuery
  } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import { getAllPosts } from "../appwrite";


export const usegetAllPosts = () => {
    return useQuery({
      queryKey: [QUERY_KEYS.GET_ALL_POSTS],
      queryFn: () => getAllPosts(),
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      staleTime: 100,
    });
  };