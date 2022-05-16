import { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import api from "@src/app/Api";

interface Response {
  category: any;
  sectors: any;
  startup: any;
}

export const useGetMasterApiQuery = () => {
  const getMasterApi = async () => {
    const response: any = await api.get("/api/master");
    return response.data;
  };
  const { data,isSuccess } = useQuery(
    "master",
    getMasterApi,
    {
      retry: false,
      staleTime: Infinity,
      refetchOnMount: false,
    }
  );
  return { data, isSuccess };
};
