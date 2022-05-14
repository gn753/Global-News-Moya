import { useState, useEffect } from "react";
import { useQueryClient, useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import api from "@src/app/Api";
import { isError } from "lodash";

export default function useInfinityScrollQuery({
  keyType,
  paramValue,
  mediaType,
  languages,
  timeFilter,
  orderBy,
  exchange,
}: any) {
  const { ref, inView } = useInView({
    rootMargin: "0px",
  });
  const baseUrl = "/api/search";
  const getNewsListAsync = async ({ pageParam = undefined }) => {
    const resopnse = await api.get(`${baseUrl}/${keyType}/${paramValue}`, {
      params: {
        mediaType: mediaType,
        languages: languages,
        timeFilter: timeFilter,
        orderBy: orderBy,
        exchange: exchange,
        nextPageToken: pageParam,
      },
    });
    return resopnse;
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isSuccess, status,isFetchingNextPage} =
    useInfiniteQuery(
      ["news", keyType, paramValue,mediaType, languages, timeFilter, orderBy],
      getNewsListAsync,
      {
        retry: 3,
        retryDelay: 1000,
        getNextPageParam: (lastPage) => {
          // lastPage signature depends on your api respond, below is a pseudocode
          if (lastPage.data.nextPageToken) {
            return lastPage.data.nextPageToken;
          }
          return undefined;
        },
      }
    );

  useEffect(() => {
    console.log(data);

  }, [data]);
  useEffect(() => {
    if (isSuccess && !isLoading && inView) {
      fetchNextPage();
    }
  }, [inView]);


  return { data, ref, fetchNextPage, isLoading, isSuccess, status,hasNextPage,isFetchingNextPage};
}
