import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import api from "@src/app/Api";

export const useInfinityScrollQuery = ({
  keyType,
  paramValue,
  mediaType,
  languages,
  timeFilter,
  orderBy,
  exchange,
}: any) => {
  const baseUrl = "/api/search";
  const getNewsListAsync = async ({ pageParam = undefined }) => {
    console.log(pageParam, "페이지체크");
    const resopnse: {
      pageParams: object[];
      pages: object[];
    } = await api.get(`${baseUrl}/${keyType}/${paramValue}`, {
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

  const {
    data,
    error,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    status,
    isFetchingNextPage,
  } = useInfiniteQuery<any, Error>(
    ["news", keyType, paramValue, mediaType, languages, timeFilter, orderBy],
    getNewsListAsync,
    {
      staleTime: 60000,
      retry: 0,
      refetchOnWindowFocus: true,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.nextPageToken) {
          return lastPage.data.nextPageToken;
        }
        return undefined;
      },
    }
  );

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 300px 0px",
  });
  if (status === "error") {
    console.log(`${error.message}`);
  }

  useEffect(() => {
    if (isSuccess && inView) {
      fetchNextPage();
    }
  }, [inView]);
  return {
    data,
    ref,
    fetchNextPage,
    isLoading,
    isSuccess,
    status,
    hasNextPage,
    isFetchingNextPage,
  };
};
