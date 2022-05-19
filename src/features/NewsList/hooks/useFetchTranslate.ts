import axios from "axios";
import { useMutation } from "react-query";
interface Prameter {
  title: string;
  description: string;
}
export function useFetchTranslate() {
  const { mutate, isLoading, isSuccess, data } = useMutation(
    "translate",
    fetchTransLate
  );

  async function fetchTransLate({ title, description }: Prameter) {
    const TranslateAxiosBody = {
      token: "sysmetic1234",
      targetLists: [title, description],
    };
    const response = await axios.post(
      "https://api.moya.ai/translate_moya",
      TranslateAxiosBody
    );
    return response.data;
  }
  return {
    mutate,
    data,
    isSuccess,
    isLoading,
  };
}
