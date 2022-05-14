import { useState, useEffect } from "react";
import axios from "axios";

interface State {
  newsTitle: string;
  newsDescription: string;
}

export function useNewsCardTranslate() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const { newsTitle, newsDescription } = translateText;

  const handleActiveTransLate = () => {
    setIsActive(!isActive);
  };

  // const updateTranslateText = ({ newsTitle, newsDescription }: State) => {
  //   setTranslateText({ newsTitle, newsDescription });
  // };

  const postTranslateAxios = async ([title,description]: any) => {
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
