import { useApiError } from "./useApiError";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import api from "@src/app/Api";

interface Props {
  keyType: string | null | undefined;
  paramValue: string | null | undefined;
  mediaType: string | null | undefined;
  languages: string | null | undefined;
  timeFilter: string | null | undefined;
  orderBy?: string;
  exchange?: string | null | undefined;
}

interface Response {
  pageParams: object[];
  pages: object[];
}

export const useFetchInfinityScroll = ({
  keyType,
  paramValue,
  mediaType,
  languages,
  timeFilter,
  orderBy,
  exchange,
}: Props) => {
  const baseUrl = "/api/search";
  const fetchNewsListAsync = async ({ pageParam = undefined }) => {
    if (exchange !== "") {
      const resopnse: Response = await api.get(
        `${baseUrl}/${keyType}/${paramValue}`,
        {
          params: {
            mediaType,
            languages,
            timeFilter,
            orderBy,
            nextPageToken: pageParam,
          },
        }
      );
      return resopnse;
    }

    const resopnse: Response = await api.get(
      `${baseUrl}/${keyType}/${paramValue}`,
      {
        params: {
          mediaType,
          languages,
          timeFilter,
          orderBy,
          exchange,
          nextPageToken: pageParam,
        },
      }
    );

    return resopnse;
  };
  const { errorHandler } = useApiError();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    status,
    isFetchingNextPage,
  } = useInfiniteQuery<any, Error>(
    ["news", keyType, paramValue, mediaType, languages, timeFilter, orderBy],
    fetchNewsListAsync,
    {
      staleTime: 60000,
      retry: 2,
      refetchOnWindowFocus: true,
      onError: (error) => {
        errorHandler(error.message);
      },
      getNextPageParam: (lastPage) => {
        if (lastPage.data.nextPageToken) {
          return lastPage.data.nextPageToken;
        }
        return undefined;
      },
    }
  );

  const { ref, inView } = useInView({
    rootMargin: "0px 0px 70px 0px",
  });

  if (status === "error") {
    console.log(`${error.message}`);
  }
  console.log(error, "custom error");
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
    error,
  };
};
