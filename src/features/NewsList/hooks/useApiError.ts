import { useNavigate } from "react-router-dom";
export const useApiError = () => {
  const Navigate = useNavigate();
  const errorHandler = (error: any) => {
    let message = "";
    if (error == "Request failed with status code 500") {
      message = "현재 데이터가 존재하지 않습니다.";
    } else if (error === "Request failed with status code 400") {
      message = "로그인 쿠키가 만료된상황입니다. 다시 로그인해주세요";
    }

    Promise.allSettled([
      alert(message),
      Navigate("/", {
        replace: true,
      }),
    ]);
  };

  return {
    errorHandler,
  };
};
