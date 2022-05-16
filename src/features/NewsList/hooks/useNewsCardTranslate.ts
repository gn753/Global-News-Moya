import { useState} from "react";
import axios from "axios";


export function useNewsCardTranslate() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleActiveTransLate = () => {
    setIsActive(!isActive);
  };


  const postTranslateAxios = async ([title,description]: string[]) => {
    const TranslateAxiosBody = {
      token: "sysmetic1234",
      targetLists: [title, description],
    };
    const response = await axios.post(
      "https://api.moya.ai/translate_moya",
      TranslateAxiosBody
    );
    return response;
  };
  



  return {
    handleActiveTransLate,
    postTranslateAxios,
    isActive,
    isLoading,
    setIsLoading,
    setIsActive
  };
}
