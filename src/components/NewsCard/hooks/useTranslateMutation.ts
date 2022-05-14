import axios from "axios";
import { useMutation } from "react-query";

export function useTranslateMutation() {
  const { mutate, isLoading, isSuccess, data } = useMutation(
    "translate",
    handleTransLate
  );
  async function handleTransLate({ title, description }: any) {
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
