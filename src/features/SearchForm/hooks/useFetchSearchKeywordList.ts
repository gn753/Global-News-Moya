import { MasterApiNewsKeywodList } from "../types/typeSearchForm";
import { useQuery } from "react-query";
import api from "@src/app/Api";

export const useFetchSearchKeywordList = () => {
  const fetchMasterApi = async () => {
    const response: MasterApiNewsKeywodList = await api.get("/api/master");
    return response.data;
  };

  const { data, isSuccess } = useQuery("master", fetchMasterApi, {
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
  });
  return { data, isSuccess };
};
