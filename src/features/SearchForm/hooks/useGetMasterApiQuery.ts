import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import api from "@src/app/Api";

interface Response {
  data: object;
}
export const useGetMasterApiQuery = () => {
  const getMasterApi = async () => {
    const response: Response = await api.get("/api/master");
    return response.data;
  };
  const { data, isSuccess } = useQuery("master", getMasterApi, {
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
  });
  return { data, isSuccess };
};
